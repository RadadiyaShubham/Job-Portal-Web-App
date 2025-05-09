import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import Job from "../Components/JobDesc/Job";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";
import { useEffect, useState } from "react";
import { get } from "http";
import { getJob } from "../Services/JobService";

const JobDescPage = () => {
  const {id}= useParams(); 
  const [job, setJob] = useState<any>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    getJob(id).then((res) => {
      setJob(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [id])
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
      <Divider size="xs" mx="md" />
      <Link className="my-4 inline-block" to="/find-jobs">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5 justify-around bs-mx:flex-wrap">
        <Job {...job} />
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDescPage;