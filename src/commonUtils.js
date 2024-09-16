import { Position } from "reactflow";

export const POSITION_MAP = {
    'TOP': Position.Top,
    'BOTTOM': Position.Bottom,
    'LEFT': Position.Left,
    'RIGHT': Position.Right
}

export const POSITION = {
    TOP: "TOP",
    BOTTOM: "BOTTOM",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
}

export const getHandlePosition = (index, total) => {
    const spacing = 100 / (total + 1);
    return `${(index + 1) * spacing}%`;
};


export const extractVariables = (text) => {
    const regex = /{{\s*([\w]*)\s*}}/g;
    const variables = [];
    let match;
    while ((match = regex.exec(text)) !== null) {

        !variables.includes(match[1]) && variables.push(match[1]);
    }
    return variables;
};
