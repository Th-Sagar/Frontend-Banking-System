import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: false,
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  accountCreate = false;
  account: Account = new Account();
  constructor(private accountService: AccountService, private router: Router) {}

  saveAccount() {
    this.accountService.createAccount(this.account).subscribe((data) => {
      console.log(data);
      this.accountCreate = true;
      setTimeout(() => {
        this.goToAccount();
      }, 2000);
    });
  }

  onSubmit() {
    this.saveAccount();
  }

  goToAccount() {
    this.router.navigate(['/accounts']);
  }
}
