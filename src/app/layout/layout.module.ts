import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      RouterModule
    ],
  
    declarations: [
      HeaderComponent,    
      FooterComponent  
    ],
  
    providers: [  
    ],

    exports: [   
      HeaderComponent,
      FooterComponent   
    ]  
  })

  export class LayoutModule { }