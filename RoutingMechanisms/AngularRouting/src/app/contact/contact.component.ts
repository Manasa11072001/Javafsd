
import { Component, OnInit } from '@angular/core';
import { ServiceworkService } from '../servicework.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  constructor(private serviceobj:ServiceworkService){ }


  mobiles=this.serviceobj.mobile;
  ngOnInit(): void {
  }

  

}
