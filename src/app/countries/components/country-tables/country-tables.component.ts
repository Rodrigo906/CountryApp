import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-tables.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})

export class CountryTablesComponent {

  @Input()
  public countries: Country[] = [];
}
