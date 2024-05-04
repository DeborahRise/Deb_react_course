export const Task = (props) => {
    return (
        <div className="task">
        <p style={props.done ? {backgroundColor: "green"} : {}}> 
        <button onClick={ () => props.X(props.id)}>x</button>
        {props.taskName} 
        <button onClick={ () => props.doneTask(props.id)}> done</button>
        </p>
        
        
        </div>
    );
};
