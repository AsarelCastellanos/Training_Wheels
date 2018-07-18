import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-development',
  templateUrl: './product-development.component.html',
  styleUrls: ['./product-development.component.css']
})
export class ProductDevelopmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProblem() {
    this.router.navigateByUrl('Product_Development/Problem_Statement');
  }

  goToDevelopment() {
    this.router.navigateByUrl('Product_Development/Agile_Development');
  }

  goToThinking() {
    this.router.navigateByUrl('Product_Development/Design_Thinking');
  }

}
