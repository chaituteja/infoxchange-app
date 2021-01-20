import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';

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

  render() {
    return (
      <div className="App tc pa4">
        <h1>Book List</h1>
        <div className='container'>
          <div className='row'>
            <CardList books={this.state.books}
              bookData={this.state.bookData}
              />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
