import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { SuccessNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

const Skills = () => {
  const matches = useMediaQuery(`(max-width: 475px)`);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state: any) => state.profile);
  const [skills, setSkills] = useState<string[]>([]);
  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setSkills(profile.skills);
    } else {
      setEdit(false);
    }
  };
  const handleSave = () => {
    setEdit(false);
    let updatedProfile = { ...profile, skills: skills };
    dispatch(changeProfile(updatedProfile));
    SuccessNotification("success", "Skills Updated Successfully");
  };
  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Skills
        <div>
          {edit && (
            <ActionIcon
              onClick={handleSave}
              size={matches?"md":"lg"}
              variant="subtle"
              color="green.8"
            >
              <IconCheck className="w-4/5 h-4/5" stroke={1.5} />
            </ActionIcon>
          )}
          <ActionIcon
            onClick={handleClick}
            size={matches?"md":"lg"}
            variant="subtle"
            color={edit ? "red.8" : "bright-sun.4"}
          >
            {edit ? (
              <IconX className="w-4/5 h-4/5" />
            ) : (
              <IconPencil className="w-4/5 h-4/5" />
            )}
          </ActionIcon>
        </div>
      </div>
      {edit ? (
        <TagsInput
          value={skills}
          onChange={setSkills}
          placeholder="Add skills"
          splitChars={[",", "|"]}
        />
      ) : (
        <div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skills: any, index: number) => (
            <div
              key={index}
              className=" bg-bright-sun-300 text-sm font-medium   bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
            >
              {skills}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Skills;
