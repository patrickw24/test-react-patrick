import { useEffect, useState } from "react"


export const TaskTable = ()=>{

    let url= import.meta.env.VITE_URL
    let token= import.meta.env.VITE_TOKEN
    
    const [data, setData] = useState([])


    const getData = async()=>{
        
        let response = await fetch(url,{
            method: 'GET',
            headers: {
                'apikey': token,
                'Authorization': token,
            }
        })

        if (response.ok){
            let objects = await response.json()
            setData(objects)
        }else{
            let responsestatus = await response.json()
            console.log(responsestatus)
        }
    }



    const completeButton = async (id, value )=>{

        let is_completed = ""

        let newUrl= url+`?id=eq.${id}`

        console.log(newUrl)
        console.log(id)
        console.log(value)

        if(value === "No"){
            is_completed = "Yes"
            
        }else{
                is_completed = "No"
            
        }
        let data= {
            is_completed
        }

        let response = await fetch(newUrl,{
            method: 'PATCH',
            headers:{
                'Authorization':token,
                'apikey':token,
                'Content-Type':"application/json"
            },
            body: JSON.stringify(data) 
        })

        if(response.ok){
            window.location= '/form'
        }else{
            let responsebody= await response.json()
            console.log(responsebody)
        }

    }

    const deleteButton = async(id)=>{

        let newUrl= url+`?id=eq.${id}`

        let response = await fetch(newUrl,{
            method: 'DELETE',
            headers:{
                'Authorization':token,
                'apikey':token,
            },
        })
        
        if(response.ok){
            window.location= '/form'
        }else{
            let responsebody= await response.json()
            console.log(responsebody)
        }
    }


    useEffect(()=> {

        getData()

    }, [])



    return(
        <>
        
        <h1 className="text-center">Table</h1>
        <div className="table table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Completed</th>
                            <th>Completed Toggle</th>
                            <th>Delete Toggle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((supabase) => (
                                <tr key={supabase.id}>
                                    <td> {supabase.id} </td>
                                    <td> {supabase.task} </td>
                                    <td> {supabase.is_completed} </td>
                                    <td> <button onClick={()=>completeButton(supabase.id, supabase.is_completed)} className="btn btn-success"> Completed </button> </td>
                                    <td> <button onClick={()=>deleteButton(supabase.id)} className="btn btn-danger"> Delete </button> </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        
        </>
    )
}