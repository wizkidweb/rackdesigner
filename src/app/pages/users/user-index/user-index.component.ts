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
  constructor(@Inject(USER_SERVICE) private _userService: ModelServiceContract<User>) {}

  public users: Array<User> = [];

  public loading = true;

  public name = new FormControl('');
  public email = new FormControl('');

  public faTrash = faTrash;

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
