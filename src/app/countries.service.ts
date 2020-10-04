import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppServiceService } from './app-service.service';
import { CountryButton } from './country-button.interface';

@Injectable()
export class CountriesService {

  constructor(private appService: AppServiceService) {
  }

  public getCountryButtons(): Observable<CountryButton[]> {
    return this.appService.getCountries()
      .pipe(
        map((countries: string[]) => countries.map(countryName => ({
          name: countryName,
          link: 'https://www.google.com/search?q=' + countryName
        }))
        ));
  }
}
