import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPLIANCE, PROCESS, SECTORS, STATS } from '../../core/data';
import { SectorId } from '../../core/models';
import { Icon } from '../../shared/icon';
import { HeroScene } from './hero-scene';

@Component({
  selector: 'cm-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DecimalPipe, Icon, HeroScene],
  templateUrl: './home.html',
})
export class Home {
  protected readonly sectors = SECTORS;
  protected readonly stats = STATS;
  protected readonly process = PROCESS;
  protected readonly compliance = COMPLIANCE;

  /** The first four sectors drive the tab strip; supervision is listed on the services page. */
  protected readonly tabSectors = SECTORS.slice(0, 4);
  protected readonly activeTab = signal<SectorId>('construction');
  protected readonly active = computed(() => SECTORS.find((s) => s.id === this.activeTab())!);
}
