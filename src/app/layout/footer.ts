import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, SECTORS } from '../core/data';

@Component({
  selector: 'cm-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <footer class="bg-wine text-white">
      <div class="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img src="logo.png" alt="Captain Manpower" width="64" height="64" />
          <p class="mt-5 max-w-xs text-body text-white/70">{{ company.tagline }} Vetted workforce for projects across the Kingdom.</p>
          <p class="mt-6 text-body-sm text-white/50">CR {{ company.crNumber }} · {{ company.licence }}</p>
        </div>

        <div>
          <h2 class="text-body-sm font-bold">Sectors</h2>
          <ul class="mt-4 space-y-3 text-body-sm text-white/70">
            @for (s of sectors; track s.id) {
              <li><a routerLink="/services" [fragment]="s.id" class="hover:text-white">{{ s.name }}</a></li>
            }
          </ul>
        </div>

        <div>
          <h2 class="text-body-sm font-bold">Company</h2>
          <ul class="mt-4 space-y-3 text-body-sm text-white/70">
            <li><a routerLink="/about" class="hover:text-white">About us</a></li>
            <li><a routerLink="/talent" class="hover:text-white">Talent pool</a></li>
            <li><a routerLink="/jobs" class="hover:text-white">Open jobs</a></li>
            <li><a routerLink="/contact" class="hover:text-white">Request manpower</a></li>
          </ul>
        </div>

        <!-- <div>
          <h2 class="text-body-sm font-bold">Contact</h2>
          <ul class="mt-4 space-y-3 text-body-sm text-white/70">
            <li>{{ company.phone }}</li>
            <li>WhatsApp {{ company.whatsapp }}</li>
            <li><a [href]="'mailto:' + company.email" class="hover:text-white">{{ company.email }}</a></li>
            <li>King Fahd Road, Riyadh</li>
          </ul>
        </div> -->
      </div>
      <div class="border-t border-white/10">
        <div class="container-page flex flex-col gap-2 py-6 text-caption text-white/50 sm:flex-row sm:justify-between">
          <p>© {{ year }} {{ company.name }} · Part of {{ company.parent }}</p>
          <p>Privacy · Terms · Worker welfare policy</p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly company = COMPANY;
  protected readonly sectors = SECTORS;
  protected readonly year = new Date().getFullYear();
}
