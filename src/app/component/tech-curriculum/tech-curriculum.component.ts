import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-curriculum',
  templateUrl: './tech-curriculum.component.html',
  styleUrls: ['./tech-curriculum.component.css']
})
export class TechCurriculumComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAngular() {
    this.router.navigateByUrl('Tech_Curriculum/Angular');
  }

  goToPython() {
    this.router.navigateByUrl('Tech_Curriculum/Python');
  }

  goToIonic() {
    this.router.navigateByUrl('Tech_Curriculum/Ionic');
  }

  goToHTML() {
    this.router.navigateByUrl('Tech_Curriculum/HTML');
  }

  goToCSS() {
    this.router.navigateByUrl('Tech_Curriculum/CSS');
  }

  goToMongoDB() {
    this.router.navigateByUrl('Tech_Curriculum/MongoDB');
  }

}
