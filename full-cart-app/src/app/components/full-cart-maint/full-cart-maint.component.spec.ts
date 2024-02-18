import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCartMaintComponent } from './full-cart-maint.component';

describe('FullCartMaintComponent', () => {
  let component: FullCartMaintComponent;
  let fixture: ComponentFixture<FullCartMaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullCartMaintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullCartMaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
