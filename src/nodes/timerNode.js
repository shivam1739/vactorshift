import { useState } from 'react';
import BaseNode from './baseNode';
import { POSITION } from '../commonUtils';

export const TimerNode = ({ id, data }) => {
    const [delay, setDelay] = useState(data?.delay || "");

    const handleDelayChange = (e) => {
        e.preventDefault();
        setDelay(e.target.value);
    };

    return (
        <BaseNode
            title="Timer"
            height={100}
            id={data.id}
            handles={[
                { type: "source", position: POSITION.RIGHT, id: `${id}-output` },
            ]}
        >
            <div className="flex flex-col space-y-4 px-2 py-4">
                <label className="flex flex-col text-gray-500">
                    <span className="text-xs mb-1">Delay (milliseconds):</span>
                    <input
                        type="number"
                        className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
                        value={delay}
                        onChange={(e) => handleDelayChange(e)}
                    />
                </label>
            </div>
        </BaseNode>
    );
};