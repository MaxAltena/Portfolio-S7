import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMediaTheoryComponent } from './media-theory.page';

describe('PageMediaTheoryComponent', () => {
	let component: PageMediaTheoryComponent;
	let fixture: ComponentFixture<PageMediaTheoryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageMediaTheoryComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageMediaTheoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
