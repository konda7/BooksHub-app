import './index.css'

import {Link} from 'react-router-dom'

import booksListContext from '../../context/booksListContext'
import NavigationBar from '../NavigationBar'

// console.log(booksList)

const Home = () => (
  <booksListContext.Consumer>
    {value => {
      const {booksList} = value

      const renderBooksList = () => (
        <ul className="books-list-container">
          {booksList.map(eachBook => (
            <li className="book-card" key={eachBook.id}>
              <img
                src={eachBook.imageUrl}
                alt={eachBook.title}
                className="book-img"
              />
              <p className="title">{eachBook.title}</p>
              <p className="author">{eachBook.authors}</p>
            </li>
          ))}
        </ul>
      )

      return (
        <>
          <NavigationBar />
          <div className="home-app-container">
            <div className="heading-container">
              <h1 className="books-heading">All Books</h1>
              <Link to="add-new-book">
                <button type="button" className="add-new-book-button">
                  + New Book
                </button>
              </Link>
            </div>
            {renderBooksList()}
          </div>
        </>
      )
    }}
  </booksListContext.Consumer>
)

export default Home
