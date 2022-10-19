import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './style.css'

interface IBookItem {
  id: number;
  name: string;
}

interface IState {
  books: Array<IBookItem>;
}

export class TransitionApp extends PureComponent<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      books: [
        { id: 1, name: "《React实战》" },
        { id: 2, name: "《React进阶》" },
        { id: 3, name: "《React全栈》" },
      ],
    };
  }


  addBook() {
    const newBook = [...this.state.books]
    newBook.push({
        id: new Date().getTime(),
        name: '《VueJs设计与实现》'
    })

    this.setState({
        books: newBook
    })
  }

  removeBook(id: number) {
    const newBook = [...this.state.books].filter((book) => book.id != id)
    this.setState({
        books: newBook
    })
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <TransitionGroup component={"ul"}>
          {books.map((item) => {
            return (
              <CSSTransition key={item.id} timeout={800} classNames="ydkd">
                <li>
                    <span>{item.name}</span>
                    <button onClick={() => this.removeBook(item.id)}>removeBook</button>
                </li>
               
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={() => this.addBook()}>Add Book</button>
      </div>
    );
  }
}

export default TransitionApp;
