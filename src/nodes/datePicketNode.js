import { useState } from 'react';
import BaseNode from './baseNode';
import { POSITION } from '../commonUtils';

export const DatePickerNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.datePickerName || id.replace('customDatePicker-', 'datePicker_'));
    const [date, setDate] = useState(data.date || '');

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <BaseNode
            title='Date Picker'
            height={100}
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
                    <span className="text-xs mb-1">Select Date</span>
                    <input
                        type="date"
                        className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
                        value={date}
                        onChange={handleDateChange}
                    />
                </label>
            </div>
        </BaseNode>
    );
}
