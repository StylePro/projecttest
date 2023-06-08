import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getProfile} from "../../../components/api/api";


const ProfileStatus = () => {
    const status = useSelector(state=> state.profilePage.status)
    useEffect(()=> {
        if (status) {
            setTitle(status)
            console.log(`Обновляю статус${status}`)
        }
    }, [status])
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(status)

    
    const onStatusChange =(e)=> {
        setTitle(e.currentTarget.value)}
    const deactivateMode = ()=> {
        setEditMode(false)
        getProfile.updateStatus(title)
    }
    return (
        <div>
            Status:
            {!editMode &&
                <span
                    onDoubleClick={() => {
                        setEditMode(true)
                        console.log(`Вошел со статусом${title}`)
                    }}
                >{title}</span>
            }
            {editMode &&
                <input
                    value={title}
                    autoFocus={true}
                    onBlur={deactivateMode}
                    onChange={onStatusChange}
                />}
        </div>
    )
}

export default ProfileStatus;
