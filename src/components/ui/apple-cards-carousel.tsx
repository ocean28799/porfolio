/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  JSX,
  useCallback,
} from "react"
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import Image, { ImageProps } from "next/image"
import { useOutsideClick } from "@/hooks/use-outside-click"

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

type Card = {
  src: string
  title: string
  category: string
  content: React.ReactNode
  techStack?: string[]
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384 // (md:w-96)
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div className="flex justify-end gap-2">
          <button
            className="relative z-40 md:size-10 size-6 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 md:size-10 size-6 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div
          className="flex w-full overflow-x-scroll overscroll-x-hidden py-14 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[5%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const Card = ({
  card,
  index,
  layout = false,
  techStack,
}: {
  card: Card
  index: number
  layout?: boolean
  techStack?: string[]
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onCardClose } = useContext(CarouselContext)

  // Define gradient backgrounds for each project
  const getGradientBackground = (index: number) => {
    const gradients = [
      // Crypto purple-blue gradient
      "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500",
      // Web3 green-teal gradient  
      "bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500",
      // DeFi orange-pink gradient
      "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600",
      // Blockchain blue-purple gradient
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500",
      // NFT rainbow gradient
      "bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500",
      // AI tech gradient
      "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
    ]
    return gradients[index % gradients.length]
  }

  const handleOpen = () => {
    // setOpen(true)
  }

  const handleClose = useCallback(() => {
    setOpen(false)
    onCardClose(index)
  }, [onCardClose, index])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, handleClose])

  useOutsideClick(containerRef as any, () => handleClose())

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={`rounded-3xl h-80 w-80 md:h-[33rem] md:w-[26rem] overflow-hidden flex flex-col items-start justify-start relative z-10 gradient-animate glow-animation ${getGradientBackground(index)}`}
        whileHover={{
          transform: "translateY(-10px)",
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 z-20 pointer-events-none" />
        
        {/* Floating geometric shapes for web3 effect */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse float-animation" />
          <div className="absolute bottom-20 left-6 w-8 h-8 bg-white/20 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-8 w-6 h-6 bg-white/15 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/10 rounded-sm rotate-12 animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        {/* Content overlay */}
        <div className="relative z-40 p-3 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-base md:text-xl font-semibold text-left backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-lg"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl max-w-xs text-left [text-wrap:balance] mt-4 font-black italic drop-shadow-lg"
          >
            {card.title}
          </motion.p>
        </div>

        {/* Project image as overlay */}
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-20 z-30">
          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="object-cover rounded-tl-3xl"
          />
        </div>

        {techStack?.length && (
          <AnimatePresence>
            <div className="absolute z-40 bottom-0 left-0 p-3 md:p-8 flex flex-wrap gap-1">
              {techStack.map((tech, techIndex) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={tech}
                  className="text-white md:text-sm font-semibold text-left px-3 py-1 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 text-[10px] shadow-lg hover:bg-white/20 transition-all duration-300"
                  style={{ 
                    animationDelay: `${techIndex * 0.1}s`,
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </motion.button>
    </>
  )
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}
