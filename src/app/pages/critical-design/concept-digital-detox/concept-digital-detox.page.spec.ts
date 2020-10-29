import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConceptDigitalDetoxComponent } from './concept-digital-detox.page';

describe('PageConceptDigitalDetoxComponent', () => {
	let component: PageConceptDigitalDetoxComponent;
	let fixture: ComponentFixture<PageConceptDigitalDetoxComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageConceptDigitalDetoxComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageConceptDigitalDetoxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
