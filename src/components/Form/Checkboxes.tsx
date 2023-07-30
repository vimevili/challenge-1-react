import { useState, ChangeEvent } from 'react';
import styles from './Checkboxes.module.css';

type CheckboxStates = {
  [key: string]: boolean;
};
type Props = {checkboxesSelecionados: string[], setCheckboxesSelecionados: React.Dispatch<React.SetStateAction<string[]>>}
const Checkboxes = ({checkboxesSelecionados, setCheckboxesSelecionados}: Props) => {

  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({});

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {

      if (checkboxesSelecionados.includes(event.target.value)) {
        setCheckboxesSelecionados((prevValues) => prevValues.filter((val) => val !== event.target.value));
        setCheckboxStates((prevStates) => ({ ...prevStates, [event.target.id]: event.target.checked }));
      } else {
        setCheckboxesSelecionados((prevValues) => [...prevValues, event.target.value]);
        setCheckboxStates((prevStates) => ({ ...prevStates, [event.target.id]: event.target.checked }));
      }
  }
  
  const items = [
    { id: 'userDesign', value: 'UI/UX design' },
    { id: 'webDesign', value: 'Web Design' },
    { id: 'graphicDesign', value: 'Graphic Design' },
    { id: 'designSystem', value: 'Design System' },
    { id: 'other', value: 'Other' },
  ];
  
  return (
    <div>
      <h2 className={styles.subtitle}>I'm interested in...</h2>
      <ul className={styles.checkboxesContainer}>
      {items.map(({id, value}, index) => (
        <li key={index}>
          <label
            htmlFor={id}
            className={checkboxStates[id] ? styles.labelChecked : styles.label}
          >
            {value}
          </label>
          <input
            type="checkbox"
            value={value}
            id={id}
            checked={checkboxStates[id]}
            className={styles.checkboxItem}
            onChange={(event) => handleCheckbox(event)}
          />
        </li>
      ))}
      </ul>
      {checkboxesSelecionados.length > 0 ? '' :  <p className={styles.error}>Please, select at least one option</p>}
    </div>
  );
};

export default Checkboxes;
