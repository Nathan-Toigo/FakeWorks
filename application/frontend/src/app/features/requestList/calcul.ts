export interface Calcu {
    calcul: string;
    status: Status;
    UUID: string;
  }

export enum Status {
    PENDING = 'PENDING',
    DONE = 'DONE'
}