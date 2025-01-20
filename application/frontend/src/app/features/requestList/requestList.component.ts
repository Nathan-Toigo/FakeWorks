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
      this.dataSource = updatedList.slice().sort((a, _) => a.status === QueryStatus.DONE ? 1 : -1);
    });
  }

  copySnackBar(message: string) {
    this._snackBar.open(message + " copied in clipboard", "", {duration : 2000});
  }

  requestResult(request: string) {
    this._snackBar.open(request + " has been sent", "", {duration : 2000});


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

  copyInClipboard(UUID : string){
    navigator.clipboard.writeText(UUID).then(() => {
      this.copySnackBar(UUID);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
}
