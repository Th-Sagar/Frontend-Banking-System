import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  standalone: false,
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css',
})
export class AccountListComponent {
  accounts: Account[] = [];

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAllAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }

  deposite(id: string) {
    if (!id) {
      console.error('Invalid account ID');
      return;
    }
    this.router.navigate(['/deposit', id]);
  }

  withdraw(id: string) {
    this.router.navigate(['/withdraw', id]);
  }
}
