import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-part-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {
  @Input() category?: string;
  @Input() id?: number;
  @Input() step?: number;
  @Input() showBackbutton?: boolean;
  @Input() showCategory?: boolean;
  @Input() showId?: boolean;
}
