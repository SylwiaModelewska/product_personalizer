import styles from './Product.module.scss';
import ProductOptions from '../ProductOptions/ProductOptions.js';
import ProductImage from '../ProductImage/ProductImage.js';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo (() => {
    //console.log('getPrice');
    const element = props.sizes.find(({ name }) => name === currentSize);
    const additionalPrice = element.additionalPrice;
    return props.basePrice + additionalPrice;
  }, [currentSize]);

  const prepareSummary = (e) => {
    e.preventDefault();
    console.log("Summary");
    console.log("=================");
    console.log("Name: ", props.title);
    console.log("Price: ", getPrice);
    console.log("Size: ", currentSize);
    console.log("Color: ", currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title = {props.title} name = {props.name} currentColor = {currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions 
          product = {props}
          setCurrentSize = {setCurrentSize} 
          currentSize = {currentSize} 
          setCurrentColor = {setCurrentColor}
          currentColor = {currentColor}
          prepareSummary = {prepareSummary}
          />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
}

export default Product;