import styles from './Card.module.css';

const Card = ({
  category, 
  heading, 
  location, 
  image
}) => {

  return (
    <a 
      className={`${styles.Card} ${image ? styles.HasImage : styles.TextOnly}`}
      href="https://www.google.com.au/"
      target="_blank"
      rel="noreferrer">

      {image && 
        <div className={styles.BannerBox}>
          <img className={styles.Banner} src={image} alt={heading} />
        </div>
      }

      <div className={styles.Contents}>

        <p className={styles.Category}>{category}</p>
        <h1 className={styles.Heading}>{heading}</h1>
        <p className={styles.Location}>{location}</p>

      </div>
      
    </a>
  );

}

export default Card;
