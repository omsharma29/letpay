"use client";
import { motion } from "framer-motion";
import Dashboard from './assets/Dashboard.png';

export default function DashbaordImage() {
  return (
    <motion.div>
      <motion.img
        src={Dashboard.src}
        alt="Dashboard Image"
        width={559}
        height={531.82}
        initial={{ x: 300, opacity: 0 }} // Slide in effect
        animate={{ x: 0, opacity: 1 }} // Animate into view
        transition={{ type: "spring", stiffness: 50, damping: 15 }} // Smooth transition
        whileInView={{
          scale: [1, 1.1], // Scale from 1 to 1.1 when the image enters the viewport
          transition: { duration: 0.5 }, // Smooth scaling transition
        }}
        whileHover={{
          scale: 1.05, // Scale the image on hover
          rotate: 0, // Add slight rotation on hover
          transition: { type: "spring", stiffness: 300, damping: 10 }, // Smooth hover transition
        }}
      />
    </motion.div>
  );
}
