import { BannerModel, CarModel, CarRepository } from 'src/app/core';
export class CarInteractor {

  constructor(private readonly carRepository: CarRepository) {}

  public getAll(): Promise<CarModel[]> {
    return this.carRepository.getAll();
  }

  public getCarouselImages(): Promise<BannerModel[]> {
    return this.carRepository.getCarouselImages();
  }
}
