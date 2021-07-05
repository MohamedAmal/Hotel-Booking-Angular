import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from 'src/app/home/home.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { HotelDivClick } from '../directives/hotel-click.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HoteldetailsComponent,
        HotelDivClick,
        ConfirmationComponent
    ],
    imports: [

        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,

    ],
    exports:[

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
