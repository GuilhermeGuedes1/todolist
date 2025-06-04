import { useState , useEffect} from 'react'
import './Main.css'
import TaskList from './TaskList'

export default function Main(){ 

    

    const tasksData = [
         {task:'Assistir um Narutin', done: false},
         {task: 'Mandar msg para avó', done: false}
    ]

    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem('tasks');
        return stored ? JSON.parse(stored) : tasksData
    })

    useEffect(() => { 
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    const [inputValue, setInputValue] = useState('')

    function newTask(e){
        setInputValue(e.target.value)
    }

    function addNewTask(){
        const trimmed = inputValue.trim()
        if(trimmed !== '') {
            setTasks([...tasks, {task: trimmed, done: false}])
            setInputValue('')
        }
    }

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            addNewTask()
        }
    }

    function removeTask(indexToRemove){
        const updatedTasks = tasks.filter((_,index) => index !== indexToRemove)
        setTasks([...updatedTasks])        
    }

    function toggleDone(indexToToggle){
        const updatedTasks = tasks.map((t, i) => 
            i === indexToToggle ? {...t, done: !t.done} : t
        )
        setTasks(updatedTasks)

    }

    return(
        <main>
            <article>
                <div className="container">
                    <div className="input-container">
                        <input
                            type="text" 
                            placeholder='Enter your task'
                            value={inputValue}
                            onChange={newTask}
                            onKeyDown={handleKeyDown}
                        />
                        <span className="task-btn" onClick={addNewTask}>Add</span>
                    </div>
                    <div className="list-container">
                        <ul>
                            {tasks.map((task, index) =>(
                                <TaskList 
                                    key={index}
                                    task={task.task}
                                    done={task.done}
                                    onToggle={() => toggleDone(index)}
                                    onClick={() => removeTask(index)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </main>
    )
}