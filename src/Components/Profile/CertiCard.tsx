import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { formatDate } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { SuccessNotification } from "../../Services/NotificationService";
import { useMediaQuery } from "@mantine/hooks";

const CertiCard = (props: any) => {
  const matches = useMediaQuery(`(max-width: 475px)`);
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);

  const handleDelete = () => {
    let certis = [...profile.certifications];
    certis.splice(props.idx, 1);
    let updatedProfile = { ...profile, certifications: certis };

    dispatch(changeProfile(updatedProfile));
    SuccessNotification("Success", "Certificate deleted successfully");
  };

  return (
    <div className="flex justify-between rounded-xl sm-mx:flex-wrap gap-2">
      <div className="flex gap-3 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img
            className="h-7"
            src={`/Icons/${props.issuer}.png`}
            alt="issuer-logo"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold xs-mx:text-sm">{props.name}</div>
          <div className="text-sm text-mine-shaft-300 shrink-0">{props.issuer}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end text-sm xs-mx:text-xs text-mine-shaft-300 sm-mx:flex-row sm-mx:gap-2">
          <div>Issued: {formatDate(props.issueDate)}</div>
          <div>ID: {props.certificateId}</div>
        </div>
        {props.edit && (
          <ActionIcon
          size={matches?"md":"lg"}
            color="red.8"
            variant="subtle"
            onClick={handleDelete}
          >
            <IconTrash className="w-4/5 h-4/5" stroke={1.5} />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

export default CertiCard;
