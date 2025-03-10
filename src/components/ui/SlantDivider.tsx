import React from "react";
interface SlantDividerProps {
  color?: string;
  bgColor?: string;
  angle?: number;
  className?: string;
}
const SlantDivider: React.FC<SlantDividerProps> = ({
  color = "fill-white dark:fill-gray-900",
  bgColor = "fill-gray-50 dark:fill-gray-800",
  angle = 3,
  className = "h-16"
}) => {
  // Calculate slant path based on angle
  const path = `M0,0 L0,100 L100,100 L100,${100 - angle * 10} Z`;
  return <div className={`w-full overflow-hidden ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} className={bgColor} />
      </svg>
    </div>;
};
export default SlantDivider;