import { useEffect, useState } from 'react';
import '../App.scss'
import '../index.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TypeAnimation } from 'react-type-animation';
import { Link, Outlet } from 'react-router-dom';
import 'animate.css';
import './Header.scss'

export default function Header() {
  const [centerName, setCenterName]= useState('');
  const [mobileNumber, setMobileNumber]= useState('');
  const [logo1,setLogo1]= useState('');
  const [logo2,setLogo2]= useState('');

 useEffect(()=>{
  // setData();
  getCenterName();
 },[])
const setData=async()=>{
  try{
   let result= await fetch('https://cp-frontend-o29c.onrender.com/header/addContent',{
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({tagName:'header',data:{centerName:'Prem Common Service Center', mobileNumber:7366943700,logo1:'http://res.cloudinary.com/dfnzn3frw/image/upload/v1724157332/jtxxzfy7ejzf6daliqxg.jpg', logo2:'http://res.cloudinary.com/dfnzn3frw/image/upload/v1724157516/jnv8eunahmyaepavuje4.jpg'}})

   })
   result= await result.json();
   console.log(result);
  }catch(err){
    console.log(err);
  }
}
const getCenterName=async()=>{
  try{
    let result=await fetch('https://cp-frontend-o29c.onrender.com/header/getCenterName',{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    })
     result=await result.json();
    setCenterName(result.centerName.centerName);
    setMobileNumber(result.centerName.mobileNumber);
    setLogo1(result.centerName.logo1)
    setLogo2(result.centerName.logo2)
  }catch(err){
    console.log("Error while getting Center Name");
  }
}

  window.onscroll = function () {
    handleScroll();
  };

  function handleScroll() {
    var upperNavbar = document.getElementById("navbar-upper");
    if (window.scrollY >= 30) { // You can adjust the value for when the upper navbar should disappear
      upperNavbar.style.display = "none";
    } else {
      upperNavbar.style.display = "block";
      upperNavbar.style.boxShadow = "2px 2px 5px 5px red";

    }
  }

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="navbar-upper" id="navbar-upper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-12 sb">
                <button className="nav_btn"><a href="https://wa.me/7366943700" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className=" me-2bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg> <span className="text-dark">Whatsapp</span></a>
                </button>
                <button className="nav_btn"> <a className='text-dark' href="tel:+917366943700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="animate__pulse me-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg><span >{mobileNumber}</span>
                </a>  </button>
              </div>
              <div className="col-lg-4 col-sm-12">

                <TypeAnimation preRenderFirstString={true}
                  sequence={[
                    'Our Services : Cash Withdraw',
                    1000, // Waits 1s
                    'Our Services : Cash Deposite',
                    2000, // Waits 2s
                    'Our Services : Pan Card',
                    3000, // Waits 2s
                    'Our Services : Eshram Card',
                    4000, // Waits 2s
                    'Our Services : Bridha Pension',
                    5000, // Waits 2s
                    'Our Services : Ayushman Card',
                    6000, // Waits 2s
                    'Our Services : Insurance',

                  ]}
                  speed={40}
                  style={{ fontSize: '2em' }}
                  repeat={Infinity}
                />

              </div>
              <div className="col-lg-4 col-sm-12 d-flex">
                <span className='animate__animated animate__pulse name' > {centerName}  </span>
                <DropdownButton id="dropdown-basic-button" className='ms-3' style={{zIndex:'10000'}} title="">
      <Dropdown.Item href="#/action-1"> <Link to="/superadmin">Super Admin</Link> </Dropdown.Item>
      <Dropdown.Item href="#/action-1"><Link to="/admin">Admin</Link></Dropdown.Item>
    </DropdownButton>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-lower">
          <div className='dr'>
          </div>
          <div>
            {['lg'].map((expand) => (
              <Navbar key={expand} expand={expand} className='navbarClr'>
                <Container fluid>
                  <Navbar.Brand href="#">
                    <img src={logo1} style={{ borderRadius: '50%' }} alt="logo2" height='90' />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <img src={logo1} style={{ borderRadius: '50%' }} alt="logo2" height='50' />
                      <span className='ms-4'>Prem CSC</span>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="jcse pe-3">
                        <Nav.Link href="#action1"><Link to='/home'>Home</Link></Nav.Link>
                        <Nav.Link id='service' href="#action2">
                          Services
                          <div className="option option_service dc">
                          <a href="">PAN Card</a>
                          <a href="">E-Shram Card</a>
                          <a href="">Ayushman Card</a>
                          <a href="">Insurance</a>
                          <a href="">AEPS Service</a>
                          <a href="">Print</a>
                        </div>
                          </Nav.Link>

                          <Nav.Link id='bank' href="#action2">
                          Banking
                          <div className="option option_bank dc">
                          <a href="">Account Opening</a>
                          <a href="">Cash Withdraw</a>
                          <a href="">Cash Deposite</a>
                          <a href="">KYC</a>
                          <a href="">Transter</a>
                          <a href="">UPI Payment</a>
                        </div>
                          </Nav.Link>

                          <Nav.Link id='rtps' href="#action2">
                          RTPS Services
                          <div className="option option_rtps dc">
                          <a href="">Cast Certificate</a>
                          <a href="">Residence Certificate</a>
                          <a href="">Income certificate</a>
                          <a href="">NCL</a>
                          <a href="">Character Certificate</a>
                          <a href="">EWS</a>
                        </div>
                          </Nav.Link>

                          <Nav.Link id='branch' href="#action2">
                          Branches
                          <div className="option option_branch dc">
                          <a href="">Ram CSP - Fakirna- Ram Kumar Sahu</a>
                          <a href="">Jai Mata Di CSC- Hariraha - AJay Kumar Sutihar</a>
                        </div>
                          </Nav.Link>

                          <Nav.Link href="#action2">About</Nav.Link>
                          <Nav.Link href="#action2">Contact</Nav.Link>
                          <Nav.Link href="#action2">Privacy & Policy</Nav.Link>
                      </Nav>
                      <Navbar.Brand href="#">
                        <img src={logo2} alt="logo1" height='90' style={{borderRadius:'10px'}} />
                      </Navbar.Brand>
                    </Offcanvas.Body>

                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}
