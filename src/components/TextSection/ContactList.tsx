import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = [
    { img: 'src/assets/email.svg', text: 'SaulDesign@gmail.com' },
    { img: 'src/assets/phone.svg', text: '+123 456 789' },
    { img: 'src/assets/location.svg', text: '123 Street 456 House' },
  ];

  return (
    <>
      <ul className={styles.itemsContainer}>
        {contacts.map((contact, index) => (
          <li key={index} className={styles.contactItem}>
            <img src={contact.img} alt="" />
            <p>{contact.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
