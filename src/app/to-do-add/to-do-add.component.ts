import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent {

  userid=""
  id=""
  title=""
  completedstatus=""

  add=()=>
  {
    let data:any={"userid":this.userid,"id":this.id,"title":this.title,"completedstatus":this.completedstatus}

    console.log(data)
  }

}
