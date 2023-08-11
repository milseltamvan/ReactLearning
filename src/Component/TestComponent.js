import { React, useState } from "react";
import axios from 'axios';

// import TestingForAxios from '../Services/TestingForAxios'


function TestComponent() {
    const STS_URL = "http://localhost:7849/GetDataFromServer"
    // useEffect(()=>{
    //     <GetSimpleData/>
    // },[]

    // );
    const[ get, setGet] =useState();
    axios.get(STS_URL).then(res=>{setGet(res.data)})//.catch(err=>{setError(err)})
    return (<div>{get}</div>)
   

}
export default TestComponent;