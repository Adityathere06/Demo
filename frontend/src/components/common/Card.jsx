import { cn } from "../../lib/utils";

export const Card = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export const CardHeader = ({ className, children, ...props }) => (
    <div className={cn("p-6 pb-3", className)} {...props}>
        {children}
    </div>
);

export const CardTitle = ({ className, children, ...props }) => (
    <h3 className={cn("text-lg font-semibold text-gray-900 tracking-tight", className)} {...props}>
        {children}
    </h3>
);

export const CardContent = ({ className, children, ...props }) => (
    <div className={cn("p-6 pt-3", className)} {...props}>
        {children}
    </div>
);
