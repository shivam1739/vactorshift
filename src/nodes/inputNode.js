// inputNode.js

import { useState } from 'react';
import BaseNode from './baseNode';
import { POSITION } from '../commonUtils';




export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };



  return (
    <BaseNode
      title='Input'
      height={100}
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
          <span className="text-xs mb-1">Type</span>
          <select
            className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
            value={inputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>



    </BaseNode>

  );
}
