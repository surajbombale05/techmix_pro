import React from 'react'

const cardData = [
    {
      cardimg:'fc1.png',
      title: '1790',
      content: 'HAPPY CLIENTS',
    },
    {
        cardimg:'fc2.png',
      title: '491',
      content: 'FINISHED PROJECTS',
    },
    {
        cardimg:'fc3.png',
      title: '245',
      content: 'SKILLED EXPERTS',
    },
    {
        cardimg:'fc4.png',
      title: '1090',
      content: 'MEDIA POSTS',
    },
  ];

const Fourcards = () => {
  return (
    <div>
      <div className="container mt-5 pt-5">
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {cardData.map((card, index) => (
          <div key={index} className="col">
            <div className="card" style={{height:'150px'}}>
              <div className="card-body d-flex justify-content-evenly">
                <img src={card.cardimg} alt='1' style={{width:'70px' , height:'70px'}}/>
                <div>  <h5 className="card-title ms-4 text-primary fs-3"><b>{card.title}</b></h5>
                <p className="card-text ms-4">{card.content}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Fourcards;
