import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cm-hero-scene',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'absolute inset-0 block overflow-hidden',
    'aria-hidden': 'true',
  },
  template: `
    <img
      src="bg.png"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
    />

    <!-- Optional overlay to keep the text readable -->
    <div
      class="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,240,235,0.18)_0%,rgba(242,240,235,0)_45%)]"
    ></div>
  `,
})
export class HeroScene {}