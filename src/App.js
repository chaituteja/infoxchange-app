import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';
import 'tachyons';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';
import CreateBook from './components/CreateBook';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loading: false,
      bookData: {
        title: "",
        author: "",
        isbn:""
      }
    };
    this.getBooks = this.getBooks.bind(this);
    this.getBook = this.getBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.createBook = this.createBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Get list of book when component is mounted
  componentDidMount() {
    this.getBooks();
  }

  // Fetch call to get All books
  getBooks() {
    fetch("http://localhost:5000/books")
    .then(resp => resp.json())
    .then(data => {
        this.setState({ books: data, loading: false})
    })
    .catch(function(error) {
        console.log(error);
    });
  }

  // Fetch call to get a particular book based on id
  getBook(event, id) {
    fetch("http://localhost:5000/books/" + id)
      .then(res => res.json())
      .then(result => {
        this.setState({
          bookData: {
            title: result.title,
            author: result.author ? result.author : "",
            isbn: result.isbn
          }
        });
      });
    }

  // Function responsible for handling input fields
  handleChange(event) {
    var title = this.state.bookData.title;
    var author = this.state.bookData.author;
    var isbn = this.state.bookData.isbn;

    if (event.target.name === "title") {
      title = event.target.value;
    } else if (event.target.name === "author") {
      author = event.target.value;
    } 
    else {
      isbn = event.target.value;
    }

    this.setState({
      bookData: {
        title: title,
        author: author,
        isbn: isbn
      }
    });
  }

   // Updates information about the book based on id
   updateBook(event, id) {
    fetch("http://localhost:5000/books/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.bookData)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          bookData: {
            title: "",
            author: "",
            isbn:""
          }
        });
        this.getBooks();
      });
  }

    // Create a new book  based on the informaion provided
    createBook(event) {
      document.getElementById("create-book-form").reset();
      fetch("http://localhost:5000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.bookData)
        })
        .then(result => {
          this.setState({
            bookData: {
              title: "",
              author: "",
              isbn:""
            }
          });
          this.getBooks();
        });
    }

  render() {
    return (
      <div className="App tc pa4">
        <h1>Book List</h1>
        <div className='container'>
          <div className='row'>
            <CreateBook 
              bookData={this.state.bookData}
              createBook={this.createBook}
              handleChange={this.handleChange} />

            <CardList books={this.state.books}
              bookData={this.state.bookData}
              updateBook={this.updateBook}
              getBook={this.getBook}
              handleChange={this.handleChange} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
