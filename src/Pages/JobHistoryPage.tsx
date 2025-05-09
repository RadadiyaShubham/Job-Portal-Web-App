import { Divider } from "@mantine/core";
import JobHistory from "../Components/JobHistory/JobHistory";

const JobHistoryPage = () => {
    return <div className="min-h-screen bg-mine-shaft-950 font-['poppins'] px-4">
        <Divider size="xs" mx="md" />
        <div>
            <JobHistory />
        </div>
    </div>
}
export default JobHistoryPage;