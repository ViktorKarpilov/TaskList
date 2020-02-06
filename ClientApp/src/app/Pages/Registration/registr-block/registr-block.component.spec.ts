import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrBlockComponent } from './registr-block.component';

describe('RegistrBlockComponent', () => {
  let component: RegistrBlockComponent;
  let fixture: ComponentFixture<RegistrBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
