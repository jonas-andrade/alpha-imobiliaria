export default function Skeleton({ className = "", width, height }) {
  return (
    <div 
      className={`animate-pulse bg-gray-300 rounded ${className}`}
      style={{ width, height }}
    ></div>
  );
}