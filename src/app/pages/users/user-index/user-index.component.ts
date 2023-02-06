import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
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

  public name = new FormControl('');
  public email = new FormControl('');

  public faTrash = faTrash;

  public ngOnInit(): void {
    this.load();
  }

  public load() {
    this._userService.get().subscribe(users => this.users = users);
  }

  public add(): void {
    if (this.name.valid && this.email.valid) {
      this._userService.store(User.create({
        name: this.name.value || '',
        email: this.email.value || '',
      })).subscribe(() => this.load());
    }
  }

  public remove(id: number): void {
    this._userService.delete(id).subscribe(users => this.users = users);
  }
}
