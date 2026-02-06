# 🚀 BrainBoost Quick Start Guide

## 📥 Download & Extract

1. Download `brainboost-app.zip` file
2. Extract karein apne computer mein
3. Terminal/Command Prompt open karein

## ⚡ 3 Simple Steps

### Step 1: Install Dependencies
```bash
cd brainboost-app
npm install
```

**Agar npm install mein error aaye:**
```bash
# Clear cache
npm cache clean --force

# Phir se try karein
npm install
```

### Step 2: MongoDB Setup

**Option A: Local MongoDB (Recommended for Testing)**
```bash
# Ubuntu/Linux
sudo systemctl start mongod

# macOS (with Homebrew)
brew services start mongodb-community

# Windows
# MongoDB service automatically start hoti hai
```

**Option B: MongoDB Atlas (Cloud - Free)**
1. https://www.mongodb.com/cloud/atlas
2. Free account banayein
3. Create cluster
4. Get connection string
5. `.env.local` mein update karein

### Step 3: Run Application
```bash
npm run dev
```

🎉 **Done!** Open browser: `http://localhost:3000`

---

## 🎯 First Time Use

1. **Homepage** dekhen
2. "Start Free" button click karein
3. **Register** karein:
   - Name: Apna naam
   - Email: your@email.com
   - Password: 123456 (ya koi bhi)

4. **Questionnaire** complete karein (4 steps)
5. **Dashboard** par pohochenge
6. **Game khelen**:
   - Memory Match
   - Math Challenge

---

## 🛠️ Configuration

### .env.local File
File already created hai, lekin check kar lein:

```env
MONGODB_URI=mongodb://localhost:27017/brainboost
JWT_SECRET=my-super-secret-key
NEXTAUTH_SECRET=another-secret-key
NEXTAUTH_URL=http://localhost:3000
```

---

## 🐛 Common Problems

### Problem 1: "npm install" fails
```bash
# Solution
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Problem 2: Port 3000 already in use
```bash
# Solution 1: Kill the port
npx kill-port 3000

# Solution 2: Use different port
npm run dev -- -p 3001
```

### Problem 3: MongoDB connection error
```bash
# Check if MongoDB is running
sudo systemctl status mongod

# If not running, start it
sudo systemctl start mongod
```

### Problem 4: Module not found errors
```bash
# Reinstall specific package
npm install mongoose bcryptjs jsonwebtoken

# Or reinstall everything
rm -rf node_modules
npm install
```

---

## 📂 Project Files

### Main Files
- `app/page.tsx` - Landing page
- `app/register/page.tsx` - Registration
- `app/login/page.tsx` - Login
- `app/dashboard/page.tsx` - User dashboard
- `app/games/memory-match/page.tsx` - Memory game
- `app/games/math-challenge/page.tsx` - Math game

### API Routes
- `app/api/auth/register/route.ts` - Registration API
- `app/api/auth/login/route.ts` - Login API
- `app/api/games/score/route.ts` - Save scores

### Database
- `models/User.ts` - User schema
- `lib/mongodb.ts` - Database connection

---

## 🎮 How to Play Games

### Memory Match
1. Dashboard se "Memory Match" click karein
2. Cards flip karein aur match karen
3. Kam moves mein complete karein = High score
4. Game khatam hone par score automatically save hoga

### Math Challenge  
1. Dashboard se "Math Challenge" click karein
2. 60 seconds timer start hoga
3. Math problems solve karein
4. Jitne zyada correct answers = High score
5. Streak maintain karein bonus points ke liye

---

## 🚀 Next Steps

### Test Everything
1. ✅ Registration
2. ✅ Login
3. ✅ Questionnaire
4. ✅ Dashboard
5. ✅ Both games
6. ✅ Score saving

### Customize
1. Colors change karein (`tailwind.config.js`)
2. Apna logo add karein
3. More games banayein
4. Features add karein

### Deploy
1. GitHub par push karein
2. Vercel connect karein
3. Environment variables add karein
4. Deploy!

---

## 📚 Documentation

- **README.md** - Full documentation
- **SETUP.md** - Detailed setup guide
- **PROJECT_SUMMARY.md** - Complete feature list

---

## 🎓 Learning Resources

### Next.js
- https://nextjs.org/docs
- https://nextjs.org/learn

### MongoDB
- https://www.mongodb.com/docs
- https://university.mongodb.com

### TypeScript
- https://www.typescriptlang.org/docs

---

## ✅ Success Checklist

- [ ] Downloaded & extracted zip
- [ ] Ran `npm install`
- [ ] Started MongoDB
- [ ] Ran `npm run dev`
- [ ] Opened `http://localhost:3000`
- [ ] Created account
- [ ] Completed questionnaire
- [ ] Played both games
- [ ] Scores saved successfully

---

## 🎉 You're All Set!

Agar koi problem aaye to:
1. README.md padhein
2. SETUP.md check karein
3. Error message Google karein
4. Stack Overflow use karein

**Happy Coding! 🚀**

---

**Made with ❤️ for Brain Training**
