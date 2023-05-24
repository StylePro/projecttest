import {useState} from "react";

const ProfileStatus = () => {
    let [status, setStatus] = useState('Hello my friends');
    let [editMode, setEditMode] = useState(false)
    return (
        <div>
            {!editMode &&
                <span
                    onDoubleClick={() => {setEditMode(true)}}
                >{status}</span>
            }
            {editMode &&
                <input
                    value={status}
                    autoFocus={true}
                    onBlur={() => {setEditMode(false)}}
                    onChange={(event)=> {setStatus(event.currentTarget.value)}}
                />
            }
        </div>
    )
}

export default ProfileStatus;