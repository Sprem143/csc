import { useEffect, useState } from 'react';
import '../App.scss'
import '../index.scss';
import Form from 'react-bootstrap/Form';

export default function Home() {
  const [hh1, sethh1] = useState('');
  const [hh2, sethh2] = useState('');
  const [hh3, sethh3] = useState('');
  const [hh4, sethh4] = useState('');
  const [hh5, sethh5] = useState('');
  const [hh6, sethh6] = useState('');
  const [hh7, sethh7] = useState('');
  const [hh8, sethh8] = useState('');
  // const [hh9, sethh9] = useState('');
  // const [hh10, sethh10] = useState('');
  const [hp1, sethp1] = useState('');
  const [hp2, sethp2] = useState('');
  const [hp3, sethp3] = useState('');
  const [hp4, sethp4] = useState('');
  const [hp5, sethp5] = useState('');
  const [hp6, sethp6] = useState('');
  const [hp7, sethp7] = useState('');


  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [admin, setAdmin] = useState({});
  var token;
  if (localStorage.getItem('superAdminToken')) {
    token = localStorage.getItem('superAdminToken')
  }
  if (localStorage.getItem('adminToken')) {
    token = localStorage.getItem('adminToken')
  }
  useEffect(() => {
    verifyToken();
    getdata();
    getstatusofadmin()

    // setData()
  }, [token]);


  // -------get status of admin-------
  const getstatusofadmin = async () => {
    if (localStorage.getItem('admin')) {
      try {
        const admin = localStorage.getItem('admin');
        let result = await fetch('https://cp-frontend-o29c.onrender.com/admin/getadmin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ adminName: admin })
        });
        result = await result.json();
        setAdmin(result.result);
        setIsActive(result.result.isActive);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const getdata = async () => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/home/getHomePageContent', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      result = await result.json();
      sethh1(result.hh1);
      sethh2(result.hh2);
      sethh3(result.hh3);
      sethh4(result.hh4);
      sethh5(result.hh5);
      sethh6(result.hh6);
      sethh7(result.hh7);
      sethh8(result.hh8);
      sethp1(result.hp1);
      sethp2(result.hp2);
      sethp3(result.hp3);
      sethp4(result.hp4);
      sethp5(result.hp5);
      sethp6(result.hp6);
      sethp7(result.hp7);
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
      let result = await fetch("https://cp-frontend-o29c.onrender.com/superadmin/verifyToken", {
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
      if(!isActive){
       alert("You are not active admin");
       document.getElementById(id).style.display='none'
      }else{
        const element = document.getElementById(id);
        if (element) {
          element.style.display = 'block';
      }
      
      }
    }
  }

  const updateaboutpara = async (id, content) => {
    try {
      let result = await fetch('https://cp-frontend-o29c.onrender.com/admin/updateContent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content, id: id, admin: admin.adminName, page: 'home' })
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

  // const setData = async () => {
  //   try {
  //     let result = await fetch('https://cp-frontend-o29c.onrender.com/home/addContentToHome', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         page: 'home', data:
  //         {
  //           hh1: 'Empowering Dreams, Facilitating Entrepreneurs',
  //           hp1: "Join thousands who’ve turned dreams into reality with Delberto. Start today and watch your business grow!.",

  //           hp2: "Delberto aims to empower artisans, crafters, aspiring entrepreneurs (individuals, students, retired professionals), small businesses, and marginalized communities through our SaaS-based technology platform. Our goal is to facilitate entrepreneurship by connecting suppliers with sellers, regardless of their prior entrepreneurial or e-commerce experience, and eliminating upfront costs. We provide advanced tools for business growth, customization options, streamlined logistics, and global payment integrations.",
  //           hh2: "Whether you're an artist, a local business owner, a small manufacturer, or an aspiring entrepreneur, Delberto is the ideal platform for your needs.",
  //           hh3: "Cost-Effective Platform",
  //           hp3: "Delberto eliminates significant upfront investments, making it accessible to users with limited financial resources.",
  //           hh4: "Connecting Suppliers & Sellers",
  //           hp4: "Delberto bridges the gap between suppliers and sellers, enhancing visibility and business opportunities with an easy-to-use platform for expanding networks.",
  //           hh5: "User-Friendly Interface",
  //           hp5: "Simplifies the process of setting up and managing online stores, requiring minimal technical knowledge.",
  //           hh6: "Unique Differentiators",
  //           hp6: "Offers low commission, faster payment cycles, no seller tiering, no private labels, and focuses on low AOV (Average Order Value) products.",
  //           hh7: "Global Market Reach",
  //           hp7: "Integrates with global payment gateways and popular e-commerce platforms to expand market reach.",
  //           hh8: "Products & Pricing"

  //         }
  //       })

  //     })
  //     result = await result.json();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    // <div style={{ padding: '0 6vw' }}>
    //   <div className='ps-4 pe-4'>
    //     <h1 onDoubleClick={() => enableEdit('about')} >{heading1}</h1>
    //     <p onDoubleClick={() => enableEdit('about')} >{about}</p>

    //     <div className="mb-3 showForm" id="about" >
    //       <Form.Label>Update about section details</Form.Label>
    //       <textarea rows={3} cols={150} value={about} onChange={(e) => setAbout(e.target.value)} />
    //       <button className='btn btn-primary mt-4' onClick={(e) => {
    //         e.preventDefault();
    //         updateaboutpara('about', about);
    //       }} >Save changes</button>
    //     </div>
    //   </div>

    //   {/* ---------second para---- */}
    //   <div className='ps-4 pe-4'>
    //     <h1>{heading2}</h1>
    //     <p onDoubleClick={() => enableEdit('servic')} >{service}</p>

    //     <div className="mb-3 showForm" id="servic">
    //       <Form.Label>Update service section details</Form.Label>
    //       <textarea rows={3} cols={150} value={service} onChange={(e) => setService(e.target.value)} />
    //       <button className='btn btn-primary mt-4' onClick={(e) => {
    //         e.preventDefault();
    //         updateaboutpara('service', service);
    //       }} >Save changes</button>
    //     </div>
    //   </div>
    // </div>
    <>
      <main className="main">

        <section id="hero" className="hero section">

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center pt-4"
                style={{ marginTop: '70px' }}>
                <h1 onDoubleClick={() => enableEdit("hh1")}>{hh1}</h1>
                {/* update form */}
                <div className="mb-3 showForm" id="hh1" >
                  <Form.Label>Update Heading</Form.Label>
                  <textarea rows={1} cols={100} value={hh1} onChange={(e) => sethh1(e.target.value)} />
                  <button className='btn btn-primary mt-4' onClick={(e) => {
                    e.preventDefault();
                    updateaboutpara('hh1', hh1);
                  }} >Save changes</button>
                </div>
                <p style={{ textAlign: 'left' }} onDoubleClick={(e) => enableEdit('hp1')}>{hp1}</p>
                {/* update form */}
                <div className="mb-3 showForm" id="hp1" >
                  <Form.Label>Update Paragraph</Form.Label>
                  <textarea rows={1} cols={100} value={hp1} onChange={(e) => sethp1(e.target.value)} />
                  <button className='btn btn-primary mt-4' onClick={(e) => {
                    e.preventDefault();
                    updateaboutpara('hp1', hp1);
                  }} >Save changes</button>
                </div>
                <div className="d-flex flex-column flex-md-row" >
                  <a href="#about" className="btn-get-started fw-bolder">Begin Now <i className="bi bi-arrow-right"></i></a>
                </div>

              </div>
              <div className="col-lg-6 order-2 order-lg-2 hero-img pt-2" data-aos="zoom-out">
                <img src="/static/images/carousel-new.png" className="carousel img-fluid animated mt-4" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section" style={{ paddingTop: ' 0 !important' }}>

          <div className="container" data-aos="fade-up">
            <div className="row gx-0">

              <div className="col-lg-12 d-flex flex-column justify-content-center text-center" data-aos="fade-up"
                data-aos-delay="200">
                <div className="content">

                  <p className=" fs-5 taj" onDoubleClick={() => enableEdit('hp2')}>{hp2}</p>
                  {/* update form */}
                  <div className="mb-3 showForm" id="hp2" >
                    <Form.Label>Update Paragraph</Form.Label>
                    <textarea rows={5} cols={100} value={hp2} onChange={(e) => sethp2(e.target.value)} />
                    <button className='btn btn-primary mt-4' onClick={(e) => {
                      e.preventDefault();
                      updateaboutpara('hp2', hp2);
                    }} >Save changes</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* {/* Build Website Section */}
        <section id="services" className="services section build" style={{ margin: ' 0 !important', padding: '0 !important' }}>

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            {/* <h4>Build WebsiDte in your way</h4> */}
            <h3 className="fw-bolder">{hh2}</h3>
          </div>{/* End Section Title */}

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6">
                <div className="service-item item-cyan icon position-relative" style={{ paddingTop: '30px !important' }}>
                  <div className="icon">
                    <img src="/static/images/money-loss.png" alt="Cost effective" />
                  </div>
                  <h3>{hh3}</h3>
                  <p style={{ textAlign: 'justify', padding: '0 2vw' }}>{hp3}</p>

                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item item-cyan icon position-relative" style={{ paddingTop: '30px !important' }}>
                  <div className="icon">
                    <img src="/static/images/delivery-man (1).png" width="70" alt="" />
                  </div>
                  <h3>{hh4}</h3>
                  <p>{hp4}</p>

                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item item-cyan icon position-relative" style={{ paddingTop: '30px !important' }}>
                  <div className="icon">
                    <img src="/static/images/friendship_2059084.png" className="img-fluid" width="70" alt="" />
                  </div>
                  <h3>{hh5}</h3>
                  <p>{hp5}</p>
                </div>
              </div>

            </div>

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item item-cyan icon position-relative" style={{ paddingTop: '30px !important' }}>
                  <div className="icon">
                    <img src="/static/images/money_5601511.png" className="img-fluid" width="70" alt="" />
                  </div>
                  <h3>{hh6}</h3>
                  <p>{hp6}</p>

                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item item-cyan icon position-relative" style={{ paddingTop: '30px !important' }}>
                  <div className="icon">
                    <img src="/static/images/global-market_17227726.png" className="img-fluid" width="70" alt="" />
                  </div>
                  <h3>{hh7}</h3>
                  <p>{hp7}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section" style={{ background: '#f4f4f4' }}>
          <div className="container section-title justify-content-center mb-0 pb-0" data-aos="fade-up">
            <h2>{hh8}</h2>
          </div>
          <div className="container">
            <div className="isotope-layout" data-default-filter=".filter-monthly" data-layout="masonry" data-sort="original-order">
              <div id="exTab1" className="container">

                <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                  <li data-filter=".filter-monthly" className="filter-active">Monthly</li>
                  <li data-filter=".filter-quarterly">Quarterly</li>
                  <li data-filter=".filter-annually">Annually</li>
                </ul>
                {/* End Portfolio Filters */}

                <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-monthly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Tailorfy</h2>
                      <p className="p-2">No upfront inventory costs, quick setup, and direct profit disbursement in just 15 minutes!</p>
                      <h4>$20</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-monthly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Bespokify</h2>
                      <p className="p-2">Makes selling easy on your website or major e-commerce platforms.</p>
                      <h4>$30</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-monthly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Webify</h2>
                      <p className="p-2">User-friendly eCommerce builder, setting up your store in just 30 seconds.</p>
                      <h4>$12</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}


                  {/* End Portfolio Item */}

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-monthly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Suppokify</h2>
                      <p className="p-2">Upload products and connect with a vast reseller network - no selling worries for small and local suppliers.</p>
                      <h4>$15</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-quarterly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Tailorfy</h2>
                      <p className="p-2">No upfront inventory costs, quick setup, and direct profit disbursement in just 15 minutes!</p>
                      <h4>$18</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-quarterly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Bespokify</h2>
                      <p className="p-2">Makes selling easy on your website or major e-commerce platforms.</p>
                      <h4>$27</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-quarterly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Webify</h2>
                      <p className="p-2">User-friendly eCommerce builder, setting up your store in just 30 seconds.</p>
                      <h4>$10</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-quarterly">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Suppokify</h2>
                      <p className="p-2">Upload products and connect with a vast reseller network - no selling worries for small and local suppliers.</p>
                      <h4>$13</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-annually">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Tailorfy</h2>
                      <p className="p-2">No upfront inventory costs, quick setup, and direct profit disbursement in just 15 minutes!</p>
                      <h4>$16</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-annually">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Bespokify</h2>
                      <p className="p-2">Makes selling easy on your website or major e-commerce platforms.</p>
                      <h4>$24</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-annually">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Webify</h2>
                      <p className="p-2">User-friendly eCommerce builder, setting up your store in just 30 seconds.</p>
                      <h4>$8</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>
                  {/* End Portfolio Item */}


                  {/* End Portfolio Item */}

                  <div className="col-lg-3 col-md-4 portfolio-item isotope-item filter-annually">
                    <div className="pricing-item crd p-4" style={{ textAlign: ' center' }}>
                      <h2 className="fw-bolder">Suppokify</h2>
                      <p className="p-2">Upload products and connect with a vast reseller network - no selling worries for small and local suppliers.</p>
                      <h4>$10</h4>
                      <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </section>

        {/*   moving logos */}
        <section className="pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <h1 className="stores">Some of our <span className="fs-1">Stores</span> </h1>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="marquee marquee--8">
                  <img className="marquee__item" src="/static/images/part_5.png" width="140" height="90" alt="" />
                  <img className="marquee__item" src="/static/images/b2.webp" width="140" height="90" alt="" />
                  <img className="marquee__item" src="/static/images/b3.webp" width="140" height="90" alt="" />
                  <img className="marquee__item" src="/static/images/b5.webp" width="140" height="90" alt="" />
                  <img className="marquee__item" src="/static/images/n4.webp" width="140" height="90" alt="" />
                  <img className="marquee__item" src="/static/images/logonew.png" width="140" height="90" alt="" />
                  <img className="marquee__item" src="/static/images/part_4.png" width="140" height="90" alt="" />
                  <img className="marquee__item" src="/static/images/part_3.png" width="140" height="90" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features section" style={{ background: '#f8f8f8' }}>
          <div className="container">
            <div className="row gy-5 justify-content-center">
              <h1 className="fs-1 fw-bolder text-center">Pick the model that best matches your needs</h1>
              <div className="col-md-5 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-box item-orange d-flex align-items-center">
                  <div>
                    <h4>Who is Bespokify Perfect For?</h4>
                    <ul>
                      <li>Artisans</li>
                      <li>Crafters</li>
                      <li>Local Businesses</li>
                      <li>Aspiring Entrepreneurs: Individuals, Women, Students, Retired Professionals</li>
                    </ul>
                  </div>
                </div>
              </div>



              <div className="col-md-5 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-box item-orange d-flex align-items-center">

                  <div>
                    <h4>Who is Tailorfy Perfect For?</h4>
                    <ul>
                      <li>Artisans</li>
                      <li>Crafters</li>
                      <li>Local Businesses</li>
                      <li>Aspiring Entrepreneurs: Women, Students, Retired Professionals, Anyone seeking extra income</li>
                    </ul>
                  </div>
                </div>
              </div>{/* End Feature Item */}

              <div className="col-md-5 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-box item-orange d-flex align-items-center">

                  <div>
                    <h4>Who is Webify Perfect For?</h4>
                    <ul>
                      <li>Artisans</li>
                      <li>Crafters</li>
                      <li>Local Businesses</li>
                      <li>First-Time Entrepreneurs

                      </li>
                      <li>Local Manufacturers</li>
                    </ul>
                  </div>
                </div>
              </div>{/* End Feature Item */}

              <div className="col-md-5 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-box item-orange d-flex align-items-center">

                  <div>
                    <h4>Who is Suppokify Perfect For?</h4>
                    <ul>
                      <li>Artisans</li>
                      <li>Crafters</li>
                      <li>Local Manufacturers

                      </li>
                      <li>Wholesalers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/*  product features ----------- */}
        <section className="table-responsive d-flex flex-column align-content-center" style={{ background: '#f8f8f8', paddingLeft: '5vw !important', paddingRight: '5vw !important' }}>
          <h1 className="text-center mb-4 fw-bolder">Products Features</h1>
          <table style={{ paddingLeft: '5vw !important', paddingRight: '5vw !important' }} className="table table-bordered bg-white able-bordered border-secondary align-middle" >
            <thead>
              <tr className="table-info">
                <th scope="col">Tailorfy</th>
                <th scope="col">Bespokify</th>
                <th scope="col">Webify</th>
                <th scope="col">Suppokify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Free SSL</td>
                <td >import unlimited products  from our supported website   </td>
                <td>Free SSL</td>
                <td>lakh of reseller around globe          </td>
              </tr>
              <tr>
                <td>Connect custom domain          </td>
                <td>Semi-automatic order fulfillment <br />with Aliexpress, Amazon and Dhgate</td>
                <td>Connect custom domain          </td>
                <td>low  comission          </td>
              </tr>
              <tr>
                <td>Unlimited Storage          </td>
                <td >Import product videos
                </td>
                <td>Unlimited Storage          </td>
                <td>wide market reach
                </td>
              </tr>
              <tr>
                <td>Password Protection
                </td>
                <td >Custom description
                </td>
                <td>Password Protection
                </td>
                <td>advance analytics
                </td>
              </tr>
              <tr>
                <td>Shopping Cart
                </td>
                <td >Price markup rules
                </td>
                <td>Shopping Cart
                </td>
                <td>logistic and fulfilment
                </td>
              </tr>
              <tr>
                <td>Unlimited Items
                </td>
                <td >24/7 Customer Support
                </td>
                <td>Unlimited Items
                </td>
                <td>marketing and advertising
                </td>
              </tr>
              <tr>
                <td>Item Badges
                </td>
                <td >product customisation
                </td>
                <td>Item Badges
                </td>
                <td>trust and crediblity
                </td>
              </tr>
              <tr>
                <td>Inventory Management
                </td>
                <td >winning products suggestions
                </td>
                <td>Inventory Management
                </td>
                <td>global expansion
                </td>
              </tr>
              <tr>
                <td>automatic markup calculation
                </td>
                <td >one click product addition
                </td>
                <td>Automatic Tax Calculator
                </td>
                <td>customer service 24*7
                </td>
              </tr>
              <tr>
                <td>Coupons
                </td>
                <td >5 lakh plus products
                </td>
                <td>Coupons
                </td>
                <td>scalablity
                </td>
              </tr>
              <tr>
                <td>Shipping Calculator
                </td>
                <td >private label
                </td>
                <td>Shipping Calculator
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Accept payments through PayPal
                </td>
                <td >Artisians and crafter products available
                </td>
                <td>Accept payments through PayPal
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Item Reviews
                </td>
                <td >
                </td>
                <td>Item Reviews
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Shipping Labels
                </td>
                <td ></td>
                <td>Shipping Labels
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Abandoned Cart Emails
                </td>
                <td ></td>
                <td>Abandoned Cart Emails
                </td>
                <td></td>
              </tr>
              <tr>
                <td>SEO
                </td>
                <td ></td>
                <td>SEO
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Lead Capture
                </td>
                <td ></td>
                <td>Lead Capture
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Instagram feed
                </td>
                <td ></td>
                <td>Instagram feed
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Advanced eCommerce Insights
                </td>
                <td ></td>
                <td>Advanced eCommerce Insights
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Chat & Email Support
                </td>
                <td ></td>
                <td>Chat & Email Support
                </td>
                <td></td>
              </tr> <tr>
                <td>Phone Support
                </td>
                <td ></td>
                <td>Phone Support
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Priority Support
                </td>
                <td ></td>
                <td>Priority Support
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Custom description
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Price markup rules
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>24/7 Customer Support
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>product customisation
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>winning products suggestions
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>one click product addition
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5 lakh plus products
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>private label
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>artisians and crafter products available
                </td>
                <td ></td>
                <td></td>
                <td></td>
              </tr>


            </tbody>
          </table>
        </section>


        {/* ====== Slider Block Block ====== */}
        <section id="slider" className="mb-4 pb-4 slider section price" style={{ background: '#f8f8f8' }}>
          <div className="container">

            <div className="row tb default-margin-bottom theme-blue">
              {/* block-title-area */}
              <div className="col-md-9 col-sm-8">
                <div className="section-title aos-init aos-animate">
                  <h2 className="title">What Our Client Said about us </h2>
                </div>{/* /.heading-content-one */}
              </div>{/* /.col-md-9 */}

              {/* block-navigation-area */}
              <div className="col-md-3 block-navigation-area hidden-xs tb-cell">
                <div className="item-navigation nav-right">
                  <a href="#" className="previous-item"><i className="bi bi-arrow-left"></i></a>
                  <a href="#" className="next-item"><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <div className="priceing-slider slider-style-two owl-carousel" data-item="[3,2,2,1]">
              <div className="item">
                <div className="row gx-0 justify-content-center s_bg s_rev">

                  <div className="col-lg-10 d-flex flex-column aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="content" style={{ paddingBottom: "0 !important" }}>
                      <div className="text-center text-lg-start">
                        <div className="abt icon-box">
                          <img src="/static/images/rev_1.png" className="img-fluid" alt="" />
                          <div>
                            <h4>Amelia Joseph</h4>
                            <p>Chief Manager</p>
                          </div>
                        </div>
                      </div>
                      <p>My vision came alive effortlessly. Their blend of casual and professional approach made the process
                        a breeze. Creativity flowed, and the results were beyond my expectations.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="item">
                <div className="row gx-0 justify-content-center s_bg s_rev">

                  <div className="col-lg-10 d-flex flex-column aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="content">
                      <div className="text-center text-lg-start">
                        <div className="abt icon-box">
                          <img src="/static/images/rev_1.png" className="img-fluid" alt="" />
                          <div>
                            <h4>Amelia Joseph</h4>
                            <p>Chief Manager</p>
                          </div>
                        </div>
                      </div>
                      <p>My vision came alive effortlessly. Their blend of casual and professional approach made the process
                        a breeze. Creativity flowed, and the results were beyond my expectations.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="item">
                <div className="row gx-0 justify-content-center s_bg s_rev">

                  <div className="col-lg-10 d-flex flex-column aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="content">
                      <div className="text-center text-lg-start">
                        <div className="abt icon-box">
                          <img src="/static/images/rev_1.png" className="img-fluid" alt="" />
                          <div>
                            <h4>Amelia Joseph</h4>
                            <p>Chief Manager</p>
                          </div>
                        </div>
                      </div>
                      <p>My vision came alive effortlessly. Their blend of casual and professional approach made the process
                        a breeze. Creativity flowed, and the results were beyond my expectations.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Way Section */}
        <section id="features" className="mb-4 mt-4 values section way">

          <div className="container section-title aos-init aos-animate" data-aos="fade-up">
            <h2>So many ways to pay</h2>
          </div>

          <div className="container">

            <div className="row gy-4 justify-content-between">


              <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="card">
                  <img src="/static/images/pay1.svg" className="img-fluid" alt="" />
                </div>
                <h3>So many ways to pay</h3>
                <p style={{ textAlign: "left" }}>Accept Square Pay, Apple Pay, Cash App Pay, and Google Pay for faster checkout.
                </p>
              </div>

              <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="card">
                  <img src="/static/images/pay2.svg" className="img-fluid" alt="" />
                </div>
                <h3>Offer buy now, pay later with Afterpay</h3>
                <p style={{ textAlign: "left" }}>Square Online comes with Afterpay built in. Let your customers pay in four
                  interest-free nstallments,
                  while you get paid in full right away. Learn more about Afterpay →</p>

              </div>{/* End Card Item */}

            </div>

          </div>

        </section>{/* /Way Section */}

        <section id="journey_bg" className="journey section">
          <div className="container">

            <div className="row journey_bg cta-padd justify-content-center aos-init aos-animate" data-aos="zoom-in"
            >

              <div className="col-lg-6 text-center text-lg-start jorn_padd">
                <h3>start your journey with us now</h3>
                <span><a href="#" className="buy-btn">Contact us <i className="bi bi-arrow-right"></i></a></span>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <img src="/static/images/journy.png" className="img-fluid" alt="" />
              </div>
            </div>

          </div>
        </section>



      </main>
    </>
  );
}
