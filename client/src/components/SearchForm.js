import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchForm() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyCbRCw5-xnZwZLcCzEouao5J4ManBQDyyY");
  
    function handleChange(event) {
      const book = event.target.value;
      setBook(book);
  
    };
  
    function handleSubmit(event) {
        console.log("handling submit");
      event.preventDefault();
  
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey)
        .then(data => {
          setResult(data.data.items)
        })
  
    };

    function handleSave(event) {
        event.preventDefault();
        console.log(event.target.id);
        const index = event.target.id;
        const newBook={
            id: result[index].id,
            title: result[index].volumeInfo.title,
            authors: result[index].volumeInfo.authors[0],
            description: result[index].volumeInfo.description,
            image: result[index].volumeInfo.imageLinks.thumbnail,
            link: result[index].volumeInfo.infoLink,

        }
    
        axios.post("/api/book", newBook)
          .then(data => {
            console.log(data);
          })
      };
  
    return (
        <div className="jumbotron">
        <h1 className="display-2 text-center"> Google Books Search</h1>
        <form >
          <div className="form-group">
            <input
  
              type="text" onChange={handleChange}
              className="form-control mt-10"
              placeholder="Search For A Book"
              autoComplete="off">
  
            </input>
          <Button style={{float:"right"}} onClick={handleSubmit} variant="primary">Search</Button>
          </div>
        </form>
  
        {result.map((book, index) => (
          <Table responsive key={book.id}>
            <tbody>
  
              <tr>
                <td>
                <Button id={index} variant="info" size="sm" onClick={handleSave}> Save Book </Button>
                  <h4>Title 
                  </h4>
                  {book.volumeInfo.title}
                </td>
              </tr>
              <tr>
                <h4>Author</h4>
                {book.volumeInfo.authors}
              </tr>
              <tr>
                <h4>Description</h4>
                {book.volumeInfo.description}
              </tr>
              <tr>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}></img>
              </tr>
              <tr>Link:
              <a href={book.volumeInfo.infoLink}>
                  {book.volumeInfo.infoLink}{' '}
                </a>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    )
  };
  
  export default SearchForm;
