import { cn } from "../../lib/utils";

export const Button = ({ className, variant = "primary", size = "md", ...props }) => {
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-95",
        secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm hover:shadow-md",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg font-medium",
        icon: "p-2",
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
};
