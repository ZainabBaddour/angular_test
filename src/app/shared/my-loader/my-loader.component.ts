import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/element.model';
import { RouterModule } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.css']
})
export class MyLoaderComponent implements OnInit {

  loading!: boolean;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      console.log(v)
      this.loading = v;
    });

  }
  ngOnInit() {
  }

}
