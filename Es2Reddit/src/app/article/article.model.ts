
export class Article {
  title: string;
  body:string;
  id: number;
  userId: number;
  votes: number;

  constructor(title: string, body: string, userId:number , id:number ,  votes?: number) {
    this.title = title;
    this.body = body;
    this.userId = userId;
    this.id = id;
    this.votes = votes || 0;
  }

   voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly

// domain() is a utility function that extracts the domain from a URL
/*domain(): string {
  try {// e.g. http://foo.com/path/to/bar
   const domainAndPath: string = this.link.split('//')[1]; // e.g. foo.com/path/to/bar
   return domainAndPath.split('/')[0];
  }
  catch (err) {
    return null;
  }
}*/



}


