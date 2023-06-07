import {useState} from "react";
import {useSelector} from "react-redux";


const ProfileStatus = () => {
    const status = useSelector(state=> state.profilePage.status)
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(status)
    const onStatusChange =(e)=> {
        setTitle(e.currentTarget.value)}
    return (
        <div>
            Status:
            {!editMode &&
                <span
                    onDoubleClick={() => {
                        setEditMode(true)
                        console.log(`вошел со статусом${title}`)
                    }}
                >{title}</span>
            }
            {editMode &&
                <input
                    value={title}
                    autoFocus={true}
                    onBlur={() => {
                        setEditMode(false)
                        console.log(`вышел со статусом${title}`)
                    }}
                    onChange={onStatusChange}
                />}
        </div>
    )
}

export default ProfileStatus;
