import React from 'react'

const Prepare = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card mt-5 border-0">
              <p className='text-primary'>WHO WE ARE</p>
              <p className='h1'><b> Highly Tailored IT Design, Management & Support Services.</b></p>
              <p className='mt-4' >Accelerate innovation with world-class tech teams We’ll match you
                to an entire remote team of
                incredible freelance talent for all your software development needs.</p>
              <hr class="border border-dark border-1 mr-3 opacity-10" style={{ marginRight: '40px' }} />
              <div>

                <div className="row">
                  <div className="col-md-6">
                    {/* Left side content */}
                    <div className="p-3">
                      <img src='sign.png' alt='' />
                      <p></p>
                      <b className='mt-4' style={{ fontSize: '17px' }}> Alen Morno sin</b><br />
                      <p className='mb-4 position-absolute' style={{ fontSize: '12px' }}>CEO, Techmaxide.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Vertical line */}
                    <div className="vl"></div>
                    {/* Right side content */}
                    <div className="p-3">

                      <p> Call to ask any question</p>
                      <h3 className='text-primary'>0123-456-7890</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6">
  <div className="card border-0">
    <div className='position-relative'>
      <img src='aboutbig2.jpg' alt='' className='img-fluid float-end' />
    </div>
    <img
      src='aboutsm2.jpg'
      alt=''
      className=' img-fluid mt-5 position-absolute top-50 start-50 translate-middle d-none d-lg-block'
      style={{ maxWidth: '100%' }}
    />
  </div>
</div>



        </div>
      </div>
    </div>
  )
}

export default Prepare;
