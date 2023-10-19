import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee!:Employee

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.employee = new Employee()
    this.employeeService.getEmployeeId(this.id).subscribe({
      next:(data) =>{
        this.employee = data;
      },
      error:(err) =>console.log(err)
    })
  }



}
