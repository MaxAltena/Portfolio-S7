import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDynamicComponent } from './dynamic.page';

describe('PageDynamicComponent', () => {
	let component: PageDynamicComponent;
	let fixture: ComponentFixture<PageDynamicComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageDynamicComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageDynamicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
