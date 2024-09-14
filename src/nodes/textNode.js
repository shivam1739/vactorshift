import { useState, useEffect, useRef } from 'react';
import BaseNode from './baseNode';
import { POSITION } from '../commonUtils';

const extractVariables = (text) => {
  const regex = /{{\s*([\w]+)\s*}}/g;
  const variables = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    !variables.includes(match[1]) && variables.push(match[1]);
  }
  return variables;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState(extractVariables(currText));


  const maxHeight = 200;
  const inputRef = useRef(null);


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, maxHeight)}px`;
    }
    setVariables(extractVariables(currText));
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      title="Text"
      handles={[
        {
          id: `${id}-output`,
          type: 'source',
          position: POSITION.RIGHT
        },
        ...variables.map((variable, index) => ({
          id: `${id}-${variable}`,
          type: 'target',
          position: POSITION.LEFT,
          style: { top: `${(index + 1) * 30}px` }
        })),
      ]}
    >
      <div className="flex flex-col space-y-4 px-2 py-4 w-auto">
        <label className="flex flex-col text-gray-500">
          <span className="text-xs mb-1">Text:</span>
          <textarea
            ref={inputRef}
            value={currText}
            onChange={handleTextChange}
            className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
            style={{
              resize: 'none',
              overflowY: 'auto',
              maxHeight: `${maxHeight}px`,
              minHeight: '80px',
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
