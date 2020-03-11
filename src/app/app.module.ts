import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { PriceItemsComponent } from './routes/price-items/price-items.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { EditItemComponent } from './routes/edit-item/edit-item.component';
import { Error404Component } from './routes/error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateItemComponent } from './routes/create-item/create-item.component';
import { PriceItemDetailsComponent } from './routes/price-item-details/price-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PriceItemsComponent,
    EditItemComponent,
    Error404Component,
    CreateItemComponent,
    PriceItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
