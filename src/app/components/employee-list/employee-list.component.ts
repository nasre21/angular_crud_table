import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router:Router){}


  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe({
      next: (data) =>{
        this.employees = data
      },
      error: (e)=> console.error(e)
    })
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details', id])
  }
  updateEmploye(id:number){
    this.router.navigate(['employee-update', id])
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (data) =>{
        console.log(data);
      this.getEmployees();
      }
    })
  }
}
