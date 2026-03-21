export default function Sunburst({ size = 120, className = '', opacity = 0.5 }) {
  const lines = Array.from({ length: 24 }, (_, i) => i * 15)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {lines.map((deg) => (
        <line
          key={deg}
          x1="100"
          y1="12"
          x2="100"
          y2="100"
          stroke="#5881e0"
          strokeWidth="0.8"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
    </svg>
  )
}
