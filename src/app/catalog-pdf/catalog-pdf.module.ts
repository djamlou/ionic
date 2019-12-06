import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogPDFPageRoutingModule } from './catalog-pdf-routing.module';

import { CatalogPDFPage } from './catalog-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogPDFPageRoutingModule
  ],
  declarations: [CatalogPDFPage]
})
export class CatalogPDFPageModule {}
