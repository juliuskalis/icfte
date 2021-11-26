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

  cardStep: string = '1';

  currentAnswer: string = '';

  cards: Card[] = [];

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cards = this.cardService.getCardsWithoutCategory('finished');
  }

  nextCard(): void {
    this.cardIndex++;
    // this.cardBool = true;
  }

  step1nextCard(): void {
    this.cardStep = '2';
  }

  step2nextCard(): void {
    this.cardIndex++;
    this.cardStep = '3';
  }

  step3nextCard(): void {
    this.currentAnswer = '';
    this.cardStep = '1';
  }

  saveCards() {
    console.log(this.cardIndex);
  }

  redo() {
    console.log('redo');
  }

  ngOnDestroy() {}

}
