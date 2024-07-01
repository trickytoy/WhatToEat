import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const ParticlesInitializer = ({ onInit }) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      onInit();
    });
  }, [onInit]);

  return null;
};

export default ParticlesInitializer;
