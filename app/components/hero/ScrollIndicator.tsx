interface ScrollIndicatorProps {
  isVisible: boolean;
}

// This component now just provides watermark cover - the actual scroll indicator is in HeroHeadline
export function ScrollIndicator({ isVisible: _isVisible }: ScrollIndicatorProps) {
  return (
    <>
      {/* Watermark cover - bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "calc(14% + 5px)",
          right: "calc(12% + 20px)",
          width: "100px",
          height: "60px",
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(3,3,5,1) 0%, rgba(3,3,5,0.9) 50%, transparent 100%)",
          filter: "blur(10px)",
          zIndex: 24,
        }}
      />
    </>
  );
}
