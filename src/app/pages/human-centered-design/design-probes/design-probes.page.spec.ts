import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDesignProbesComponent } from './design-probes.page';

describe('PageDesignProbesComponent', () => {
	let component: PageDesignProbesComponent;
	let fixture: ComponentFixture<PageDesignProbesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageDesignProbesComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageDesignProbesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
