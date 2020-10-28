import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeComponent } from './home.page';

describe('PageHomeComponent', () => {
	let component: PageHomeComponent;
	let fixture: ComponentFixture<PageHomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageHomeComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
