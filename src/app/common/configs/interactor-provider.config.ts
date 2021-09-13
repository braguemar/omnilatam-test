import { Provider } from '@angular/core';
import { CarInteractor, CarRepository } from 'src/app/core';

export const InteractorProviderConfig: Readonly<Provider[]> = Object.freeze([
  {
    provide: CarInteractor,
    deps: [CarRepository],
    useClass: CarInteractor,
  },
]);
