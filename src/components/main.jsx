import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';

const Main = () => {

    const [data, setData] = useState([]);
    const [id, setId] = useState("");

    const history = useHistory()

    const handleNew = () => {
        history.push("/new")
    }


    useEffect(() => {
        displayData()
    },[]);

    const displayData = () => {
        const Data =  JSON.parse(localStorage.getItem('document'));
        console.log("document", Data);
        setData(Data);
    }

     const handleEdit = (e, id) => {
         console.log(id);
        // const Data =  JSON.parse(localStorage.getItem('document')); 
        // console.log("edit", id);
        history.push(`/edit/${id}`)
     }

   const handleDelete = (e, id) => {
            console.log(id);
            const Data =  JSON.parse(localStorage.getItem('document'));  
            const res = Data && Data.filter(item => item.eventId !== id);     
            //Data && Data.splice(id, 1);
            localStorage.setItem("document", JSON.stringify(res));
            displayData();
    }

    const handleCheck = (e, id) => {
        console.log("e", id);
        setId(id);
    }
   


    return(
        <React.Fragment>
        <button className="btn btn-primary mr-5" onClick={handleNew}>Add</button>
       {/* <button className="btn btn-danger mr-5" onClick={(e) => handleDelete(id)}>Delete</button> 
       <button className="btn btn-warning mr-5" onClick={handleEdit}>Edit</button> */}
        <div>
           <table className="table">
           <thead>
             <tr>
           
               <th scope="col">EventId</th>
               <th scope="col">EventName</th>
               <th scope="col">Code</th>
       
              
            
             </tr>
           </thead>
           <tbody>

               {data && data.map(n =>  {
                       
                       return (
              
                        <tr key={n.eventId}>
                           
                            <td>{n.eventId}</td>
                            <td>{n.eventName}</td>
                            <td>
                            <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={(e) => handleCheck(e, n.eventId)}/>
                            <button className="btn btn-danger mr-5" onClick={(e) => handleDelete(e, n.eventId)}>Delete</button> 
                            <button className="btn btn-warning mr-5" onClick={e => handleEdit(e, n.eventId)}>Edit</button>
                            </div>
                            </td>
                        </tr>
                                  
                    )
                   
   
               })} 
           
           </tbody>
         </table>
        </div>
        </React.Fragment>
    )
}

export default Main;