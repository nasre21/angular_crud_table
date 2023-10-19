import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit{

  id!: number;
  employee: Employee = new Employee();

  constructor(private router: Router,private employeeService: EmployeeService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.employeeService.getEmployeeId(this.id).subscribe({
      next: (data)=>{
        this.employee = data
      },
      error: (e)=> console.log(e)
    })

  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe({
      next: ()=>{
        this.gotoEmployeeList()

      },
      error: (e)=> console.log(e)
    })
  }

  gotoEmployeeList():void{
    this.router.navigate(['/employees'])
  }

}
