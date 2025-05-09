import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import DOMPurify from "dompurify";
import { card } from "../../Data/JobDescData";
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useEffect, useState } from "react";
import { postJob } from "../../Services/JobService";
import {
  errorNotification,
  SuccessNotification,
} from "../../Services/NotificationService";

const Job = (props: any) => {
  const [applied, setApplied] = useState(false);
  const user = useSelector((state: any) => state.user || {});
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile || {});

  const handleSaveJob = () => {
    let savedJobs: any = [...(profile?.savedJobs || [])];

    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id: any) => id !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }

    let updatedProfile = { ...profile, savedJobs };
    dispatch(changeProfile(updatedProfile));
  };

  useEffect(() => {
    if (user?.id && props.applicants) {
      setApplied(
        props.applicants.some(
          (applicant: any) => applicant.applicantId === user.id
        )
      );
    } else {
      setApplied(false);
    }
  }, [props.applicants, user?.id]);

  const handleClose = () => {
    postJob({ ...props, jobStatus: "CLOSED" })
      .then(() => {
        SuccessNotification("Success", "Job Closed Successfully");
      })
      .catch((err) => {
        errorNotification(
          "Error",
          err.response?.data?.errorMessage || "Something went wrong"
        );
      });
  };

  const data = DOMPurify.sanitize(props.description);

  return (
    <div className="w-2/3 bs-mx:w-full">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl flex shrink-0">
            <img
              className="h-14 xs-mx:h-10 xs-mx:w-10"
              src={`/Icons/${props.company}.png`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl xs-mx:text-xl">
              {props.jobTitle}
            </div>
            <div className="text-lg text-mine-shaft-300 flex flex-wrap xs-mx:text-base">
              <span> {props.company} &#x2022;</span>
              <span> {timeAgo(props.postTime)} &#x2022;</span>{" "}
              <span>
                {" "}
                {props.applicants ? props.applicants.length : 0} Applicants
              </span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col gap-2 items-center sm-mx:my-3 sm-mx:w-full sm-mx:[&>button]:w-1/2">
          {(props.edit || !applied) && (
            <Link
              to={
                props.edit ? `/post-job/${props.id}` : `/apply-job/${props.id}`
              }
            >
              <Button color="bright-sun.4" size="md" variant="light">
                {props.closed ? "Reopen" : props.edit ? "Edit" : "Apply"}
              </Button>
            </Link>
          )}
          {!props.edit && applied && (
            <Button color="green.8" size="md" variant="light">
              Applied
            </Button>
          )}
          {props.edit && !props.closed ? (
            <Button
              color="red.5"
              onClick={handleClose}
              size="md"
              variant="outline"
            >
              Close
            </Button>
          ) : profile?.savedJobs?.includes(props.id) ? (
            <IconBookmarkFilled
              onClick={handleSaveJob}
              className="text-bright-sun-400 cursor-pointer stroke={1.5}"
            />
          ) : (
            <IconBookmark
              onClick={handleSaveJob}
              className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer stroke={1.5}"
            />
          )}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between  gap-4 sm-mx:flex-wrap">
        {card.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              color="bright-sun.4"
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5 xs-mx:!h-8 xs-mx:!w-8" stroke={1.5} />
            </ActionIcon>
            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
            <div className="font-semibold">
              {props ? props[item.id] : "NA"}
              {item.id === "packageOffered" && <> LPA </>}
            </div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {props?.skillsRequired?.map((item: any, index: number) => (
            <ActionIcon
              key={index}
              color="bright-sun.4"
              className="!h-fit !w-fit !text-sm xs-mx:!text-xs font-medium"
              variant="light"
              radius="xl"
              p="xs"
              aria-label="Settings"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      
      <div>
      </div>
    </div>
  );
};
export default Job;
