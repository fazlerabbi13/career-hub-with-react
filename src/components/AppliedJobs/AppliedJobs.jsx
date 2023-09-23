import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [AppliedJobs,setAppliedJobs] = useState([]);
    useEffect( () =>{
        const storedJobIds =getStoredJobApplication();
        if(jobs.length > 0){
            // const jobApplied =jobs.filter(job =>storedJobIds.includes(job.id));
            // console.log(jobs,storedJobIds,jobApplied)
            const jobsApplied =[];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job);
                }

            }

            setAppliedJobs(jobsApplied);
            // console.log(jobs,storedJobIds,jobsApplied)

        }

    },[])
    return (
        <div>
            <h2>my applied jobs:{AppliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;