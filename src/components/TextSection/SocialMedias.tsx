import styles from './SocialMedias.module.css';

const SocialMedias = () => {

  return (
    <ul className={styles.mediasContainer}>
        <li className={styles.socialMedia}>
          <a href={'www.facebook.com'}>
            <img src='src/assets/facebook.svg' alt='facebook' />
          </a>
        </li>
        <li className={styles.socialMedia}>
          <a href={'www.instagram.com'}>
            <img src='src/assets/instagram.svg' alt='instagram' />
          </a>
        </li>
        <li className={styles.socialMedia}>
          <a href={'www.twitter.com'}>
            <img src='src/assets/twitter.svg' alt='twitter' />
          </a>
        </li>
    </ul>
  );
};

export default SocialMedias;
