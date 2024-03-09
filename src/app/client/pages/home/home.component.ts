import {Component, inject, OnInit}   from '@angular/core';
import {FOOD_CATEGORIES}             from '../../../shared/config';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {CategoryModel}               from '../../../shared/models/category.model';
import {ResturantService}            from '../../services/resturant.service';
import {Observable}                  from 'rxjs';
import {RestaurantModel}             from '../../../shared/models/restaurantModel';
import {ButtonModule}                from 'primeng/button';
import {ChipModule}                  from 'primeng/chip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    ButtonModule,
    ChipModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.retrieveTopRestaurants();
  }

  protected readonly foodCategories = FOOD_CATEGORIES;
  protected restaurantData$!: Observable<RestaurantModel[]>;
  private readonly resturantService = inject(ResturantService);

  protected async onCategoryClick(category: CategoryModel): Promise<void> {
    console.log('Category clicked', category);
  }

  private retrieveTopRestaurants(): void {
    this.restaurantData$ = this.resturantService.retrieveRestaurants();
  }
}
