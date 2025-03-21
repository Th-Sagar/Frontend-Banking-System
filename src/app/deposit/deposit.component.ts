import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-deposit',
  standalone: false,
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css',
})
export class DepositComponent {
  accountCreate: boolean = false;
  account: Account = new Account();
  constructor(private router: Router) {}

  onSubmit() {}
}
