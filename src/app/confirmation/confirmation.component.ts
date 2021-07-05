import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

    userData: any
    userData1: any
    userData2: any
    rooms: number | any
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.userData = JSON.parse(this.route.snapshot.queryParams.data)
        this.userData1 = this.userData[0]
        this.userData2 = this.userData[1]
        console.log(this.userData)
    }

}

