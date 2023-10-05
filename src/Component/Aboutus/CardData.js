import React from 'react'

const Data = [
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/ser-icon9.png",
      title: "Infrustructure Technology",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/counter-3.png",
      title: "Highly professional team members",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/ser-icon10.png",
      title: "Security Management",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/ser-icon12.png",
      title: "Desktop Computing",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/counter-1.png",
      title: "Infrustructure Technology",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/counter-2.png",
      title: "Ideas for high return investment",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/ser-icon21.png",
      title: "Fully high IT Managment",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/ser-icon22.png",
      title: "Data secure & Managment",
      describe: "Accelerate innovation with world-class tech teams We’ll match you to an entire."
    },
  ]

const CardData = () => {
  return (
    <div>
       <div className="container mt-5">
        <div className="row">
          {Data.map((item, index) => (
            <div className="col-md-6 col-sm-4 col-lg-3   d-flex align-items-start " key={index}>
              <div className="card mb-4 p-4 carddata">
                <img src={item.img} className="card-img-top datac" alt="not found" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.describe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardData;
