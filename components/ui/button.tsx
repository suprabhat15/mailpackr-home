import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  size?: "sm" | "md" | "lg" | "xl" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild = false, ...props }, ref) => {
    const variants = {
      default: "btn-primary-gradient font-semibold border-0 rounded-xl",
      primary: "btn-primary-gradient font-semibold border-0 rounded-xl",
      secondary: "glass-card-hover font-medium text-foreground rounded-xl",
      outline: "border border-input bg-transparent text-foreground hover:bg-secondary hover:text-foreground font-medium rounded-xl transition-all duration-300 hover:scale-[1.02]",
      ghost: "text-foreground/80 hover:text-foreground hover:bg-secondary font-medium rounded-xl transition-all duration-300",
      link: "text-primary underline-offset-4 hover:underline font-medium",
      destructive: "bg-destructive text-destructive-foreground font-semibold rounded-xl hover:bg-destructive/90",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      xl: "h-16 px-12 text-xl",
      icon: "h-11 w-11",
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 group",
          variants[variant],
          sizes[size || "md"],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
