import { Injectable } from '@angular/core';

export interface Fact {
  info: string;
  favorite?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public facts: Fact[] = [
    {
      info: 'Lorem ipsum',
      favorite: true,
    },
  ];

  constructor() {}

  public getFacts(): Fact[] {
    return this.facts;
  }

  // public getMessageById(id: number): Message {
  //   return this.messages[id];
  // }
}
