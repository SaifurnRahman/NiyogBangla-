import React, { use } from 'react';
import { NavLink } from 'react-router';
const companiesPromise = fetch('/companies-basic.json').then((res) => res.json());


const Companies = () => {
    const companies = use(companiesPromise);
    return (
        
        <div className='bg-secondary pt-10'>
            <h1 className='text-4xl font-bold '>Top Hiring Companies</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-5 p-14'>
            {
                companies.map((company) =>  (
                    <NavLink
                    key={company.id}
                    to={`/company/${company.id}`}
                    
                    >
                        <div className='bg-white flex items-center justify-center w-30 h-30 rounded-full border-4 border-gray-200 hover:border-blue-400  transition duration-300'>
                            <img className='h-16 w-16 object-contain' src={company.logo} alt={company.name} />
                        </div>
                    </NavLink>
                ))
            }
        </div>
        </div>
    );
};

export default Companies;