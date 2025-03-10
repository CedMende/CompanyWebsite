import React, { useEffect, useRef } from "react";
interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-in";
  delay?: number;
}
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);
  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-8 transition-all duration-700 ease-out animate-fade-up";
      case "fade-in":
        return "opacity-0 transition-opacity duration-700 ease-out animate-fade-in";
      case "slide-in":
        return "opacity-0 -translate-x-8 transition-all duration-700 ease-out animate-slide-in";
      default:
        return "";
    }
  };
  return <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>;
};
export default AnimateOnScroll;