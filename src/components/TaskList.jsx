export default function TaskList({task, onClick, status, onToggle, done}){

    return(
        <>
            <li>
                <div className="check-container">
                    <ion-icon 
                        name='trash-outline'
                        onClick={onClick}>
                    </ion-icon>
                    <input 
                        type="checkbox"
                        className='checkbox'
                        onChange={onToggle}
                        checked={done}
                    />
                    <p className={done ? 'finish' : ''}>{task}</p>
                </div>
            </li>             
        </>
    )
}