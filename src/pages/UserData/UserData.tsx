import styles from './UserData.module.css'
import { useNavigate } from 'react-router-dom'

const UserData = () => {
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("formData")!) ;
    const {name, email, message, interests} = data
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Form Data</h1>
        <div className={styles.dataContainer}>
          {data ? <>
                <p>Name: <span>{name.replace(/"/g, "")}</span></p>
                <p>Email: <span>{email.replace(/"/g, "")}</span></p>
                <p>Message: <span>{message.replace(/"/g, "")}</span></p>
                <p>Selected interests: <span>{interests.replace(/[[\]"']/g, '').replace(/,/g, ', ')}</span></p>
              </> : <p>There is no data storaged</p>}
        </div>
        <button onClick={() => navigate('/')} className={styles.button}>Voltar</button>
    </div>
  )
}

export default UserData
