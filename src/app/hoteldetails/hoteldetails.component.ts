import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
    selector: 'app-hoteldetails',
    templateUrl: './hoteldetails.component.html',
    styleUrls: ['./hoteldetails.component.css']
})
export class HoteldetailsComponent implements OnInit {
    userData1: any = {}
    userData2: any = {
        fullname: '',
        adults: '',
        id: '',
        children: '',
        radioSelection: ''
    }
    userData: any = []

    radioSelection: string = 'Visa Card'
    myForm = new FormGroup({})
    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
        this.myForm = fb.group({
            formfullname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]),
            formadult: new FormControl('', [Validators.required, Validators.min(1)]),
            formid: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(14), Validators.pattern('^[0-9]{14}$')]),
            formchildren: new FormControl('', [Validators.required, Validators.min(0)])
        })
        // this.myForm.valueChanges.subscribe(console.log) 

    }
    get formfullname() {
        return this.myForm.get('formfullname') 
    }
    get formadult() {
        return this.myForm.get('formadult')
    }
    get formid() {
        return this.myForm.get('formid')
    }
    get formchildren() {
        return this.myForm.get('formchildren')  
    } 

    ngOnInit(): void {
        this.userData1 = JSON.parse(this.route.snapshot.queryParams.data)  
        console.log(this.userData1)
    }
    onItemChange($event) {
        this.radioSelection = $event.target.value
        console.log(this.radioSelection)
    }


    reserve() {

        if (this.myForm.status === 'VALID') {
            this.userData2.fullname = this.myForm.controls.formfullname.value
            this.userData2.adults = this.myForm.controls.formadult.value
            this.userData2.id = this.myForm.controls.formid.value
            this.userData2.children = this.myForm.controls.formchildren.value
            this.userData2.radioSelection = this.radioSelection
            this.userData = [this.userData1,this.userData2]

            this.router.navigate(['confirmation'], 
                {
                    queryParams:
                        { data: JSON.stringify(this.userData)},
                    skipLocationChange: true
                })
        }


    }

}