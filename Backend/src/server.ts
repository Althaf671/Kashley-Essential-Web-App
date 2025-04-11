import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport = require("passport");
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
dotenv.config();

// Import Routes
import categoryRoutes from "./Routes/category.routes"
import { PrismaClient } from "@prisma/client";

// To initiate Express
const app = express();

const prisma = new PrismaClient();

// Middleware untuk parsing JSON
app.use(express.json());
app.use(cors());

// CORS Config
app.use(cors({
    origin: "http://localhost:5173", // Sesuaikan dengan frontend-mu
    credentials: true, // Mengizinkan pengiriman cookies dan header otentikasi
  }));

app.use("/api/Routes", categoryRoutes)

// To get all product from Prisma Studio
app.get("/products", async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "error :(" });
    }
})

// Middleware sesi (wajib untuk Passport)
app.use(
    session({
      secret: "your_secret_key", 
      resave: false, 
      saveUninitialized: true 
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

app.use(session({
    secret: process.env.SESSION_SECRET || "supersecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set true jika menggunakan HTTPS
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Google OAuth Route
  app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
  
  app.get("/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://localhost:5123/profile", // Redirect setelah login sukses
      failureRedirect: "http://localhost:5123/login",
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: "http://localhost:5123/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("Google Profile:", profile);
          done(null, profile);
        } catch (error) {
          done(error);
        }
      }
    )
  );

// Serialize & Deserialize
passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

// Selected Port
const PORT = process.env.PORT || 5123;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});