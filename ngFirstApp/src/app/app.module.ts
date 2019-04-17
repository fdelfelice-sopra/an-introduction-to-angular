import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddPrefixPipe } from './shared/add-prefix.pipe';
import { LikeBtnComponent } from './shared/like-btn/like-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AddPrefixPipe,
    LikeBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }