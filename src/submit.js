// submit.js

import axios from 'axios';
import { useStore } from "./store";

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.post('http://127.0.0.1:8000/pipelines/parse', {
                nodes,
                edges
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = response.data;

            alert(JSON.stringify(data, null, 2));
        } catch (error) {

            alert(error.message);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
}
