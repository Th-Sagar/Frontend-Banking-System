import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  standalone: false,
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})
export class WithdrawComponent {
  id: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  account: Account = new Account();
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log('first', this.id);

    this.accountService.getAccountById(this.id).subscribe(
      (data) => {
        if (data) {
          console.log('Account data received:', data);
          this.account = data;
        } else {
          console.error('No account found with this id');
        }
      },
      (error) => {
        console.error('Error fetching account:', error);
      }
    );
  }

  onSubmit() {
    if (this.isValidAmount(this.account.balance)) {
      this.accountService
        .deposite(this.id, this.account.balance)
        .subscribe((data) => {
          this.account = data;
          this.successMessage = 'Withdraw Successfully...';
          setTimeout(() => {
            this.router.navigate(['/accounts']);
          }, 2000);
        });
    } else {
      setTimeout(() => {
        this.errorMessage = 'Invalid amount... Please Enter Valid Amount';
      }, 1000);
    }
  }

  isValidAmount(amount: number): boolean {
    return amount > 0 && amount < 10000000;
  }
}
