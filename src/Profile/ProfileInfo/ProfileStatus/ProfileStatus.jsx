import {useState} from "react";
import {useSelector} from "react-redux";

const ProfileStatus = () => {
    const status = useSelector(state=> state.profilePage.status)
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(status)

    return (
        <div>
            {!editMode &&
                <span
                    onDoubleClick={() => {
                        setEditMode(true)
                    }}
                >{title}</span>
            }
            {editMode &&
                <input
                    value={title}
                    autoFocus={true}
                    onBlur={() => {
                        setEditMode(false)
                    }}
                    onChange={(event) => {
                        setTitle(event.currentTarget.value)
                    }}
                />}
        </div>
    )
}

export default ProfileStatus;
