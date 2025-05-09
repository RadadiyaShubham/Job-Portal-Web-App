
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const CompanyEmployees = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-10">
      {
      talents.map((talents, index) => index<6 &&
        <TalentCard key={index} {...talents} />
      )}
    </div>
  );
};
export default CompanyEmployees;