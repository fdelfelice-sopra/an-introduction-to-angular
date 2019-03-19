# an-introduction-to-angular

Clone project

App folder: ngFirstApp

To install dependencies
Npm update 

To install FE stuff:
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

Directives: ngFor and ngIf