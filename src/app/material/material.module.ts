import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




const material = [MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule];

@NgModule({
  declarations: [],
  imports: [ material
    
  ],
  exports: [material

  ]
})
export class MaterialModule { }
