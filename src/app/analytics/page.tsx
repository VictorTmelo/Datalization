'use client';

import { motion } from 'framer-motion';

export default function Settings() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-6 overflow-auto"
        >
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-foreground">Soon...</h1>
            </div>
        </motion.main>
    );
}
