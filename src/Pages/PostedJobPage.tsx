import { Button, Divider, Drawer } from "@mantine/core";
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../Services/JobService";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const PostedJobPage = () => {
    const matches = useMediaQuery(`(max-width: 767px)`);
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const user = useSelector((state: any) => state.user);

    const [jobList, setJobList] = useState<any[]>([]);
    const [job, setJob] = useState<any | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!user || !user.id) return;

        getJobPostedBy(user.id)
            .then((res) => {
                setJobList(res || []);

                if (res && res.length > 0) {
                    if (!id || Number(id) === 0) {
                        navigate(`/posted-job/${res[0].id}`);
                    }
                    const selectedJob = res.find((item: any) => String(item.id) === String(id));
                    setJob(selectedJob || null);
                }
            })
            .catch((err) => {
                console.error("Error fetching jobs:", err);
            });
    }, [id, user?.id]);

    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <Divider size="xs" mx="md" />
            {matches && <Button my="xs" size="sm" autoContrast onClick={open}>
                All Jobs
            </Button>}
            <Drawer opened={opened} size={230} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} onClose={close} title="All Jobs">
                <PostedJob job={job} jobList={jobList} />
            </Drawer>
            <div className="flex gap-5">
                {!matches && <PostedJob job={job} jobList={jobList} />}
                {job && <PostedJobDesc {...job} />}
            </div>
        </div>
    );
};

export default PostedJobPage;
