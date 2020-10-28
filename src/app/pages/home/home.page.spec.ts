import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome } from './home.page';

describe('PageHome', () => {
  let component: PageHome;
  let fixture: ComponentFixture<PageHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
