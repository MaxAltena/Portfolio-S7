import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHumanCenteredDesignComponent } from './human-centered-design.page';

describe('PageHumanCenteredDesignComponent', () => {
	let component: PageHumanCenteredDesignComponent;
	let fixture: ComponentFixture<PageHumanCenteredDesignComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageHumanCenteredDesignComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageHumanCenteredDesignComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
