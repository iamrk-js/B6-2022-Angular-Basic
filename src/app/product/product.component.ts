import { Component } from "@angular/core";


@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]
})
export class ProductComponent {
    pName: string = "Samsung M31";
    pId: number = 123;
    pStatus: string = "in-Transition"
}

// web-component 