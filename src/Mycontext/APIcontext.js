import { createContext,useContext,useState } from "react";
const contextAPI=createContext();
export const ContextProvider=({children})=>{
      let [comments,setComments]=useState([]); // comment
      let [form,setForm]=useState({name:'',email:'',comment:''}) // form
      let [show,setShow]=useState(false) // moudel
      let [typeMoudel,setTypeMoudel]=useState(''); // type moudel add or update
      let [loading,setLoading]=useState(false); // loading
      let [id,setId]=useState(null) // id comment 
    return(
        <contextAPI.Provider value={{comments,setComments,form,setForm,show,setShow,typeMoudel,setTypeMoudel,loading,setLoading,id,setId}}>
            {children}
        </contextAPI.Provider>
    )
}
export const useData=()=>{
    return useContext(contextAPI)
}