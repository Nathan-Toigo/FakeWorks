export class QueryRequest{
  calcul: string;
  result: string = "-------";
  status: QueryStatus = QueryStatus.PENDING;
  UUID: string = "Default-UUID";

  constructor(calcul: string, UUID: string){
    this.UUID = UUID;
    this.calcul = calcul;
  }
}
export enum QueryStatus {
    PENDING = 'PENDING',
    DONE = 'DONE'
}