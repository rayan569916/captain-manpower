import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { Icon } from '../shared/icon';
import { LogoMark } from '../shared/logo-mark';

export const NAV = [
  { label: 'Services', path: '/services' },
  { label: 'Talent pool', path: '/talent' },
  { label: 'Open jobs', path: '/jobs' },
  { label: 'About', path: '/about' },
];

@Component({
  selector: 'cm-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, Icon, LogoMark],
  host: {
    class: 'sticky top-0 z-50 block',
    '(window:scroll)': 'onScroll()',
  },
  template: `
    <header
      class="border-b backdrop-blur-md transition-colors duration-300"
      [class]="scrolled() || menuOpen() ? 'border-mist bg-parchment/80' : 'border-transparent bg-parchment/40'"
    >
      <div class="container-page flex h-16 items-center justify-between gap-6">
        <a routerLink="/" class="flex items-center gap-3" aria-label="Captain Manpower home">
          <cm-logo-mark [size]="38" />
          <span class="leading-tight">
            <span class="block text-body font-emph">Captain Manpower</span>
            <span class="block text-caption text-stone">A Captain International Alliance company</span>
          </span>
        </a>

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Main">
          @for (item of nav; track item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="text-violet"
              class="text-body text-ink transition-colors hover:text-violet"
              >{{ item.label }}</a
            >
          }
        </nav>

        <div class="hidden items-center gap-5 lg:flex">
          <a href="tel:+966110000000" class="text-body text-ink hover:text-violet">+966 11 000 0000</a>
          <a routerLink="/contact" class="btn-secondary">Request manpower</a>
        </div>

        <button
          type="button"
          class="grid size-10 place-items-center rounded-lg border border-mist bg-paper lg:hidden"
          (click)="menuOpen.update((v) => !v)"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-nav"
          [attr.aria-label]="menuOpen() ? 'Close menu' : 'Open menu'"
        >
          <cm-icon [name]="menuOpen() ? 'close' : 'menu'" />
        </button>
      </div>

      @if (menuOpen()) {
        <nav id="mobile-nav" class="container-page flex flex-col gap-1 pb-6 lg:hidden" aria-label="Mobile">
          @for (item of nav; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="bg-lilac" class="rounded-lg px-3 py-3 text-label">{{ item.label }}</a>
          }
          <a routerLink="/contact" class="btn-primary mt-3 justify-center">Request manpower <cm-icon name="arrow" [size]="18" /></a>
        </nav>
      }
    </header>
  `,
})
export class Header {
  protected readonly nav = NAV;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuOpen.set(false));
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }
}
