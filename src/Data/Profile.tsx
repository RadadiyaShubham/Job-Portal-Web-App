import { IconBriefcase,  IconMapPin } from "@tabler/icons-react";

const fields=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], leftSection:IconBriefcase},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'], leftSection:IconBriefcase},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'Pune', 'Banglore', 'Ahmedabad', 'Surat', 'Rajkot', 'Vadodra', 'Gandhinagar', 'Mumbai'],leftSection:IconMapPin}
]
export default fields;