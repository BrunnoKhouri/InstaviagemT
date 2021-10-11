import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from 'src/app/models/favorite.model';
import { FavoriteUtil } from 'src/app/utils/favorite.util';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {  
  
  public fav: Favorite = new Favorite()

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadCart();
  }

  public loadCart() {
    this.fav = FavoriteUtil.get();
  }
 

  public remove(item) {
    let index = this.fav.items.indexOf(item);
    this.fav.items.splice(index, 1);
    FavoriteUtil.update(this.fav);
  }

  public clear() {
    FavoriteUtil.clear();
    this.loadCart();
  } 

}
