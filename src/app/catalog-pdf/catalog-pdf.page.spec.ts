import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogPDFPage } from './catalog-pdf.page';

describe('CatalogPDFPage', () => {
  let component: CatalogPDFPage;
  let fixture: ComponentFixture<CatalogPDFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogPDFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogPDFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
