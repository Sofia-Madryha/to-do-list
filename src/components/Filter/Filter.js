export const Filter = ({task, filterTasks})=>{
    return (
        <div>
            <input  value ={task} type="text"
            onChange={evt=>filterTasks(evt.target.value)}/>
        </div>
    )
}