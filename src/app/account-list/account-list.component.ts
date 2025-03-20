import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-list',
  standalone: false,
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css',
})
export class AccountListComponent {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAllAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }
}
