import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCurriculum() {
    this.router.navigateByUrl('Tech_Curriculum');
  }

  goToBonding() {
    this.router.navigateByUrl('Student_Bonding');
  }

  goToCulture() {
    this.router.navigateByUrl('TXT_Culture');
  }

  goToProduct() {
    this.router.navigateByUrl('Product_Development');
  }

}
