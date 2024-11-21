import { TaskTable } from "../Component/TaskTable";

export const TaskForm = () => {

    let url= import.meta.env.VITE_URL
    let token= import.meta.env.VITE_TOKEN
    let task = ""


    

    const postData = async(event)=>{

        event.preventDefault()

        let data = {
            task
        }

        let response = await fetch(url,{
            method: 'POST',
            headers:{
                'apikey': token,
                'Authorization': token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        if(response.ok){
            console.log("Post created")
            window.location = "/form"
        }
    }


    const changeHandler = (event)=>{

        task = event.target.value

    }



  return (
    <>

        <h1 className="text-center">Tasks</h1>

    <div className="container">
      <form onSubmit= {postData}>
        <div className="mb-3">
          <label className="form-label">
            Enter Task 
          </label>
          <input onChange={changeHandler}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      </div>

      <TaskTable />
    </>
  );


  
};


