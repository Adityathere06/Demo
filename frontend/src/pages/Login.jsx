import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRole, useAuth } from "../context/AuthContext";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/common/Card";
import { LayoutDashboard, ShieldCheck, Building2, User } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("demo@carbonchain.io");
    const [role, setRole] = useState(UserRole.NGO);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, role);

        // Redirect based on role
        switch (role) {
            case UserRole.NGO:
                navigate("/ngo/dashboard");
                break;
            case UserRole.ADMIN:
                navigate("/admin/dashboard");
                break;
            case UserRole.CORPORATE:
                navigate("/corporate/dashboard");
                break;
            default:
                navigate("/");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white mb-4 shadow-lg shadow-blue-600/20">
                        <ShieldCheck size={28} />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">CarbonChain</h1>
                    <p className="text-gray-500 mt-2">Blue Carbon Registry & Marketplace</p>
                </div>

                <Card className="border-blue-100 shadow-xl shadow-blue-900/5">
                    <CardHeader>
                        <CardTitle className="text-center">Sign in to your account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <Input
                                id="email"
                                label="Email Address"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                            />

                            <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-medium text-gray-700 block">
                                    Select Role
                                </label>
                                <div className="relative">
                                    <select
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none appearance-none transition-all duration-200"
                                    >
                                        <option value={UserRole.NGO}>NGO / Project Developer</option>
                                        <option value={UserRole.ADMIN}>Admin / Verifier</option>
                                        <option value={UserRole.CORPORATE}>Corporate Buyer</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button type="submit" className="w-full" size="lg">
                                    Sign In
                                    <User className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>

                        <div className="mt-6 text-center text-xs text-gray-400">
                            <p>Demo Mode: No password required.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Login;
