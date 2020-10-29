import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCriticalProblemsComponent } from './critical-problems.page';

describe('PageCriticalProblemsComponent', () => {
	let component: PageCriticalProblemsComponent;
	let fixture: ComponentFixture<PageCriticalProblemsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageCriticalProblemsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageCriticalProblemsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
