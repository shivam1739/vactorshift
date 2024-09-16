import React from 'react';
import { Handle } from 'reactflow';
import { POSITION_MAP } from '../commonUtils';
import { useStore } from '../store';
import { useUpdateNodeInternals } from 'reactflow';




const BaseNode = ({ title, children, handles, hasError, id }) => {
    const deleteNode = useStore((state) => state.deleteNode);
    const updateNodeInternals = useUpdateNodeInternals();
    updateNodeInternals(id)

    return (
        <div className={`p-2 min-h-[10rem] min-w-[10rem] w-auto h-auto border-2 ${hasError ? 'border-red-500' : 'border-blue-500'} rounded-md relative`}>

            <div className='flex justify-between'>
                <span className="font-medium text-gray-500">{title}</span>
                <img className='cursor-pointer  ' src='/close.svg' alt='cross' width={15} height={15} onDoubleClick={() => deleteNode(id)} />
            </div>
            <div>
                {children}
            </div>


            {handles.map((handle) => (

                <Handle
                    {...{ ...handle, position: POSITION_MAP[handle.position], key: handle.id, style: { ...handle.style, width: '10px', height: '10px', } }}
                />

            ))}

        </div>
    );
};

export default BaseNode;
