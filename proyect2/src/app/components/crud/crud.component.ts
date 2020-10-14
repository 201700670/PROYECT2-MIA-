import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css',
              './vendor/bootstrap/css/bootstrap.min.css',
              './vendor/fontawesome-free/css/all.min.css',
              './vendor/datatables/dataTables.bootstrap4.css',
              './css/sb-admin.css'
              
             ]
})
export class CRUDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
