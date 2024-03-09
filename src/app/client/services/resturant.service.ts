import {inject, Injectable} from '@angular/core';
import {HttpClient}         from '@angular/common/http';
import {RestaurantModel}    from '../../shared/models/restaurantModel';
import {Observable}         from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {
  private readonly http = inject(HttpClient);

  retrieveRestaurants(): Observable<RestaurantModel[]> {
    const url = 'assets/mocks/MOCK_DATA.json';
    return this.http.get<RestaurantModel[]>(url);
  }
}
