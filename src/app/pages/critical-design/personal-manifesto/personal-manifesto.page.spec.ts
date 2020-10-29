import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonalManifestoComponent } from './personal-manifesto.page';

describe('PagePersonalManifestoComponent', () => {
	let component: PagePersonalManifestoComponent;
	let fixture: ComponentFixture<PagePersonalManifestoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PagePersonalManifestoComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PagePersonalManifestoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
