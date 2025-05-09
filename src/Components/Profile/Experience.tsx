import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ExpInput from "./ExpInput";
import ExpCard from "./ExpCard";
import { useMediaQuery } from "@mantine/hooks";

const Experience = () => {
  const matches = useMediaQuery(`(max-width: 475px)`);
  const [edit, setEdit] = useState(false);
  const [addExp, setAddExp] = useState(false);
  const profile = useSelector((state: any) => state.profile);
  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <>
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience
          <div className="flex gap-2">
            <ActionIcon
              size={matches?"md":"lg"}
              color="bright-sun.4"
              variant="subtle"
              onClick={() => setAddExp(true)}
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              size={matches?"md":"lg"}
              color={edit ? "red.8" : "bright-sun.4"}
              variant="subtle"
              onClick={handleEdit}
            >
              {edit ? (
                <IconX className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {profile?.experiences?.map((expItem: any, id: any) => (
            <ExpCard key={id} idx={id} {...expItem} edit={edit} />
          ))}
          {addExp && <ExpInput setEdit={setAddExp} add />}
        </div>
      </div>
    </>
  );
};

export default Experience;
