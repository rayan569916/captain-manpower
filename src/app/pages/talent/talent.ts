import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CANDIDATES, SECTORS, sectorName } from '../../core/data';
import { Availability, Candidate } from '../../core/models';
import { Icon } from '../../shared/icon';
import { PageIntro } from '../../shared/page-intro';

@Component({
  selector: 'cm-talent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, PageIntro],
  template: `
    <cm-page-intro
      eyebrow="Talent pool"
      title="Pre-screened workers, ready to shortlist."
      lede="A sample of profiles from our pool. Names are shown by first initial to clients until a shortlist is confirmed."
    />

    <section class="container-page pb-24">
      <!-- Filters -->
      <div class="card grid gap-3 p-3 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <label class="relative">
          <span class="sr-only">Search by trade or certification</span>
          <cm-icon name="search" [size]="18" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone" />
          <input class="field pl-10" type="search" placeholder="Trade, skill or certification" [value]="query()" (input)="query.set($any($event.target).value)" />
        </label>
        <label>
          <span class="sr-only">Sector</span>
          <select class="field" [value]="sector()" (change)="sector.set($any($event.target).value)">
            <option value="">All sectors</option>
            @for (s of sectors; track s.id) {
              <option [value]="s.id">{{ s.short }}</option>
            }
          </select>
        </label>
        <label>
          <span class="sr-only">Nationality</span>
          <select class="field" [value]="nationality()" (change)="nationality.set($any($event.target).value)">
            <option value="">All nationalities</option>
            @for (n of nationalities; track n) {
              <option [value]="n">{{ n }}</option>
            }
          </select>
        </label>
        <label>
          <span class="sr-only">Availability</span>
          <select class="field" [value]="availability()" (change)="availability.set($any($event.target).value)">
            <option value="">Any availability</option>
            @for (a of availabilities; track a) {
              <option [value]="a">{{ a }}</option>
            }
          </select>
        </label>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <p class="num text-body-sm text-stone">{{ results().length }} of {{ total }} profiles</p>
        @if (shortlist().size) {
          <a routerLink="/contact" [queryParams]="{ shortlist: shortlistIds() }" class="btn-secondary">
            Request shortlist ({{ shortlist().size }})
          </a>
        }
      </div>

      <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @for (c of results(); track c.id) {
          <article class="card flex flex-col p-5" [class.shadow-subtle]="shortlist().has(c.id)">
            <div class="flex items-start gap-3">
              <span class="grid size-11 shrink-0 place-items-center rounded-full bg-lilac text-body font-emph">{{ initials(c) }}</span>
              <div class="min-w-0 flex-1">
                <p class="truncate text-body font-emph">{{ c.trade }}</p>
                <p class="text-body-sm text-stone">{{ displayName(c) }} · {{ c.nationality }}</p>
              </div>
              <span class="num text-caption text-stone">{{ c.id }}</span>
            </div>

            <dl class="num mt-5 grid grid-cols-3 gap-2 border-y border-mist py-3 text-center">
              <div><dt class="text-caption text-stone">Total exp.</dt><dd class="text-body">{{ c.experienceYears }} yrs</dd></div>
              <div><dt class="text-caption text-stone">GCC exp.</dt><dd class="text-body">{{ c.gccExperienceYears }} yrs</dd></div>
              <div><dt class="text-caption text-stone">Sector</dt><dd class="text-body">{{ sectorName(c.sector) }}</dd></div>
            </dl>

            <div class="mt-4 flex flex-wrap gap-1.5">
              @for (cert of c.certifications; track cert) {
                <span class="chip">{{ cert }}</span>
              }
            </div>
            <p class="mt-3 text-body-sm text-stone">{{ c.languages.join(' · ') }}</p>

            <div class="mt-auto flex items-center justify-between pt-5">
              <span class="flex items-center gap-1.5 text-body-sm">
                <span class="size-2 rounded-full" [class]="c.availability === 'Available now' ? 'bg-[#2f9e6b]' : c.availability === 'In KSA · transferable' ? 'bg-violet' : 'bg-stone'"></span>
                {{ c.availability }}
              </span>
              <button type="button" class="text-body-sm text-violet hover:underline" (click)="toggle(c.id)" [attr.aria-pressed]="shortlist().has(c.id)">
                {{ shortlist().has(c.id) ? 'Shortlisted ✓' : 'Add to shortlist' }}
              </button>
            </div>
          </article>
        } @empty {
          <div class="card col-span-full p-10 text-center">
            <p class="text-label">No profiles match those filters.</p>
            <button type="button" class="link mt-2 text-body" (click)="reset()">Clear filters</button>
          </div>
        }
      </div>
    </section>
  `,
})
export class Talent {
  protected readonly sectors = SECTORS;
  protected readonly sectorName = sectorName;
  protected readonly total = CANDIDATES.length;
  protected readonly nationalities = [...new Set(CANDIDATES.map((c) => c.nationality))].sort();
  protected readonly availabilities: Availability[] = ['Available now', 'In KSA · transferable', 'Overseas · 30–45 days'];

  protected readonly query = signal('');
  protected readonly sector = signal('');
  protected readonly nationality = signal('');
  protected readonly availability = signal('');
  protected readonly shortlist = signal(new Set<string>());
  protected readonly shortlistIds = computed(() => [...this.shortlist()].join(','));

  protected readonly results = computed(() => {
    const q = this.query().trim().toLowerCase();
    return CANDIDATES.filter(
      (c) =>
        (!q || [c.trade, ...c.certifications, ...c.languages].some((t) => t.toLowerCase().includes(q))) &&
        (!this.sector() || c.sector === this.sector()) &&
        (!this.nationality() || c.nationality === this.nationality()) &&
        (!this.availability() || c.availability === this.availability()),
    );
  });

  protected initials(c: Candidate): string {
    return c.name
      .split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('');
  }

  protected displayName(c: Candidate): string {
    const [first, ...rest] = c.name.split(' ');
    return `${first} ${rest.map((r) => r[0] + '.').join(' ')}`;
  }

  protected toggle(id: string): void {
    this.shortlist.update((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  protected reset(): void {
    this.query.set('');
    this.sector.set('');
    this.nationality.set('');
    this.availability.set('');
  }
}
