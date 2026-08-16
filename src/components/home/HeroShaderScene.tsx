"use client";

import { MeshGradient, LiquidMetal } from "@paper-design/shaders-react";

export function HeroShaderScene() {
  return (
    <div className="absolute inset-0">
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#061527", "#0f3357", "#164173", "#c8a24d", "#e1cfa8"]}
        distortion={0.85}
        swirl={0.35}
        speed={0.25}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <LiquidMetal
          className="h-[55vmin] w-[55vmin] max-h-[420px] max-w-[420px]"
          shape="diamond"
          colorBack="#00000000"
          colorTint="#d4b268"
          repetition={5}
          softness={0.45}
          contour={0.6}
          distortion={0.15}
          speed={0.3}
        />
      </div>
      <div className="absolute inset-0 bg-navy-950/40" />
    </div>
  );
}
