import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QueryRequest, QueryStatus } from './Request';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // Utilisation de BehaviorSubject pour émettre les mises à jour de la liste
  private listSubject = new BehaviorSubject<QueryRequest[]>([]);  // Initialise la liste vide
  public list$ = this.listSubject.asObservable();  // Observable pour exposer la liste

  // Méthode pour récupérer la liste
  getList(): QueryRequest[] {
    return this.listSubject.getValue();
  }

  // Méthode pour ajouter un élément à la liste
  addItem(calcul : string, UUID : string): void {
    const currentList = this.getList();
    currentList.push(new QueryRequest(calcul, UUID));  // Ajoute un nouvel élément
    this.listSubject.next(currentList);  // Met à jour la liste
  }

  // Méthode pour supprimer un élément de la liste
  removeItem(item: QueryRequest): void {
    let currentList = this.getList();
    currentList = currentList.filter(i => i !== item);
    this.listSubject.next(currentList);  // Met à jour la liste
  }

  updateRequest(UUID : string, status : QueryStatus, result : string): void {
    const currentList = this.getList();
    const requestIndex = currentList.findIndex(request => request.UUID === UUID);
    if (requestIndex !== -1) {
      currentList[requestIndex].status = status;
      currentList[requestIndex].result = result;
      this.listSubject.next(currentList);  // Met à jour la liste
    }
  }
}
