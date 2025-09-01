export default function Card({ 
  children, 
  className = "", 
  padding = "md",
  shadow = "md",
  ...props 
}) {
  const paddings = {
    sm: "p-3",
    md: "p-4", 
    lg: "p-6",
    xl: "p-8"
  };
  
  const shadows = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl"
  };

  return (
    <div 
      className={`bg-white rounded-lg border ${shadows[shadow]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

