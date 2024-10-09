import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SponsorService } from '../../services/sponsor.service';
import { Isponsor } from '../interfaces/isponsor';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {

  constructor( private _SponsorService:SponsorService ) {}


  allSponsor!:Isponsor[];

  numOfPages:number = 0;


  currentPage:number = 0;
  perPage:number = 0;
  total:number = 0;
  

  isLoadnig:boolean = false;


  ngOnInit(): void {

    this.isLoadnig = true;

    this.getAllSponsor(1);
  }


  getAllSponsor(page:number) {
    this._SponsorService.getSponsors(page).subscribe({
      next: (res)=>{ 

        this.allSponsor = res.data

        this.currentPage = res.current_page;
        this.perPage = res.per_page;
        this.total = res.total;

        this.numOfPages = Math.ceil( this.total/this.perPage );

        this.isLoadnig = false;
      }
    })
  }


  nextPage() {
    this.isLoadnig = true;

    this.getAllSponsor(this.currentPage+1);
  }

  prevPage() {
    this.isLoadnig = true;

    this.getAllSponsor(this.currentPage-1);
  }
  




}
