import { PROJECTS } from "../../data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { CheckCircle2, AlertCircle, Coins, BrainCircuit } from "lucide-react";

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Overview</h1>
                <p className="text-gray-500">Verify projects and mint carbon tokens.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-indigo-50 border-indigo-100">
                    <CardContent className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                            <AlertCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                            <p className="text-2xl font-bold text-gray-900">3</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-emerald-50 border-emerald-100">
                    <CardContent className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Verified Projects</p>
                            <p className="text-2xl font-bold text-gray-900">12</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-purple-50 border-purple-100">
                    <CardContent className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                            <Coins size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Tokens Minted</p>
                            <p className="text-2xl font-bold text-gray-900">45k</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Verification Queue */}
            <Card>
                <CardHeader>
                    <CardTitle>Verification Queue</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-500">
                                    <th className="pb-3 font-medium">Project</th>
                                    <th className="pb-3 font-medium">Organization</th>
                                    <th className="pb-3 font-medium">Submitted</th>
                                    <th className="pb-3 font-medium">AI Analysis</th>
                                    <th className="pb-3 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {PROJECTS.filter(p => p.status !== 'Minted').map((project) => (
                                    <tr key={project.id} className="group hover:bg-gray-50/50">
                                        <td className="py-4">
                                            <p className="font-medium text-gray-900">{project.title}</p>
                                            <p className="text-xs text-gray-500">{project.size}</p>
                                        </td>
                                        <td className="py-4 text-gray-600">{project.organization}</td>
                                        <td className="py-4 text-gray-600">{project.submittedDate}</td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md w-fit">
                                                <BrainCircuit size={14} />
                                                <span>98% Confident</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-right space-x-2">
                                            <Button variant="secondary" size="sm">Review</Button>
                                            <Button size="sm">Verify & Mint</Button>
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

export default AdminDashboard;
