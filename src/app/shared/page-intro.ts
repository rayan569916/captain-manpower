import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cm-page-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page pt-16 pb-10 md:pt-24 md:pb-14">
      <p class="eyebrow mb-4">{{ eyebrow() }}</p>
      <h1 class="max-w-3xl text-heading-lg md:text-display">{{ title() }}</h1>
      @if (lede()) {
        <p class="mt-6 max-w-2xl text-label text-stone">{{ lede() }}</p>
      }
      <ng-content />
    </section>
  `,
})
export class PageIntro {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lede = input<string>();
}
