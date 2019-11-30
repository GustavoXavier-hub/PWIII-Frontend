import { Injectable } from '@angular/core';

import { throwError, Observable } from 'rxjs';
import { Pessoa } from '../pessoa';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  
})
export class PessoaAPIService {

  apiURL : string = "http://localhost:8004/plat/pessoa";

  constructor(private httpClient: HttpClient) {

  } 

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }


    getPessoas(): Observable<Pessoa[]> {
      return this.httpClient.get<Pessoa[]>(this.apiURL)
                           .pipe(retry(1),
                              catchError(this.handleError))
      }

      createPessoa(clie: Pessoa): Observable<Pessoa> {
        return this.httpClient.post<Pessoa>(`${this.apiURL}`, clie)
                              .pipe(retry(1),
                                catchError(this.handleError));
        }
}
