
import { jobList } from "../../Data/JobData";
import JobsCard from "../FindJobs/JobCard";

const CompanyJobs = ()=>{
    return <div className='mt-10 flex flex-wrap gap-5 justify-center  '>
    {
        jobList.map((job, index) => index<9 && <JobsCard key ={index} {...job} />)  
    }
    </div>
}    
export default CompanyJobs;