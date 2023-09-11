import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';

import { AuthModule } from './auth/auth.module';

import { ApiService } from './api.service';

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
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
