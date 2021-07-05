import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';

import { HoteldetailsComponent } from 'src/app/hoteldetails/hoteldetails.component';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';


const routes: Routes = [

    { path: "", component: HomeComponent, pathMatch: 'full' },
    { path: "hoteldetails", component: HoteldetailsComponent },
    { path: "confirmation", component: ConfirmationComponent }
    

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


