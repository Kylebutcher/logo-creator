// TODO: Debug the code so that Comment shows the text when its printMetaData() function is run.

class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }
}

class BlogPost extends ForumItem {
  constructor(authorName, title, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, createdOn, text) {
    super(authorName, createdOn);
    this.text = text;
  }

  // We use method overriding to change the value of printMetaData for only instances of the Comment class constructor.
  printMetaData() {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} with ${this.text}`
    );
  }
}

const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  '12/19/2021'
);

const newComment = new Comment(
  'Jane Doe',
  '12/20/2021',
  'This post is really awesome!',
);

newPost.printMetaData();
newComment.printMetaData();
