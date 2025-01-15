import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryRequest } from './Request';

const ELEMENT_DATA: QueryRequest[] = [
  new QueryRequest("1+3"),
  new QueryRequest("1+3"),
  new QueryRequest("1+4"),
  new QueryRequest("1+3"),
  new QueryRequest("3+3"),
  new QueryRequest("1+3"),
  new QueryRequest("1+3"),
  new QueryRequest("1+3"),
  new QueryRequest("1+3"),
  new QueryRequest("1+3"),
  new QueryRequest("1+3")
];

@Component({
  selector: 'request-list',
  standalone: true,
  styleUrls: ['requestList.component.scss'],
  templateUrl: 'requestList.component.html',
  imports: [MatTableModule, MatButtonModule, MatIcon],
})  

export class RequestListComponent {
  
  private _snackBar = inject(MatSnackBar);
  
  displayedColumns: string[] = ['calcul','result', 'status', 'action'];
  dataSource = ELEMENT_DATA;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message + " copied in clipboard", action);
  }

  requestResult(request: string) {
    this._snackBar.open(request + " has been sent", "OK");
  }

  deleteRequest(request : QueryRequest){
    this.dataSource = this.dataSource.filter(item => item !== request);
  }
}