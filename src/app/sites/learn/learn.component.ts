import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit, OnDestroy {

  cardIndex: number = 0;
  cardStep: number = 1;
  currentAnswer: string = '';
  hideCategory: boolean = false;

  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCardsWithoutCategory('finished');
  }

  nextCard(): void {
    if (this.cardStep !== 3) {
      this.cardStep++;
    } else {
      this.currentAnswer = '';
      this.cardIndex++;
      this.cardStep = 1;
    }
  }

  stepBack(): void {
    if (this.cardStep !== 1) {
      this.cardStep--;
    } else {
      this.currentAnswer = '';
      this.cardIndex--;
      this.cardStep = 3;
    }
  }

  updateCategoryTo(category: string, id: number): void {
    this.cardService.saveCardCategory(category, id);
  }

  redo() {
    console.log('redo');
  }

  ngOnDestroy() {}

}
