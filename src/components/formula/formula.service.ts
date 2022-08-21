import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formula } from '../models/formula';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  private URL = "https://localhost:44321/api/ColorFormula";
  httpOptions = {
    headers: new HttpHeaders({'content-Type':'application/json'})
  }
  constructor(private httpService: HttpClient) { }

  GetFormulas():Observable<Formula[]>{
    return this.httpService.get<Formula[]>(this.URL);
  }

  CreateFormula(myFormula:Formula):Observable<Formula>{
    console.log(myFormula);
    return this.httpService.post<Formula>(this.URL, myFormula, this.httpOptions);
  }

  UpdateFormula(myFormula:Formula){
    const url = `${this.URL}/${myFormula.ColorFormulaID}`
    return this.httpService.put<Formula>(url, myFormula, this.httpOptions);
  }


  DeleteFormula(id:number){
    const url = `${this.URL}/${id}`;
    return this.httpService.delete<Formula>(url,this.httpOptions);
  }

}
