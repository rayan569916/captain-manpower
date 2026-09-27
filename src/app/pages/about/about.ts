import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OFFICES, STATS } from '../../core/data';
import { Icon, IconName } from '../../shared/icon';
import { PageIntro } from '../../shared/page-intro';

@Component({
  selector: 'cm-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, PageIntro],
  template: `
    <cm-page-intro
      eyebrow="About Captain Manpower"
      title="A decade of putting the right people on site."
      lede="Captain Manpower is the workforce arm of Captain International Alliance, alongside our cargo, trading and construction-materials businesses — so we understand what a site needs, not just a headcount."
    />

    <section class="container-page pb-20">
      <div class="grid gap-4 md:grid-cols-4">
        @for (s of stats; track s.label) {
          <div class="card p-6">
            <p class="num text-heading-sm">{{ s.value }}</p>
            <p class="mt-2 text-body-sm text-stone">{{ s.label }}</p>
          </div>
        }
      </div>
    </section>

    <section class="border-y border-mist bg-paper">
      <div class="container-page grid gap-12 py-20 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p class="eyebrow mb-3">Worker welfare</p>
          <h2 class="text-heading-sm md:text-heading-lg">Fair recruitment is how we keep crews productive.</h2>
          <p class="mt-6 text-body text-stone">Workers who are treated well stay longer, work safer and renew. That's why our retention runs well above the market average.</p>
        </div>
        <ul class="grid gap-4 sm:grid-cols-2">
          @for (v of values; track v.title) {
            <li class="rounded-2xl border border-mist p-6">
              <cm-icon [name]="v.icon" class="text-violet" />
              <h3 class="mt-4 text-label font-bold">{{ v.title }}</h3>
              <p class="mt-1 text-body text-stone">{{ v.text }}</p>
            </li>
          }
        </ul>
      </div>
    </section>

    <section class="container-page py-20">
      <p class="eyebrow mb-3">Offices</p>
      <h2 class="text-heading-sm md:text-heading-lg">Three regions in KSA, three sourcing centres abroad.</h2>
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @for (o of offices; track o.city) {
          <div class="card p-6">
            <p class="text-caption text-stone">{{ o.role }}</p>
            <p class="mt-1 text-subheading">{{ o.city }}</p>
            <p class="text-body-sm text-stone">{{ o.country }}</p>
            <p class="mt-4 flex items-center gap-2 text-body-sm"><cm-icon name="pin" [size]="16" />{{ o.address }}</p>
            <p class="num mt-1 flex items-center gap-2 text-body-sm"><cm-icon name="phone" [size]="16" />{{ o.phone }}</p>
          </div>
        }
      </div>
      <a routerLink="/contact" class="btn-primary mt-12">Talk to our team <cm-icon name="arrow" [size]="18" /></a>
    </section>
  `,
})
export class About {
  protected readonly stats = STATS;
  protected readonly offices = OFFICES;
  protected readonly values: { title: string; icon: IconName; text: string }[] = [
    { title: 'Zero worker fees', icon: 'shield', text: 'No recruitment fees charged to workers, in any source country.' },
    { title: 'Wages on time', icon: 'clock', text: 'WPS payroll on the 27th of every month, verified by audit.' },
    { title: 'Decent housing', icon: 'building', text: 'Inspected accommodation meeting MHRSD housing standards.' },
    { title: 'Skills that grow', icon: 'spark', text: 'Upskilling and trade upgrades that raise workers’ pay grade.' },
  ];
}
