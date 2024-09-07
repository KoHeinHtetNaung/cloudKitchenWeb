import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  foodDetails = [
    {
      id: 1,
      foodName: 'Paneer Grilled Sandwich',
      foodDetails: 'Pan-fried masala paneer.',
      foodPrice: 200,
      foodImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRl_0V-HOLxGuqNBwYXXbaFCw3yXJcXVPcH7f7DaoEnsVwya5VnMbg0gbjbnn4vXveNI&usqp=CAU',
    },
    {
      id: 2,
      foodName: 'Veggie Supreme',
      foodDetails:
        'Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese',
      foodPrice: 369,
      foodImg:
        'https://tryveg.com/wp-content/uploads/2016/01/dinner-pizza-300x300.jpg',
    },
    {
      id: 3,
      foodName: 'Paneer Burger',
      foodDetails: 'panner',
      foodPrice: 149,
      foodImg:
        'https://cdn.dotpe.in/longtail/item_thumbnails/8272064/9DcZWeR9.webp',
    },
    {
      id: 4,
      foodName: 'Veg Masala Roll In Naan',
      foodDetails:
        "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 140,
      foodImg:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXstbSAi3TuvS1BsqRRwLexm9c06gJF4cjvDiyayda7A1hivVhyphenhyphenmKzpgCtqIidZqrQ8kGVTdpElTyl29pH2tGfWVduNoInET0836wrvUZRJaQONrdQCxAbzwQYBROtWJ98lvq8PwneD4qy/s1600/Naan+Wrap+.JPG',
    },
    {
      id: 5,
      foodName: 'Indulgence Brownie',
      foodDetails:
        '(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.',
      foodPrice: 105,
      foodImg:
        'https://img.freepik.com/premium-photo/decadent-chocolate-brownie-indulgence_941761-14.jpg',
    },
    {
      id: 6,
      foodName: 'Oreo Cheesecake Ice Cream',
      foodDetails: 'Oreo ice cream',
      foodPrice: 219,
      foodImg:
        'https://www.cookwithnabeela.com/wp-content/uploads/2024/03/MintOreoCheesecakeBars-500x500.webp',
    },
  ];
}
