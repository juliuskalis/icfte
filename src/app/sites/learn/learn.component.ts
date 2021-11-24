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

  cardBool: boolean = true;

  cards: Card[] = [];

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cards = this.cardService.getCardsWithoutCategory('finished');
  }

  nextCard(): void {
    this.cardIndex++;
    this.cardBool = true;
  }

  saveCards() {
    console.log(this.cardIndex);
  }

  redo() {
    console.log('redo');
  }

  ngOnDestroy() {}

}
