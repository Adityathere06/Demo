import { Link, useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "../../context/AuthContext";
import { Button } from "../common/Button";
import { LogOut, ShoppingBag, LayoutDashboard, ShieldCheck } from "lucide-react";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const getDashboardLink = () => {
        if (!user) return "/";
        switch (user.role) {
            case UserRole.NGO: return "/ngo/dashboard";
            case UserRole.ADMIN: return "/admin/dashboard";
            case UserRole.CORPORATE: return "/corporate/dashboard";
            default: return "/";
        }
    };

    const getRoleBadgeColor = (role) => {
        switch (role) {
            case UserRole.NGO: return "bg-green-100 text-green-800";
            case UserRole.ADMIN: return "bg-purple-100 text-purple-800";
            case UserRole.CORPORATE: return "bg-blue-100 text-blue-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flexjustify-between h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to={getDashboardLink()} className="flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">CarbonChain</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/marketplace">
                            <Button variant="ghost" className="text-gray-600 gap-2">
                                <ShoppingBag size={18} />
                                Marketplace
                            </Button>
                        </Link>

                        <Link to={getDashboardLink()}>
                            <Button variant="ghost" className="text-gray-600 gap-2">
                                <LayoutDashboard size={18} />
                                Dashboard
                            </Button>
                        </Link>

                        <div className="h-6 w-px bg-gray-200 mx-2" />

                        {user && (
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                                {user.role}
                            </div>
                        )}

                        <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
                            <LogOut size={16} />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
