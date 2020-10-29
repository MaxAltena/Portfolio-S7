import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGroupContributionComponent } from './group-contribution.page';

describe('PageGroupContributionComponent', () => {
	let component: PageGroupContributionComponent;
	let fixture: ComponentFixture<PageGroupContributionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageGroupContributionComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageGroupContributionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
