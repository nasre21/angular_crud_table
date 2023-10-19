import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private pathUrl = ' http://localhost:3000/main'


  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.pathUrl}`)
  }

  createEmploye(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.pathUrl}`,employee)
  }

  getEmployeeId(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.pathUrl}/${id}`)
  }

  updateEmployee(id:number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.pathUrl}/${id}`, employee)
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.pathUrl}/${id}`)
  }
}
