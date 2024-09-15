import { useState } from 'react';
import BaseNode from './baseNode';
import { POSITION } from '../commonUtils';

export const FileLoaderNode = ({ id, data }) => {
    const [file, setFile] = useState(null);
    const [fileData, setFileData] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleLoadFile = async () => {
        if (file) {
            try {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setFileData(e.target.result);
                };
                reader.readAsText(file);
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }
    };

    return (
        <BaseNode
            title="File Loader"
            height={100}
            id={data.id}
            handles={[
                { type: "target", position: POSITION.LEFT, id: `${id}-input` },
                { type: "source", position: POSITION.RIGHT, id: `${id}-output` },
            ]}
        >
            <div className="flex flex-col space-y-4 px-2 py-4">
                <label className="flex flex-col text-gray-500">
                    <span className="text-xs mb-1">Select File:</span>
                    <input
                        type="file"
                        className="w-full bg-gray-100 p-2 rounded-md border border-gray-300"
                        onChange={handleFileChange}
                    />
                </label>
                <button
                    className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    onClick={handleLoadFile}
                >
                    Load File
                </button>
            </div>
        </BaseNode>
    );
};