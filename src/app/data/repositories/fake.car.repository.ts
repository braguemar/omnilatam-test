import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BannerModel, CarModel, CarRepository } from 'src/app/core';

@Injectable()
export class FakeCarRepository implements CarRepository {

  public getAll(): Promise<CarModel[]> {
    return of([
      {
        year: 2020,
        make: 'Chevrolet',
        model: 'Spark',
        category: 'SUV',
        createdAt: '2020-01-27T20:44:17.665Z',
        updatedAt: '2020-01-27T20:44:17.665Z',
        seats: 4,
        transmission: 'Manual',
        largeBags: 1,
        smallBags: 1,
        mileage: 'Kilometraje ilimitado',
        image: 'https://cdn2.rcstatic.com/images/car_images/web/chevrolet/spark_lrg.jpg',
        price: 1000,
      },
      {
        year: 2020,
        make: 'Renault',
        model: 'Logan',
        category: 'SUV',
        createdAt: '2020-01-27T20:44:17.665Z',
        updatedAt: '2020-01-27T20:44:17.665Z',
        seats: 5,
        transmission: 'Manual',
        largeBags: 2,
        smallBags: 1,
        mileage: 'Kilometraje ilimitado',
        image: 'https://cdn2.rcstatic.com/images/car_images/web/renault/logan_lrg.jpg',
        price: 1000,
      },
      {
        year: 2020,
        make: 'Mazda',
        model: '3',
        category: 'SUV',
        createdAt: '2020-01-27T20:44:17.665Z',
        updatedAt: '2020-01-27T20:44:17.665Z',
        seats: 5,
        transmission: 'Automático',
        largeBags: 2,
        smallBags: 1,
        mileage: 'Kilometraje ilimitado',
        image: 'https://cdn2.rcstatic.com/images/car_images/web/mazda/3_lrg.jpg',
        price: 1000,
      },
      {
        year: 2020,
        make: 'Kia',
        model: 'picanto',
        category: 'SUV',
        createdAt: '2020-01-27T20:44:17.665Z',
        updatedAt: '2020-01-27T20:44:17.665Z',
        seats: 5,
        transmission: 'Manual',
        largeBags: 1,
        smallBags: 1,
        mileage: 'Kilometraje ilimitado',
        image: 'https://cdn2.rcstatic.com/images/car_images/new_images/kia/picanto_5_door_lrg.jpg',
        price: 1000,
      },
      {
        year: 2020,
        make: 'Chevrolet',
        model: 'Tracker',
        category: 'SUV',
        createdAt: '2020-01-27T20:44:17.665Z',
        updatedAt: '2020-01-27T20:44:17.665Z',
        seats: 5,
        transmission: 'Automático',
        largeBags: 3,
        smallBags: 1,
        mileage: 'Kilometraje ilimitado',
        image: 'https://cdn2.rcstatic.com/images/car_images/new_images/chevrolet/tracker_lrg.jpg',
        price: 1000,
      },
      {
        year: 2020,
        make: 'Renault',
        model: 'Captur',
        category: 'SUV',
        createdAt: '2020-01-27T20:44:17.665Z',
        updatedAt: '2020-01-27T20:44:17.665Z',
        seats: 5,
        transmission: 'Automático',
        largeBags: 3,
        smallBags: 1,
        mileage: 'Kilometraje ilimitado',
        image: 'https://cdn2.rcstatic.com/images/car_images/web/renault/captur_lrg.jpg',
        price: 1000,
      },
   ]).pipe(delay(1000)).toPromise();
  }

  public getCarouselImages(): Promise<BannerModel[]> {
    return of([
      {
        image: '/assets/images/carousel/first.png',
        caption: '<h1><b>Rent your dream car</b></h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit, minus expedita hic quos exercitationem soluta eaque, in voluptate quisquam dolorem nihil quaerat temporibus tenetur, iste consectetur pariatur cum laudantium?</p>',
        name: 'Cadillac'
      },
      {
        image: '/assets/images/carousel/second.png',
        name: 'Cadillac'
      }
    ]).pipe(delay(1000)).toPromise();
  }
}
