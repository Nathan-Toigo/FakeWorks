export class QueryRequest{
  calcul: string;
  result: string = "-------";
  status: QueryStatus = QueryStatus.PENDING;
  UUID: string = "Default-UUID";

  constructor(calcul: string){
    this.calcul = calcul;
  }
}
export enum QueryStatus {
    PENDING = 'PENDING',
    DONE = 'DONE'
}