import { Package } from 'src/app/models/package.model';
import { Component, Input, OnInit } from '@angular/core';
import { CartUtil } from 'src/app/utils/cart.util';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { MatDialog } from '@angular/material';
import { FavoriteUtil } from 'src/app/utils/favorite.util';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent implements OnInit {
@Input() package: Package
  constructor(private dialog: MatDialog) { }

  public IsAdd: boolean = false;
  ngOnInit() {
  }

  navigateToDetailsPage(detailsPage: Package, ): void{    
    const dialogRef = this.dialog.open(DetailsPageComponent, {
      width: '700px',
      height:'500px',
      data: detailsPage
    });   
  }

  addToCart() {
    CartUtil.add(
      this.package._id,
      this.package.name,
      1,
      this.package.image,
      this.package.price     
    )    
  }

  addToFavorite() {
    FavoriteUtil.add(
      this.package._id,
      this.package.name,
      this.package.email,
      this.package.type,
      1,
      this.package.image,
      this.package.price     
    )
    this.IsAdd = true
  }  

}
