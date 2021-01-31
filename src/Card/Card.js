import styles from './Card.module.css';

const Card = ({
  category, 
  heading, 
  location, 
  image
}) => {

  return (
    <div className={styles.Card}>

      {image && <img className={styles.Banner} src={image} alt={heading} />}

      <div className={styles.Contents}>

        <p className={styles.Category}>{category}</p>
        <h1 className={styles.Heading}>{heading}</h1>
        <p className={styles.Location}>{location}</p>

      </div>
      
    </div>
  );

}

export default Card;
