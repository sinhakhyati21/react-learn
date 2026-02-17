function Task({ taskName, taskDate, onDelete }) {
  return (
    <div className="row justify-content-center align-items-center g-2 mb-2">
      <div className="col-4">
        {taskName}
      </div>
      <div className="col-4">
        {taskDate}
      </div>
      <div className="col-3">
        <button className="btn btn-danger w-100" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;