import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-to-do-view-all',
  templateUrl: './to-do-view-all.component.html',
  styleUrls: ['./to-do-view-all.component.css']
})
export class ToDoViewAllComponent {


  constructor(private api :ApiserviceService)
  {
       api.fetchData().subscribe(


        (response)=>
        {
       this.data = response
        }

       )
  }

  data  :any =[]
  

}
