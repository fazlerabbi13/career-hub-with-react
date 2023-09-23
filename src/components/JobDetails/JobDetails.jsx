import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/LocalStorage";
const JobDetails = () => {
    const jobs =useLoaderData();
    const {id} = useParams();
    const idInt =parseInt(id);
    const job =jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApply =() => {
        saveJobApplication(idInt);
        toast('You have apply successfully');
    }

    return (
        <div>
            <h2>Job Details:{job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="grid md:col-span-3">
                    <h2 className="text-4xl">Details Comming Here</h2>
                    <h2>Job Details:{job.job_title}</h2>
                    
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                    <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
                
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;