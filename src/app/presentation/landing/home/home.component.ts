import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarInteractor, CarModel, BannerModel } from 'src/app/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public carouselItems: BannerModel[] = [];
  public items: CarModel[] = [];
  public searchControl = new FormControl(null);
  public readonly FILTER_FIELD = 'make';

  constructor(private readonly carInteractor: CarInteractor) {}

  public async ngOnInit(): Promise<void> {
    this.loadData();
  }

  private async loadData(): Promise<void> {
    try {
      this.carouselItems = await this.carInteractor.getCarouselImages();
      this.items = await this.carInteractor.getAll();
    } catch { }
  }
}
