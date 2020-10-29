/* tslint:disable */

import { PageHomeComponent } from './home/home.page';
import { PageAboutComponent } from './about/about.page';
import { PageNotFoundComponent } from './not-found/not-found.page';

export * from './home/home.page';
export * from './about/about.page';
export * from './not-found/not-found.page';

export const generalPages = [
	PageHomeComponent,
	PageAboutComponent,
	PageNotFoundComponent,
];

import { PageHumanCenteredDesignComponent } from './human-centered-design/human-centered-design.page';
import { PageDesignProbesComponent } from './human-centered-design/design-probes/design-probes.page';
import { PagePrintHouseInterviewComponent } from './human-centered-design/print-house-interview/print-house-interview.page';

export * from './human-centered-design/human-centered-design.page';
export * from './human-centered-design/design-probes/design-probes.page';
export * from './human-centered-design/print-house-interview/print-house-interview.page';

export const hcdPages = [
	PageHumanCenteredDesignComponent,
	PageDesignProbesComponent,
	PagePrintHouseInterviewComponent,
];

import { PageCriticalDesignComponent } from './critical-design/critical-design.page';
import { PageCriticalProblemsComponent } from './critical-design/critical-problems/critical-problems.page';
import { PagePersonalManifestoComponent } from './critical-design/personal-manifesto/personal-manifesto.page';
import { PageConceptsComponent } from './critical-design/concepts/concepts.page';
import { PageConceptDigitalDetoxComponent } from './critical-design/concept-digital-detox/concept-digital-detox.page';

export * from './critical-design/critical-design.page';
export * from './critical-design/critical-problems/critical-problems.page';
export * from './critical-design/personal-manifesto/personal-manifesto.page';
export * from './critical-design/concepts/concepts.page';
export * from './critical-design/concept-digital-detox/concept-digital-detox.page';

export const cdPages = [
	PageCriticalDesignComponent,
	PageCriticalProblemsComponent,
	PagePersonalManifestoComponent,
	PageConceptsComponent,
	PageConceptDigitalDetoxComponent,
];

import { PageStoryCreationComponent } from './story-creation/story-creation.page';
import { PagePechaKuchaComponent } from './story-creation/pecha-kucha/pecha-kucha.page';
import { PageResearchStorytellingEmotionComponent } from './story-creation/research-storytelling-emotion/research-storytelling-emotion.page';

export * from './story-creation/story-creation.page';
export * from './story-creation/pecha-kucha/pecha-kucha.page';
export * from './story-creation/research-storytelling-emotion/research-storytelling-emotion.page';

export const scPages = [
	PageStoryCreationComponent,
	PagePechaKuchaComponent,
	PageResearchStorytellingEmotionComponent,
];

import { PageMediaTheoryComponent } from './media-theory/media-theory.page';
import { PageADayWithoutMyPhoneComponent } from './media-theory/a-day-without-my-phone/a-day-without-my-phone.page';
import { PageSocialAnalysisComponent } from './media-theory/social-analysis/social-analysis.page';
import { PageMyAIFriendComponent } from './media-theory/my-ai-friend/my-ai-friend.page';

export * from './media-theory/media-theory.page';
export * from './media-theory/a-day-without-my-phone/a-day-without-my-phone.page';
export * from './media-theory/social-analysis/social-analysis.page';
export * from './media-theory/my-ai-friend/my-ai-friend.page';

export const mtPages = [
	PageMediaTheoryComponent,
	PageADayWithoutMyPhoneComponent,
	PageSocialAnalysisComponent,
	PageMyAIFriendComponent,
];

import { PageOtherComponent } from './other/other.page';
import { PageVegaCollabComponent } from './other/vega-collab/vega-collab.page';

export * from './other/other.page';
export * from './other/vega-collab/vega-collab.page';

export const otherPages = [PageOtherComponent, PageVegaCollabComponent];

export default [
	...generalPages,
	...hcdPages,
	...cdPages,
	...scPages,
	...mtPages,
	...otherPages,
];
