import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';


function MyComponent(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading]= useState([]);


    const containerRef = useRef(null);

    useEffect(() => {
        fetchAllBooks();

    })

    const fetchAllBooks = () =>{
        setLoading(true);
        axios
            .get('https://localhost:7141/Books')
            .then((response)=>{
                setBooks(response.data || []);

            })
            .catch((error)=>{
                console.error('Erroro fetching',error)
            })
    }
    return (
        <div style={styles.container}>
    
          <main style={styles.main}>
            {/* Your search form and item details code... */}
            <div style={styles.allProducts}>
              <h2>All Books</h2>
             
              <ul style={styles.productList}>
                {books.map((book) => (
                  <li key={book.id} style={styles.productItem}>
                    <h3 style={styles.productName}>{book.id}</h3>
                    <div style={styles.productDetails}>
                     
                      <div style={styles.productProperties}>
                        <p>
                          <strong>ID:</strong> {book.id}
                        </p>
                        <p>
                          <strong>Name:</strong> {book.name}
                        </p>
                        <p>
                          <strong>Description:</strong> {book.author}
                        </p>
                       
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      );
    }
    
    const styles = {
      container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
      },
      main: {
        backgroundColor: '#f7f7f7',
        padding: '20px',
      },
      allProducts: {
        margin: '20px 0',
      },
      productList: {
        listStyle: 'none',
        padding: '0',
      },
      productItem: {
        border: '1px solid #ccc',
        margin: '10px 0',
        padding: '10px',
      },
      productName: {
        fontSize: '20px',
        marginBottom: '10px',
      },
      productDetails: {
        display: 'flex',
        alignItems: 'center',
      },
      productImage: {
        width: '100px',
        height: '100px',
        marginRight: '20px',
      },
      productProperties: {
        flex: '1',
      },
      paginationControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      },
    };
    
    export default MyComponent;
    