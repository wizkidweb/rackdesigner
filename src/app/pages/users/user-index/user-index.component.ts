import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { finalize, tap } from 'rxjs';
import { ModelServiceContract, USER_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  /**
   * @see {@link faTrash}
   */
  public readonly faTrash = faTrash;

  /**
   * The users to display in the table.
   */
  public users: Array<User> = [];

  /**
   * When true, the loading spinner is displayed.
   */
  public loading = true;

  /**
   * The name of the user to create.
   */
  public name = new FormControl('');

  /**
   * The email of the user to create.
   */
  public email = new FormControl('');

  /**
   * Creates a new instance of user index component.
   * @param _userService A dynamically-injected copy of the user service defined in the module.
   */
  constructor(@Inject(USER_SERVICE) private _userService: ModelServiceContract<User>) {}

  public ngOnInit(): void {
    this.load();
  }

  public load() {
    this.loading = true;
    this.users = [];

    this._userService.get().pipe(
      tap(users => this.users = users),
      finalize(() => this.loading = false),
    ).subscribe();
  }

  public add(): void {
    if (this.name.valid && this.email.valid) {
      this.loading = true;
      this._userService.store(User.create({
        name: this.name.value || '',
        email: this.email.value || '',
      })).subscribe(() => this.load());
    }
  }

  public remove(id: number): void {
    this.loading = true;
    this._userService.delete(id).pipe(
      tap(users => this.users = users),
      finalize(() => this.loading = false),
    ).subscribe();
  }
}
