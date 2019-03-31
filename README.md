# an-introduction-to-angular

Project cloning: what's included in a Angular git project

App folder: ngFirstApp

Install dependencies
Npm update 

Install FE stuff:
Npm install bootstrap font-awesome 

And then add 
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";
in styles.less

A look inside files in /src folder: 
/index.html
/main.ts
/style.less
/app/module.ts
/app/app.component.ts
/app/app.component.html
/app/app.component.less 


Create your first component : articles
 ng g c articles

have a look in /app folder, and in /app/app.modules

Binding: communication between components class and its template, often passing data
Interpolation ({{articlesPrefix}})

Structural directives: *ngFor and *ngIf

Property binding: 
< img [src]='thePropertyBinded' > === < img src={{thePropertyBinded}} >
< img [style.width.px]='thePropertyBinded' >

Event binding
< button (click)='theMethod()' >

Styling Components

Pipes: transforming data for a better presentation
Create a custom pipe: ng g p shared/addPrefix



