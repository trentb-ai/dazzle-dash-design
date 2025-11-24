import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CryptoIconProps {
  image?: string
  icon?: React.ReactNode
  name: string
  role: string
  position: { x: string; y: string }
  index: number
  className?: string
}

export function FloatingCrypto({ image, icon, name, role, position, index, className }: CryptoIconProps) {
  return (
    <motion.div
      className={cn("absolute hidden md:flex flex-col items-center gap-2", className)}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.3 + index * 0.1 },
        scale: { duration: 0.6, delay: 0.3 + index * 0.1 },
        y: {
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="w-32 h-32 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary/40 overflow-hidden"
        style={{
          background: image ? "rgba(180, 176, 254, 0.15)" : "rgba(180, 176, 254, 0.1)",
          boxShadow: "0 0 40px rgba(180, 176, 254, 0.4)",
        }}
      >
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          icon
        )}
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-base font-bold text-foreground tracking-wide">
          {name}
        </span>
        <span className="text-sm font-normal text-muted-foreground">
          {role}
        </span>
      </div>
    </motion.div>
  )
}
