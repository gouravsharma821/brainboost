import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Sabhi fields zaroori hain' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password kam se kam 6 characters ka hona chahiye' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Ye email pehle se registered hai' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      gameProgress: {
        memoryMatch: { score: 0, played: 0 },
        mathChallenge: { score: 0, played: 0 },
        colorMatch: { score: 0, played: 0 },
        speedClick: { score: 0, played: 0 },
      },
    });

    return NextResponse.json(
      {
        message: 'Account successfully create ho gaya!',
        userId: user._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration mein error aaya. Please try again.' },
      { status: 500 }
    );
  }
}
