import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStakeholderProfilesComponent } from './stakeholder-profiles.page';

describe('PageStakeholderProfilesComponent', () => {
	let component: PageStakeholderProfilesComponent;
	let fixture: ComponentFixture<PageStakeholderProfilesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageStakeholderProfilesComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageStakeholderProfilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
