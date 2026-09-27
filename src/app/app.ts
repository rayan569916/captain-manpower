import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Announcement } from './layout/announcement';
import { Header } from './layout/header';
import { Footer } from './layout/footer';

@Component({
  selector: 'cm-root',
  imports: [RouterOutlet, Announcement, Header, Footer],
  template: `
    <cm-announcement />
    <cm-header />
    <main>
      <router-outlet />
    </main>
    <cm-footer />
  `,
})
export class App {}
