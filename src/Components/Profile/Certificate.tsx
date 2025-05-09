import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CertiCard from "./CertiCard";
import CertiInput from "./CertiInput";
import { useMediaQuery } from "@mantine/hooks";

const Certificate = () => {
  const matches = useMediaQuery(`(max-width: 475px)`);
  const [edit, setEdit] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const profile = useSelector((state: any) => state.profile);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-5 flex justify-between">
        Certification
        <div className="flex gap-2">
          <ActionIcon
            onClick={() => setAddCerti(true)}
            size={matches?"md":"lg"}
            variant="subtle"
            color="bright-sun.4"
          >
            <IconPlus className="w-4/5 h-4/5" />
          </ActionIcon>
          <ActionIcon
            onClick={handleEdit}
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
      <div className="flex flex-col gap-8">
        {profile?.certifications?.map((certi: any, index: number) => (
          <CertiCard key={index} edit={edit} {...certi} />
        ))}
        {addCerti && <CertiInput setEdit={setAddCerti} />}
      </div>
    </div>
  );
};

export default Certificate;
