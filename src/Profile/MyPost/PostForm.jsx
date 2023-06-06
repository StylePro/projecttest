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
        onSubmit: value=> addPost(value)
    })
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="textPost"
                onChange={handleChange}
                value={values.textPost}
            /> <br/>
            <button type='submit'>Send post</button>
        </form>
    )
}

export default PostForm;
