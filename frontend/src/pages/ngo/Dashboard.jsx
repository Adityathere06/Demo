import { PROJECTS } from "../../data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { PlusCircle, TreePine, FileText, CheckCircle } from "lucide-react";

const NGODashboard = () => {
    const myProjects = PROJECTS; // In a real app, filter by NGO ID

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Project Dashboard</h1>
                    <p className="text-gray-500">Manage your blue carbon projects and data submissions.</p>
                </div>
                <Button className="gap-2">
                    <PlusCircle size={18} />
                    New Project
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-blue-50 border-blue-100">
                    <CardContent className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                            <TreePine size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Projects</p>
                            <p className="text-2xl font-bold text-gray-900">{myProjects.length}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-100">
                    <CardContent className="flex items-center gap-4">
                        <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                            <FileText size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Pending Verification</p>
                            <p className="text-2xl font-bold text-gray-900">1</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-100">
                    <CardContent className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 rounded-lg text-green-600">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Credits Minted</p>
                            <p className="text-2xl font-bold text-gray-900">2,000</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Projects List */}
            <Card>
                <CardHeader>
                    <CardTitle>My Projects</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-500">
                                    <th className="pb-3 font-medium">Project Name</th>
                                    <th className="pb-3 font-medium">Location</th>
                                    <th className="pb-3 font-medium">Size</th>
                                    <th className="pb-3 font-medium">Est. Credits</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {myProjects.map((project) => (
                                    <tr key={project.id} className="group hover:bg-gray-50/50">
                                        <td className="py-4 font-medium text-gray-900">{project.title}</td>
                                        <td className="py-4 text-gray-600">{project.location}</td>
                                        <td className="py-4 text-gray-600">{project.size}</td>
                                        <td className="py-4 text-gray-600">{project.estimatedCredits}</td>
                                        <td className="py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.status === 'Verified' ? 'bg-green-100 text-green-800' :
                                                    project.status === 'Minted' ? 'bg-purple-100 text-purple-800' :
                                                        'bg-amber-100 text-amber-800'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <Button variant="ghost" size="sm">View Details</Button>
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

export default NGODashboard;
