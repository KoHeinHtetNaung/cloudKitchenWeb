import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
OrderDetailsService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {

  foodData: any;

  constructor(private service: OrderDetailsService) {}

  ngOnInit(): void {
    this.foodData =  this.service.foodDetails;
  }
}
