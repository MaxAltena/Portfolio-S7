import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyAIFriendComponent } from './my-ai-friend.page';

describe('PageMyAIFriendComponent', () => {
	let component: PageMyAIFriendComponent;
	let fixture: ComponentFixture<PageMyAIFriendComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageMyAIFriendComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageMyAIFriendComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
