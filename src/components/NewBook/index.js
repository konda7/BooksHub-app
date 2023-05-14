import './index.css'

import {Component} from 'react'

import NavigationBar from '../NavigationBar'
import booksListContext from '../../context/booksListContext'

class NewBook extends Component {
  state = {
    title: '',
    authorName: '',
    imageUrl: '',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  renderTitleField = () => {
    const {title} = this.state

    return (
      <div className="input-container">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          id="title"
          defaultValue={title}
          onChange={this.onChangeTitle}
        />
      </div>
    )
  }

  onChangeAuthorName = event => {
    this.setState({authorName: event.target.value})
  }

  renderAuthorField = () => {
    const {authorName} = this.state

    return (
      <div className="input-container">
        <label htmlFor="author" className="label">
          Author
        </label>
        <input
          type="text"
          className="input"
          id="author"
          defaultValue={authorName}
          onChange={this.onChangeAuthorName}
        />
      </div>
    )
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  renderImageField = () => {
    const {imageUrl} = this.state

    return (
      <div className="input-container">
        <label htmlFor="imageUrl" className="label">
          Image URL
        </label>
        <input
          type="text"
          className="input"
          id="imageUrl"
          value={imageUrl}
          onChange={this.onChangeImageUrl}
        />
      </div>
    )
  }

  render() {
    return (
      <booksListContext.Consumer>
        {value => {
          const {addNewBook} = value

          const onSubmitForm = event => {
            const {title, authorName, imageUrl} = this.state

            event.preventDefault()
            addNewBook(title, authorName, imageUrl)

            const {history} = this.props
            history.replace('/')
          }

          return (
            <>
              <NavigationBar />
              <div className="add-book-app-container">
                <form className="form" onSubmit={onSubmitForm}>
                  <img
                    src="https://res.cloudinary.com/dvhrrtgpt/image/upload/v1683965133/7422b6cf7e954698ba61a3ad05574d83_3_gugg3a.png"
                    alt="book hub logo"
                    className="books-hub-logo-form"
                  />
                  {this.renderTitleField()}
                  {this.renderAuthorField()}
                  {this.renderImageField()}
                  <button type="submit" className="submit-form-btn">
                    Submit
                  </button>
                </form>
              </div>
            </>
          )
        }}
      </booksListContext.Consumer>
    )
  }
}

export default NewBook
