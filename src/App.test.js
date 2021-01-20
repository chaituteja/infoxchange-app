import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Card from './components/Card';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("renders heading", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Book List</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

describe("test Card component", () => {

  const books = [
    {
      'id':1,
      'bookName': "Test Book",
      'isbn': 1234,
      'author': "Dave",
    }
  ];

  it("accepts Book props", () => {
    const wrapper = mount(<Card books={books} />);
    expect(wrapper.props().books).toEqual(books);
  });

  it("contains book information", () => {
    const wrapper = mount(<Card id={books[0].id} bookName={books[0].bookName} isbn={books[0].isbn} author={books[0].author} />);
    const heading = wrapper.find("h5").text();
    expect(heading).toEqual('Test Book');
    wrapper.find("h5").simulate('click');
    const book_isbn = wrapper.find(".isbn").text();
    expect(book_isbn).toEqual("ISBN : 1234");
    const book_author = wrapper.find(".author").text();
    expect(book_author).toEqual("Author : Dave");
  });
});
