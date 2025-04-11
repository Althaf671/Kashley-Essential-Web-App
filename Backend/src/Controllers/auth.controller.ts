import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Prisma, PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient()

passport.use(
    new GoogleStrategy(
        {   clientID: process.env.GOOGLE_CLIENT_ID || "default_client.id",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "default_client_secret",
            callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:5123/auth/google/callback",
        },

    async (_accessToken, _refreshToken, profile, done) => {
    try {
        let user = await prisma.user.findUnique({ where: { googleId: profile.id } 
        });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    email: profile.emails?.[0]?.value || "",
                    googleId: profile.id,
                    provider: "google",
                    name: profile.displayName || "Anonymous",
                    password: "google-oauth",
                }
            });
        }
        
            return done(null, user);
        }   catch (error) {
            return done(error);
        }
    }
)
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: String(id) } });
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});