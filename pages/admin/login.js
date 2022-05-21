import React, { useState } from 'react'
import { Form, InputPassword, InputText } from '../../globalComponents/Form'
import styles from "../../Assets/styles/admin/auth.module.css"
import axios from 'axios';
import { getClientProtocolAndHost } from '../../utils/request';
import { useRouter } from 'next/dist/client/router';
import { SimpleSectionLoader } from '../../globalComponents/Loader';

function Login() {
    const [formValues, setFormValues] = useState({ mail: "", password: "" });
    const [logError, setLogError] = useState(false)
    const [loader, setLoader] = useState(null)
    const router = useRouter();
    async function handleLogin() {
        setLoader(<SimpleSectionLoader size={"50px"} />)
        try {
            const login = await axios.post(getClientProtocolAndHost() + '/api/auth', formValues)
            router.push('/admin/dashboard')
        } catch (error) {
            setLogError(error.response.data)
        }
        setLoader(null)
    }
    return (
        <div className={styles.auth}>
            <h1>Espace Administrateur</h1>
            <Form props={{ submitFunction: handleLogin }}>
                <InputText props={{
                    name: "mail", ph: "admin@gmail.com", label: 'Votre mail',
                    formValues, setFormValues,
                    required: true, size: "semi"
                }} />
                <InputPassword props={{
                    name: "password", ph: "admin1234", label: 'Votre mot de passe',
                    formValues, setFormValues,
                    required: true, size: "semi"
                }} />
                <div className='formBtn'>
                    {
                        loader ? loader : <button>Se connecter</button>
                    }
                </div>
                {
                    logError && <span className='fieldError'>{logError} </span>
                }
            </Form>
        </div>
    )
}

export default Login
