export const PROJECTS = [
    {
        id: 1,
        title: "Mangrove Restoration in Sundarbans",
        organization: "Green Bengal NGO",
        location: "West Bengal, India",
        status: "Pending Verification",
        size: "500 Hectares",
        estimatedCredits: 5000,
        submittedDate: "2024-03-15",
        description: "Restoring degraded mangrove forests to sequester carbon and protect biodiversity."
    },
    {
        id: 2,
        title: "Seagrass Meadow Protection",
        organization: "Ocean Blue Foundation",
        location: "Bali, Indonesia",
        status: "Verified",
        size: "200 Hectares",
        estimatedCredits: 2000,
        submittedDate: "2024-01-10",
        description: "Conservation of seagrass beds to prevent carbon release and support marine life."
    },
    {
        id: 3,
        title: "Coastal Wetland Recovery",
        organization: "Nature First",
        location: "Kenya",
        status: "Minted",
        size: "350 Hectares",
        estimatedCredits: 3500,
        submittedDate: "2023-11-20",
        description: "Rehabilitating coastal wetlands for carbon capture."
    }
];

export const CREDITS = [
    {
        id: 101,
        projectId: 2,
        title: "Seagrass Meadow Protection",
        organization: "Ocean Blue Foundation",
        price: 45, // USD per credit
        available: 1500,
        image: "ocean",
        verifiedBy: "Verra"
    },
    {
        id: 102,
        projectId: 3,
        title: "Coastal Wetland Recovery",
        organization: "Nature First",
        price: 50,
        available: 3000,
        image: "wetland",
        verifiedBy: "Gold Standard"
    }
];

export const MY_CREDITS = [
    {
        id: 501,
        creditId: 101,
        title: "Seagrass Meadow Protection",
        quantity: 100,
        purchaseDate: "2024-02-01",
        price: 45
    }
];
