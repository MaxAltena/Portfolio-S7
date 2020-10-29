import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSocialAnalysisComponent } from './social-analysis.page';

describe('PageSocialAnalysisComponent', () => {
	let component: PageSocialAnalysisComponent;
	let fixture: ComponentFixture<PageSocialAnalysisComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageSocialAnalysisComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageSocialAnalysisComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
