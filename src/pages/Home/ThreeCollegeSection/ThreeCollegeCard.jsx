import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ThreeCollegeCard = ({college}) => {
    const {_id, collegeName,collegeImage, admissionDates, events,researchHistory,sportsCategories} =college;
    const navigate = useNavigate();
    const handleDetails = ()=>{
        navigate('/college-details', {state: _id})
    }

    return (
        <div className="card mx-auto w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={collegeImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{collegeName}</h2>
          <p><span className='font-semibold'>Admission Dates:</span> <br />{admissionDates['fall']} <br /> {admissionDates['spring']}</p>
          <p><span className='font-semibold'>Event:</span> <br />
          {
            events.map((event, idx ) => <div key={idx}><span className="font-semibold">Name:</span> {event.name} <br /> <span className="font-semibold">Date:</span> {event.date} </div> )
          }
          </p>
          <p><span className="font-semibold">Research History:</span>{researchHistory}</p>
          <p><span className="font-semibold">Sports:</span>{sportsCategories[0].sports.map((sport, idx) => <li key={idx}>{sport}</li>)} </p>
          <div className="card-actions justify-end">
            <button onClick={handleDetails} className="btn btn-accent">College Details</button>
          </div>
        </div>
      </div>
    );
};

export default ThreeCollegeCard;