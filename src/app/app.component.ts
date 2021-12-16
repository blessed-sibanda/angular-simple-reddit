import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simple Reddit';

  constructor() {}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    return false;
  }
}
