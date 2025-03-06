import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import dbookModel from "../model/dbook.glb";

const Book = (props) => {
  const bookRef = useRef();
  const { nodes, materials } = useGLTF(dbookModel);

  useEffect(() => {
    console.log('GLTF Model:', { nodes, materials });
  }, [nodes, materials]);

  if (!nodes || !materials) {
    return null;
  }

  return (
    <group ref={bookRef} {...props}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} scale={0.29777} />
      <group position={[0.99686, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        {nodes.BezierCurve_1 && <mesh geometry={nodes.BezierCurve_1.geometry} material={materials.paper} />}
        {nodes.BezierCurve_2 && <mesh geometry={nodes.BezierCurve_2.geometry} material={materials['Material.002']} />}
        {nodes.BezierCurve_3 && <mesh geometry={nodes.BezierCurve_3.geometry} material={materials['Material.003']} />}
        {nodes.BezierCurve_4 && <mesh geometry={nodes.BezierCurve_4.geometry} material={materials['Material.005']} />}
      </group>
    </group>
  );
};

export default Book;
