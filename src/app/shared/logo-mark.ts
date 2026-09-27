import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** The gold Captain mark on a wine tile — gold on parchment lacks contrast, so it always sits on wine. */
@Component({
  selector: 'cm-logo-mark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex' },
  template: `
    <span
      class="grid place-items-center rounded-xl bg-wine"
      [style.width.px]="size()"
      [style.height.px]="size()"
    >
      <img src="logo.png" alt="" [width]="size() * 0.72" [height]="size() * 0.72" />
    </span>
  `,
})
export class LogoMark {
  readonly size = input(40);
}
