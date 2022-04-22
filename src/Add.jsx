import './index.css';
import { useState } from 'react';
const Add = ({ onAdd }) => {
    const [name,setName] = useState('')
    const [time,setTime] = useState()
    const [description,setDesc] = useState('')
    const [reminder,setReminder] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        
    if (!name) {
        alert('Please add a task')
        return
    }

    onAdd({name,time,reminder,description})
    setName('')
    setTime()
    setDesc('')
    setReminder()
    }
    
    return (
        <div className="forms add-form">
            <form className="add-form"  onSubmit={onSubmit}>

                <div className="form-control">
                    <lable>TASK</lable>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Add Task" />
                </div>
                <div className="form-control">
                    <lable>TIME</lable>
                    <input type="number" value={time} onChange={(e) => setTime(e.target.value)} name="time" placeholder="Add Time" />
                </div>
                <div className="form-control">
                    <lable>DESCRIPTION</lable>
                    <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} name="description" placeholder="Add Description" />
                </div>
                <div className="form-control ">
                <lable>REMINDER</lable>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} name="reminder"/>
                </div>
                <input type="submit" className="btn btn-block" value="ADD TASK" />
            </form>
        </div>
    )
}
export default Add
