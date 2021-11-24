import { Injectable } from '@angular/core';
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [
    {
      id: 1,
      question: 'Was ist was',
      answer: '',
      category: '',
      tags: []
    },
    {
      id: 2,
      question: 'wieso, weshalb, warum',
      answer: '',
      category: '',
      tags: []
    },
    {
      id: 3,
      question: 'wer nicht fragt',
      answer: '',
      category: '',
      tags: []
    },
    {
      id: 4,
      question: 'bleibt dumm',
      answer: '',
      category: '',
      tags: []
    },
    {
      id: 5,
      question: '!',
      answer: '',
      category: '',
      tags: []
    }
  ];

  constructor() {
    const x = localStorage.getItem('cards');
    if(x) {
      this.cards = JSON.parse(x);
    }
  }

  getCardsWithoutCategory(category: string): Card[] {
    return this.cards.filter(x => x.category !== category);
  }

  saveCardCategory(category: string): void {
    /*let x = this.cards.find(x => x.id === card.id);
    if(x) {
      x = card;
    }*/
  }

}
