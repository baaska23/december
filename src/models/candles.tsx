import { useLoader } from "@react-three/fiber";
import type { ThreeElements } from "@react-three/fiber";
import { useMemo } from "react";
import { Group } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

type CandlesProps = ThreeElements["group"];

export function Candles({ children, ...groupProps }: CandlesProps) {
  const fbx = useLoader(FBXLoader, "/candles.fbx");
  const candlesScene = useMemo<Group | null>(() => fbx?.clone(true) ?? null, [fbx]);

  if (!candlesScene) {
    return null;
  }

  return (
    <group {...groupProps}>
      <primitive object={candlesScene} />
      {children}
    </group>
  );
}