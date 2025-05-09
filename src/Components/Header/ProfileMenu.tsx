import { Menu, Avatar } from "@mantine/core";
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from "@tabler/icons-react";
import { Switch } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../Slices/UserSlice";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const handleLogout = () => {
    dispatch(removeUser());
  };
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex cursor-pointer items-center gap-2">
          <div className="xs-mx:hidden">{user.name}</div>
          <Avatar
            src={
              profile.picture
                ? `data:image/jpeg;base64,${profile.picture}`
                : "/Avatar4.png"
            }
            alt="it's me"
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
          </Menu.Item>
        </Link>

        <Menu.Divider />
        <Menu.Item
          onClick={handleLogout}
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          LogOut
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default ProfileMenu;
