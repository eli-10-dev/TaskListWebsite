import './TaskListDisplay.css';

function TaskListDisplay({ toDoListArray, formatDate, editTask }){
    const storedTasks = JSON.parse(localStorage.getItem("taskStorage")) || [];

    return(
        <div className="task-item-list" id="task-item-list">
            {toDoListArray.map(({ title, date, status, id }) => (
            <div className="task-item" id={id} key={id} onClick={() => editTask(id)}>
                <section className="title-date-section">
                    <h4><b>{title}</b></h4> 
                    <span className="deadline-container"><h5 className="light">Deadline:</h5><h5 className="light"> {formatDate(date)}</h5></span>
                    {/* <h5 className="light">ID: {id}</h5> */}
                </section>

                <section className="status-section">
                    <p className="status-border" 
                       style={{backgroundColor: status === "Done" 
                                                ? "rgba(31,59,45,255)" 
                                                : status === "In Progress" 
                                                ? "rgba(68,53,34,255)" 
                                                : "rgba(90,44,44,255)"}}
                                                >
                        {status}
                    </p>
                </section>
            </div>               
            )
        )}
        </div>
    );
}

export default TaskListDisplay;