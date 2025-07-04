import './TaskForm.css';

function TaskForm({taskTitle, setTaskTitle, dateInput, setDateInput, 
                   taskStatus, setTaskStatus, taskId, setTaskId, 
                   taskDescription, setTaskDescription, createAndUpdateTask, deleteTask, 
                   hidePanel, isAddTaskClicked}){

    return(
        <form id="task-panel" className="task-panel flex-center" 
              onSubmit={(e) => {
                e.preventDefault();
                createAndUpdateTask();
                hidePanel();
              }}
              >
            <section className="panel-header flex-center">
                <h3>Create a new task</h3>
                <i className="fa-solid fa-xmark" id="exit-button" onClick={hidePanel}></i>
            </section>

            <label htmlFor="title" id="title-label"> Task Name: 
                <input type="text" id="title" name="title" placeholder="Task title" required 
                       value={taskTitle}
                       onChange={(e) => setTaskTitle(e.target.value)}
                       />
            </label>

            <label htmlFor="date" id="date-label"> Deadline:
                <input type="date" id="date" name="date" required 
                        value={dateInput}
                        onChange={(e) => setDateInput(e.target.value)}
                       />
            </label>

            <label htmlFor="status" id="status-label"> Status:
                <select id="status" name="status" required
                        value={taskStatus}
                        onChange={(e) => setTaskStatus(e.target.value)}
                        >
                    <option value="Pending" >Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </label>

            <div className="task-id">
                <p>Id: <span id="task-id" 
                        value={taskId}
                        >
                        </span>
                </p>
            </div>
                
            <label htmlFor="description" id="description-label"> Description:
                <textarea id="description" name="description" required
                          value={taskDescription}
                          onChange={(e) => setTaskDescription(e.target.value)}
                          >
                </textarea>
            </label>

            <button type="submit" id="submit-button" className="submit-button">Submit</button>
            
            {!isAddTaskClicked &&
            <button type="button" id="delete-button" className="delete-button hidden" 
                    onClick={() => {
                        deleteTask(taskId); 
                        hidePanel();
                    }}
                    >Delete
            </button>            
            }
        </form>
    );
}

export default TaskForm;