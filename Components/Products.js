import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function MyComponent() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [allProducts, setAllProducts] = useState([]);
  let lastPage = Math.ceil(allProducts.length / itemsPerPage);

  useEffect(() => {
    fetchAllProducts();
  }, [pageNumber, itemsPerPage]);

  useEffect(() => {
    getallproducts();
  }, []);

  const fetchAllProducts = () => {
    axios
      .get('https://localhost:7141/Allproduct', {
        params: {
          pageNumber: pageNumber,
          itemsPerPage: itemsPerPage,
        },
      })
      .then((response) => {
        setProducts(response.data || []);
        console.log(products)
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  const getallproducts = () => {
    axios
      .get('https://localhost:7141/product')
      .then((response) => {
        setAllProducts(response.data || []);
        console.log(allProducts.length);
      })
      .catch((error) => {
        console.error('Error fetching', error);
      });
  };

  const getImageUrl = (filename) => {
    return `https://localhost:7141/Photos/${filename}`;
  };

  const formatDate = (date) => {
    return moment(date).format('MMM D, YYYY');
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const moveToFirstPage = () => {
    if (pageNumber > 1) {
      setPageNumber(1);
    }
  };

  const moveToLastPage = () => {
    getallproducts();
    lastPage = Math.ceil(allProducts.length / itemsPerPage);
    console.log(allProducts.length);
    if (pageNumber < lastPage) {
      setPageNumber(lastPage);
    }
  };

  return (
    <div style={styles.container}>

      <main style={styles.main}>
        {/* Your search form and item details code... */}
        <div style={styles.allProducts}>
          <h2>All Products</h2>
          <label htmlFor="itemsPerPage">Items per page:</label>
          <input
            id="itemsPerPage"
            type="number"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
            min="1"
          />
          <ul style={styles.productList}>
            {products.map((product) => (
              <li key={product.id} style={styles.productItem}>
                <h3 style={styles.productName}>{product.id}</h3>
                <div style={styles.productDetails}>
                  <img
                    src={getImageUrl(product.imageData)}
                    alt="Product Image"
                    style={styles.productImage}
                  />
                  <div style={styles.productProperties}>
                    <p>
                      <strong>ID:</strong> {product.id}
                    </p>
                    <p>
                      <strong>Name:</strong> {product.names}
                    </p>
                    <p>
                      <strong>Description:</strong> {product.descriptions}
                    </p>
                    <p>
                      <strong>Price:</strong> {product.price}
                    </p>
                    <p>
                      <strong>Available:</strong> {product.isAvalable}
                    </p>
                    <p>
                      <strong>Expiry Date:</strong> {formatDate(product.expirDate)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.paginationControls}>
          <button onClick={moveToFirstPage} disabled={pageNumber === 1}>
            1
          </button>
          <button onClick={goToPreviousPage} disabled={pageNumber === 1}>
            Previous
          </button>
          <span>Page {pageNumber}</span>
          <button onClick={goToNextPage} disabled={products.length < itemsPerPage}>
            Next
          </button>
          <button onClick={moveToLastPage} disabled={pageNumber === lastPage}>
            Last Page
          </button>
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
