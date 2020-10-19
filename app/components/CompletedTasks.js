import React, { useEffect } from "react";

function CompletedTasks(props) {
  return (
    <div>
      <div className="bg-success p-2 mt-2">
        <h3>Completed Tasks</h3>
      </div>
      <ul className="list-group">
        <div className="mt-2"></div>
        {props.completedTasks.map((task, index) => {
          return (
            <li className="list-group-item" key={index}>
              {task}
              <div className="float-right"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CompletedTasks;
