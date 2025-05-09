import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { fields } from "../../Data/PostJob";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { SuccessNotification } from "../../Services/NotificationService";
import { useMediaQuery } from "@mantine/hooks";

const CertiInput = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const select = fields;

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      issuer: "",
      issueDate: new Date(),
      certificateId: "",
    },
    validate: {
      name: isNotEmpty("Name is required"),
      issuer: isNotEmpty("Issuer is required"),
      issueDate: isNotEmpty("Issue Date is required"),
      certificateId: isNotEmpty("Certificate ID is required"),
    },
  });

  const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;

    let certi = [...profile.certifications];
    let newCerti = form.getValues();
    newCerti.issueDate = new Date(newCerti.issueDate); 

    certi.push(newCerti);

    let updatedProfile = { ...profile, certifications: certi };
    dispatch(changeProfile(updatedProfile));

    props.setEdit(false);
    SuccessNotification("Success", "Certificate Added Successfully");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap md-mx:gap-5">
        <TextInput
          {...form.getInputProps("name")}
          label="Title"
          withAsterisk
          placeholder="Enter title"
        />
        <SelectInput form={form} name="issuer" {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap md-mx:gap-5">
        <MonthPickerInput
          {...form.getInputProps("issueDate")}
          withAsterisk
          maxDate={new Date()}
          label="Issue Date"
          placeholder="Pick date"
        />
        <TextInput
          {...form.getInputProps("certificateId")}
          label="Certificate ID"
          withAsterisk
          placeholder="Enter ID"
        />
      </div>
      <div className="flex gap-5 mt-5">
        <Button onClick={handleSave} color="green.8" variant="outline">
          Save
        </Button>
        <Button
          onClick={() => props.setEdit(false)}
          color="red.8"
          variant="light"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
