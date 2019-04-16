
import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     data: Object;
   loading: boolean;
   o :Observable<Object>;
  articles:Article[];   // <-- component property

  constructor(public http: HttpClient){
      this.makeRequest();
    /*this.articles = [
      new Article('Angular 2', 'ciao a tutti', 3 , 2),
      new Article('Fullstack', 'ciao a tutti belli', 2 , 1),
      new Article('Angular Homepage', 'ciao a tutti bellissimi', 1 , 5),
    ];*/


  }


addArticle(title: HTMLInputElement, body: HTMLInputElement , userId:HTMLInputElement  , id: HTMLInputElement ): boolean {
    console.log(`Adding article title: ${title.value} and body: ${body.value} and and id : ${id.value} userId: ${userId.value}`);
    this.articles.push(new Article(title.value, body.value, parseInt(userId.value), parseInt(id.value) ,  0));
    title.value = '';
    body.value = '';
    userId.value = '';
    id.value= '';
    return false;
  }


sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Article[]>('https://jsonplaceholder.typicode.com/posts');
     this.o.subscribe(this.getData);
   }
   getData = (d : Article[]) =>
   {
     this.data = new Object(d);
     this.articles = d;
     this.loading = false;
     console.log(this.articles[1]);
   }

}
