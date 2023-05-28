import {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.status)
    useEffect(()=> {
        setTitle(props.status)
    }, [props.status])

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
