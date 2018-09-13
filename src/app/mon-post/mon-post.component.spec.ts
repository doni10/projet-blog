import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPostComponent } from './mon-post.component';

describe('MonPostComponent', () => {
  let component: MonPostComponent;
  let fixture: ComponentFixture<MonPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
