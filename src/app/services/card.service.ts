import { Injectable } from '@angular/core';
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [
    {
      id: 1,
      question: 'Die Frage nummer Eins behandelt ein beipiel Thema welches so so lang ist.',
      answer: 'Die Antwort darauf ist nicht die längste allerdings auch nicht super kurz.',
      category: 'new',
      tags: ['test']
    },
    {
      id: 2,
      question: 'wieso, weshalb, warum',
      answer: '',
      category: 'new',
      tags: []
    },
    {
      id: 3,
      question: 'wer nicht fragt',
      answer: '',
      category: 'new',
      tags: []
    },
    {
      id: 4,
      question: 'bleibt dumm',
      answer: '',
      category: 'new',
      tags: []
    },
    {
      id: 5,
      question: '!',
      answer: '',
      category: 'new',
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
    const x = category;
    if(x) {
      console.log(x);
    }
    /*let x = this.cards.find(x => x.id === card.id);
    if(x) {
      x = card;
    }*/
  }

}
