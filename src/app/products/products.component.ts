import { Component, OnInit } from "@angular/core";


@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
    isDisabled: boolean = true;
    productsStatus: string = 'No Product is added yet.'
    noOfProducts: number = 0;
    searchProductName: string = "No Product is searched yet";
    ngOnInit(): void {
        console.log(`Product comp is inti`);
        setTimeout(() => {
            this.isDisabled = false
        }, 1000);
    }

    onProductSearch(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
        this.searchProductName = val;
    }
    getProductStatus() {
        // console.log(`Btn Clicked`);
        this.noOfProducts++;
        this.productsStatus = `${this.noOfProducts} products are added to the cart`
    }
    onProductRemove() {
        if (this.noOfProducts > 0) {
            this.noOfProducts--;
            this.productsStatus = `${this.noOfProducts} products are added to the cart`
        }

    }
}