import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-8 max-w-md">
                The page you are looking for doesn't exist or you don't have access to it.
            </p>
            <Link to="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;
