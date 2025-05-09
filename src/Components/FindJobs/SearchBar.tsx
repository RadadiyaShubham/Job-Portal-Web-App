import { Button, Collapse, Divider, RangeSlider } from "@mantine/core";
import MultiInput from "./MultiInput";
import { useState } from "react";
import { dropdownData } from "../../Data/JobData";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const SearchBar = () => {
    const matches = useMediaQuery('(max-width: 476px)');
    const [opened, { toggle }] = useDisclosure(false);
    const dispatch = useDispatch();
    const [value, setValue] = useState<[number, number]>([0, 50]);
    const handleChange = (event: any) => {
        dispatch(updateFilter({ salary: event }));
    };
    return (
        <div>
            <div className="flex justify-end">
                {matches && <Button onClick={toggle} m="sm" radius="lg" className="align" variant="outline" color="bright-sun.4" autoContrast>{opened ? "Close" : "Filters"}</Button>}
            </div>
            <Collapse in={(opened || !matches)}>
                <div className="flex px-5 lg-mx:!flex-wrap py-8 items-center !text-mine-shaft-100">
                    {dropdownData.map((item, index) => (
                        <>
                            {" "}
                            <div
                                key={index}
                                className="w-1/5 lg-mx:mt-7 lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:mb-1 xs-mx:w-full"
                            >
                                <MultiInput {...item} />
                            </div>
                            <Divider
                                className="sm-mx:hidden"
                                mr="xs"
                                size="xs"
                                orientation="vertical"
                            />
                        </>
                    ))}
                    <div className="w-1/5 lg-mx:w-1/4 lg-mx:mt-7 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1 [&_.mantine-Slider-label]:!translate-y-10">
                        <div className="flex text-sm justify-between">
                            <div>Salary</div>
                            <div>
                                &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
                            </div>
                        </div>
                        <RangeSlider
                            onChangeEnd={handleChange}
                            color="bright-sun.4"
                            min={1}
                            max={50}
                            minRange={1}
                            size="xs"
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                </div>
            </Collapse>
        </div>
    );
};
export default SearchBar;
