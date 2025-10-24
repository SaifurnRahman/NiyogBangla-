import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import CompanyDetailsPage from '../Components/CompanyDetailsPage';

const CompanyDetails = () => {

    const data = useLoaderData()
    const {id} = useParams();
    const [details, setDetails] = useState({})
    useEffect(()=> {
        const companyDetails = data.find((company)=> company.id == id);
        setDetails(companyDetails)

    }, [data, id])
    return (
        <div>
            <header><Navbar></Navbar></header>
        <main>
            <CompanyDetailsPage details={details}></CompanyDetailsPage>
        </main>
        </div>
    );
};

export default CompanyDetails;