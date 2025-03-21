import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = 'http://localhost:9090/api/accounts';

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseUrl}`);
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseUrl}`, account);
  }

  getAccountById(id: String): Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseUrl}/${id}`);
  }

  deposite(id: string, amount: number): Observable<Account> {
    const request = {
      amount,
    };
    return this.httpClient.put<Account>(
      `${this.baseUrl}/${id}/deposit`,
      request
    );
  }

  withdraw(id: string, amount: number): Observable<Account> {
    const request = { amount };
    return this.httpClient.put<Account>(
      `${this.baseUrl}/${id}/withdraw`,
      request
    );
  }
}
