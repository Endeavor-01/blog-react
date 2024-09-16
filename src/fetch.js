import { useState,useEffect } from "react";

const useFetch = (url)=> {
    const [data ,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const[error,setError] = useState(null);


useEffect(()=>{
    const abortVar = new AbortController();

    setTimeout(() => {
        fetch(url ,{signal: abortVar.signal})
    .then(res=>{
        if(!res.ok){
            throw Error('Error fectching data')
        }
        return res.json();
    })
    .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
    })
    .catch(err => {
        if(err.name === 'AbortError'){
            console.log('fetch aborted')
        }else{
            setIsPending(false);
            setError(err.message);
       }        
    })
    }, 2000);
    return ()=> abortVar.abort();
},[url])

return {data,isPending , error }
}


export default useFetch;