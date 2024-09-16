import { useState } from 'react';
import BaseNode from './baseNode';
import { POSITION } from '../commonUtils';

export const SelectorNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.selectorName || id.replace('customSelector-', 'selector_'));
    const [options, setOptions] = useState(data.options || ['Option 1', 'Option 2']);
    const [selectedOption, setSelectedOption] = useState(data.selectedOption || options[0]);

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleAddOption = () => {
        setOptions([...options, `Option ${options.length + 1}`]);
    };

    return (
        <BaseNode
            title='Selector'
            height={150}
            id={data.id}
            handles={[{
                type: "source",
                position: POSITION.RIGHT,
                id: `${id}-value`
            }]}
        >
            <div className="flex flex-col space-y-4 px-2 py-4">
                <label className="flex flex-col text-gray-500">
                    <span className="text-xs mb-1">Name</span>
                    <input
                        type="text"
                        className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
                        value={currName}
                        onChange={handleNameChange}
                    />
                </label>

                <label className="flex flex-col text-gray-500">
                    <span className="text-xs mb-1">Select Option</span>
                    <select
                        className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </label>

                <button
                    type="button"
                    onClick={handleAddOption}
                    className="bg-blue-500 text-white p-2 rounded-md"
                >
                    Add Option
                </button>
            </div>
        </BaseNode>
    );
}
