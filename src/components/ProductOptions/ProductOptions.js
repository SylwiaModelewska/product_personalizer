import styles from './ProductOptions.module.scss';
import Button from '../Button/Button.js';
import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';
import PropTypes from 'prop-types';

const ProductOptions = props => {

  return (
    <form>
      <OptionSize sizes = {props.sizes} setCurrentSize = {props.setCurrentSize}  currentSize = {props.currentSize} />
      <OptionColor colors = {props.colors} setCurrentColor = {props.setCurrentColor} currentColor = {props.currentColor}/>
      <Button className={styles.button} onClick={props.prepareSummary}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );

};

ProductOptions.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  prepareSummary: PropTypes.func.isRequired
};

export default ProductOptions;
