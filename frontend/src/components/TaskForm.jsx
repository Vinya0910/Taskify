import { useState } from "react";

function TaskForm(){
    const[title,setTitle] = useState("");
    const handleSubmit = () =>{
        event.preventDefault();
        console.log(title);
    };
    return(
<>
<form  onSubmit={handleSubmit}>
<input  type="text" valuse={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter Task"/> 
<button type="submit"> Add tasks</button>
</form>
</>
    );
}
export default TaskForm;