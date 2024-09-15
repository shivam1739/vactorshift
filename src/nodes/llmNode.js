// llmNode.js
import { POSITION } from '../commonUtils';
import BaseNode from './baseNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      title="LLM"
      id={data.id}
      handles={[{
        type: "target",
        position: POSITION.LEFT,
        id: `${id}-system`,
        style: { top: `${100 / 3}%` }
      }, {
        type: "target",
        position: POSITION.LEFT,
        id: `${id}-prompt`,
        style: { top: `${200 / 3}%` }
      }, {
        type: "source",
        position: POSITION.RIGHT,
        id: `${id}-response`,
      }
      ]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>

  );
}
