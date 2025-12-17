interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        left: 0,
        height: "2px",
        background: "linear-gradient(90deg, #5DE67A, #00d4ff, #5DE67A)",
        backgroundSize: "200% 100%",
        animation: "shimmer 3s linear infinite",
        zIndex: 999,
        transformOrigin: "left",
        transform: `scaleX(${progress})`,
        width: "100%",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
