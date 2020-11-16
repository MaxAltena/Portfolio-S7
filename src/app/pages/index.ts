/* tslint:disable */

import { PageHomeComponent } from './home/home.page';
import { PageDynamicComponent } from './dynamic/dynamic.page';
import { PageNotFoundComponent } from './not-found/not-found.page';

export * from './home/home.page';
export * from './dynamic/dynamic.page';
export * from './not-found/not-found.page';

export type GeneralPagesType =
	| typeof PageHomeComponent
	| typeof PageDynamicComponent
	| typeof PageNotFoundComponent;

export const generalPages = [
	PageHomeComponent,
	PageDynamicComponent,
	PageNotFoundComponent,
];

import { PageDesignProbesComponent } from './human-centered-design/design-probes/design-probes.page';
import { PagePrintHouseInterviewComponent } from './human-centered-design/print-house-interview/print-house-interview.page';
import { PageStakeholderProfilesComponent } from './human-centered-design/stakeholder-profiles/stakeholder-profiles.page';

export * from './human-centered-design/design-probes/design-probes.page';
export * from './human-centered-design/print-house-interview/print-house-interview.page';
export * from './human-centered-design/stakeholder-profiles/stakeholder-profiles.page';

export type HCDPagesType =
	| typeof PageDesignProbesComponent
	| typeof PagePrintHouseInterviewComponent
	| typeof PageStakeholderProfilesComponent;

export const hcdPages = [
	PageDesignProbesComponent,
	PagePrintHouseInterviewComponent,
	PageStakeholderProfilesComponent,
];

import { PageCriticalProblemsComponent } from './critical-design/critical-problems/critical-problems.page';
import { PagePersonalManifestoComponent } from './critical-design/personal-manifesto/personal-manifesto.page';
import { PageConceptsComponent } from './critical-design/concepts/concepts.page';
import { PageConceptDigitalDetoxComponent } from './critical-design/concept-digital-detox/concept-digital-detox.page';

export * from './critical-design/critical-problems/critical-problems.page';
export * from './critical-design/personal-manifesto/personal-manifesto.page';
export * from './critical-design/concepts/concepts.page';
export * from './critical-design/concept-digital-detox/concept-digital-detox.page';

export type CDPagesType =
	| typeof PageCriticalProblemsComponent
	| typeof PagePersonalManifestoComponent
	| typeof PageConceptsComponent
	| typeof PageConceptDigitalDetoxComponent;

export const cdPages = [
	PageCriticalProblemsComponent,
	PagePersonalManifestoComponent,
	PageConceptsComponent,
	PageConceptDigitalDetoxComponent,
];

import { PagePechaKuchaComponent } from './story-creation/pecha-kucha/pecha-kucha.page';
import { PageResearchStorytellingEmotionComponent } from './story-creation/research-storytelling-emotion/research-storytelling-emotion.page';
import { PageProtaganistComponent } from './story-creation/protaganist/protaganist.page';

export * from './story-creation/pecha-kucha/pecha-kucha.page';
export * from './story-creation/research-storytelling-emotion/research-storytelling-emotion.page';
export * from './story-creation/protaganist/protaganist.page';

export type SCPagesType =
	| typeof PagePechaKuchaComponent
	| typeof PageResearchStorytellingEmotionComponent
	| typeof PageProtaganistComponent;

export const scPages = [
	PagePechaKuchaComponent,
	PageResearchStorytellingEmotionComponent,
	PageProtaganistComponent,
];

import { PageADayWithoutMyPhoneComponent } from './media-theory/a-day-without-my-phone/a-day-without-my-phone.page';
import { PageSocialAnalysisComponent } from './media-theory/social-analysis/social-analysis.page';
import { PageMyAIFriendComponent } from './media-theory/my-ai-friend/my-ai-friend.page';

export * from './media-theory/a-day-without-my-phone/a-day-without-my-phone.page';
export * from './media-theory/social-analysis/social-analysis.page';
export * from './media-theory/my-ai-friend/my-ai-friend.page';

export type MTPagesType =
	| typeof PageADayWithoutMyPhoneComponent
	| typeof PageSocialAnalysisComponent
	| typeof PageMyAIFriendComponent;

export const mtPages = [
	PageADayWithoutMyPhoneComponent,
	PageSocialAnalysisComponent,
	PageMyAIFriendComponent,
];

import { PageVegaCollabComponent } from './other/vega-collab/vega-collab.page';
import { PageGroupContributionComponent } from './other/group-contribution/group-contribution.page';

export * from './other/vega-collab/vega-collab.page';
export * from './other/group-contribution/group-contribution.page';

export type OtherPagesType =
	| typeof PageVegaCollabComponent
	| typeof PageGroupContributionComponent;

export const otherPages = [
	PageVegaCollabComponent,
	PageGroupContributionComponent,
];

export type PagesType =
	| GeneralPagesType
	| HCDPagesType
	| CDPagesType
	| SCPagesType
	| MTPagesType
	| OtherPagesType;

export default [
	...generalPages,
	...hcdPages,
	...cdPages,
	...scPages,
	...mtPages,
	...otherPages,
];
