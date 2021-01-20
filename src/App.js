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
