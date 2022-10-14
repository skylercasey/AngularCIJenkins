import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateequipmentcategoryComponent } from './updateequipmentcategory.component';

describe('UpdateequipmentcategoryComponent', () => {
  let component: UpdateequipmentcategoryComponent;
  let fixture: ComponentFixture<UpdateequipmentcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateequipmentcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateequipmentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
