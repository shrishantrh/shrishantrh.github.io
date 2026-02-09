import UnicornScene from "unicornstudio-react";

const UnicornOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <UnicornScene
        projectId="KYglOX2Ysa5Yzspo1UKK"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default UnicornOverlay;
