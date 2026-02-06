# 🚀 BrainBoost Setup Guide

## Quick Start (Hindi + English)

### Step 1: Dependencies Install Karein

```bash
cd brainboost-app
npm install
```

**Agar network issue ho to:**
Aapko manually packages download karke install karne padenge ya phir internet connection ke saath try karein.

### Step 2: MongoDB Setup

#### Option A: Local MongoDB
```bash
# MongoDB install karein (Ubuntu/Debian)
sudo apt-get install mongodb

# MongoDB start karein
sudo systemctl start mongod
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod
```

#### Option B: MongoDB Atlas (Cloud)
1. https://www.mongodb.com/cloud/atlas par jayein
2. Free account banayein
3. Cluster create karein
4. Connection string copy karein
5. `.env.local` file mein paste karein

### Step 3: Environment Variables Setup

`.env.local` file already created hai. Production ke liye secrets change karein:

```env
MONGODB_URI=mongodb://localhost:27017/brainboost
# Ya MongoDB Atlas connection string:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/brainboost

JWT_SECRET=apna-strong-secret-key-yahan-dalein
NEXTAUTH_SECRET=dusra-strong-secret-key
NEXTAUTH_URL=http://localhost:3000
```

**⚠️ Important:** Production mein real secrets use karein!

### Step 4: Run Development Server

```bash
npm run dev
```

Application `http://localhost:3000` par khulega.

## 🎯 Testing the Application

### 1. Registration Test
1. `http://localhost:3000/register` par jayein
2. Naam, email, password enter karein
3. "Account Banayein" click karein

### 2. Questionnaire Test
- Registration ke baad automatically questionnaire page khulega
- 4 steps complete karein:
  - Age enter karein
  - Goal select karein
  - Concerns select karein (multiple)
  - Play time select karein

### 3. Dashboard Test
- Questionnaire complete karne ke baad dashboard khulega
- Aapko stats aur games dikhenge

### 4. Game Test
- Memory Match game khelen
- Math Challenge game khelen
- Scores automatically save ho jayenge

## 🐛 Common Issues & Solutions

### Issue 1: MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solution:**
```bash
# MongoDB service start karein
sudo systemctl start mongod

# Ya manually start karein
mongod --dbpath ~/data/db
```

### Issue 2: Port 3000 Already in Use
```
Error: Port 3000 is already in use
```

**Solution:**
```bash
# Port 3000 ko free karein
npx kill-port 3000

# Ya dusra port use karein
npm run dev -- -p 3001
```

### Issue 3: JWT Token Error
```
Error: JWT secret not found
```

**Solution:**
- `.env.local` file check karein
- `JWT_SECRET` properly set hai ya nahi
- Server restart karein

### Issue 4: Module Not Found
```
Error: Cannot find module 'mongoose'
```

**Solution:**
```bash
# Dependencies reinstall karein
rm -rf node_modules package-lock.json
npm install
```

## 📊 Database Structure

MongoDB mein automatically ye collections ban jayenge:

### users Collection
```javascript
{
  _id: ObjectId,
  name: "User Name",
  email: "user@example.com",
  password: "hashed_password",
  age: 25,
  questionnaire: {
    goal: "memory",
    concerns: ["📚 Padhai mein dikkat", "🤔 Cheezein bhool jaata hoon"],
    playTime: "10-20"
  },
  gameProgress: {
    memoryMatch: { score: 0, played: 0 },
    mathChallenge: { score: 0, played: 0 },
    colorMatch: { score: 0, played: 0 },
    speedClick: { score: 0, played: 0 }
  },
  createdAt: ISODate
}
```

## 🔐 Security Checklist

### Development
- ✅ .env.local file git ignore mein hai
- ✅ Passwords hashed hain (bcryptjs)
- ✅ JWT tokens expire hote hain
- ✅ HTTPOnly cookies use ki gayi hain

### Production
- [ ] Strong JWT_SECRET use karein
- [ ] MongoDB Atlas use karein (not local)
- [ ] HTTPS enable karein
- [ ] Rate limiting add karein
- [ ] Input validation improve karein

## 🚀 Deployment Checklist

### Vercel Deployment

1. **GitHub Repository Setup**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

2. **Vercel Setup**
- https://vercel.com par jayein
- GitHub connect karein
- Repository select karein
- Environment variables add karein:
  - MONGODB_URI
  - JWT_SECRET
  - NEXTAUTH_SECRET
  - NEXTAUTH_URL (production URL)
- Deploy button click karein

3. **MongoDB Atlas Setup**
- Cluster create karein
- Network Access mein 0.0.0.0/0 allow karein (Vercel ke liye)
- Database User create karein
- Connection string copy karein
- Vercel environment variables mein paste karein

### Post-Deployment Testing

1. Registration test karein
2. Login test karein
3. Questionnaire test karein
4. Games khelen aur score save test karein

## 📱 Features to Add (Future)

### High Priority
- [ ] Password reset functionality
- [ ] Email verification
- [ ] More games (Color Match, Speed Click)
- [ ] Leaderboards
- [ ] Achievement system

### Medium Priority
- [ ] User profile editing
- [ ] Avatar upload
- [ ] Social sharing
- [ ] Progress charts
- [ ] Daily challenges

### Low Priority
- [ ] Mobile app
- [ ] Push notifications
- [ ] Multiplayer mode
- [ ] AI-powered recommendations
- [ ] Premium features

## 🤝 Contributing

Agar aap contribute karna chahte hain:

1. Fork karein
2. Feature branch banayein (`git checkout -b feature/AmazingFeature`)
3. Commit karein (`git commit -m 'Add some AmazingFeature'`)
4. Push karein (`git push origin feature/AmazingFeature`)
5. Pull Request open karein

## 📞 Support & Help

### Documentation
- Next.js: https://nextjs.org/docs
- MongoDB: https://docs.mongodb.com
- Tailwind CSS: https://tailwindcss.com/docs

### Community
- Stack Overflow
- GitHub Issues
- Discord communities

## 🎓 Learning Resources

### Next.js
- https://nextjs.org/learn
- https://www.youtube.com/c/Fireship

### MongoDB
- https://university.mongodb.com
- https://www.mongodb.com/docs/manual/tutorial

### TypeScript
- https://www.typescriptlang.org/docs
- https://www.totaltypescript.com

## ✅ Final Checklist

Development:
- [x] Project structure created
- [x] Database models defined
- [x] Authentication implemented
- [x] 2 games implemented
- [x] Dashboard created
- [x] Responsive design

Testing:
- [ ] Register new user
- [ ] Complete questionnaire
- [ ] Play Memory Match
- [ ] Play Math Challenge
- [ ] Check score saving
- [ ] Test on mobile

Deployment:
- [ ] Environment variables set
- [ ] MongoDB Atlas connected
- [ ] Deployed to Vercel
- [ ] SSL certificate active
- [ ] Custom domain (optional)

---

**Aapka BrainBoost application ready hai! 🎉**

Koi bhi problem ho to README.md aur ye file carefully padhein.
