import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundHomeComponent } from './not-found-home.component';

describe('NotFoundHomeComponent', () => {
  let component: NotFoundHomeComponent;
  let fixture: ComponentFixture<NotFoundHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
