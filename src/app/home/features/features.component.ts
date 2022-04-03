import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FeatureModel } from 'src/app/_shared/models/feature.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  featureList: FeatureModel[] = [];
  ngOnInit(): void {
    this.homeService.getFeatures().subscribe(response => {
      this.featureList = response.data;
    })
  }

}
