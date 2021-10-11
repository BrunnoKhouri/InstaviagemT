import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Package } from 'src/app/models/package.model';
import { DataService } from 'src/app/services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';


const EMPTY_STRING = String("");

@Component({
  selector: 'app-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrls: ['./packages-page.component.css']
})
export class PackagesPageComponent implements OnInit {   
 
  selectable = true;
  myControl = new FormControl();  
  packages$: Observable<Package[]>;
  options: Package [] = [];
  public isLoading: boolean = true;

  constructor(private service: DataService, private dialog: MatDialog,private _formBuilder: FormBuilder) {
  }
  
  ngOnInit() {    
    this.filterPackage()
    this.loading();
    
  }

  displayFn(packag: Package): string {
    return packag && packag.name ? packag.name : '';
  }

  private _filter(name: string): Package[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  } 

  private loading(): void {
   this.packages$ = this.service.getPackages();
   this.isLoading = false;
  }

  private filterPackage(): void{
    this.packages$ = this.myControl.valueChanges.pipe(
      startWith(EMPTY_STRING),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options)
  );
  }

}
