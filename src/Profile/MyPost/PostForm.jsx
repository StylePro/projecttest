import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";




const PostForm = () => {
    const dispatch = useDispatch()
    const addPost =(sendPost)=> {
        dispatch({type: 'ADD-POST', sendPost})
    }
    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            textPost: ''
        },
        onSubmit: values=> addPost(values)
    })
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='input post'
                type="text"
                name="textPost"
                onChange={handleChange}
                value={values.textPost}
            /> <br/>
            <button
                disabled={!values.textPost}
                type='submit'>Send post</button>
        </form>
    )
}

export default PostForm;
