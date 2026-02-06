import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    console.log("📩 Contact API hit");

    const body = await req.json();

    await connectDB(); // 🔥 VERY IMPORTANT

    await Contact.create(body);

    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ Contact API Error:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}