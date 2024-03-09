import {DishModel} from './dish.model';

export class RestaurantModel {
  id!: string;
  name!: string;
  description!: string;
  address!: string;
  email!: string;
  phone!: number;
  categories!: number[];
  menu!: DishModel[];
  offers?: DishModel[];
  logoImg!: string;
  coverImg!: string;
  rating!: number;
}
