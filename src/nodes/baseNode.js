import React from 'react'
import { Handle, Position } from 'reactflow'
import { POSITION_MAP } from '../commonUtils';

const BaseNode = ({ title, children, handles }) => {
    return (
        <div className='p-2 w-auto h-auto border border-2 border-blue-500 rounded-md'>
            <div>
                <span className='font-medium text-gray-500'>{title}</span>
            </div>
            <div>
                {children}
            </div>
            {handles.map((handle, index) => {
                return (
                    <React.Fragment key={handle.id}>
                        <Handle
                            {...{ ...handle, position: POSITION_MAP[handle.position], style: { ...handle.style, width: '10px', height: '10px' } }}
                        />

                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default BaseNode
