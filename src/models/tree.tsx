import { useLoader } from "@react-three/fiber";
import type { ThreeElements } from "@react-three/fiber";
import { useMemo } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type TreeProps = ThreeElements["group"];

export function Tree({children, ...grouProps}: TreeProps) {
    const gltf = useLoader(GLTFLoader, "/tree1.glb");
    const treeScene = useMemo<Group | null>(() => gltf.scene?.clone(true) ?? null, [gltf.scene]);

    if (!treeScene) {
        return null;
    }

    return(
        <group {...grouProps}>
            <primitive object={treeScene} />
            {children}
        </group>
    )
}