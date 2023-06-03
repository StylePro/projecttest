import React from "react";
import {useFormik} from "formik";
import {basicSchema} from "./BasicForm";
import s from '../Login/Login.module.css'


const Login = () => {
    const {values, errors, handleBlur, handleChange, handleSubmit, dirty, touched} = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <form onSubmit={handleSubmit} className={s.login}>
            <h1><label htmlFor="Login">Login</label></h1>
            <div>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                /> {errors.email && touched.email && <p className={s.errors}>{errors.email}</p>}
            </div>
           <div>
               <label htmlFor="password">Password</label> <br/>
               <input
                   id="password"
                   name="password"
                   type="password"
                   onChange={handleChange}
                   value={values.password}
                   onBlur={handleBlur}
               />
               {errors.password && touched.password && <p className={s.errors}>{errors.password}</p>}
           </div>

            <label htmlFor="confirmPassword">ConfirmPassword</label> <br/>
            <div>

                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword && <p className={s.errors}>{errors.confirmPassword}</p>}
            </div>
            <div>
                <button
                    disabled={!dirty && !errors}
                    type="submit"
                >Send
                </button>
            </div>
        </form>
    )
}


export default Login;
