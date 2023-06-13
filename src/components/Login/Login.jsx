import React from "react";
import {useFormik} from "formik";
import {basicSchema} from "./BasicForm";
import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import {LoginIn} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: basicSchema,
        onSubmit: (values) => {
            dispatch(LoginIn(values.email, values.password, values.rememberMe))
            alert(JSON.stringify(values))
        }
    })

    if(isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1><label htmlFor="Login">Login</label></h1>
            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 'input-error' : ''}
                /> {errors.email && touched.email && <p className='error'>{errors.email}</p>}
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
                   className={errors.password && touched.password ? 'input-error' : ''}
               /> {errors.password && touched.password && <p className='error'>{errors.password}</p>}
           </div>

            <label htmlFor="rememberMe">Remember me</label> <br/>
            <div>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={handleChange}
                />
            </div>
            <div>
                <button
                    disabled={errors.email || errors.password}
                    type="submit"
                >Send
                </button>
            </div>
        </form>
    )
}


export default Login;
