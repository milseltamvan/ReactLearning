import { React, useState } from "react";
import axios from 'axios';

function TestComponent() {
    const STS_URL = "http://localhost:7849/GetDataFromServer"
   
    const[ get, setGet] =useState();
    axios.get(STS_URL).then(res=>{setGet(res.data)})//.catch(err=>{setError(err)})
    return (<div>{get}</div>)
}
export default TestComponent;