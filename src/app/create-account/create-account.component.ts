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
  account: Account = new Account();
  constructor(private accountService: AccountService, private router: Router) {}

  saveAccount() {
    this.accountService.createAccount(this.account).subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit() {
    this.saveAccount();
    this.goToAccount();
  }

  goToAccount() {
    this.router.navigate(['/accounts']);
  }
}
