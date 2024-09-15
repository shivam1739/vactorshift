// outputNode.js

import { useState } from 'react';
import BaseNode from './baseNode';
import { POSITION } from '../commonUtils';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      title='Output'
      id={data.id}
      handles={[{
        id: `${id}-value`,
        type: 'target',
        position: POSITION.LEFT,
      }]}
    >
      <div className="flex flex-col space-y-4 px-2 py-4">
        <label className="flex flex-col text-gray-500">
          <span className="text-xs mb-1">Name</span>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
          />
        </label>
        <label className="flex flex-col text-gray-500">
          <span className="text-xs mb-1">Type</span>
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
