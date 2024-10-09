import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SponsorService } from '../../services/sponsor.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-edit-view',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './edit-view.component.html',
  styleUrl: './edit-view.component.css'
})
export class EditViewComponent {

  constructor( private _SponsorService:SponsorService ) {}

  loading:boolean = false;
  
  errorsReqDy:string[] = [''];
  errorsReq:any = [''];

  successReq:any;
  alertSuccess:boolean = false;


  get controls() {

    return (<FormArray>this.addSponsorForm.get('sponsor_contact_officer')).controls
  }

  


  addSponsorForm:FormGroup = new FormGroup({

    sponsor_name:new FormControl(null, [Validators.required]),
    sponsor_type:new FormControl("normal"),
    sponsor_ID:new FormControl(null, [Validators.required]),
    phone:new FormControl(null, [Validators.required]),
    address:new FormControl(null, [Validators.required]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    postal_code:new FormControl(null, [Validators.required]),
    max_limit:new FormControl(null, [Validators.required]),
    financial_limit:new FormControl(null, [Validators.required]),
    time_limit:new FormControl(null, [Validators.required]),

    sponsor_contact_officer:new FormArray([
      
      
      
    ])



  })



  addOffiecer() {

    const offiecer = <FormArray>this.addSponsorForm.get('sponsor_contact_officer');

    offiecer.push(
      new FormGroup({

        contact_officer_name:new FormControl(null, [Validators.required]),
        email:new FormControl(null, [Validators.required, Validators.email]),
        phone:new FormControl(null, [Validators.required])
      })
    )

  }

  deleteOffiecer(index:number) {

    const offiecer = <FormArray>this.addSponsorForm.get('sponsor_contact_officer');

    offiecer.removeAt(index)
  }




  handleAdd(sponsorForm:FormGroup) {

    this.loading = true;
    this.errorsReqDy = ['']

    if( this.addSponsorForm.valid ) {

      this._SponsorService.newSponsor(sponsorForm.value).subscribe({

        next: (response)=>{ 

          
          if(response.success) {

            this.successReq = response;

            this.addSponsorForm.reset();
            this.alertSuccess = true;
            this.loading = false;
          }

        },
        error: (err)=>{ 

          this.loading = false;

          this.errorsReq = err.error.errors;


          Object.keys(err.error.errors).map( (key)=> { this.errorsReqDy.push(key) } )


        }
      })
    }

  }
}
