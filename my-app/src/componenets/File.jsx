import React, { useState } from 'react'

import axios from 'axios';


const File = () => {
    const [file,setFiles]=useState();
    const handleUpload=()=>{
        const formData=new FormData();
        formData.append('file',file);
        console.log(file);
        axios.post('http://localhost:5000/upload',formData)
        .then(res=>console.log(res))
        .catch(err=>console.log("error in file upload",err))
    }

  return (
    <div>
     <input type="file" accept='.pdf' onChange={e=>setFiles(e.target.files[0])}/>
     <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default File
