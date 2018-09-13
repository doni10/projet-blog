import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPostItemComponent } from './mon-post-item.component';

describe('MonPostItemComponent', () => {
  let component: MonPostItemComponent;
  let fixture: ComponentFixture<MonPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
