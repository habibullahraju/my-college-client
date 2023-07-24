import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const id = location.state;
  const [collegeDetails, setCollegeDetails] = useState([]);
  useEffect(() => {
    fetch(`https://my-college-server.vercel.app/college-details/${id}`)
      .then((res) => res.json())
      .then((data) => setCollegeDetails(data));
  }, []);
  const {
    collegeName,
    collegeImage,
    foundedYear,
    accreditation,
    programsOffered,
    facilities,
    tuitionFees,
    admissionDates,
    admissionProcess,
    events,
    researchHistory,
    researchWorks,
    sportsCategories,
    contact,
    about,
    highlights,
  } = collegeDetails;
  console.log(collegeDetails);
  return (
    <div>
      <div>
        <div className="card  bg-base-100 shadow-sm">
          <figure>
            <img
              className="w-full h-96 bg-cover object-cover"
              src={collegeImage}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">College Name: {collegeName}</h2>
            <p>
              <span>Founded Year:</span>
              {foundedYear}
            </p>
            <p>
              <span className="font-semibold">About: </span>
              {about}
            </p>
            <p>
              <span className="font-semibold">Admission Process: </span>
              {admissionProcess}
            </p>
            <p>
              <span className="font-semibold">Admission Date: </span>
              {admissionDates?.["fall"]} & {admissionDates?.["spring"]}{" "}
            </p>
            <p><span className="font-semibold">Research History</span> {researchHistory}</p>
            <p className="text-xl font-semibold">Events:</p>
            {events?.map((event, idx) => (
              <div key={idx}>
                <span className="font-semibold">Name:</span> {event.name}{" "}
                <span className="font-semibold"> - </span> {event.date}{" "}
                <span className="font-semibold"> - </span> {event.description}{" "}
              </div>
            ))}
            <p className="text-xl font-semibold">Program offered</p>
            {
                programsOffered?.length > 0 &&
                programsOffered.map(po => <li>{po}</li>)
            }
            <p className="text-xl font-semibold">Tuition Fees</p>
            <p>
               In State ${tuitionFees?.inState} <br />
               Out of State ${tuitionFees?.outOfState}
            </p>
            <p><span className="font-semibold">Sports: <br /></span>{sportsCategories?.[0].name}{sportsCategories?.[0].sports.map((sport, idx) => <li key={idx}>{sport}</li>)} </p>
            <p><span className="font-semibold">Sports: <br /></span>{sportsCategories?.[1].name} {sportsCategories?.[1].sports.map((sport, idx) => <li key={idx}>{sport}</li>)} </p>
            <p className="text-xl font-semibold">Highlights</p>
            <p>{highlights?.map(highlight => <li>{highlight}</li>)}</p>
            <p className="text-xl font-semibold">Contact Information:</p>
            <p>Phone: {contact?.phone}</p>
            <p>E-Mail: {contact?.email}</p>
            <p>Website: {contact?.website}</p>
            <p>Address: {contact?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
<h2>This is Details page</h2>;
