import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePechaKuchaComponent } from './pecha-kucha.page';

describe('PagePechaKuchaComponent', () => {
	let component: PagePechaKuchaComponent;
	let fixture: ComponentFixture<PagePechaKuchaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PagePechaKuchaComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PagePechaKuchaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
