import { Badge, Tabs } from "@mantine/core";
import Job from "../JobDesc/Job";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc = (props: any) => {
    const [tab, setTab]=useState("Overview");
    const [arr, setArr]=useState<any>([]);
    const handleTabchange=(value:any)=> {
        setTab(value);
        if(value=="applicants") {
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED"));
        }
        else if(value=="invited") {
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="INTERVIEWING"));
        }
        else if(value=="offered") {
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="OFFERED"));   
        }
        else if(value=="rejected") {
            setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="REJECTED"));
        }
    }
    useEffect(()=> {
        handleTabchange("overview")
    }, [props])
    return <div className="mt-5 w-3/4 md-mx:w-full md-mx:p-0 px-5">
        {props.jobTitle?<><div className="text-2xl xs-mx:text-xl font-semibold flex items-center">{props.jobTitle} <Badge variant="light" ml="sm" color="bright-sun.4" size="sm">{props.jobStatus}</Badge></div>
        <div className="font-medium xs-mx:text-sm text-mine-shaft-300 mb-5">{props.location}</div>
        <div>
            <Tabs variant="outline" radius="lg" autoContrast value={tab} onChange={handleTabchange}>
                <Tabs.List className="font-semibold [&_button[data-active='true']]:!border-b-mine-shaft-950 [&_button]:!text-xl sm-mx:[&_button]:!text-lg xs-mx:[&_button]:!text-base xsm-mx:[&_button]:!text-sm xs-mx:[&_button]:!px-1.5 xs-mx:[&_button]:!py-2 mb-5 [&_button[data-active='true']]:text-bright-sun-400 xs-mx:font-medium">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" className="[&>div]:w-full"><Job {...props} edit={true} closed={props.jobStatus=="CLOSED"} /></Tabs.Panel>
                <Tabs.Panel value="applicants"><div className="mt-10 flex flex-wrap gap-5 justify-around">
                    {
                        arr?.length?arr.map((talents: any, index: any) => <TalentCard key={index} {...talents} posted />):<div className="text-2xl font-semibold">No Applicants</div>
                    }
                </div></Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className="mt-10 flex flex-wrap gap-5 justify-around">
                        {
                            arr?.length?arr.map((talents: any, index: any) => <TalentCard key={index} {...talents} invited />):<div className="text-2xl font-semibold">No Invited Candidates</div>
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="offered">
                    <div className="mt-10 flex flex-wrap gap-5 justify-around">
                        {
                            arr?.length?arr.map((talents: any, index: any) => <TalentCard key={index} {...talents} offered />):<div className="text-2xl font-semibold">No Offered Candidates</div>
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="rejected">
                    <div className="mt-10 flex flex-wrap gap-5 justify-around">
                        {
                            arr?.length?arr.map((talents: any, index: any) => <TalentCard key={index} {...talents} rejected />):<div className="text-2xl font-semibold">No Rejected Candidates</div>
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
        </>:<div className="text-2xl font-semibold flex min-h-[70vh] justify-center items-center">No Job Selected</div>}
    </div>
}
export default PostedJobDesc;