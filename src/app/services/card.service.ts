import { Injectable } from '@angular/core';
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [
    {
      id: 1,
      question: 'Die Frage nummer Eins behandelt ein beipiel Thema welches so so lang ist. Die Frage nummer Eins behandelt ein beipiel Thema welches so so so so lang ist. Die Frage nummer Eins behandelt ein beipiel Thema welches so so lang ist. WWW Die Frage nummer Eins behandelt ein beipiel Thema welches so so lang ist. safnweui wafbnwqiaufw qa Die Frage nummer Eins behandelt ein beipiel Thema welches so so lang ist. Die Frage nummer Eins behandelt ein beipiel Thema welches so so so so lang ist. Die Frage nummer Eins behandelt ein beipiel Thema welches so so lang ist. WWW Die Frage nummer Eins behandelt ein beipiel Thema welches so so lang ist.',
      answer: 'Die Antwort darauf ist nicht die längste allerdings auch nicht super kurz.',
      category: 'neu',
      tags: []
    },
    {
      id: 2,
      question: 'wieso, weshalb, warum',
      answer: 'Antwort 2',
      category: 'neu',
      tags: []
    },
    {
      id: 3,
      question: 'wer nicht fragt',
      answer: 'Antwort 3',
      category: 'neu',
      tags: []
    },
    {
      id: 4,
      question: 'bleibt dumm',
      answer: 'Antwort 4',
      category: 'neu',
      tags: []
    },
    {
      id: 5,
      question: 'Das hier ist die letzte Frage!',
      answer: 'Die letzte Antwort ist die beste Antwort.',
      category: 'neu',
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

  saveCardCategory(category: string, id: number): void {
    this.cards.find(x => x.id === id)!.category = category;
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

}
