function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(45)`;
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#00d4ff" />
            <stop offset="85.56%" stopColor="#090979" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;