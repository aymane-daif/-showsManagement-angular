import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsHeaderComponent } from './shows-header.component';

describe('ShowsHeaderComponent', () => {
  let component: ShowsHeaderComponent;
  let fixture: ComponentFixture<ShowsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
