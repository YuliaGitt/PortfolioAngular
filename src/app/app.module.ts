import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { EducationsComponent } from './portfolio/educations/educations.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { PortfolioFormsComponent } from './portfolio/portfolio-forms/portfolio-forms.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: BaseComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'project', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavbarComponent,
    PortfolioComponent,
    ShopComponent,
    BlogComponent,
    ProjectsComponent,
    EducationsComponent,
    SkillsComponent,
    PortfolioFormsComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
