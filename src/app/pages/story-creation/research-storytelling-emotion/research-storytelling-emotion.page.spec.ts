import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResearchStorytellingEmotionComponent } from './research-storytelling-emotion.page';

describe('PageResearchStorytellingEmotionComponent', () => {
	let component: PageResearchStorytellingEmotionComponent;
	let fixture: ComponentFixture<PageResearchStorytellingEmotionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageResearchStorytellingEmotionComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageResearchStorytellingEmotionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
