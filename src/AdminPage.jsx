import { useState,useEffect } from "react"
import axios from "axios";
export default function AdminPage(){
const [centername, setCentername]= useState('');
const [mobileNumber,setMobileNumber] = useState('');
const [logo1,setLogo1]= useState('');
const [logo2,setLogo2]= useState('');

    const editCenterName=async(e)=>{
        e.preventDefault();
        let result= await fetch('https://cp-frontend-o29c.onrender.com/header/editCenterName',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({centerName:centername, tagName:'header'})
        })
        if (result.ok) {
            window.location.reload();
          } else {
            console.error('Failed to update center name');
          }
      }

      const editMobileNumber=async(e)=>{
        e.preventDefault();
        let result= await fetch('https://cp-frontend-o29c.onrender.com/header/editCenterName',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({mobileNumber:mobileNumber, tagName:'header'})
        })
        if (result.ok) {
          alert("Mobile number updated successfully");
            window.location.reload();
          }else{
            console.error('Failed to update center name');
          }
      }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    if(logo1){
      formData.append('logo1', logo1);
      console.log(logo1)
    } else if(logo2){
      formData.append('logo2',logo2);
      console.log(logo2)
    }else{
      alert('Please select file')
    }
    try {
      const res = await axios.post("https://cp-frontend-o29c.onrender.com/header/uploadLogo", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(res.data.status){
        alert(res.data.message);
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };
  
    return(
        <div style={{marginLeft:'5vw'}}>
        <h1>Change Content of Page</h1>
        <p>Center Name</p>
        <input type="text"  value={centername} onChange={(e)=>setCentername(e.target.value)} />
        <button type="submit" onClick={editCenterName}>Change</button>
        <p>{centername}</p>

        <p>Mobile Number</p>
        <input type="text"  onChange={(e)=>setMobileNumber(e.target.value)} />
        <button type="submit" onClick={editMobileNumber}>Change</button>
        <p>{centername}</p>
{/*  ---------file upload-------- */}
{!logo2 &&  <form onSubmit={handleSubmit}>
        <input type="file" id="logo1"  accept=".jpg" onChange={(e)=>setLogo1(e.target.files[0])} />
        <button type="submit">Change Logo1</button>
      </form>}

      {!logo1 &&  <form onSubmit={handleSubmit}>
        <input type="file" id="logo2"  accept=".jpg" onChange={(e)=>setLogo2(e.target.files[0])} />
        <button type="submit">Change logo2</button>
      </form> } 
     
        </div>
    )
}