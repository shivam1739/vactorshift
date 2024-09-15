import { useState } from 'react';
import BaseNode from './baseNode';
import { getHandlePosition, POSITION } from '../commonUtils';

export const SelectorNode = ({ id, data }) => {
    const [options, setOptions] = useState(data?.options || [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5"
    ]);
    const [selectedValues, setSelectedValues] = useState(data?.selectedValues || []);


    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        if (e.target.checked) {
            setSelectedValues([...selectedValues, selectedValue]);
        } else {
            setSelectedValues(selectedValues.filter((value) => value !== selectedValue));
        }
    };




    const outputHandles = selectedValues.map((value, index) => ({
        type: "source",
        position: POSITION.RIGHT,
        id: `${id}-output-${index}`,
        style: { top: getHandlePosition(index, selectedValues.length) },

    }));

    return (
        <BaseNode
            title="Selector"
            height={150}
            id={data.id}
            handles={outputHandles}
        >
            <div className="flex flex-col space-y-4 px-2 py-4">
                <div>
                    {options.map((option, index) => (
                        <div key={index} className="flex flex-row space-x-2 items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                value={option}
                                checked={selectedValues.includes(option)}
                                onChange={handleOptionChange}
                            />
                            <label className="text-xs mb-1">{option}</label>
                        </div>
                    ))}
                </div>

            </div>
        </BaseNode>
    );
};