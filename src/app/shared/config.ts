import {CategoryModel} from './models/category.model';

export enum ROUTES {
  HOME = 'home',
  RESTAURANT_DETAIL = 'detail'
}

export const FOOD_CATEGORIES: CategoryModel[] = [
  {
    id: 1,
    name: 'Sushi'
  },
  {
    id: 2,
    name: 'Pizza'
  },
  {
    id: 3,
    name: 'Poke'
  },
  {
    id: 4,
    name: 'Hamburger'
  },
  {
    id: 5,
    name: 'Kebab'
  },
  {
    id: 6,
    name: 'Sandwich'
  },
  {
    id: 7,
    name: 'American'
  },
  {
    id: 8,
    name: 'Italian'
  },
  {
    id: 9,
    name: 'Dessert'
  }
];


