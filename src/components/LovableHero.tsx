import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { type HTMLMotionProps, type Transition, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z"

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroVariants> {}

interface TextStaggerText extends HTMLMotionProps<"div"> {
  text: string
  stagger?: number
  direction?: TransformDirectionType
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export interface AnimatedContainerProps extends HTMLMotionProps<"div"> {
  transformDirection?: TransformDirectionType
  className?: string
}

export const transformVariants = (direction?: TransformDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
})

const TRANSITION_CONFIG: Transition = { ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], duration: 0.5 }

const heroVariants = cva(
  "relative min-h-svh w-full overflow-hidden",
  {
    variants: {
      layout: {
        default: "flex flex-col items-center text-center justify-center place-content-center",
        colLeft: "flex flex-col justify-center items-start",
      },
    },
    defaultVariants: {
      layout: "default",
    },
  }
)

export function Hero({ children, className, layout, ...props }: HeroProps) {
  return (
    <section className={cn(heroVariants({ layout }), className)} {...props}>
      {children}
    </section>
  )
}
Hero.displayName = "Hero"

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  word: string
  transition?: Transition
  direction?: TransformDirectionType
}

function Word({ word, transition = TRANSITION_CONFIG, direction = "bottom" }: WordProps) {
  const characters = word.split("")
  return (
    <span className="inline-block text-nowrap align-top">
      {characters.map((char, index) => (
        <span key={index} className="inline-block">
          <motion.span
            className="inline-block"
            variants={transformVariants(direction)}
            transition={transition}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function TextStagger({
  text,
  stagger = 0.05,
  transition,
  direction,
  className,
  as: Component = "span",
  ...props
}: TextStaggerText) {
  const words = text.split(" ")

  const MotionComp = motion(Component as React.ElementType)
  return (
    <MotionComp
      transition={{ staggerChildren: stagger }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className={cn("relative", className)}
      {...props}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <Word transition={transition} direction={direction} word={word} />
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </MotionComp>
  )
}
TextStagger.displayName = "TextStagger"

export const AnimatedContainer = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ children, className, transformDirection = "bottom", ...props }, ref) => {
    return (
      <motion.div
        className={cn("relative z-10", className)}
        ref={ref}
        variants={transformVariants(transformDirection)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, ...props.viewport }}
        transition={{
          duration: props.transition?.duration ?? 0.4,
          ease: props.transition?.ease ?? "easeIn",
          delay: props.transition?.delay ?? 0.4,
          ...props.transition,
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
AnimatedContainer.displayName = "AnimatedContainer"
