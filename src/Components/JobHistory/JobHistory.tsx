import { Tabs } from "@mantine/core";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";
import { useSelector } from "react-redux";

const JobHistory = () => {
  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.user);

  const [activeTab, setActiveTab] = useState<string>("APPLIED");
  const [jobList, setJobList] = useState<any[]>([]);
  const [showList, setShowList] = useState<any[]>([]);

  useEffect(() => {
    if (!user || !user.id) return; 
    getAllJobs()
      .then((res) => {
        setJobList(res || []);
        setShowList(
          res?.filter((job: any) =>
            job.applicants?.some(
              (applicant: any) =>
                applicant.applicantId === user.id &&
                applicant.applicationStatus === "APPLIED"
            )
          ) || []
        );
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, [user?.id]); 

  const handleTabChange = (value: string | null) => {
    if (!value) return;

    setActiveTab(value);
    if (value === "SAVED") {
      setShowList(
        jobList.filter((job: any) =>
          profile?.savedJobs?.includes?.(job.id) ?? false 
        )
      );
    } else {
      setShowList(
        jobList.filter((job: any) =>
          job.applicants?.some(
            (applicant: any) =>
              applicant.applicantId === user.id &&
              applicant.applicationStatus === value
          )
        )
      );
    }
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-5 mt-5">Job History</div>
      <Tabs
        variant="outline"
        radius="lg"
        value={activeTab}
        onChange={handleTabChange}
      >
        <Tabs.List className="font-semibold [&_button[data-active='true']]:!border-b-mine-shaft-950 [&_button]:!text-xl sm-mx:[&_button]:!text-lg xs-mx:[&_button]:!text-base xsm-mx:[&_button]:!text-sm xs-mx:[&_button]:!px-1.5 xs-mx:[&_button]:!py-2 mb-5 [&_button[data-active='true']]:text-bright-sun-400 xs-mx:font-medium">
          <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
          <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
          <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
          <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={activeTab}>
          <div className="mt-10xx flex flex-wrap gap-5 justify-center">
            {showList.map((job: any, index: number) => (
              <Card key={index} {...job} {...{ [activeTab.toLowerCase()]: true }} />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default JobHistory;
