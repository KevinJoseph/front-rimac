import React from "react"
import { Input } from "../../ui/input"
import "./inputForm.scss"

type Props = {
    id?: string;
    children?: React.ReactNode;
    title: string;
    containerClassName?: string;
    error?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>

export const Inputform = React.forwardRef<HTMLInputElement, Props>(({ error, id, title, containerClassName = "", children, ...props }, ref) => {
    return (
        <div className="input__form-container">
            <label htmlFor={id}>
                <p className="input__form-title">{title}</p>
                {children ? children : <Input autoComplete="off" id={id} ref={ref} {...props} />}
            </label>
            {error && <p className="input-form-error">{error}</p>}
        </div>
    )
})
