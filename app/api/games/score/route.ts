import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    
    await connectDB();

    const { game, score } = await req.json();

    // Validate game type
    const validGames = ['memoryMatch', 'mathChallenge', 'colorMatch', 'speedClick'];
    if (!validGames.includes(game)) {
      return NextResponse.json(
        { error: 'Invalid game type' },
        { status: 400 }
      );
    }

    // Get user
    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update score if it's higher than previous
    const currentProgress = user.gameProgress[game];
    const updateData: any = {
      [`gameProgress.${game}.played`]: currentProgress.played + 1,
    };

    if (score > currentProgress.score) {
      updateData[`gameProgress.${game}.score`] = score;
    }

    await User.findByIdAndUpdate(decoded.userId, { $set: updateData });

    return NextResponse.json(
      {
        message: 'Score saved successfully!',
        newHighScore: score > currentProgress.score,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Score save error:', error);
    return NextResponse.json(
      { error: 'Error saving score' },
      { status: 500 }
    );
  }
}
