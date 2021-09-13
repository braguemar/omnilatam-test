import { BannerModel, CarModel } from '../models';

export abstract class CarRepository {
  public abstract getAll(): Promise<CarModel[]>;
  public abstract getCarouselImages(): Promise<BannerModel[]>;
}
