import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { ProductDetails } from './product-details/product-details';
import { ProductList } from './product-list/product-list';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'productDetails/:id', component: ProductDetails},
    {path: 'productList', component: ProductList},
];