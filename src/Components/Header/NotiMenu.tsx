import { Indicator, Menu, Notification, rem } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNotifications, readNotification } from "../../Services/NotiService";

const NotiMenu = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const [notifications, setNotifications] = useState<any>([]);
  const [opened, setOpened] = useState(false);

  // Fetch notifications only when user exists
  useEffect(() => {
    if (user && user.id) {
      getNotifications(user.id)
        .then((res) => {
          console.log(res);
          setNotifications(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // Mark a notification as read
  const unread = (index: number) => {
    if (notifications.length > index) {
      let notis = [...notifications];
      const notiId = notifications[index]?.id;

      notis.splice(index, 1); // Remove notification from list
      setNotifications(notis);

      if (notiId) {
        readNotification(notiId)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator
            disabled={notifications.length <= 0}
            color="bright-sun.4"
            offset={6}
            size={8}
            processing
          >
            
            <IconBell
              className="hover:text-bright-sun-400 transition-colors duration-200"
              stroke={1.5}
            />
          </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <div className="flex flex-col gap-1">
          {notifications.length > 0 ? (
            notifications.map((noti: any, index: number) => (
              <Notification
                key={noti.id || index}
                onClick={() => {
                  navigate(noti.route);
                  unread(index);
                  setOpened(false);
                }}
                className="hover:bg-mine-shaft-900 cursor-pointer"
                onClose={() => unread(index)}
                icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
                color="teal"
                title={noti.action}
                mt="md"
              >
                {noti.message}
              </Notification>
            ))
          ) : (
            <div className="text-center text-mine-shaft-300">
              No Notifications
            </div>
          )}
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NotiMenu;


// import { Indicator, Menu, Notification, rem } from "@mantine/core";
// import { IconBell, IconCheck } from "@tabler/icons-react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getNotifications, readNotification } from "../../Services/NotiService";

// const NotiMenu = () => {
//   const navigate = useNavigate();
//   const user = useSelector((state: any) => state.user);
//   const [notifications, setNotifications] = useState<any>([]);
//   const [opened, setOpened] = useState(false);

//   // Fetch notifications only when user exists
//   useEffect(() => {
//     if (user && user.id) {
//       getNotifications(user.id)
//         .then((res) => { 
//           setNotifications(res);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user]);

//   // Mark a notification as read
//   const unread = (index: number) => {
//     if (notifications.length > index) {
//       let notis = [...notifications];
//       const notiId = notifications[index]?.id;

//       notis.splice(index, 1); // Remove notification from list
//       setNotifications(notis);

//       if (notiId) {
//         readNotification(notiId)
//           .then((res) => console.log(res))
//           .catch((err) => console.log(err));
//       }
//     }
//   };

//   return (
//     <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
//       <Menu.Target>
//         <div className="bg-mine-shaft-900 p-1.5 rounded-full">
//           <Indicator
//             disabled={notifications.length <= 0}
//             color="bright-sun.4"
//             offset={6}
//             size={8}
//             processing
//           >
//             <IconBell stroke={1.5} />
//           </Indicator>
//         </div>
//       </Menu.Target>

//       <Menu.Dropdown>
//         <div className="flex flex-col gap-1">
//           {notifications.length > 0 ? (
//             notifications.map((noti: any, index: number) => (
//               <Notification
//                 key={noti.id || index}
//                 onClick={() => {
//                   navigate(noti.route);
//                   unread(index);
//                   setOpened(false);
//                 }}
//                 className="hover:bg-mine-shaft-900 cursor-pointer"
//                 onClose={() => unread(index)}
//                 icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
//                 color="teal"
//                 title={noti.action}
//                 mt="md"
//               >
//                 {noti.message}
//               </Notification>
//             ))
//           ) : (
//             <div className="text-center text-mine-shaft-300">
//               No Notifications
//             </div>
//           )}
//         </div>
//       </Menu.Dropdown>
//     </Menu>
//   );
// };

// export default NotiMenu;
