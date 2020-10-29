import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConceptsComponent } from './concepts.page';

describe('PageConceptsComponent', () => {
	let component: PageConceptsComponent;
	let fixture: ComponentFixture<PageConceptsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageConceptsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageConceptsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
