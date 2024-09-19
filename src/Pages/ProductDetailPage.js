import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const [productsList, setProductList] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then((product) => {
        setProductList(product);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  console.log(productsList);

  return (
    <div style={styles.container}>
      {Object.keys(productsList).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={styles.imageContainer}>
            <img src={productsList.image} alt={productsList.title} style={styles.image} />
          </div>
          <div style={styles.detailsContainer}>
            <h1>{productsList.title}</h1>
            <p>{productsList.category}</p>
            <p>{productsList.description}</p>
            <p>Price: ${productsList.price}</p>
            <p>
              Rating: {productsList.rating.rate} ({productsList.rating.count} reviews)
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
  },
  imageContainer: {
    flex: 1,
    marginRight: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  detailsContainer: {
    flex: 2,
  },
};

export default ProductDetailPage;
