import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: NextRequest) {
  try {
    // Get token from cookie
    const token = req.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    
    await connectDB();

    const { goal, concerns, playTime, age } = await req.json();

    // Update user with questionnaire data
    const user = await User.findByIdAndUpdate(
      decoded.userId,
      {
        $set: {
          age,
          questionnaire: {
            goal,
            concerns,
            playTime,
          },
        },
      },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Questionnaire saved successfully!',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Questionnaire error:', error);
    return NextResponse.json(
      { error: 'Kuch galat ho gaya' },
      { status: 500 }
    );
  }
}
