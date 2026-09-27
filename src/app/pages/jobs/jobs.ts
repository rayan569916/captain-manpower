import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { JOBS, SECTORS, sectorName } from '../../core/data';
import { Icon } from '../../shared/icon';
import { PageIntro } from '../../shared/page-intro';

@Component({
  selector: 'cm-jobs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, PageIntro],
  template: `
    <cm-page-intro
      eyebrow="Open jobs"
      title="Work on the Kingdom's biggest projects."
      lede="We never charge workers recruitment fees. Visa, flight, accommodation and medical insurance are covered by the employer."
    />

    <section class="container-page pb-24">
      <div class="flex flex-wrap items-center gap-2">
        <button type="button" (click)="city.set('')" class="rounded-full border px-4 py-1.5 text-body-sm" [class]="city() === '' ? 'border-ink bg-lilac' : 'border-mist bg-paper'">All cities</button>
        @for (c of cities; track c) {
          <button type="button" (click)="city.set(c)" class="rounded-full border px-4 py-1.5 text-body-sm" [class]="city() === c ? 'border-ink bg-lilac' : 'border-mist bg-paper'">{{ c }}</button>
        }
        <select class="field ml-auto w-auto" [value]="sector()" (change)="sector.set($any($event.target).value)" aria-label="Sector">
          <option value="">All sectors</option>
          @for (s of sectors; track s.id) {
            <option [value]="s.id">{{ s.short }}</option>
          }
        </select>
      </div>

      <div class="mt-6 overflow-hidden rounded-2xl border border-mist bg-paper">
        @for (j of results(); track j.id; let last = $last) {
          <article [class.border-b]="!last" class="border-mist">
            <div class="grid gap-4 p-5 md:grid-cols-[1.5fr_1fr_1fr_auto] md:items-center md:p-6">
              <div>
                <p class="text-caption text-stone">{{ j.id }} · {{ sectorName(j.sector) }} · {{ j.postedDaysAgo }}d ago</p>
                <h2 class="mt-1 text-label font-emph">{{ j.title }}</h2>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  @for (p of j.perks; track p) {
                    <span class="rounded-full bg-parchment px-2.5 py-0.5 text-caption">{{ p }}</span>
                  }
                </div>
              </div>
              <p class="flex items-center gap-2 text-body"><cm-icon name="pin" [size]="18" class="text-stone" />{{ j.city }}</p>
              <div class="num text-body">
                <p>{{ j.salary }}<span class="text-stone"> /mo</span></p>
                <p class="text-body-sm text-stone">{{ j.headcount }} positions · {{ j.contract }}</p>
              </div>
              <button type="button" class="btn-secondary justify-self-start md:justify-self-end" (click)="openApply(j.id)">
                {{ applying() === j.id ? 'Close' : 'Apply' }}
              </button>
            </div>

            @if (applying() === j.id) {
              <div class="border-t border-mist bg-parchment/60 p-5 md:p-6">
                @if (submitted()) {
                  <p class="flex items-center gap-2 text-body"><cm-icon name="check" class="text-violet" />Thanks, {{ name() }}. Our recruiter will call you on {{ phone() }} within 2 working days.</p>
                } @else {
                  <form class="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]" (submit)="submit($event)">
                    <input class="field" name="name" placeholder="Full name" required [value]="name()" (input)="name.set($any($event.target).value)" />
                    <input class="field" name="phone" type="tel" placeholder="Phone / WhatsApp" required [value]="phone()" (input)="phone.set($any($event.target).value)" />
                    <select class="field" name="location" required [value]="location()" (change)="location.set($any($event.target).value)">
                      <option value="" disabled>Current location</option>
                      <option value="Inside Saudi Arabia">Inside Saudi Arabia</option>
                      <option value="Outside Saudi Arabia">Outside Saudi Arabia</option>
                    </select>
                    <button class="btn-primary justify-center disabled:opacity-40" type="submit" [disabled]="!valid()">Send</button>
                  </form>
                }
              </div>
            }
          </article>
        } @empty {
          <p class="p-10 text-center text-body text-stone">No openings for that filter right now — check back next week.</p>
        }
      </div>
    </section>
  `,
})
export class Jobs {
  protected readonly sectors = SECTORS;
  protected readonly sectorName = sectorName;
  protected readonly cities = [...new Set(JOBS.map((j) => j.city))];

  protected readonly city = signal('');
  protected readonly sector = signal('');
  protected readonly applying = signal<string | null>(null);
  protected readonly submitted = signal(false);
  protected readonly name = signal('');
  protected readonly phone = signal('');
  protected readonly location = signal('');
  protected readonly valid = computed(() => !!this.name().trim() && this.phone().trim().length >= 7 && !!this.location());

  protected readonly results = computed(() =>
    JOBS.filter((j) => (!this.city() || j.city === this.city()) && (!this.sector() || j.sector === this.sector())),
  );

  protected openApply(id: string): void {
    this.applying.update((cur) => (cur === id ? null : id));
    this.submitted.set(false);
    this.name.set('');
    this.phone.set('');
    this.location.set('');
  }

  protected submit(event: Event): void {
    event.preventDefault();
    if (!this.valid()) return;
    // Dummy: wire to your API / ATS here.
    this.submitted.set(true);
  }
}
