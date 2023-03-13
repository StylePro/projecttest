import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state)=> {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        addPost: ()=> {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text)=> {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
