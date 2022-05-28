class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, _state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state = this._state * 1.5;

    if (this._state > 100) {
      this._state = 100;
    }
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, _state, type) {
    super(name, releaseDate, pagesCount, _state);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, _state, type) {
    super(name, releaseDate, pagesCount, _state);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, _state, type) {
    super(author, name, releaseDate, pagesCount, _state);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, _state, type) {
    super(author, name, releaseDate, pagesCount, _state);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, _state, type) {
    super(author, name, releaseDate, pagesCount, _state);
    this.type = 'detective';
  }
}

// Задача 2

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let finder = this.books.find(item => item[type] === value);
    if (finder !== undefined) {
      return finder;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let finder = this.findBookBy('name', bookName);
    if (finder === undefined) {
      return null
    } else {
      this.books = this.books.filter((element) => element.name !== bookName);
      return finder;
    }
  }

}



