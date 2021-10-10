import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from 'src/app/models/package.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrls: ['./packages-page.component.css']
})
export class PackagesPageComponent implements OnInit {

  packages$: Observable<Package[]> = null;
  // packages: Package[] = [];
  public isLoading: boolean = true;

  constructor(private service: DataService) { }

  ngOnInit() {
    
    this.loading();
  }

  private loading(): void {
    this.packages$ = this.service.getPackages();
    this.isLoading = false;
  }


}
