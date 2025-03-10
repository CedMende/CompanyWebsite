import React, { memo } from "react";
interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "violet" | "orange";
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "violet"
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };
  const colorClasses = {
    violet: "border-violet-200 border-t-violet-700 dark:border-violet-800 dark:border-t-violet-400",
    orange: "border-orange-200 border-t-orange-700 dark:border-orange-800 dark:border-t-orange-400"
  };
  return <div className="flex items-center justify-center" role="status" aria-label="Loading">
      <div className={`${sizeClasses[size]} border-4 border-solid rounded-full animate-spin ${colorClasses[color]}`} />
      <span className="sr-only">Loading...</span>
    </div>;
};
export default memo(LoadingSpinner);