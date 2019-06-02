import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddPrefixPipe } from './shared/add-prefix.pipe';
import { LikeBtnComponent } from './shared/like-btn/like-btn.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleDetailComponent } from './articles/article-detail.component';
import { ArticleDetailGuard } from './articles/article-detail.guard';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AddPrefixPipe,
    LikeBtnComponent,
    WelcomeComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome' , component : WelcomeComponent },
      {path: 'articles' , component : ArticlesComponent },
      {path: 'articles/:id' ,  
        canActivate: [ArticleDetailGuard], //Guard
        component : ArticleDetailComponent },//send 'id' parameter
      {path: '' , redirectTo : 'welcome' , pathMatch : 'full' }, //default
      {path: '**' , redirectTo : 'welcome' , pathMatch : 'full' } //**  wildcard selected if no previous path matches
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }