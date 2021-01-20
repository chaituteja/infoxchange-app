import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
