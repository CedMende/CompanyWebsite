import React from "react";
interface SectionDividerProps {
  variant?: "wave" | "curve" | "triangle" | "dots";
  className?: string;
  flip?: boolean;
  color?: string;
  bgColor?: string;
}
const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = "wave",
  className = "",
  flip = false,
  color = "fill-white dark:fill-gray-900",
  bgColor = "fill-gray-50 dark:fill-gray-800"
}) => {
  const transform = flip ? "rotate-180" : "";
  const renderDivider = () => {
    switch (variant) {
      case "wave":
        return <svg className={`w-full h-auto ${transform} ${className}`} viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{
          display: "block",
          marginBottom: "-1px" // Ensure seamless connection
        }}>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className={bgColor} opacity="1"></path>
          </svg>;
      case "curve":
        return <svg className={`w-full h-auto ${transform} ${className}`} viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{
          display: "block",
          marginBottom: "-1px" // Ensure seamless connection
        }}>
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className={bgColor}></path>
          </svg>;
      case "triangle":
        return <svg className={`w-full h-auto ${transform} ${className}`} viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{
          display: "block",
          marginBottom: "-1px" // Ensure seamless connection
        }}>
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={bgColor}></path>
          </svg>;
      case "dots":
        return <div className={`w-full flex justify-center gap-2 py-4 ${className}`}>
            <div className={`w-2 h-2 rounded-full bg-violet-400 dark:bg-violet-600 opacity-60`}></div>
            <div className={`w-2 h-2 rounded-full bg-violet-500 dark:bg-violet-500 opacity-80`}></div>
            <div className={`w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400`}></div>
            <div className={`w-2 h-2 rounded-full bg-orange-400 dark:bg-orange-500 opacity-80`}></div>
            <div className={`w-2 h-2 rounded-full bg-orange-500 dark:bg-orange-400 opacity-60`}></div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="w-full overflow-hidden line-height-0">
      {renderDivider()}
    </div>;
};
export default SectionDivider;