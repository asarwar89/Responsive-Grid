import styles from './Card.module.css';

const Card = ({
  category, 
  heading, 
  location, 
  image
}) => {

  return (
    <div className={styles.Card}>

      {image && <img src={image} alt={heading} />}

      <p>{category}</p>
      <p>{heading}</p>
      <p>{location}</p>
      
    </div>
  );

}

export default Card;
