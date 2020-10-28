import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbout } from './about.page';

describe('PageAbout', () => {
  let component: PageAbout;
  let fixture: ComponentFixture<PageAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAbout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
