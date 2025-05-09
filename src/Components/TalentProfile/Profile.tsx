import { Avatar, Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import exp from "constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../Services/ProfileService";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<any>({});
  useEffect(() => {
    window.scrollTo(0, 0);
    getProfile(id).then((res) => {
      setProfile(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [id])
  return (
    <div className="w-2/3 lg-mx:w-full">
      <div className="relative">
        <img
          className="rounded-t-2xl xl-mx:h-40 xs-mx:h-32 h-[28vh] w-[170vh]"
          src="/Profile/banner.jpg"
          alt=""
        />
        <div className="absolute flex flex-col md-mx:-bottom-10 sm-mx:-bottom-16 justify-center items-center -bottom-1/3 left-6">
          <Avatar
            className="!w-48 md-mx:!w-40 md-mx:!h-40 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!h-32 xs-mx:!w-32 !h-48 border-mine-shaft-950 border-8 rounded-full"
            src={
              profile.picture
                ? `data:image/jpeg;base64,${profile.picture}`
                : "/Avatar4.png"
            }
            alt=""
          />
        </div>
      </div>
      <div className="px-3 mt-20  ">
        <div className="text-3xl xs-mx:text-2xl font-semibold flex justify-between">
          {profile?.name}
          {/* <Button color="bright-sun.4" variant="light">
            Message
          </Button> */}
        </div>
        <div className="text-xl flex gap-1 xs-mx:text-base items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {profile?.jobTitle} &bull; {profile?.company}
        </div>
        <div className="flex gap-1 text-lg xs-mx:text-base text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {profile?.location}
        </div>
        <div className="flex gap-1 text-lg xs-mx:text-base text-mine-shaft-300 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          Experience: {profile?.totalExp} Years
        </div>
      </div>
      <Divider my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {profile?.about}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {
            profile?.skills?.map((skills: any, index: any) => <div key={index} className=" bg-bright-sun-300 text-sm font-medium   bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
              {skills}
            </div>)
          }
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {
            profile?.experiences?.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
          }
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certification</div><div className="flex flex-col gap-8">
          {
            profile?.certifications?.map((certi: any, index: any) => <CertiCard key={index} {...certi} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;