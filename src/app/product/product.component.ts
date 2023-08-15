import { Component, OnInit } from "@angular/core";


@Component({
    selector: "app-product",
    // selector: "[app-product]",
    // selector: ".app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {

    pName: string = "Samsung M31";
    pId: number = 123;
    pStatus: string = "in-Transition";
    isProductAvialble !: boolean;
    constructor() {

    }

    ngOnInit(): void {
        console.log(`Product comp is inti`);
        this.isProductAvialble = Math.random() >= .5 ? true : false
    }

    public getProductId() {
        return this.pId
    }

    public getBgColor() {
       return this.isProductAvialble ? 'orange' : '#ccc'
    }
}
