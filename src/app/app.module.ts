import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Navigation - Main Pages
import { HomeComponent } from './component/home/home.component';
import { TechCurriculumComponent } from './component/tech-curriculum/tech-curriculum.component';
import { StudentBondingComponent } from './component/student-bonding/student-bonding.component';
import { ProductDevelopmentComponent } from './component/product-development/product-development.component';
import { TxtCultureComponent } from './component/txt-culture/txt-culture.component';

// Login In Page - Splash Page
import { LoginComponent } from './component/login/login.component';
import { SplashComponent } from './component/splash/splash.component';

// Tech_Curriculum Pages
import { AngularComponent } from './component/tech-curriculum/angular/angular.component';
import { PythonComponent } from './component/tech-curriculum/python/python.component';
import { IonicComponent } from './component/tech-curriculum/ionic/ionic.component';
import { CssComponent } from './component/tech-curriculum/css/css.component';
import { HtmlComponent } from './component/tech-curriculum/html/html.component';
import { MongodbComponent } from './component/tech-curriculum/mongodb/mongodb.component';

// Product_Development Pages
import { ProblemStatementsComponent } from './component/product-development/problem-statements/problem-statements.component';
import { AgileDevelopmentComponent } from './component/product-development/agile-development/agile-development.component';
import { DesignThinkingComponent } from './component/product-development/design-thinking/design-thinking.component';
import { SchedulingComponent } from './component/product-development/scheduling/scheduling.component';

// Our Staff
import { OurStaffComponent } from './component/our-staff/our-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    TechCurriculumComponent,
    AngularComponent,
    PythonComponent,
    IonicComponent,
    CssComponent,
    HtmlComponent,
    MongodbComponent,
    StudentBondingComponent,
    TxtCultureComponent,
    ProductDevelopmentComponent,
    ProblemStatementsComponent,
    AgileDevelopmentComponent,
    DesignThinkingComponent,
    SchedulingComponent,
    OurStaffComponent,
    LoginComponent,
    SplashComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
