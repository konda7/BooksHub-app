import React from 'react'

const booksListContext = React.createContext({
  booksList: [],
  addNewBook: () => {},
})

export default booksListContext
