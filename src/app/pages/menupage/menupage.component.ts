import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css',
})
export class MenupageComponent implements OnInit {
  getMenuId: any;
  menuData:any;

  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService
  ) {}

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id'); //.params['id']
    console.log('here: ', this.getMenuId);
    if(this.getMenuId) {
      this.menuData = this.service.foodDetails.filter(value => value.id == this.getMenuId)
    }
  }
}
