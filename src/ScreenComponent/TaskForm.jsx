export const TaskForm = () => {
  return (
    <>

        <h1>Tasks</h1>

    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">
            Enter Task 
          </label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};
