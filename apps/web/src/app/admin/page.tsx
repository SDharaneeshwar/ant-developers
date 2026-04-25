import Footer from "@/components/layout/Footer";
import BackArrow from "@/components/layout/BackArrow";
import { connectToDatabase } from "@/lib/mongodb";
import Enrollment from "@/models/Enrollment";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await connectToDatabase();

  const enrollments = await Enrollment.find({})
    .sort({ createdAt: -1 })
    .lean();

  const serializedEnrollments = JSON.parse(JSON.stringify(enrollments));

  return (
    <>
      <BackArrow />

      <main className="min-h-screen bg-hero-glow px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AdminDashboard initialRecords={serializedEnrollments} />
        </div>
      </main>

      <Footer />
    </>
);
    
}