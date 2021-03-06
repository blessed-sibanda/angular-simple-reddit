import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article | undefined;

  ngOnInit(): void {}

  voteUp(): boolean {
    this.article?.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article?.voteDown();
    return false;
  }
}
