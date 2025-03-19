import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Coffee, Croissant, Cookie } from 'lucide-react';

const icons = [
  { Icon: Cake, delay: 0 },
  { Icon: Coffee, delay: 1 },
  { Icon: Croissant, delay: 2 },
  { Icon: Cookie, delay: 3 },
];

export const FloatingIcons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-[#D4A373]/10"
          initial={{ y: '100vh' }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
            ],
          }}
          transition={{
            duration: 20,
            delay: delay * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}
    </div>
  );
};