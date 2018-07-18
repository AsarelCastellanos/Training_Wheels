import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from 'src/app/component/splash/splash.component';
import { TechCurriculumComponent } from 'src/app/component/tech-curriculum/tech-curriculum.component';
import { StudentBondingComponent } from 'src/app/component/student-bonding/student-bonding.component';
import { TxtCultureComponent } from 'src/app/component/txt-culture/txt-culture.component';
import { ProductDevelopmentComponent } from 'src/app/component/product-development/product-development.component';
import { AngularComponent } from 'src/app/component/tech-curriculum/angular/angular.component';
import { PythonComponent } from 'src/app/component/tech-curriculum/python/python.component';
import { IonicComponent } from 'src/app/component/tech-curriculum/ionic/ionic.component';
import { HtmlComponent } from 'src/app/component/tech-curriculum/html/html.component';
import { CssComponent } from 'src/app/component/tech-curriculum/css/css.component';
import { MongodbComponent } from 'src/app/component/tech-curriculum/mongodb/mongodb.component';
import { ProblemStatementsComponent } from 'src/app/component/product-development/problem-statements/problem-statements.component';
import { AgileDevelopmentComponent } from 'src/app/component/product-development/agile-development/agile-development.component';
import { DesignThinkingComponent } from 'src/app/component/product-development/design-thinking/design-thinking.component';
import { SchedulingComponent } from 'src/app/component/product-development/scheduling/scheduling.component';
import { OurStaffComponent } from 'src/app/component/our-staff/our-staff.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { HomeComponent } from 'src/app/component/home/home.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Splash',
    component: SplashComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Tech_Curriculum',
    component: TechCurriculumComponent
  },
  {
    path: 'Tech_Curriculum/Angular',
    component: AngularComponent
  },
  {
    path: 'Tech_Curriculum/Python',
    component: PythonComponent
  },
  {
    path: 'Tech_Curriculum/Ionic',
    component: IonicComponent
  },
  {
    path: 'Tech_Curriculum/HTML',
    component: HtmlComponent
  },
  {
    path: 'Tech_Curriculum/CSS',
    component: CssComponent
  },
  {
    path: 'Tech_Curriculum/MongoDB',
    component: MongodbComponent
  },
  {
    path: 'Student_Bonding',
    component: StudentBondingComponent
  },
  {
    path: 'TXT_Culture',
    component: TxtCultureComponent
  },
  {
    path: 'Product_Development',
    component: ProductDevelopmentComponent
  },
  {
    path: 'Product_Development/Problem_Statement',
    component: ProblemStatementsComponent
  },
  {
    path: 'Product_Development/Agile_Development',
    component: AgileDevelopmentComponent
  },
  {
    path: 'Product_Development/Design_Thinking',
    component: DesignThinkingComponent
  },
  {
    path: 'Product_Development/Scheduling',
    component: SchedulingComponent
  },
  {
    path: 'Our_Staff',
    component: OurStaffComponent
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
