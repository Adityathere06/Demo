import { cn } from "../../lib/utils";

export const Input = ({ className, label, id, error, ...props }) => {
    return (
        <div className="space-y-2">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-700 block">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={cn(
                    "w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200",
                    error && "border-red-500 focus:ring-red-200",
                    className
                )}
                {...props}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};
