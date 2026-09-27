import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ENGAGEMENT_MODELS, SECTORS } from '../../core/data';
import { Icon } from '../../shared/icon';
import { PageIntro } from '../../shared/page-intro';

@Component({
  selector: 'cm-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DecimalPipe, Icon, PageIntro],
  template: `
    <cm-page-intro
      eyebrow="Services"
      title="Manpower the way your project needs it."
      lede="Hire per head, per crew or per season. Every worker is trade-tested, medically cleared and inducted before reaching site."
    />

    <!-- Engagement models -->
    <section class="container-page pb-20">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        @for (m of models; track m.title) {
          <article class="card flex flex-col p-6">
            <span class="grid size-10 place-items-center rounded-lg bg-lilac text-ink"><cm-icon [name]="m.icon" /></span>
            <h2 class="mt-6 text-label font-bold">{{ m.title }}</h2>
            <p class="mt-2 text-body text-stone">{{ m.summary }}</p>
            <ul class="mt-6 space-y-2 border-t border-mist pt-4">
              @for (p of m.points; track p) {
                <li class="flex gap-2 text-body-sm"><cm-icon name="check" [size]="16" class="mt-0.5 text-violet" />{{ p }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>

    <!-- Sectors -->
    <section class="border-t border-mist bg-paper">
      <div class="container-page py-20">
        <p class="eyebrow mb-3">Sectors & trades</p>
        <h2 class="max-w-2xl text-heading-sm md:text-heading-lg">Five sectors, 30+ trades, one supply chain.</h2>

        <div class="mt-12 divide-y divide-mist border-y border-mist">
          @for (s of sectors; track s.id) {
            <div [id]="s.id" class="grid scroll-mt-24 gap-6 py-10 md:grid-cols-[280px_1fr_auto] md:items-start">
              <div class="flex items-center gap-3">
                <span class="grid size-10 place-items-center rounded-lg bg-parchment"><cm-icon [name]="s.icon" /></span>
                <h3 class="text-subheading">{{ s.short }}</h3>
              </div>
              <div>
                <p class="max-w-xl text-body text-stone">{{ s.summary }}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  @for (r of s.roles; track r) {
                    <span class="rounded-full border border-mist px-3 py-1 text-body-sm">{{ r }}</span>
                  }
                </div>
              </div>
              <div class="md:text-right">
                <p class="num text-heading-sm">{{ s.workforce | number }}</p>
                <p class="text-caption text-stone">deployed</p>
                <a routerLink="/contact" [queryParams]="{ sector: s.id }" class="link mt-3 inline-block text-body">Request {{ s.short.toLowerCase() }} crew</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Included -->
    <section class="container-page py-20">
      <div class="grid gap-10 md:grid-cols-2">
        <h2 class="text-heading-sm md:text-heading-lg">Included in every outsourced contract.</h2>
        <ul class="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          @for (i of included; track i) {
            <li class="flex gap-3 border-b border-mist pb-4 text-body"><cm-icon name="check" class="text-violet" />{{ i }}</li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Services {
  protected readonly models = ENGAGEMENT_MODELS;
  protected readonly sectors = SECTORS;
  protected readonly included = [
    'Iqama & work permit',
    'Medical insurance (CCHI)',
    'GOSI registration',
    'WPS-compliant payroll',
    'Shared accommodation',
    'Site transport',
    'PPE & uniforms',
    'HSE induction',
    '72-hour replacement',
    'Monthly timesheet report',
  ];
}
