import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {CardService} from "../../services/card.service";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit, OnDestroy {

  cardIndex: number = 0;
  cardStep: number = 1;
  currentAnswer: string = '';
  showBackbutton: boolean | undefined;
  showCategory: boolean | undefined;
  showId: boolean | undefined;

  cards: Card[] = [];

  constructor(private cardService: CardService, private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCardsWithoutCategory('finished');
    this.getSettings();
    this.cardIndex = this.cardService.getCardIndex();
  }

  nextCard(): void {
    if (this.cardStep !== 3) {
      this.cardStep++;
    } else {
      this.currentAnswer = '';
      this.cardIndex++;
      this.cardStep = 1;
      this.cardService.setCardIndex(this.cardIndex);
    }
  }

  stepBack(): void {
    if (this.cardStep !== 1) {
      this.cardStep--;
    } else {
      this.currentAnswer = '';
      this.cardIndex--;
      this.cardStep = 3;
      this.cardService.setCardIndex(this.cardIndex);
    }
  }

  updateCategoryTo(category: string, id: number): void {
    this.cardService.saveCardCategory(category, id);
  }

  redo() {
    console.log('redo');
  }

  getSettings() {
    const settings = this.settingsService.getAll();
    const x = settings.find(x => x.id === 0)?.value;
    if (x) {
      this.showBackbutton = x;
    }
    const y = settings.find(x => x.id === 1)?.value;
    if (y) {
      this.showCategory = y;
    }
    const z = settings.find(x => x.id === 2)?.value;
    if (z) {
      this.showId = z;
    }

  }

  ngOnDestroy() {}

}
