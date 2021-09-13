import { Provider } from '@angular/core';
import { CarRepository } from 'src/app/core';
import { FakeCarRepository } from 'src/app/data';
import { InteractorProviderConfig } from './interactor-provider.config';

export const ServiceProviderConfig: Readonly<Provider[]> = Object.freeze([
  ...InteractorProviderConfig,
  {
    provide: CarRepository,
    useClass: FakeCarRepository,
  },
]);
