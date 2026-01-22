import { MY_CREDITS } from "../../data/mockData";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { Leaf, Award, ExternalLink, ArrowUpRight } from "lucide-react";

const CorporateDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Sustainability Dashboard</h1>
                    <p className="text-gray-500">Track your carbon credits and environmental impact.</p>
                </div>
                <Link to="/marketplace">
                    <Button className="gap-2">
                        Marketplace
                        <ArrowUpRight size={18} />
                    </Button>
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-emerald-600 text-white border-none shadow-lg shadow-emerald-200">
                    <CardContent className="h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-emerald-100 font-medium">Total Credits</p>
                                <p className="text-4xl font-bold mt-1">100</p>
                            </div>
                            <div className="p-2 bg-emerald-500/50 rounded-lg">
                                <Leaf size={24} />
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-emerald-500/50 flex gap-2">
                            <span className="text-sm font-medium bg-emerald-700/50 px-2 py-1 rounded">50 Retired</span>
                            <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded">50 Active</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                            <Award size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Carbon Offset</p>
                            <p className="text-2xl font-bold text-gray-900">100t CO2e</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center gap-4">
                        {/* ESG Score placeholder */}
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">ESG Target</span>
                                <span className="text-sm font-medium text-blue-600">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">On track for 2025 goals</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Purchased Credits */}
            <Card>
                <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-500">
                                    <th className="pb-3 font-medium">Project</th>
                                    <th className="pb-3 font-medium">Date</th>
                                    <th className="pb-3 font-medium">Quantity</th>
                                    <th className="pb-3 font-medium">Certificate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {MY_CREDITS.map((credit) => (
                                    <tr key={credit.id} className="group hover:bg-gray-50/50">
                                        <td className="py-4">
                                            <p className="font-medium text-gray-900">{credit.title}</p>
                                        </td>
                                        <td className="py-4 text-gray-600">{credit.purchaseDate}</td>
                                        <td className="py-4 text-gray-900 font-medium">{credit.quantity} tCO2e</td>
                                        <td className="py-4">
                                            <Button variant="ghost" size="sm" className="gap-1 text-blue-600">
                                                <ExternalLink size={14} />
                                                View
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CorporateDashboard;
