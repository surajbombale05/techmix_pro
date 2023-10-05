import React from 'react';
import cardsData from './data';

const Middle = () => {
  return (
    <div className="container">
    <p fs-5 className='text-center text-primary'>PRICING PLANS</p>
      <p className="h1 text-center"><b> Affordable pricing for all</b></p>
      <div className="row mt-5">
        {cardsData.map((card, index) => (
          <div className="col-md-4" key={card.id}>
            <div className="card mb-4">
              {/* Apply gradient background only to the second card */}
              <div
                className="card-body"
                style={{
                  background: index === 1 ? 'linear-gradient(-180deg, #43baff 0%, #7141b1 100%)' : 'white',
                  color: index === 1 ? 'white' : 'black',
                }}
              >
                
                <h5 className="h2 card-title mt-3"><b>{card.title}</b></h5>
                <p><span className='h5 text-primary'>{card.dollor}</span><span className='h1 text-primary'><b>{card.integer}</b></span><span>{card.month}</span></p>
                <p className="card-text">{card.description1}</p>
                <p className="card-text">{card.description2}</p>
                <p className="card-text">{card.description3}</p>
                <p className="card-text">{card.description4}</p>
                <button type="button" class="mt-3 mb-3 px-4 btn btn-primary">{card.Primary}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
