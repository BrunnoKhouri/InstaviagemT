import { Package } from 'src/app/models/package.model';
import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  packages: Package = new Package();

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<DetailsPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Package) {
    this.packages._id = this.data._id;
    this.packages.name = this.data.name;
    this.packages.price = this.data.price;
    this.packages.image = this.data.image;
    this.packages.about = this.data.about;
    this.packages.phone = this.data.phone;
    this.packages.email = this.data.email;
  }

  ngOnInit() {

  }

}
