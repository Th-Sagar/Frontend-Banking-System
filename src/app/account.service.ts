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
}
