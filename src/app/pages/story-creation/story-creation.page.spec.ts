import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStoryCreationComponent } from './story-creation.page';

describe('PageStoryCreationComponent', () => {
	let component: PageStoryCreationComponent;
	let fixture: ComponentFixture<PageStoryCreationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageStoryCreationComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageStoryCreationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
