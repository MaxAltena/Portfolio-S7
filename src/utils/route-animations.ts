import { trigger, transition, style, query, animate } from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
	transition('* <=> *', [
		query(':enter', [style({ opacity: 1 })], { optional: true }),
		query(
			':leave',
			[style({ position: 'absolute', opacity: 1 }), animate('200ms ease-in-out', style({ opacity: 0 }))],
			{
				optional: true,
			}
		),
		query(
			':enter',
			[style({ position: 'absolute', opacity: 0 }), animate('200ms ease-in-out', style({ opacity: 1 }))],
			{
				optional: true,
			}
		),
	]),
]);
