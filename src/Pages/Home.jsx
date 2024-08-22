import { useEffect, useState } from 'react';
import '../App.scss'
import '../index.scss';
import Form from 'react-bootstrap/Form';

export default function Home() {
  const [heading1, setHeading1] = useState('');
  const [heading2, setHeading2] = useState('');
  const [about, setAbout] = useState('');
  const [service, setService] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    verifyToken();
    getdata();
  }, [token]);

  const getdata = async () => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/home/getHomePageContent', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      result = await result.json();
      setHeading1(result.heading);
      setAbout(result.about);
      setHeading2(result.heading2);
      setService(result.service);
    } catch (err) {
      console.log("Error while getting data:", err);
    }
  }

  const verifyToken = async () => {
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    try {
      let result = await fetch("https://cp-frontend-o29c.onrender.com/auth/verifyToken", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      result = await result.json();
      setIsAuthenticated(result.auth);
    } catch (error) {
      console.error('Token verification failed:', error);
      setIsAuthenticated(false);
    }
  };

  const enableEdit = (id) => {
    if (isAuthenticated) {
      const element = document.getElementById(id);
      if (element) {
        element.style.display= 'block';
      }
    }
  }

  const updateaboutpara = async (id, content) => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/home/updateContent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content, id: id })
      });

      result = await result.json();

      if (result.ok) {
        alert(result.message);
        window.location.reload();
      } else {
        console.error('Failed to update content');
      }
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  return (
    <div style={{ padding: '0 6vw' }}>
      <div className='ps-4 pe-4'>
        <h1 onDoubleClick={() => enableEdit('about')} >{heading1}</h1>
        <p onDoubleClick={() => enableEdit('about')} >{about}</p>

        <div className="mb-3 showForm" id="about" >
          <Form.Label>Update about section details</Form.Label>
          <textarea rows={3} cols={150} value={about} onChange={(e) => setAbout(e.target.value)} />
          <button className='btn btn-primary mt-4' onClick={(e) => {
            e.preventDefault();
            updateaboutpara('about', about);
          }} >Save changes</button>
        </div>
      </div>

      {/* ---------second para---- */}
      <div className='ps-4 pe-4'>
        <h1>{heading2}</h1>
        <p onDoubleClick={() => enableEdit('servic')} >{service}</p>

        <div className="mb-3 showForm" id="servic">
          <Form.Label>Update service section details</Form.Label>
          <textarea rows={3} cols={150} value={service} onChange={(e) => setService(e.target.value)} />
          <button className='btn btn-primary mt-4' onClick={(e) => {
            e.preventDefault();
            updateaboutpara('service', service);
          }} >Save changes</button>
        </div>
      </div>
    </div>
  );
}
