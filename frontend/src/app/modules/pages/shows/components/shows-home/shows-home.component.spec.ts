import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsHomeComponent } from './shows-home.component';

describe('ShowsHomeComponent', () => {
  let component: ShowsHomeComponent;
  let fixture: ComponentFixture<ShowsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
