import './App.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NewBook from './components/NewBook'
import booksListContext from './context/booksListContext'

import initialBooksList from './booksList'

class App extends Component {
  state = {
    booksList: initialBooksList,
  }

  addNewBook = (title, authorName, imageUrl) => {
    console.log(title, authorName, imageUrl)
    const newBook = {
      id: uuidv4(),
      title,
      authors: authorName,
      imageUrl,
    }

    this.setState(prevState => ({
      booksList: [newBook, ...prevState.booksList],
    }))
  }

  render() {
    const {booksList} = this.state

    return (
      <booksListContext.Provider
        value={{
          booksList,
          addNewBook: this.addNewBook,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} booksList={booksList} />
          <Route exact path="/add-new-book" component={NewBook} />
        </Switch>
      </booksListContext.Provider>
    )
  }
}

export default App
