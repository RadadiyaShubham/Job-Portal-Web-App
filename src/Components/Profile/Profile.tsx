import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { changeProfile, setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { hover } from "@testing-library/user-event/dist/hover";
import { resolve } from "path";
import { rejects } from "assert";
import { read } from "fs";
import { SuccessNotification } from "../../Services/NotificationService";
import { getBase64 } from "../../Services/Utilities";

const Profile = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);

  const { hovered, ref } = useHover();
  const handleFileChange = async (image: any) => {
    let picture: any = await getBase64(image);
    let updatedProfile = { ...profile, picture: picture.split(",")[1] };
    dispatch(changeProfile(updatedProfile));
    SuccessNotification("Success", "Profile Picture Updated Successfully");
  };
  
  return (
    <div className="w-4/5 lg-mx:w-full mx-auto">
      <div className="">
        <div className="relative px-5">
          <img
            className="rounded-t-2xl xs-mx:h-32 h-[28vh] w-[170vh]"
            src="/Profile/banner.jpg"
            alt=""
          />
          <div
            ref={ref}
            className="absolute flex flex-col md-mx:-bottom-10 sm-mx:-bottom-16 justify-center items-center -bottom-1/3 left-6"
          >
            <Avatar
              className="!w-48 md-mx:!w-40 md-mx:!h-40 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!h-32 xs-mx:!w-32 !h-48 border-mine-shaft-950 border-8 rounded-full"
              src={
                profile.picture
                  ? `data:image/jpeg;base64,${profile.picture}`
                  : "/Avatar4.png"
              }
              alt=""
            />

            {hovered && (
              <Overlay
                className="!rounded-full"
                color="#000"
                backgroundOpacity={0.75}
              />
            )}
            {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16" />}

            {hovered && (
              <FileInput
                onChange={handleFileChange}
                className="absolute   w-full [&_*]:!rounded-full z-[301] [&_*]:!h-full !h-full "
                size="lg"
                variant="transparent"
                radius="xl"
                accept="image/png,image/jpeg"
              />
            )}
          </div>
        </div>
        <div className="px-3 mt-20">
          <Info />

          <Divider mx="xs" my="xl" />
          <About />
          <Divider mx="xs" my="xl" />
          <Skills />
          <Divider mx="xs" my="xl" />
          <Experience />
          <Divider mx="xs" my="xl" />
          <Certificate />
        </div>
      </div>
    </div>
  );
};

export default Profile;
