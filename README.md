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

Retrieve page's Data: hard-coded data

Strong typing and interface
ng g i article 

Lifecycle hooks
ngOnInit
ngOnChanges

Nested Components
ng g c shared/like-btn 
@Input
@Output
EventEmitter

Services
Move data from component to services
Build the service
Register the service
Inject the service

Observable and reactive extension (manage asynchronous data)
Sending Http request
Register the http service provider
Exception handling
Subscribing to an observable


Basic routing
Navigate among components:
Import RouterModule to app module and bind to a link parameters array


Routing: passing/reading parameter
Add parameter in routerModule  
Retrieve paramenter in target component, importing and use ActivatedRoute 

Routing: add method to get Item by id

Routing: activate a route on event