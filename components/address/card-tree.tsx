import React, { useEffect, useRef, useState } from 'react';
import Tree, { TreeNodeDatum, TreeProps } from 'react-d3-tree';

const containerStyles: React.CSSProperties = {
  width: '100%',
  height: '700px'
};

interface TreeNode {
  name: string;
  attributes?: {
    color: string;
  };
  children?: TreeNode[];
}

interface BlockchainTreeProps {
  data: TreeNode;
}

const BlockchainTree: React.FC<BlockchainTreeProps> = ({ data }) => {
  const treeContainerRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (treeContainerRef.current) {
      const dimensions = treeContainerRef.current.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 4
      });
    }
  }, [treeContainerRef.current]);

 // Custom node rendering function
 const renderNode = ({
  nodeDatum,
  toggleNode,
}: {
  nodeDatum: TreeNodeDatum;
  toggleNode: () => void;
}) => (
  <g>
    <circle
      r={20}
      fill={(nodeDatum.attributes?.color || '#999') as string}
      onClick={toggleNode}
      stroke="#000"
      strokeWidth={3}
    />
    <text fill="black" strokeWidth="0" x={40} y={-5} fontWeight="bold">
      {nodeDatum.name}
    </text>

    {nodeDatum.attributes?.group && (
      <text fill="grey" strokeWidth="0" x={40} y={20}>
        {`group: ${nodeDatum.attributes.group}`}
      </text>
    )}

    {nodeDatum.attributes?.BTC && (
      <text fill="grey" strokeWidth="0" x={40} y={40}>
        {`BTC: ${nodeDatum.attributes.BTC}`}
      </text>
    )}
  </g>
);
  return (
    <div style={containerStyles} ref={treeContainerRef} id="treeWrapper">
      <Tree
        data={data}
        orientation="vertical"
        pathFunc="straight"
        translate={translate}
        renderCustomNodeElement={renderNode as TreeProps['renderCustomNodeElement']}
      />
    </div>
  );
};

export default BlockchainTree;