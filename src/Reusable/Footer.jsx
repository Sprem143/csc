
import './Footer.css'
export default function Footer() {

  return (
    <>
      <section style={{ position: "relative", height: '150px' }}>
        <div className="container-fluid">
          <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle" style={{ backgroundImage: " url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
            </div>
            <div className="waveWrapperInner bgBottom">
              <div className="wave waveBottom" style={{ backgroundImage: " url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
            </div>
          </div>
        </div>
      </section>
      <section className='p-4'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-12 p-2">
              <p className='fs3'>BHARTI EYE FOUNDATION</p>
              <p className='fs2'>A Centre of Excellence in Eye Care for 37 years, Bharti Eye Foundation was conceptualised and nurtured by Dr. S. Bharti in 1985. The hospital has been accredited for patient safety and quality of care by the National Accreditation Board for Hospitals and Healthcare Providers (NABH) , a constituent Board of Quality Council of India. All super-speciality eye treatment services and investigations are available under one roof.</p>
            </div>
            <div className="col-lg-4 col-sm-12 p-2">
              <h3 className="text-center">SEARCH SOMETHING </h3>
              <input type="text" className='p-2 mt-4' style={{ borderRadius: '10px', border: '1px solid gray', width: '30vw' }} placeholder="Search" /> <br />
              <div className='mt-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" ms-3 bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg> <span className='fs2'>1/3 East Patel Nagar, New Delhi - 110008.</span>
              </div>

             <div className='mt-4'>
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-3 bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg> <span className="fs2">eyefoundation.bharti@gmail.com</span>
             </div>
             <div className="mt-4 ms-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> <span className="fs3">011-35577127 / 011-43584748</span>
             </div>
             <div className="mt-4 ms-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg> <span className='fs2'><a href="">9205333457</a> Whatsapp For Any Query</span>
             </div>
            </div>
            <div className="col-lg-4 col-sm-12">
<p className="fs-3 mb-4 ms-4 ps-4">OPENING HOURS</p>
<div className="sb">
  <p>Week Days</p>
  <p>9am - 6am</p>
</div>
<hr />
<div className="sb">
  <p>Sunday</p>
  <p>Closed</p>
</div>
<hr />
<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.9344558661473!2d86.86701397353792!3d26.36098187698034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee550f79d68d51%3A0xb04831a7336a0a5!2sPrem%20Common%20Service%20Centre!5e0!3m2!1sen!2sin!4v1721567337814!5m2!1sen!2sin" width="100%"   style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
</div>
 

            </div>
          </div>
        </div>

      </section>
<div className="dr" style={{backgroundColor:'aquamarine', height:'100px', width:'100%'}}>
<p>Copyright @Copyright; 2022 · All Rights Reserved Bharti Eye Foundation</p>
</div>

    </>
  )
}