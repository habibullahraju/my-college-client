import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const [college, setCollege] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    fetch(`https://my-college-server.vercel.app/searchColleges/${search}`)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  };

  const navigate = useNavigate();
  const handleDetails = (_id)=>{
      navigate('/college-details', {state: _id})
  }

  return (
    <div>
      <div
        className=" md:p-20 p-4  bg-black   w-full object-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1478641300939-0ec5188d3802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80")`,
          
        }}
      >
        <h2 className="md:text-5xl text-4xl   text-white text-center font-bold p-6">
          <span className="text-accent ">Discover the best College</span> <br />{" "}
          & institutions for you.
        </h2>
        <div className="text-center">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-md"
          />
          <button
            onClick={handleSearch}
            className="btn w-full btn-accent text-white md:ml-4 mt-4 sm:max-w-md md:w-1/5"
          >
            Search
          </button>
        </div>
      </div>
        {college.length > 0 && 
        
     <div>
        <h3 className="text-3xl font-semibold text-center mt-6">Your Search Result are:</h3>
         <div className="grid my-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {
         college.map((clg,idx) =>(
             
             <div className="card mx-auto w-96 bg-base-100 shadow-xl">
         <figure>
           <img
             src={clg.collegeImage}
           />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{clg.collegeName}</h2>
           <p>{clg.about}</p>
           <p> <span className="font-semibold">Admission Date:</span> <br />{clg.admissionDates["fall"]} <br /> {clg.admissionDates["spring"]}</p>
         
         <div className="card-actions justify-end">
            <button onClick={()=>handleDetails(clg._id)} className="btn btn-accent">College Details</button>
          </div>
         </div>
       </div>
         ))
        }
       </div>
     </div>
        }
    </div>
  );
};

export default SearchSection;
