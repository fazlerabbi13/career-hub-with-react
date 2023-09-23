import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs =useLoaderData();
    const {id} = useParams();
    const idInt =parseInt(id);
    const job =jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            <h2>Job Details:{id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="grid md:col-span-3">
                    <h2 className="text-4xl">Details Comming Here</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                    <button>Apply Now</button>
                
                </div>
            </div>
        </div>
    );
};

export default JobDetails;