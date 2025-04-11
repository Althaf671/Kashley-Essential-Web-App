"use client"

import React from "react";
import { motion } from "framer-motion"
import getImage from "../../assets/assetsLoader";

function LoadingCircleSpinner() {
    return (
        <div className="spinner-bg fixed inset-0 flex items-center justify-center bg-opacity-10 z-50">
            <motion.div
                className="loading-bg w-20 h-20 border-4 border-white"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <img src={getImage('additional/k.png')} className="absolute w-7" alt="K-Logo" />
        </div>
    )
}

export default LoadingCircleSpinner;