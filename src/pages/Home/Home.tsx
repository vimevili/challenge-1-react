import styles from './Home.module.css'
import Form from '../../components/Form/Form'
import ContactList from '../../components/TextSection/ContactList'
import SocialMedias from '../../components/TextSection/SocialMedias'

const Home = () => {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <header className={styles.header}>Let's discuss on something <span style={{color: '#A91079'}}>cool</span> together</header>
            <ContactList />
            <SocialMedias />
          </div>
          <Form />
        </div>
    </div>
  )
}

export default Home
