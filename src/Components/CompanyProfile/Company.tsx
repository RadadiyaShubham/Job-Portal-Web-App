import { useEffect } from "react";
import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-3/4">
      <div className="relative p-3">
        <img
          className="rounded-t-2xl h-[24vh] w-[170vh]"
          src="/Profile/banner.jpg"
          alt=""
        />
        <img
          className="h-36 w-36 p-2 rounded-3xl bg-mine-shaft-950 -bottom-1/4 absolute left-8 border-mine-shaft-950 border-8"
          src="/Icons/Google.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google{" "}
          <Avatar.Group>
          </Avatar.Group>
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          New York, United States
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <AboutComp />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
