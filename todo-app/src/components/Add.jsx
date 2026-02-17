function Add() {
    return (
        <div className="row justify-content-center align-items-center g-2 mb-3">
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Enter todo here" />
          </div>
          <div className="col-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-3">
            <button className="btn btn-success w-100">Add</button>
          </div>
        </div>
    )
}
export default Add;