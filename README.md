# 🧠 BrainBoost - Brain Training Platform

Ek complete brain training web application Next.js, MongoDB aur TypeScript ke saath.

## 🌟 Features

### ✅ User Authentication
- Registration with email & password
- Secure login with JWT tokens
- Protected routes

### 📝 User Onboarding
- Interactive questionnaire
- Personalized recommendations based on user goals
- Age-based training customization

### 🎮 Brain Training Games
1. **Memory Match** 🧠 - Card matching game for memory improvement
2. **Math Challenge** 🔢 - Quick math problems (implementation ready)
3. **Color Match** 🎨 - Stroop effect game (implementation ready)
4. **Speed Click** ⚡ - Reaction time test (implementation ready)

### 📊 User Dashboard
- Game progress tracking
- Score history
- Personal statistics
- Daily challenges

### 🎨 Modern UI/UX
- Responsive design
- Beautiful gradients
- Smooth animations
- Mobile-friendly

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcryptjs
- **State Management**: React Hooks

## 📦 Installation

### Prerequisites
```bash
Node.js 18+ installed
MongoDB installed and running
```

### Step 1: Install Dependencies

Kyunki network restrictions hain, aapko manually install karna padega:

```bash
# Go to project directory
cd /home/claude/brainboost-app

# Try installing (if network available)
npm install
```

**Agar npm install nahi chal raha**, to aapko locally packages install karne padenge.

### Step 2: MongoDB Setup

```bash
# Start MongoDB service
sudo systemctl start mongod

# Or if using MongoDB locally
mongod --dbpath /path/to/your/data
```

### Step 3: Environment Variables

`.env.local` file already created hai with these variables:

```env
MONGODB_URI=mongodb://localhost:27017/brainboost
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
NEXTAUTH_SECRET=your_nextauth_secret_here_change_this
NEXTAUTH_URL=http://localhost:3000
```

**⚠️ Production ke liye secrets change karna zaroori hai!**

### Step 4: Run Development Server

```bash
npm run dev
```

Application `http://localhost:3000` par available hoga.

## 📂 Project Structure

```
brainboost-app/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   └── register/route.ts
│   │   ├── games/
│   │   │   └── score/route.ts
│   │   ├── questionnaire/route.ts
│   │   └── user/route.ts
│   ├── dashboard/page.tsx
│   ├── games/
│   │   └── memory-match/page.tsx
│   ├── login/page.tsx
│   ├── questionnaire/page.tsx
│   ├── register/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (landing page)
├── lib/
│   └── mongodb.ts
├── models/
│   └── User.ts
├── .env.local
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Usage Flow

### 1. Homepage
- Landing page with features
- Game previews
- CTA buttons

### 2. Registration
- User creates account
- Email, name, password
- Auto-login after registration

### 3. Questionnaire
- 4-step interactive quiz
- Age, goals, concerns, play time
- Personalized recommendations

### 4. Dashboard
- Overview of all games
- Personal statistics
- Game selection

### 5. Games
- Individual game pages
- Score tracking
- Leaderboard (future feature)

## 🎮 Implemented Games

### Memory Match (✅ Complete)
- 16-card matching game
- Time and move tracking
- Dynamic scoring
- Replay functionality

### Games To Implement (Templates Ready)
1. **Math Challenge**: Quick arithmetic problems
2. **Color Match**: Stroop effect test
3. **Speed Click**: Reaction time game

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login user

### User
- `GET /api/user` - Get user profile
- `POST /api/questionnaire` - Save questionnaire responses

### Games
- `POST /api/games/score` - Save game score

## 🗄️ Database Schema

### User Model
```typescript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  age: Number,
  questionnaire: {
    goal: String,
    concerns: [String],
    playTime: String
  },
  gameProgress: {
    memoryMatch: { score: Number, played: Number },
    mathChallenge: { score: Number, played: Number },
    colorMatch: { score: Number, played: Number },
    speedClick: { score: Number, played: Number }
  },
  createdAt: Date
}
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

### MongoDB Atlas Setup

```bash
1. Create account on mongodb.com
2. Create new cluster
3. Get connection string
4. Update MONGODB_URI in environment variables
```

### Environment Variables for Production

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/brainboost
JWT_SECRET=use-a-strong-random-secret-here
NEXTAUTH_SECRET=use-another-strong-secret
NEXTAUTH_URL=https://your-domain.com
```

## 🔄 Future Enhancements

### Planned Features
- [ ] More brain training games
- [ ] Multiplayer challenges
- [ ] Social features (friend challenges)
- [ ] Progress analytics & charts
- [ ] Mobile app (React Native)
- [ ] Subscription tiers
- [ ] Achievement badges
- [ ] Daily streaks rewards
- [ ] Leaderboards
- [ ] Email notifications
- [ ] Social auth (Google, Facebook)

### Additional Games Ideas
- Pattern Recognition
- Word Memory
- Spatial Reasoning
- Logic Puzzles
- Number Sequences

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Restart MongoDB
sudo systemctl restart mongod
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notes

- Hindi language support for better UX in Indian market
- Fully responsive design
- PWA-ready (can be enhanced)
- SEO-friendly structure
- Accessible components

## 👨‍💻 Development Tips

### Adding New Games

1. Create new game component in `app/games/[game-name]/page.tsx`
2. Implement game logic
3. Add score tracking
4. Update User model if needed
5. Add to dashboard

### Modifying Styling

All styles in:
- `app/globals.css` - Global styles & Tailwind
- Individual components - Tailwind utility classes

## 🤝 Contributing

Agar aap contribute karna chahte hain:

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

Issues ya questions ke liye:
- GitHub Issues create karein
- Documentation check karein

---

**Built with ❤️ using Next.js, MongoDB, and TypeScript**
