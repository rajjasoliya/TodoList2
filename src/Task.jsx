import "./index.css";
import { FaTimes } from 'react-icons/fa';
const Task = ({task,onDelete,onToggle,onEditName}) => {
    
    return (
        <>
           
                <div className={`task ${task.reminder && 'reminder'}`}
                onDoubleClick={() => onToggle(task.id)}>
                <div style={{display: 'flex'}}>
                <button className="btn">Task:{task.id}</button>
                <p style={{width:'100%',textAlign: 'right'}}>{task.time} ' O Clock <FaTimes style={{fontSize:'25px',marginLeft: '10px',color:'red',cursor: 'pointer'}} onClick={() => onDelete(task.id)}/> </p>
                </div>
                <h2 onClick={() => onEditName(task.id)}>{task.name}</h2>
                <p style={{width: '50%'}}>{task.description}</p>
                </div>
        </>
    )
}

export default Task
