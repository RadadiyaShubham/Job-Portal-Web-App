import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Company from "../Components/CompanyProfile/Company";
import SimilarComapnies from "../Components/CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
  const navigate = useNavigate();
  return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
    <Divider size="xs" mx="md" />
    <Button onClick={() => navigate(-1)}
      my="md"
      leftSection={<IconArrowLeft size={20} />}
      color="bright-sun.4"
      variant="light"
    >
      Back
    </Button>
    <div className="flex gap-5 justify-between">
      <Company />
      <SimilarComapnies />
    </div>
  </div>
}
export default CompanyPage;