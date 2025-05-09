import { IconCirclesRelation, IconX } from "@tabler/icons-react";
import { Burger, Button, Drawer } from "@mantine/core";
import { useLocation, Link, Links } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import NotiMenu from "./NotiMenu";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { name: "Find Jobs", url: "find-jobs" },
  { name: "Find Talent", url: "find-talent" },
  { name: "Post Job", url: "post-job/0" },
  { name: "Posted Job", url: "posted-job/0" },
  { name: "Job History", url: "job-history" },
];

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user || {});

  useEffect(() => {
    if (user?.profileId) {
      getProfile(user.profileId)
        .then((res) => dispatch(setProfile(res)))
        .catch((error) => console.error("Error fetching profile:", error));
    }
  }, [user?.profileId, dispatch]);

  const location = useLocation();
  if (location.pathname === "/signup" || location.pathname === "/login" || location.pathname === "/admin" | location.pathname === "/admin-login"  || location.pathname === "/admin/jobs" || location.pathname === "/admin/users") {
    return null;
  }

  return (
    <div className="w-full bg-mine-shaft-950 p-6 text-white h-20 flex justify-between items-center font-['poppins']">
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        to="/"
        className="flex gap-1 items-center text-bright-sun-400 cursor-pointer"
      >
        <IconCirclesRelation className="h-9 w-9" stroke={2.5} />
        <div className="xs-mx:hidden text-4xl font-semibold">CareerLink</div>
      </Link>

      <NavLinks />
      <div className="flex gap-3 items-center">
        {user?.profileId ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="bright-sun.4">
              Login
            </Button>
          </Link>
        )}
        {user ? <NotiMenu /> : <></>}
        {}
        <Burger
          className="bs:hidden"
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation"
        />
        <Drawer
          size="xs"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          opened={opened}
          position="right"
          onClose={close}
          closeButtonProps={{
            icon: <IconX size={30} />,
          }}
        >
          <div className="flex flex-col gap-6 items-center">
            {links.map((link, index) => (
              <div key={index} className="h-full flex items-center">
                <Link
                  className="hover:text-bright-sun-400 text-xl"
                  key={index}
                  to={link.url}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
