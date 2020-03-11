import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PriceItemsComponent } from './routes/price-items/price-items.component';
import { EditItemComponent } from './routes/edit-item/edit-item.component';
import { ItemListResolver } from './shared/resolver/item-list-resolver.service';
import { Error404Component } from './routes/error404/error404.component';
import { ItemRouteActivator } from './shared/activator/item-route-activator.service';
import { CreateItemComponent } from './routes/create-item/create-item.component';
import { PriceItemListResolver } from './shared/resolver/price-item-list-resolver.service';
import { PriceItemRouteActivator } from './shared/activator/price-item-route-activator.service';
import { PriceItemDetailsComponent } from './routes/price-item-details/price-item-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent, resolve : {items: ItemListResolver} },
  { path: "home/create", component: CreateItemComponent },
  { path: "home/:id", component: EditItemComponent, canActivate: [ItemRouteActivator]},
  { path: "price-items", component: PriceItemsComponent, resolve: {items: PriceItemListResolver} },
  { path: "price-items/:name", component: PriceItemDetailsComponent, canActivate: [PriceItemRouteActivator] },
  { path: "404", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }