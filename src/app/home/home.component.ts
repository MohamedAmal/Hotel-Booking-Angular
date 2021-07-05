import { Component, OnInit, SimpleChange } from '@angular/core';
import { CountriesService } from 'src/services/countries.service';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormsModule, ReactiveFormsModule, ValidationErrors } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    form: FormGroup;

    constructor(private countriesService: CountriesService, private fg: FormBuilder, private route: ActivatedRoute, private router: Router) {
        // this.form = this.fb.group({
        //     startAt: [null, Validators.required],
        //     endAt: [null, Validators.required]
        // }, {
        //     validators: [this.createDateRangeValidator()]
        // });
        // this.form = new FormGroup(
        //     {
        //         from: new FormControl(""),
        //         to: new FormControl("")
        //     },
        //     [Validators.required, this.dateRangeValidator]
        // );
    }

    // console.log(`${startDate}  ${endDate}`)
    // console.log(this.startDate)
    // private dateRangeValidator: ValidatorFn = (): {[key: string]: any;} | null => {
    //     let invalid = false;
    //     const from = this.fg && this.form.get("from").value;
    //     const to = this.fg && this.form.get("to").value;
    //     if (from && to) {
    //         invalid = new Date(from).valueOf() > new Date(to).valueOf();
    //         console.log(invalid)
    //     }
    //     return invalid ? { invalidRange: { from, to } } : null;
    // };

    // public  createDateRangeValidator(): ValidatorFn {
    //     return (form: FormGroup): ValidationErrors | null => {

    //         const start:Date = form.get("startAt").value;

    //         const end:Date = form.get("endAt").value;

    //         if (start && end) {
    //             const isRangeValid = (end.getTime() - start.getTime() > 0);

    //             return isRangeValid ? null : {dateRange:true};
    //         }

    //         return null;
    //     }
    // }

    country: string;
    countries: any = [];
    cities: any = [];
    city: string;

    countrySelected: string
    citySelected: string
    viewedHotels: object = [];
    isDivClicked: boolean = false;
    selected: string = '';
    ButtonStatus: boolean = false;
    // userData1: userModel | any
    userData1: any = {
        country: '',
        city: 'City',
        hotel: '',
        dateFrom: '',
        dateTo: ''
    }

    startDate: FormControl = new FormControl(new Date())
    endDate: FormControl = new FormControl(new Date())

    myFilter = (d: Date): boolean => {
        const now = new Date()
        return d > now;
    }


    ngOnInit(): void {
        this.countriesService.getCountry().subscribe({
            next: data => {
                this.countries = data
                console.log(this.countries)
            },
            error: err => {
                console.log(err)
            }
        })
    }
    onCountryClick(country) {
        this.country = country
        this.cities = country.cities.map((city) => Object.keys(city))
        // this.countrySelected = this.country.country
    }
    onCityClick(city) {
        this.city = city
        this.countries.forEach(element => {
            if (element.cities.find(e => Object.keys(e)[0] == city[0])) {
                this.viewedHotels = element.cities.find(e => Object.keys(e)[0] == city[0])[city]

            }
        })
        this.citySelected = this.city
        this.ButtonStatus = true
    }

    select(item) {
        if (this.selected === item) {
            alert("Please choose a Hotel")
            return this.selected = null
        } else {
            this.selected = item
            this.userData1.hotel = this.selected
            this.userData1.country = this.country
            this.userData1.city = this.city[0]
            this.userData1.dateFrom = this.startDate.value
            this.userData1.dateTo = this.endDate.value

        }
    }
    isActive(item) {
        return this.selected === item;
    };

    onNextClick() {
        this.router.navigate(['hoteldetails'],
            {
                queryParams:
                    { data: JSON.stringify(this.userData1) },
                skipLocationChange: true
            })

    }
}