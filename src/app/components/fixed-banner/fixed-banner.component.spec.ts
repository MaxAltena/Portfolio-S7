import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBannerComponent } from './fixed-banner.component';

describe('FixedBannerComponent', () => {
	let component: FixedBannerComponent;
	let fixture: ComponentFixture<FixedBannerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FixedBannerComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FixedBannerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
