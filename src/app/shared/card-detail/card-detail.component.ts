import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/element.model';
import { RequestResult } from 'src/app/models/ReequestResult';
import { RequestUser } from 'src/app/models/RequestUser';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  constructor(private cardsService: CardsService, private route: ActivatedRoute,) { }
  user!: RequestUser;
  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cardsService.getUser(id).subscribe(
      (res) => {
        this.user = res
      }
    )
  }




}
