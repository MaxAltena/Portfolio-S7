import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOtherComponent } from './other.page';

describe('PageOtherComponent', () => {
	let component: PageOtherComponent;
	let fixture: ComponentFixture<PageOtherComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageOtherComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageOtherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
