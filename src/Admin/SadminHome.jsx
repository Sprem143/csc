import './admin.scss'
import '../index.scss';
import '../App.scss'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
export default function SadminHome() {

  const [superAdminToken, setSuperadminToken] = useState('');
  const [superadmin, setSuperadmin] = useState({});
  const [admins, setAdmin] = useState([{}]);
  const [adminName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [updates, setUpdates] = useState([{}]);
  const [updatedetail, setUpdatedetail] = useState({});
  const [password4compare, setPassword4compare] = useState('');
  const [checkPassErr, setCheckPassErr] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [confirmNewPassErr, setConfirmNewPasswordErr] = useState('');
  const [newName, setNewName] = useState('');
  const [newdp, setNewdp] = useState('');
  const [filterByName, setFilterByName] = useState('');
  const [filterByDate, setFilterByDate] = useState('');
  const [filterUpdates, setFilterUpdates] = useState([{}]);
  const [imgUrl, setImgUrl] = useState('');
  const [notifications, setNotifications] = useState([{}]);
  const [oldNotifications, setOldNotifications] = useState([{}]);



  useEffect(() => {
    getnotification();
    if (localStorage.getItem('superAdminToken')) {
      setSuperadminToken(localStorage.getItem('superAdminToken'))
    }
    getAdmins();
    getSuperAdmin()
    getUpdates();

  }, []);
const getnotification=async()=>{
  try{
     let result= await fetch('https://cp-frontend-o29c.onrender.com/superadmin/getnotification',{
      method:'GET',
      headers:{'Content-Type':'application/json'},
     })
     result=await result.json();
     setNotifications(result.new);
     setOldNotifications(result.old)
     console.log(result); 
  }catch(err){
    console.log(err)
  }
}

const updatenotification=async()=>{
  try{
   let result= await fetch('https://cp-frontend-o29c.onrender.com/superadmin/updatenotification',{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({notifications})
   });
  }catch(err){

  }
}
  const getSuperAdmin = async () => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/superadmin/getsuperadmin', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      result = await result.json();
      setSuperadmin(result.result);
    } catch (err) {
      console.log(err)
    }
  }
  const getAdmins = async () => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/admin/getadmins', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      result = await result.json();

      // let adminarr= result.admins.map((admin)=>admin.adminName)
      setAdmin(result.admins);
      if (result.message.errorResponse) {
        alert(result.message.errorResponse.errmsg)
      }
    } catch (err) { console.log(err) }
  }
  // ---------get updates---------
  const getUpdates = async () => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/superadmin/getupdates', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      result = await result.json();
      setUpdates(result.result);
      console.log(result.result[0])
    } catch (err) {
      console.log(err)
    }
  }
  const superadminregistration = async () => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/superadmin/saregister', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: "superadmin", email: 'premcschariraha@gmail.com', mobile: 7366943700, password: "superadmin", imgUrl: 'https://res-console.cloudinary.com/dfnzn3frw/thumbnails/v1/image/upload/v1724222667/dTJibm82cnFlMThoN2xoMHp6OHM=/preview' })
      });
      result = await result.json();
    } catch (err) { console.log(err) }
  }
  const displayform = () => {
    let form = document.getElementById('addadminform');
    form.style.display = 'block'
  }
  const addadmin = async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData();
      formData.append('imgUrl', imgUrl);  // Append image file
      formData.append('adminName', adminName); // Append other fields
      formData.append('email', email);
      formData.append('mobile', mobile);
      formData.append('password', password);
      console.log(formData)
      // Send the request to the backend
      const result = await axios.post("https://cp-frontend-o29c.onrender.com/superadmin/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response
      if (result.data.message) {
        alert(result.data.message);
        window.location.reload();
      } else {
        alert("Error adding admin");
      }

    } catch (err) {
      console.log(err);
    }
  };

  // ----------remove admin---------
  const removeadmin = async (gmail) => {
    try {
      let result = await fetch("https://cp-frontend-o29c.onrender.com/superadmin/removeadmin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: gmail })
      });
      result = await result.json();
      if (result) {
        window.location.reload();
      }
    } catch (err) {
      alert(err);
    }
  }
  // ---------deactive admin----------
  const deactivate = async (gmail) => {
    try {
      let result = await fetch("https://cp-frontend-o29c.onrender.com/superadmin/deactivate", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: gmail })
      });
      result = await result.json();
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  // ---------deactive admin----------
  const activate = async (gmail) => {
    try {
      let result = await fetch("https://cp-frontend-o29c.onrender.com/superadmin/activate", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: gmail })
      });
      result = await result.json();
      window.location.reload();

    } catch (err) {
      console.log(err)
    }
  }

  const hideform = () => {
    document.getElementById('addadminform').style.display = 'none'
  }

  const showupdatedetails = () => {
    document.getElementById('update_detail').style.display = 'block'
  }
  const hidedetail = (id) => {
    document.getElementById('update_detail').style.display = 'none'
    document.getElementById(id).style.display = 'none'
  }
  const logout = () => {
    localStorage.removeItem('superAdminToken');
    localStorage.removeItem('superadmin');
    window.location.reload();
  }
  const updatePasswordForm = (id) => {
    document.getElementById(id).style.display = 'block'
  }

  //---check old password is correct or not----
  var call = 0;
  const checkpassword = async () => {
    if (call == 0) {
      try {
        let result = await fetch('https://cp-frontend-o29c.onrender.com/superadmin/checkpassword', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ password: password4compare })
        });
        result = await result.json();
        if (!result.status) {
          setCheckPassErr('Old password is incorrect')
        }
        if (result.status) {
          call = 1;
          setCheckPassErr('')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
  const updatepassword = async () => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/superadmin/updatepassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${superAdminToken}`
        },
        body: JSON.stringify({ newPass: confirmNewPassword, oldPass: password4compare })
      });
      result = await result.json();
      if (result) {
        alert(result.msg);
        document.getElementById('update_password').style.display = 'none'
      }
      setNewPassword('');
      setPassword4compare('');
      setConfirmNewPassword('');

    } catch (err) {
      console.log(err);
    }
  }

  // -------check new password and confirm new password is same or not
  const checknewpassword = (confirmPassword) => {
    if (confirmPassword === confirmNewPassword) {
      setConfirmNewPasswordErr('');
      // setNewPassword(confirmPassword)
    } else {
      setConfirmNewPasswordErr(true)
    }
  }

  const updatename = async () => {
    let result = await fetch('https://cp-frontend-o29c.onrender.com/superadmin/updatename', {
      method: 'PUT',
      headers: {
        'Content-Type': 'applicaion/json',
        'Authorization': `Bearer${superAdminToken}`
      },
      body: JSON.stringify({ name: newName })
    })
  }

  const updatedp = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(newdp)
    formData.append('newdp', newdp);
    console.log(formData)
    const res = await axios.post("https://cp-frontend-o29c.onrender.com/superadmin/updatedp", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'Authorization':`Bearer${superAdminToken}`
      },
    });
    if (res.data.status) {
      alert("Profile Picture changed successfully");
      document.getElementById('update_dp').style.display = 'none';
      setNewdp('');
      window.location.reload();
    }
  }

  // ---------filter by name-----------
  const filterbyname = async (e) => {
    try {
      let value = e.target.value;
      if (value === 'all') {
        setFilterUpdates([{}]);
        return;
      }
      let res = updates.filter((x) => x.updatedBy == value);
      setFilterUpdates(res);
    } catch (err) {
      console.log(err)
    }
  }

  //------ filter by date--------
  // const filterbydate=()=>{
  //   try{
  //     // console.log(filterByDate);
  //    let dat= filterByDate.split('-');
  //    let newDate=dat[2]+'/'+dat[1]+'/'+dat[0];
  //    console.log(newDate);
  //    console.log(updates[0].date)
  //    let result= updates.map((update)=>update.date.includes(newDate));
  //    console.log(result)
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // ----------undo change-------
  const undochange = async (id, page, cid) => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/superadmin/undochange', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, page, cid })

      });
      result = await result.json();
      if (result.status) {
        alert('Updation deleted successfully');
        window.location.reload();
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>

      <div className="container ms-0 me-0" style={{ maxWidth: '100%' }}>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-0 m-0 p-0">
            <div className="page admins">
              <div className=" d-flex flex-column align-items-center">
                <img src={superadmin.imgUrl} alt="" style={{ height: '10vw', width: '10vw', borderRadius: '50%' }} />
                <div className='bg-white dc p-0 w-100' style={{ borderRight: '2px solid navy' }}>
                  <h2 className='mb-0 mt-0 pt-0 ps-4 pe-4'>{superadmin.name}</h2>
                  <p className="fs-6 pb-0 mb-0">Role: Super Admin</p>
                </div>
              </div>
              <div className="admins ps-4">
                <div><button className="formal_btn d-flex"  onClick={() => {updatePasswordForm('notification'), updatenotification()}}>
                   <span>Notification</span> 
                   {notifications[0] ? <span className='notification_circle ms-2'> {notifications.length}</span>: null } </button></div>
                <div><button className="formal_btn" onClick={() => updatePasswordForm('update_name')}>Update Name</button></div>
                <div><button className="formal_btn" onClick={() => updatePasswordForm('update_dp')}>Update DP</button></div>
                <div><button className="formal_btn" onClick={() => updatePasswordForm('update_password')}>Change Password</button></div>
                <div><button className="formal_btn" onClick={logout}>Log Out</button></div>

              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-3 col sm-12" style={{ marginTop: "10px" }}>

            {/* ----------Recent updates----------------- */}
            <div className="container" style={{ height: '600px', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
              <h2 className="text-center fw-bolder">Recent Updates</h2>
              <hr />
              <div className='d-flex'>
                <p className='me-4'>Filter</p>
                {/*----------- Filter By name---------------- */}
                <div className='me-4'>
                  <Form.Select aria-label="Default select example" onChange={filterbyname}>
                    <option>Updated By</option>
                    <option value="all">All</option>
                    {admins.map((admin) => (
                      <option key={admin.email} value={admin.adminName}>{admin.adminName}</option>
                    ))}
                  </Form.Select>
                </div>

                {/* ------------------filter by date---------- */}
                {/* <div>
                  <input type="date" onChange={(e)=>{setFilterByDate(e.target.value), filterbydate()}} />
                </div> */}
              </div>
              <hr />
              {!filterUpdates[0].hasOwnProperty('updatedBy') && <ul style={{ listStyle: 'none' }} className='row'>
                {
                  updates.map((update) => (
                    <li className="col-lg-4 col-md-6 col-sm-12 mb-4" >
                      <div className='updates'>
                        <h4 className="text-center">{update.page}</h4>
                        <hr />
                        <p>Date: {update.date}</p>
                        <p>Updated By : {update.updatedBy}</p>
                        <div className="dr">
                          <button className='btn details-btn' onClick={() => { showupdatedetails(), setUpdatedetail(update) }}>See details</button>
                          <button className='btn details-btn' onClick={() => undochange(update._id, update.page, update.id)}>Undo Changes</button>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
              }

              {filterUpdates[0].hasOwnProperty('updatedBy') && <ul style={{ listStyle: 'none' }} className='row'>
                {
                  filterUpdates.map((update) => (
                    <li className="col-lg-4 col-md-6 col-sm-12 mb-4" >
                      <div className='updates'>
                        <h4 className="text-center">{update.page}</h4>
                        <hr />
                        <p>Date: {update.date}</p>
                        <p>Updated By : {update.updatedBy}</p>
                        <button className='btn details-btn' onClick={() => { showupdatedetails(), setUpdatedetail(update) }}>See details</button>
                      </div>
                    </li>
                  ))
                }
              </ul>
              }
            </div>

            {/* --------admin Registration Form---------- */}
            <div className="loginForm2 dfdc jcac w-100" id='addadminform' style={{ display: 'none', position: 'absolute', maxWidth: '50vw', left: '25%' }}>
              <div className="login_field login_field2 dfdc jcac">
                <h2 className="fw-bold login_title"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-lock" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>Register New Admin</h2>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="dfdc">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="Mobile Number">Mobile Number</label>
                        <input type="text" id="directorPassword" onChange={(e) => setMobile(e.target.value)} placeholder="9999999999" />
                        <div>
                          <label htmlFor="profilephoto">Profile Photo</label>
                          <input type="file" onChange={(e) => setImgUrl(e.target.files[0])} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="dfdc">
                        <label htmlFor="directorEmail">Enter Email</label>
                        <input type="text" id="directorEmail" onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" />
                        <label htmlFor="directorPassword2">Enter Password</label>
                        <input type="text" id="directorPassword2" onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                      </div>
                    </div>
                    <div className="text-center">
                      <button className='me-4 btn btn-primary mt-4 ps-4 pe-4' onClick={addadmin}>Register</button>
                      <button className='btn btn-primary mt-4 ps-4 pe-4' onClick={hideform}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------show update details--- */}
            <div className="container update_detail" id="update_detail" style={{ display: 'none' }}>
              <h2 className="text-center">{updatedetail.page}</h2><hr />
              <div className="d-flex">
                <div className='me-4'>Updated By: {updatedetail.updatedBy}</div>
                <div>Date: {updatedetail.date}</div>
              </div>
              <hr />
              <div className='olddetail mb-4'>
                <h5>Old Data</h5>
                {updatedetail.oldData}
              </div>
              <div className='newdetail'>
                <h5>New Data</h5>
                {updatedetail.newData}
              </div>
              <div className="d-flex justify-content-end">
                <button className='btn btn-primary ms-4 mt-4 me-4' onClick={() => undochanges(updatedetail)}>Undo Changes</button>
                <button className='btn btn-secondary mt-4 ' onClick={hidedetail} >Cancel</button>
              </div>
            </div>

            {/* --------------notification----------- */}
            <div className="container update_detail" id="notification" style={{ display: 'none' }}>
              <h2 className="text-center">Notifications </h2><hr />
              <div className="d-flex flex-column" style={{overflowY:scrollY}}>
                <b>New Notifications</b>
                <ul>
                  {
                    notifications.map((notification) => (
                      <li key={notification._id}>
                        <b>{notification.updatedBy}</b> make changes in {notification.page} page
                        <p> <i>{notification.date}</i> </p>
                      </li>
                    ))
                  }
                </ul>

                <b>Old Notifications</b>
                <ul>
                  {
                    oldNotifications.map((notification) => (
                      <li key={notification._id}>
                        <b>{notification.updatedBy}</b> make changes in {notification.page} page
                        <p> <i>{notification.date}</i> </p>
                      </li>
                    ))
                  }
                </ul>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <button className='btn btn-secondary' onClick={() => hidedetail('notification')} >Cancel</button>
                </div>
              
            </div>

            {/* --------update password form */}
            <div className="container update_detail" id="update_password" style={{ display: 'none' }}>
              <h2 className="text-center">Change Password</h2><hr />
              <div>
                <p>Old Password</p>
                <input type="text" onChange={(e) => setPassword4compare(e.target.value)} />
                {checkPassErr && <p className='text-danger'>Incorrect Password</p>}
                <p>New Password</p>
                <input type="password" onChange={(e) => { checkpassword(), setConfirmNewPassword(e.target.value) }} />
                <p>Confirm Password</p>
                <input type="text" onChange={(e) => checknewpassword(e.target.value)} />
                {confirmNewPassErr && <p className='text-danger'>Password Mismatched</p>}
              </div>
              <hr />

              <div className="d-flex justify-content-end">
                {!checkPassErr && !confirmNewPassErr && <button className='btn btn-primary ms-4 mt-4 me-4' onClick={updatepassword}>Update</button>}
                <button className='btn btn-secondary mt-4 ' onClick={() => hidedetail('update_password')} >Cancel</button>
              </div>
            </div>

            {/* -------Name updation form---------- */}
            <div className="container update_detail" id="update_name" style={{ display: 'none' }}>
              <h2 className="text-center">Change Password</h2><hr />
              <div>
                <p>Enter New Name</p>
                <input type="text" onChange={(e) => setNewName(e.target.value)} />
              </div>
              <hr />

              <div className="d-flex justify-content-end">
                <button className='btn btn-primary ms-4 mt-4 me-4' onClick={updatename}>Update</button>
                <button className='btn btn-secondary mt-4 ' onClick={() => hidedetail('update_name')} >Cancel</button>
              </div>
            </div>

            {/* -------DP updation form---------- */}
            <div className="container update_detail" id="update_dp" style={{ display: 'none' }}>
              <h2 className="text-center">Change DP</h2><hr />
              <div>
                <p>Choose Profiel Picture</p>
                <input type="file" onChange={(e) => setNewdp(e.target.files[0])} />
              </div>
              <hr />

              <div className="d-flex justify-content-end">
                <button className='btn btn-primary ms-4 mt-4 me-4' onClick={updatedp}>Update</button>
                <button className='btn btn-secondary mt-4 ' onClick={() => hidedetail('update_dp')} >Cancel</button>
              </div>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-0 m-0 p-0">
          <div className="page">
            <div className="admins">
              <div className='bg-white dr'><h4 className='mt-2'>Admins</h4></div>
              <button className='btn addbtn mt-3' onClick={displayform}>Add New Admin</button>
              <ul>
                {admins.map((admin) => (
                  <li>
                    <Dropdown as={ButtonGroup} className='adminbtn'>
                      <Button style={{ color: admin.isActive ? 'white' : '#ababab', }} className='adminname d-flex justify-content-evenly'> <img src={admin.imgUrl} alt="" style={{ height: '28px', width: '28px', borderRadius: '50%' }} /> {admin.adminName}</Button>
                      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{ background: 'midnightblue', width: '10px' }} />
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => removeadmin(admin.email)}>Remove</Dropdown.Item>

                        {admin.isActive ? <Dropdown.Item onClick={() => deactivate(admin.email)}>Deactivate</Dropdown.Item> :
                          <Dropdown.Item onClick={() => activate(admin.email)}>Activate</Dropdown.Item>}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
      <button className='btn btn-primary' onClick={superadminregistration}>Super admin register</button>
    </>
  )
}