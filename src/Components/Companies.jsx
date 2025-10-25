import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("/companies-basic.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((err) => console.error("Error loading companies:", err));
  }, []);

  return (
    <section className="bg-blue-50 rounded-2xl py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Top Hiring Companies
        </h2>

    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {companies.map((company) => (
            <NavLink
              key={company.id}
              to={`/company/${company.id}`}
              className="relative group"
            >
             
              <div className="flex items-center justify-center w-28 h-28 bg-white rounded-full border-2 border-gray-200 shadow-sm transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:-translate-y-1">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <p className="mt-3 text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {company.name}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;