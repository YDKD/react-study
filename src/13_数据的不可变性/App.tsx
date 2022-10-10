import React, { Component, PureComponent } from "react";

interface IState {
  books: Array<{
    id: number;
    name: string;
  }>;
}

export class App extends PureComponent<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      books: [
        { id: 1, name: "《React.js 小书》" },
        { id: 2, name: "《Vue.js 小书》" },
        { id: 3, name: "《Angular.js 小书》" },
      ],
    };
  }

  addBook() {
    const newBook = { id: 4, name: "《Node.js 小书》" };
    this.state.books.push(newBook)
    this.setState({
        books: this.state.books
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <ul>
          {books.map((book) => {
            return <li key={book.id}>{book.name}</li>;
          })}
        </ul>
        <button onClick={() => this.addBook()}>+1</button>
      </div>
    );
  }
}

export default App;
