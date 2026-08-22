import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

console.log(process.env.DATABASE_URL?.slice(0, 30));

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
    {
      name: "NIT Trichy",
      location: "Tamil Nadu",
      fees: 150000,
      rating: 4.8,
      overview: "Top NIT in India",
      placements: "Average Package 14 LPA",
      courses: "MCA, BTech, MTech",
      imageUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    },
    {
      name: "NIT Warangal",
      location: "Telangana",
      fees: 140000,
      rating: 4.7,
      overview: "Premier engineering institute",
      placements: "Average Package 13 LPA",
      courses: "MCA, BTech, MTech",
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    },
    {
      name: "NIT Surathkal",
      location: "Karnataka",
      fees: 145000,
      rating: 4.7,
      overview: "Known for excellent placements",
      placements: "Average Package 15 LPA",
      courses: "MCA, BTech",
      imageUrl:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
    },
    {
      name: "NIT Calicut",
      location: "Kerala",
      fees: 135000,
      rating: 4.5,
      overview: "Leading NIT in South India",
      placements: "Average Package 12 LPA",
      courses: "BTech, MTech, MCA",
      imageUrl:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200",
    },
    {
      name: "NIT Kurukshetra",
      location: "Haryana",
      fees: 125000,
      rating: 4.3,
      overview: "Well-known NIT in North India",
      placements: "Average Package 11 LPA",
      courses: "BTech, MCA",
      imageUrl:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200",
    },
    {
      name: "IIIT Hyderabad",
      location: "Telangana",
      fees: 350000,
      rating: 4.9,
      overview: "Top institute for Computer Science",
      placements: "Average Package 28 LPA",
      courses: "BTech, MS",
      imageUrl:
        "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1200",
    },
    {
      name: "IIIT Bangalore",
      location: "Karnataka",
      fees: 320000,
      rating: 4.7,
      overview: "Industry-oriented programs",
      placements: "Average Package 22 LPA",
      courses: "MTech, MSc Digital Society",
      imageUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    },
    {
      name: "IIIT Delhi",
      location: "Delhi",
      fees: 300000,
      rating: 4.6,
      overview: "Research-focused institute",
      placements: "Average Package 20 LPA",
      courses: "BTech, MTech",
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    },
    {
      name: "DTU",
      location: "Delhi",
      fees: 190000,
      rating: 4.6,
      overview: "One of India's top engineering colleges",
      placements: "Average Package 18 LPA",
      courses: "BTech, MTech, MBA",
      imageUrl:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
    },
    {
      name: "NSUT",
      location: "Delhi",
      fees: 185000,
      rating: 4.5,
      overview: "Strong placements and academics",
      placements: "Average Package 17 LPA",
      courses: "BTech, MTech",
      imageUrl:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200",
    },
    {
      name: "BITS Pilani",
      location: "Rajasthan",
      fees: 500000,
      rating: 4.9,
      overview: "Premier private engineering institute",
      placements: "Average Package 25 LPA",
      courses: "BTech, MSc",
      imageUrl:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200",
    },
    {
      name: "VIT Vellore",
      location: "Tamil Nadu",
      fees: 220000,
      rating: 4.4,
      overview: "Popular private university",
      placements: "Average Package 9 LPA",
      courses: "BTech, MCA, MBA",
      imageUrl:
        "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1200",
    },
    {
      name: "PEC Chandigarh",
      location: "Chandigarh",
      fees: 160000,
      rating: 4.4,
      overview: "Historic engineering college",
      placements: "Average Package 12 LPA",
      courses: "BTech, MTech",
      imageUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    },
  ],
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });