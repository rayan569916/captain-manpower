import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { COMPANY, SECTORS } from '../../core/data';
import { Icon } from '../../shared/icon';
import { PageIntro } from '../../shared/page-intro';

interface RequestForm {
  company: string;
  contact: string;
  email: string;
  phone: string;
  sector: string;
  trades: string;
  headcount: number | null;
  startDate: string;
  duration: string;
  city: string;
  notes: string;
}

const EMPTY: RequestForm = {
  company: '',
  contact: '',
  email: '',
  phone: '',
  sector: '',
  trades: '',
  headcount: null,
  startDate: '',
  duration: '6 months',
  city: '',
  notes: '',
};

@Component({
  selector: 'cm-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, PageIntro],
  template: `
    <cm-page-intro
      eyebrow="Request manpower"
      title="Tell us what the site needs."
      lede="Share the basics and a named account manager will send rates and candidate profiles within one working day."
    />

    <section class="container-page grid gap-8 pb-24 lg:grid-cols-[1.6fr_1fr]">
      <div class="card p-6 md:p-8">
        @if (sent()) {
          <div class="py-10 text-center">
            <span class="mx-auto grid size-12 place-items-center rounded-full bg-lilac text-violet"><cm-icon name="check" [size]="24" /></span>
            <h2 class="mt-6 text-subheading">Request received</h2>
            <p class="num mx-auto mt-2 max-w-md text-body text-stone">
              Reference MR-{{ ref }}. We'll reply to {{ form().email }} with rates for {{ form().headcount }} {{ form().trades || 'workers' }}.
            </p>
            <button type="button" class="link mt-6 text-body" (click)="reset()">Send another request</button>
          </div>
        } @else {
          <form class="grid gap-5 sm:grid-cols-2" (submit)="submit($event)" novalidate>
            <h2 class="text-label font-bold sm:col-span-2">Your company</h2>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Company name *</span>
              <input class="field" [value]="form().company" (input)="set('company', $event)" autocomplete="organization" />
            </label>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Contact person *</span>
              <input class="field" [value]="form().contact" (input)="set('contact', $event)" autocomplete="name" />
            </label>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Work email *</span>
              <input class="field" type="email" [value]="form().email" (input)="set('email', $event)" autocomplete="email" />
            </label>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Mobile</span>
              <input class="field" type="tel" [value]="form().phone" (input)="set('phone', $event)" placeholder="+966" autocomplete="tel" />
            </label>

            <h2 class="mt-4 text-label font-bold sm:col-span-2">Requirement</h2>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Sector *</span>
              <select class="field" [value]="form().sector" (change)="set('sector', $event)">
                <option value="">Select a sector</option>
                @for (s of sectors; track s.id) {
                  <option [value]="s.id">{{ s.name }}</option>
                }
              </select>
            </label>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Headcount *</span>
              <input class="field num" type="number" min="1" [value]="form().headcount ?? ''" (input)="set('headcount', $event)" />
            </label>
            <label class="grid gap-1.5 sm:col-span-2">
              <span class="text-body-sm">Trades needed</span>
              <input class="field" [value]="form().trades" (input)="set('trades', $event)" [placeholder]="tradeHint()" />
            </label>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Site city</span>
              <input class="field" [value]="form().city" (input)="set('city', $event)" placeholder="e.g. Riyadh, NEOM" />
            </label>
            <label class="grid gap-1.5">
              <span class="text-body-sm">Start date</span>
              <input class="field" type="date" [value]="form().startDate" (input)="set('startDate', $event)" />
            </label>
            <fieldset class="grid gap-1.5 sm:col-span-2">
              <legend class="mb-1.5 text-body-sm">Duration</legend>
              <div class="flex flex-wrap gap-2">
                @for (d of durations; track d) {
                  <button type="button" (click)="patch({ duration: d })" class="rounded-lg border px-3 py-1.5 text-body-sm" [class]="form().duration === d ? 'border-ink bg-lilac' : 'border-mist bg-paper'">{{ d }}</button>
                }
              </div>
            </fieldset>
            <label class="grid gap-1.5 sm:col-span-2">
              <span class="text-body-sm">Notes</span>
              <textarea class="field min-h-28" [value]="form().notes" (input)="set('notes', $event)" placeholder="Accommodation, shift pattern, certifications required…"></textarea>
            </label>

            @if (attempted() && !valid()) {
              <p class="text-body-sm text-wine sm:col-span-2">Please fill in the fields marked * with a valid email and a headcount of at least 1.</p>
            }
            <div class="flex items-center justify-between gap-4 sm:col-span-2">
              <p class="text-caption text-stone">We reply within one working day.</p>
              <button class="btn-primary" type="submit">Send request <cm-icon name="arrow" [size]="18" /></button>
            </div>
          </form>
        }
      </div>

      <aside class="flex flex-col gap-4">
        <div class="rounded-2xl bg-wine p-6 text-white">
          <img src="logo.png" alt="" width="48" height="48" />
          <p class="mt-5 text-label">Prefer to talk?</p>
          <p class="mt-1 text-body text-white/70">Sun–Thu, 8:00–18:00 AST</p>
          <ul class="mt-6 space-y-3 text-body">
            <li class="flex items-center gap-3"><cm-icon name="phone" [size]="18" class="text-gold" />{{ company.phone }}</li>
            <li class="flex items-center gap-3"><cm-icon name="mail" [size]="18" class="text-gold" />{{ company.email }}</li>
            <li class="flex items-center gap-3"><cm-icon name="pin" [size]="18" class="text-gold" />King Fahd Road, Riyadh</li>
          </ul>
        </div>
        @if (shortlist()) {
          <div class="card p-6">
            <p class="text-caption text-stone">Shortlisted profiles</p>
            <p class="num mt-1 text-body">{{ shortlist() }}</p>
            <p class="mt-2 text-body-sm text-stone">These will be attached to your request.</p>
          </div>
        }
        <div class="card p-6">
          <p class="text-label font-bold">What happens next</p>
          <ol class="mt-3 space-y-2 text-body text-stone">
            <li>1. Account manager confirms scope</li>
            <li>2. Rate card & profiles in 24h</li>
            <li>3. Interviews / trade-test videos</li>
            <li>4. Contract & mobilisation</li>
          </ol>
        </div>
      </aside>
    </section>
  `,
})
export class Contact {
  /** Bound from ?sector= and ?shortlist= via withComponentInputBinding(). */
  readonly sector = input<string>();
  readonly shortlist = input<string>();

  protected readonly company = COMPANY;
  protected readonly sectors = SECTORS;
  protected readonly durations = ['1 month', '3 months', '6 months', '1 year', '2 years+'];

  protected readonly form = signal<RequestForm>({ ...EMPTY });
  protected readonly attempted = signal(false);
  protected readonly sent = signal(false);
  protected ref = '';

  protected readonly valid = computed(() => {
    const f = this.form();
    return !!f.company.trim() && !!f.contact.trim() && /\S+@\S+\.\S+/.test(f.email) && !!f.sector && (f.headcount ?? 0) >= 1;
  });

  protected readonly tradeHint = computed(() => {
    const s = SECTORS.find((x) => x.id === this.form().sector);
    return s ? `e.g. ${s.roles.slice(0, 3).join(', ')}` : 'e.g. 20 steel fixers, 10 masons';
  });

  constructor() {
    effect(() => {
      const s = this.sector();
      if (s && SECTORS.some((x) => x.id === s)) this.patch({ sector: s });
    });
  }

  protected patch(p: Partial<RequestForm>): void {
    this.form.update((f) => ({ ...f, ...p }));
  }

  protected set(key: keyof RequestForm, event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    this.patch({ [key]: key === 'headcount' ? (raw === '' ? null : Number(raw)) : raw } as Partial<RequestForm>);
  }

  protected submit(event: Event): void {
    event.preventDefault();
    this.attempted.set(true);
    if (!this.valid()) return;
    // Dummy: POST this.form() to your CRM / email service here.
    this.ref = String(Math.floor(10000 + Math.random() * 89999));
    this.sent.set(true);
  }

  protected reset(): void {
    this.form.set({ ...EMPTY });
    this.attempted.set(false);
    this.sent.set(false);
  }
}
