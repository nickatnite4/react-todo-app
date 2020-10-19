import React, { useEffect } from "react";

function CurrentTasks(props) {
  return (
    <div>
      <div className="mt-2 p-2 bg-info">
        <h3>Tasks to Do</h3>
      </div>
      <ul className="list-group">
        <div className="mt-2"></div>
        {props.allTasks.map((task, index) => {
          return (
            <li className="list-group-item" key={index}>
              {task}
              <div className="float-right">
                <button
                  onClick={() => props.modifyTask(index)}
                  className="btn btn-outline-secondary mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteTask(index)}
                  className="btn btn-outline-secondary mr-2"
                >
                  <i className="fas fa-trash"></i>
                </button>
                <button
                  onClick={() => props.addCompletedTask(index)}
                  className="btn btn-outline-secondary"
                >
                  <i className="fas fa-check"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CurrentTasks;

/*
          <button className="btn btn-outline-secondary">Edit</button>
          <button className="btn btn-outline-secondary">
            <i class="fas fa-trash"></i>
          </button>
          <button className="btn btn-outline-secondary">
            <i class="fas fa-check"></i>
          </button>
*/
