import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCriticalDesignComponent } from './critical-design.page';

describe('PageCriticalDesignComponent', () => {
	let component: PageCriticalDesignComponent;
	let fixture: ComponentFixture<PageCriticalDesignComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageCriticalDesignComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageCriticalDesignComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
