import Moudel from "./Moudel"
import { useEffect } from "react"
import { useData } from "../Mycontext/APIcontext"
import axios from "axios"
const Comments = () => {
    let {comments,setComments,show,setShow,loading,setLoading,setId,setTypeMoudel}=useData()
// get API
   useEffect(()=>{
let Comments=async()=>{
  try {
    setLoading(true)
      let response=await axios.get('https://jsonplaceholder.typicode.com/comments')
      const Comments=response.data.filter((item)=>item.id<=5)
 setComments(Comments)
  } catch (error) {
    console.log(error);
    
  }
  finally{
    setLoading(false)
  }
 
}
  Comments()

   },[])
  //  handler


 // show moudel
  const handleShow=()=>{
    setShow(!show)
  }
  return (
    <>
<div className='comments' >
{show&&<div onClick={handleShow}  className='shadow'></div>}
<h1>Comments Page</h1>
  <button onClick={()=>{
    handleShow()
    setTypeMoudel('add')
  }}>Add comments</button>
{comments.map((item,index)=>{
    return(
        <div className='box' key={index}>
<div className='text'>
   <div>
     <h4>Name:</h4>
    <p>{item.name}</p>
   </div>
    <div>    <h4>Email: </h4>
    <p>{item.email}</p></div>
   <div>
    <div>
        <h4>Comment: </h4>
        <p>{item.body}</p>
    </div>
    
   </div>
    </div>
<div className='buttons'>
      <button onClick={()=>{
handleShow()
setId(item.id)
    setTypeMoudel('delete')
    }}>Delete</button>
    <button onClick={()=>{
      handleShow()
      setId(item.id)
      setTypeMoudel('update')
    }}>Update</button>
</div>
        </div>
    )
})}
{show && <Moudel/>}
{loading&&<div className='loading'>loading</div>}

</div>
     </>
  )
}

export default Comments