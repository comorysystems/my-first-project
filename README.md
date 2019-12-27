Definitely wasn't straight forward to fix this, but basically there were many dependency issues.



SUmmary of changes:

angular.json 
"styles": [
              "src/styles.css",
              "node_modules/datatables.net-dt/css/jquery.dataTables.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/@types/jquery/dist/jquery.slim.d.ts",
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/datatables/media/js/jquery.dataTables.js",
              "src/custom.js"
            ]

package.json
 "@angular/animations": "~8.2.14",
    "@angular/common": "~8.2.14",
    "@angular/compiler": "~8.2.14",
    "@angular/core": "~8.2.14",
    "@angular/forms": "~8.2.14",
    "@angular/platform-browser": "^8.2.14",
    "@angular/platform-browser-dynamic": "^8.2.14",
    "@angular/router": "~8.2.14",
    "angular-datatables": "^8.0.0",
    "bootstrap": "^4.4.1",
    "datatables": "^1.10.18",
    "datatables.net": "^1.10.20",
    "datatables.net-dt": "^1.10.20",
    "jquery": "^3.4.1",
    "rxjs": "~6.4.0",
    "tslib": "^1.10.0",
    "zone.js": "~0.9.1"

app.module.ts
import { DataTablesModule } from 'angular-datatables';
import { DataTableDirective } from 'angular-datatables';

@NgModule({
  declarations: [
        AppComponent,
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [DataTableDirective],
  bootstrap: [AppComponent]
})
// export default $
export class AppModule { }                


app.component.ts
import * as $ from 'jquery';
import 'datatables.net';

also since we are working directly in the app.component.ts, which is a bit unusual we had to implement oninit
implements OnInit {

  dtOptions: DataTables.Settings = {};
 
  constructor() { }
 
  ngOnInit() {