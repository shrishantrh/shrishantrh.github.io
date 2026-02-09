import { useEffect, useRef } from "react";

const UnicornOverlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
    script.async = true;
    script.onload = async () => {
      if ((window as any).UnicornStudio && containerRef.current) {
        try {
          sceneRef.current = await (window as any).UnicornStudio.addScene({
            elementId: "unicorn-overlay",
            projectId: "KYglOX2Ysa5Yzspo1UKK",
            scale: 0.5,
            dpi: 1,
            fps: 60,
            lazyLoad: true,
            production: true,
          });
        } catch (e) {
          console.warn("Unicorn Studio failed to load:", e);
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      sceneRef.current?.destroy();
      script.remove();
    };
  }, []);

  return (
    <div
      id="unicorn-overlay"
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default UnicornOverlay;
