import Task from './Task'

const Tasks = ({data,onDelete,onToggle,onEditName}) => {
    return (
        <>
        {data.map( (values,index) => (
            <Task key={index} task={values} onToggle={onToggle} onDelete={onDelete} onEditName={onEditName} />
            
        ))}
        {/* {console.log(data.name[0])} */}
        </>
    )
}

export default Tasks
