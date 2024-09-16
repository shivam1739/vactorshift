import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import BaseNode from './baseNode';
import { extractVariables, getHandlePosition, POSITION } from '../commonUtils';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [hasError, setHasError] = useState(false);

  const maxHeight = 200;
  const inputRef = useRef(null);

  const variables = useMemo(() => extractVariables(currText), [currText]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, maxHeight)}px`;
    }
    setHasError(variables.some(variable => variable === ''));
  }, [currText, variables]);

  const handleTextChange = useCallback((e) => {
    setCurrText(e.target.value);
  }, []);

  const handleStyles = useMemo(() => ({
    resize: 'none',
    overflowY: 'auto',
    maxHeight: `${maxHeight}px`,
    minHeight: '80px',
  }), [maxHeight]);

  const handles = useMemo(() => ([
    {
      id: `${id}-output`,
      type: 'source',
      position: POSITION.RIGHT,
    },
    ...variables.map((variable, index) => ({
      id: `${id}-${variable}`,
      type: 'target',
      position: POSITION.LEFT,
      style: { top: getHandlePosition(index, variables.length) },
    })),
  ]), [id, variables]);

  return (
    <BaseNode
      title="Text"
      id={data.id}
      handles={handles}
      hasError={hasError}
    >
      <div className="flex flex-col space-y-4 px-2 py-4 w-auto relative">
        <label className="flex flex-col text-gray-500">
          <span className="text-xs mb-1">Text:</span>
          <textarea
            ref={inputRef}
            value={currText}
            onChange={handleTextChange}
            className={`w-full bg-gray-100 p-2 rounded-md border ${hasError ? 'border-red-500' : 'border-gray-300'}`}
            style={handleStyles}
          />
        </label>
        {hasError && (
          <span className="text-red-500 text-sm absolute -bottom-6 left-0">
            Variable name cannot be empty
          </span>
        )}
      </div>
    </BaseNode>
  );
};
