import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/element.model';
import { CardsService } from '../services/cards.service';
import { KeyValue } from '../models/key-value.model';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards!: Card[];
  
  //for filters
  searchFields: KeyValue[] = [
    { key: 'id', value: 'ID' },
  ];

  @ViewChild(MatSort, { static: false })
  sort!: MatSort;

  searchText = '';
  searchField = '';
  p: number = 0;
  total!: number;
  loading!: boolean; // if loading = false the loader will appear 

  constructor(private cardsService: CardsService, private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.getPage(1, 'desc', 'created');

  }
  getPage(page: number, sort: string = 'desc', order: string = 'created') {  //called  whenever new page requested
    this.p = page;
    this.cardsService.getRepoIssues(sort, order, page).subscribe(res => {
      this.cards = res.data;  //update the parameters
      this.total = res.total;
      this.p = res.per_page;
    });
  }

  handleFilter(filterParams: any) { 
    this.searchField = filterParams.field; //Id
    this.searchText = filterParams.text;  //value of the searched Id
  }

}

