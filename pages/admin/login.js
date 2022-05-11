import React, { useState } from 'react'
import { Form, InputPassword, InputText } from '../../globalComponents/Form'
import styles from "../../Assets/styles/admin/auth.module.css"

function Login() {
    const [formValues, setFormValues] = useState({ mail: "", password: "" });
    return (
        <div className={styles.auth}>
            <h1>Espace Administrateur</h1>
            <Form props={{}}>
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
                    <button>Se connecter</button>
                </div>
            </Form>
        </div>
    )
}

export default Login
