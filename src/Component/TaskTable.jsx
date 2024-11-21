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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((supabase) => (
                                <tr key={supabase.id}>
                                    <td> {supabase.id} </td>
                                    <td> {supabase.task} </td>
                                    <td> {supabase.is_completed} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        
        </>
    )
}