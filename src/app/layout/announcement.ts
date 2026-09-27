import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../shared/icon';

@Component({
  selector: 'cm-announcement',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    @if (open()) {
      <div class="bg-wine text-white">
        <div class="container-page flex items-center justify-center gap-3 py-2.5 text-body-sm">
          <cm-icon name="spark" [size]="16" class="text-gold" />
          <p class="truncate">
            <span class="hidden sm:inline">Now mobilising 400+ workers for Q4 giga-project packages.</span>
            <span class="sm:hidden">Q4 mobilisation now open.</span>
          </p>
          <a routerLink="/contact" class="shrink-0 rounded-full border border-white/40 px-3 py-0.5 text-caption hover:bg-white/10">
            Reserve a crew
          </a>
          <button type="button" (click)="open.set(false)" class="ml-1 shrink-0 opacity-70 hover:opacity-100" aria-label="Dismiss announcement">
            <cm-icon name="close" [size]="16" />
          </button>
        </div>
      </div>
    }
  `,
})
export class Announcement {
  protected readonly open = signal(true);
}
