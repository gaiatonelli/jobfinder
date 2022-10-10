# NgCompleteGuideUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# jobfinder" 


DOCUMENTAZIONE
Divisione in componenti del progetto
-	Header  contiene tutto il codice relativo al menù in alto
-	Jobs contiene il codice di quello che è il corpo della pagina relativa ai lavori
-	Shared contiene il codice per la scrittura dei dati nel db.json
-	About contiene il codice di una pagina relative a informazioni extra
JOBS a sua volta si divide in
-	Job-detail codice riguardante la card di espansione del lavoro selezionato
-	Job-edit codice riguardante la form di inserimento di una nuova offerta di lavoro
-	Job-list (che contiene anche job-item) codice riguardante le card dei lavori disponibili 
-	Job-start contiene il codice del button per l’aggiunta di una nuova offerta di lavoro, la search bar e tutto quello che concerne la grafica prima del click su una card lavoro


 
Il tutto ruota attorno alla selezione di un lavoro con i relativi dettagli alla destra 
 
E’ previsto un tasto per l’aggiunta di una nuova offerta di lavoro e una barra di ricerca 
 
 
La lista dei lavori disponibili sarà preceduta da uno skeleton loader nel tempo del caricamento della stessa
Possibili implementazioni future:
-Login page per caricare le proprie informazioni e poter scegliere quali lavori tenere in visione 
-La ricerca è possibile effettuarla per tutti i campi, però si potrebbero impostare delle chip da selezionare per delle ricerche predefinite (es: stage, part-time, full-time)
