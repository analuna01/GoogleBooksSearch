import React, { useState } from "react";
import axios from "axios";
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
// import Button from 'react-bootstrap/Button';


function SavedBooks() {
    const [book, setBook] = useState([]);
    const [result, setResult] = useState([]);

    axios.get('/api/books', book)
        .then(data => {
            setResult(data.data)
        });


    return (
        <div className="jumbotron">
            <h1 className="display-2 text-center">Saved Books</h1>

            {result.map((book, index) => (
                <Table responsive key={book.id}>
                    <tbody>

                        <tr>
                            <td>
                            {/* <Button id={index} variant="info" size="sm" onClick={handleDelete}> Delete Book </Button> */}
                                <h4>Title
                  </h4>
                                {book.title}
                            </td>
                        </tr>
                        <tr>
                            <h4>Author</h4>
                            {book.authors}
                        </tr>
                        <tr>
                            <h4>Description</h4>
                            {book.description}
                        </tr>
                        <tr>
                            <img src={book.image} alt={book.title}></img>
                        </tr>
                        <tr>Link:
              <a href={book.link}>
                                {book.link}{' '}
                            </a>
                        </tr>
                    </tbody>
                </Table>
            ))}
        </div>

    );
}

export default SavedBooks;