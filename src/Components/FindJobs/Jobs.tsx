import { useEffect, useState } from "react";
import { jobList } from "../../Data/JobData";
import JobsCard from "./JobCard";
import Sort from "./Sort";
import { getAllJobs } from "../../Services/JobService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";
import { resetSort } from "../../Slices/SortSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const [jobList, setJobList] = useState([{}]);
  const filter = useSelector((state: any) => state.filter);
  const sort = useSelector((state: any) => state.sort);
  const [filteredJobs, setfilteredJobs] = useState<any>([]);
  useEffect(() => {
    dispatch(resetFilter());
    dispatch(resetSort());
    getAllJobs()
      .then((res) => {
        setJobList(res.filter((job: any) => job.jobStatus == "ACTIVE"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (sort == "Most Recent") {
      setJobList([...jobList].sort((a: any, b: any) => new Date(b.postTime).getTime() - new Date(a.postTime).getTime()));
    }
    else if (sort == "Salary: Low to High") {
      setJobList([...jobList].sort((a: any, b: any) => a.packageOffered - b.packageOffered));
    }
    else if (sort == "Salary: High to Low") {
      setJobList([...jobList].sort((a: any, b: any) => b.packageOffered - a.packageOffered));
    }
  }, [sort]);

  useEffect(() => {
    let filterjob = jobList;
    console.log(filter);
    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterjob = filterjob.filter((job: any) => filter["Job Title"]?.some((title: any) => job?.jobTitle?.toLowerCase().includes(title?.toLowerCase())));
    }
    if (filter.Location && filter.Location.length > 0) {
      filterjob = filterjob.filter((job: any) => filter.Location?.some((location: any) => job?.location?.toLowerCase().includes(location?.toLowerCase())));
    }
    if (filter.Experience && filter.Experience.length > 0) {
      filterjob = filterjob.filter((job: any) => filter.Experience?.some((experience: any) => job?.experience?.toLowerCase().includes(experience?.toLowerCase())));
    }
    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filterjob = filterjob.filter((job: any) => filter["Job Type"]?.some((type: any) => job?.jobType?.toLowerCase().includes(type?.toLowerCase())));
    }
    if (filter.salary && filter.salary.length > 0) {
      filterjob = filterjob.filter((job: any) => filter.salary[0] <= job.packageOffered && job.packageOffered <= filter.salary[1]);
    }
    setfilteredJobs(filterjob);
  }, [filter, jobList])
  return (
    <div className="p-5">
      <div className="flex justify-between flex-wrap">
        <div className="font-semibold xs-mx:text-xl text-2xl ">Recommended Jobs</div>
        <Sort sort="job" />
      </div>
      <div className="mt-10 flex flex-wrap gap-5 justify-center">
        {filteredJobs.map((job: any, index: any) => (
          <JobsCard key={index} {...job} />
        ))} 
      </div>
    </div>
  );
};
export default Jobs;
