import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 
  constructor() { }
 
  ngOnInit() {

    console.log('made it here!', $('#myTable'));
    // static example:
    var myTable = $('#myTable').DataTable({
      pagingType: 'full_numbers',
      dom: 'tip',
      // scrollX: true,
      pageLength: 5,
      columns:[{
          data: "userId"
        },
        {
          data: "id"
        },
        {
          data: "title"
        },
        {
          data: "completed"
        },
        
      ]
    })

    //Ugly dynamic example but you can swap out any data endpoint and create a table with this approach:
    fetch("https://jsonplaceholder.typicode.com/todos/").then(function(raw){
      console.log("TCL: AppComponent -> ngOnInit -> raw", raw)
      raw.json().then(function(res){
        console.log('res', res);
        var columnDefs = [];
        var columns = []
        for(var key in res[0]){
          columnDefs.push(key);
          columns.push({data: key});
        }

        var div = document.createElement('div');
        div.innerHTML = `
        <table  class="row-border hover" id="myDynamicTable">
          <thead>
            <tr id="headerRow">
              
            </tr>
          </thead>
          <tbody></tbody>
      
          </table>
        `
        $('#dynamicTableContainer').append(div);
        columnDefs.forEach(function(def){
        console.log("TCL: AppComponent -> ngOnInit -> def", def)
          var th = document.createElement('th');
          th.innerHTML = `${def}`;
          console.log('headerRow', $("#headerRow"));
          $("#headerRow").append(th);
        })
        console.log('myDynamicTable', $("#myDynamicTable"));
        
        
        
        $("#myDynamicTable").DataTable({
          pagingType: 'full_numbers',
          dom: 'tip',
          pageLength: 10,
          columns: columns
        
        })
        .rows.add(res)
        .draw();
        
        myTable.row.add(res[0]).draw()
       

      })

    })
    
  }

  title = 'Home Grown App'
  
}




















