import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryRequest, QueryStatus } from '../../shared/Request';
import { GetResultService } from './get-result.service';
import { ListService } from '../../shared/ListService';

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
  dataSource : QueryRequest[] = [];

  constructor(private getResultService: GetResultService, private listService: ListService) {
    this.listService.list$.subscribe(updatedList => {
      this.dataSource = updatedList.slice();
    });
  } 
  
  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message + " copied in clipboard", action);
  }

  requestResult(request: string) {
    this._snackBar.open(request + " has been sent", "OK");

    
    this.getResultService.getResults(request).subscribe({
      next: (data) => {
        this.listService.updateRequest(request, QueryStatus.DONE, data.result);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  deleteRequest(item : QueryRequest){
    this.listService.removeItem(item);
  }
}