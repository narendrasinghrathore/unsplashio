import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardListComponent } from './photo-card-list.component';

describe('PhotoCardListComponent', () => {
  let component: PhotoCardListComponent;
  let fixture: ComponentFixture<PhotoCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
