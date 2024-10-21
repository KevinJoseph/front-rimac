import React from "react"
import './input.scss'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type,  ...props }, ref) => {
    return (
        <input type={type}  className="input" { ...props} ref={ref}/>
    )
})
