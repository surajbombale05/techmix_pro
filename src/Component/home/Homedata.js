import React from 'react';

const imageData = [
  {
    src: 'blog1.jpg',
    text: 'How to become successful businessman',
    read: 'READ FULL',
    person: 'person.jpg',
    andrew: "Andrew Picker",
    comment: 'commentimg.jpg',
    com: '0 comments',
    no:'8',
  },
  {
    src: 'blog2.jpg',
    text: 'Who Needs Extract Value From Data?',
    read: 'READ FULL',
    person: 'person.jpg',
    andrew: "Andrew Picker",
    comment: 'commentimg.jpg',
    com: '0 comments',
    no:'10',
  },
  {
    src: 'blog3.jpg',
    text: 'Easy and Most Powerful Server and Platform.',
    read: 'READ FULL',
    person: 'person.jpg',
    andrew: "Andrew Picker",
    comment: 'commentimg.jpg',
    com: '0 comments',
    no:'12',
  },
];

const Homedata = () => {
  return (
    <div className='mt-5'>
      
      <p className=' text-center text-primary'>LATEST BLOG</p>
      <p className='text-center h1'><b>From the news room</b></p>

      <div className="container">
        <div className="row">
          {imageData.map((image, index) => (
            <div className="my-1 col-md-4" key={index}>
              <div className="image-container position-relative">
                <img src={image.src} alt='34' className="img-fluid" />

                {/* psitioned by date */}
                <div className="text-white text-center px-3 mx-4 my-4 position-absolute top-0 start-0 d-flex flex-column align-items-center" style={{ background: 'linear-gradient(-180deg, #43baff 0%, #7141b1 100%)', lineHeight: '1',padding:'10px' }}>
  <span className='fs-3'><b>{image.no}</b></span>
  <span>aug</span>
</div>
                {/* psitioned by bottom */}
                <div className="position-absolute top-100 start-50 translate-middle bg-white text-center" style={{ marginTop: '12px', width: '89%' }}>
                  <p className='text-start fw-lighter '>
                    <img src={image.person} alt='2' height={20} /> <t>{image.andrew}</t>
                    <img src={image.comment} alt='2' height={20} className='ms-3' /> <t>{image.com}</t>
                  </p>
                  <h4>{image.text}</h4>
                  <p className='text-start text-primary' style={{ fontSize: '13px', marginTop: '1 px' }}>{image.read}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homedata;
