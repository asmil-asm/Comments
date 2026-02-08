import axios from "axios";
import { useData } from '../Mycontext/APIcontext'
const Moudel = () => {
        let{form,setForm,show,setShow,setLoading,comments,id,typeMoudel,setTypeMoudel,setComments}=useData()
  // handel From
       const handelFrom=(event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }
        // Add comment
  const handelAdd=async()=>{
 setLoading(true);

    try {
      const newComment={
        name:form.name,
        email:form.email,
        body:form.comment,
        id:comments.length+1
      }
      await axios.post(`https://jsonplaceholder.typicode.com/comments`,newComment)
      setComments([...comments,newComment])


    } catch (error) {
      alert(error)
    }
    finally{
      setShow(!show)

      setLoading(false)
          setForm({name:'',email:'',comment:''})
setTypeMoudel('')


    }
   
  }
   // Update comment
      const handelUpdate= async()=>{
 setLoading(true)
try {
  let newComment=comments.map((item)=>{
  if(item.id===id)
    return{...item,name:form.name,email:form.email,body:form.comment}
  return item;
})
  await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`,newComment)
  setComments(newComment)

} catch (error) {
  alert(error)
} 
finally{
  setLoading(false)
  setForm({name:'',email:'',comment:''})
        setTypeMoudel('')
        setShow(!show)

}
}
  // Delete Comment
  const handleDelete=async()=>{
    setLoading(true)
try {

  await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        let commentDelete=comments.filter((item)=>item.id!==id)
  setComments(commentDelete);
} catch (error) {
  alert(error);
}
finally{
  setLoading(false)
    setTypeMoudel('')
  setShow(!show)

  }
}
  return (
       <div className="moudel">
     {typeMoudel!=='delete' &&  <form  onSubmit={(e)=>{e.preventDefault();}} >
        <label>Name</label>
        <input value={form.name} name="name" onChange={handelFrom} type='text'/>
        <label>Eamil</label>
        <input value={form.email} name="email" onChange={handelFrom} type='email'/>
        <label>Comment</label>
    <input value={form.comment} name="comment" onChange={handelFrom} type='text'/>
    { typeMoudel=='add' &&<button onClick={handelAdd} >Send</button>
}
{typeMoudel=='update' &&  <button onClick={handelUpdate}>Update</button>
}
</form>}
{typeMoudel==='delete'&& <div className="DeletMoudel">
<h2>Are you want to delete  this comment</h2>
<div>
    <span onClick={handleDelete}>Yes</span>
    <span onClick={()=>setShow(!show)}>No</span>
</div>
</div>}

</div>
  )
}

export default Moudel