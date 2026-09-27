import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Minimal 24px line icons, single 1.6 stroke to match the 460-weight type. */
const ICONS = {
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  hardhat: ['M3 18h18', 'M4 18v-2a8 8 0 0 1 16 0v2', 'M10 8V5h4v3', 'M12 5v3'],
  bolt: ['M13 2 4 14h7l-1 8 9-12h-7l1-8Z'],
  building: ['M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16', 'M15 10h4a1 1 0 0 1 1 1v10', 'M3 21h18', 'M8 8h3', 'M8 12h3', 'M8 16h3'],
  truck: ['M2 6h11v10H2z', 'M13 10h5l3 3v3h-8', 'M6.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', 'M17.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
  clipboard: ['M9 4h6v3H9z', 'M9 5.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-3', 'M9 12l2 2 4-4'],
  users: ['M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M2 21v-1a6 6 0 0 1 12 0v1', 'M16 3.5a4 4 0 0 1 0 7', 'M18 14.5a6 6 0 0 1 4 5.5v1'],
  globe: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M3 12h18', 'M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z'],
  clock: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7v5l3 2'],
  search: ['M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'M20 20l-4-4'],
  pin: ['M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z', 'M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  phone: ['M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z'],
  mail: ['M3 6h18v12H3z', 'M3 7l9 6 9-6'],
  shield: ['M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z', 'M9 12l2 2 4-4'],
  briefcase: ['M3 8h18v12H3z', 'M9 8V5h6v3', 'M3 13h18'],
  spark: ['M12 3v4', 'M12 17v4', 'M3 12h4', 'M17 12h4', 'M6 6l2.5 2.5', 'M15.5 15.5 18 18', 'M18 6l-2.5 2.5', 'M8.5 15.5 6 18'],
} as const;

export type IconName = keyof typeof ICONS;

@Component({
  selector: 'cm-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      [attr.width]="size()"
      [attr.height]="size()"
    >
      @for (d of paths(); track $index) {
        <path [attr.d]="d" />
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  protected readonly paths = computed(() => ICONS[this.name()]);
}
