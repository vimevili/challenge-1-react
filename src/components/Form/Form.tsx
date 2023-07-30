import { useEffect, useState } from 'react'
import Checkboxes from './Checkboxes'
import styles from './Form.module.css'
import { ErrorMessage } from "@hookform/error-message";
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  type FormData = {
    name: string
    email: string
    message: string
    checkboxes: {
      userDesign: string
      webDesign: string
      graphicDesign: string
      designSystem: string
      other: string
    }
  }
  const {register, handleSubmit, getValues, formState: {errors, isValid}} = useForm<FormData>({criteriaMode: "all", mode: 'onChange'})
  const [checkboxesSelecionados, setCheckboxesSelecionados] = useState<string[]>([]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
  function onSubmit(): void {
    const name = JSON.stringify(getValues("name"))
    const email = JSON.stringify(getValues("email"))
    const message = JSON.stringify(getValues("message"))
    const interests = JSON.stringify(checkboxesSelecionados)

    const mensagemObj = {
    name, email, message, interests
    }

    const mensagemJSON = JSON.stringify(mensagemObj);
    localStorage.setItem("formData", mensagemJSON);
    const loading = toast.loading('Submitting...');

    setTimeout(() => {
      toast.success('Submitted', {
        id: loading,
      })
    }, 1000)

    setTimeout(() => {
      navigate('/user-data')
    }, 2000)
  }

  useEffect(() => {
    const checkboxes = checkboxesSelecionados.length > 0
    if(isValid && checkboxes) {
      setIsButtonDisabled(false)
    }
  }, [isValid, checkboxesSelecionados.length])
  
  return (
    <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4rem'}}>
            <Toaster position="bottom-center"/>
            <Checkboxes 
            checkboxesSelecionados={checkboxesSelecionados} 
            setCheckboxesSelecionados={setCheckboxesSelecionados}/>
            <ul className={styles.inputsContainer}>
                    <li>
                      <input
                        {...register("name", {
                          required: "Please, fill in the field.",
                          pattern: {
                            value: /^\w+\s+\w+/,
                            message: "Provide at least your first and last name"
                          }
                        })
                      }
                        placeholder='Your name'
                        className={styles.input}
                      />
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type} className={styles.span}>{message}</p>
                            ))
                          : null;
                      }}
                    /> 
                      </li>
                      <li>
                        <input
                          {...register("email", {
                            required: "Please, fill in the field.",
                            pattern: {
                              value: /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
                              message: "Provide a valid email"
                            }
                          })}
                          placeholder='Your email'
                          className={styles.input}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="email"
                          render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                              ? Object.entries(messages).map(([type, message]) => (
                                  <p key={type} className={styles.span}>{message}</p>
                                ))
                              : null;
                          }}
                        /> 
                      </li>         
                    <li>
                      <input
                            {...register("message", {
                              required: "Please, fill in the field.",
                              minLength: {
                                value: 20,
                                message: "Your message must be at least 20 characters long"
                              }
                            })}
                            placeholder='Your message'
                            className={styles.input}
                          />
                      <ErrorMessage
                            errors={errors}
                            name="message"
                            render={({ messages }) => {
                              console.log("messages", messages);
                              return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type} className={styles.span}>{message}</p>
                                  ))
                                : null;
                            }}
                          /> 
                    </li> 
            </ul>
        </div>
        <button type='submit' className={styles.send} disabled={isButtonDisabled}>
            <img src="/src/assets/send.svg" alt="" />
            Send Message
        </button>
    </form>
  )
}

export default Form
