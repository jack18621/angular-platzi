import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'demo', component:DemoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
