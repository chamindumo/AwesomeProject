import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';

function MyComponent() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    fetchAllProducts();
  }, [pageNumber, itemsPerPage]);

  useEffect(() => {
    // Add event listener to detect scrolling
    const handleScroll = () => {
      if (
        containerRef.current &&
        window.innerHeight + window.scrollY >= containerRef.current.offsetHeight &&
        !loading
      ) {
        // Load more products when scrolling to the bottom
        setPageNumber(pageNumber + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber, loading]);

  const fetchAllProducts = () => {
    if (pageNumber === 1) {
      // Initial loading, reset products
      setProducts([]);
    }

    setLoading(true);
    axios
      .get('https://localhost:7141/Allproduct', {
        params: {
          pageNumber: pageNumber,
          itemsPerPage: itemsPerPage,
        },
      })
      .then((response) => {
        setProducts((prevProducts) => [...prevProducts, ...response.data || []]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  // Rest of your code remains the same
  const getImageUrl = (filename) => {
    return `https://localhost:7141/Photos/${filename}`;
  };

  const formatDate = (date) => {
    return moment(date).format('MMM D, YYYY');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
    <div ref={containerRef} style={styles.container}>
      <main style={styles.main}>
        <div style={styles.allProducts}>
          <h2>All Products</h2>
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
        <div style={styles.paginationControls}></div>
      </main>
      <button onClick={scrollToTop} style={styles.backToTopButton}>
        &#8593;
      </button>
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
  backToTopButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
};


// Styles and export statement remain the same

export default MyComponent;
