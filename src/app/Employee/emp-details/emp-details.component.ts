import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-details',
  imports: [FormsModule],
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {
  empDesignation:string='ProjectLead';

  changeDest(){
    this.empDesignation="Senior Manager";
  }
}
