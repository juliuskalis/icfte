import { Injectable } from '@angular/core';
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [];

  cardIndex: number = 0;

  constructor() {
    const x = localStorage.getItem('cards');
    if(x) {
      this.cards = JSON.parse(x);
    }
    const ci = localStorage.getItem('cardIndex');
    if(ci) {
      this.cardIndex = JSON.parse(ci);
    }
  }

  getCardsWithoutCategory(category: string): Card[] {
    return this.cards.filter(x => x.category !== category);
  }

  getCardIndex(): number {
    return this.cardIndex;
  }

  setCardIndex(val: number): void {
    this.cardIndex = val;
    localStorage.setItem('cardIndex', JSON.stringify(this.cardIndex));
  }

  saveCardCategory(category: string, id: number): void {
    this.cards.find(x => x.id === id)!.category = category;
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  addNewCards(cards: Card[]): void {
    this.cards = cards;
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

}
