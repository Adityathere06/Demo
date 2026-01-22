import { CREDITS } from "../data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "../components/common/Card";
import { Button } from "../components/common/Button";
import { Tag, Building2, CheckCircle2 } from "lucide-react";

const Marketplace = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Carbon Credit Marketplace</h1>
                    <p className="text-gray-500">Verified blue carbon credits from trusted projects.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Filter</Button>
                    <Button variant="outline">Sort</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CREDITS.map((credit) => (
                    <Card key={credit.id} className="overflow-hidden hover:shadow-lg transition-all">
                        <div className="h-48 bg-gray-200 relative">
                            {/* Placeholder for real images. Using gradients for now. */}
                            <div className={`w-full h-full bg-gradient-to-br ${credit.image === 'ocean' ? 'from-blue-400 to-cyan-600' : 'from-green-400 to-emerald-600'}`}></div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1">
                                <CheckCircle2 size={12} className="text-green-600" />
                                {credit.verifiedBy}
                            </div>
                        </div>

                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">Project #{credit.projectId}</p>
                                    <CardTitle className="text-xl">{credit.title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Building2 size={16} className="mr-2" />
                                    {credit.organization}
                                </div>

                                <div className="flex justify-between items-end pt-2 border-t border-gray-100">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Price per Credit</p>
                                        <p className="text-2xl font-bold text-gray-900">${credit.price}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1 text-right">Available</p>
                                        <div className="flex items-center gap-1 text-gray-900 font-medium">
                                            <Tag size={16} />
                                            {credit.available}
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full">Buy Credits</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
