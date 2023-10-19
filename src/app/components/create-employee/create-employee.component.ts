import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router:Router) {}

  ngOnInit(): void {

  }


  saveEmployee(): void {
    this.employeeService.createEmploye(this.employee).subscribe({
      next: (data)=>{
        console.log(data);
        this.goToEmployeeList()
      },
      error: (e)=>console.log(e)
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    console.log(this.employee)
    this.saveEmployee()
  }
}
