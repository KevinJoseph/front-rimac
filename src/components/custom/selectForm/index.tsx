import React, { useState } from "react";
import { Input } from "../../ui/input"; 
import "./selectForm.scss";

type Props = {
    id?: string;
    children?: React.ReactNode;
    title: string;
    containerClassName?: string;
    error?: string | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const SelectForm = React.forwardRef<HTMLInputElement, Props>(
    ({ error, id, title, containerClassName = "", children, onChange, ...props }, ref) => {
        const [selectedOption, setSelectedOption] = useState("DNI"); // Estado para el select

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(e); 
            }
        };

        const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedOption(e.target.value);
            if (onChange) {
                const simulatedEvent = {
                    target: {
                        name: props.name || "",
                        value: e.target.value
                    }
                } as React.ChangeEvent<HTMLSelectElement>;
                onChange(simulatedEvent);
            }
        };

        return (
            <div className={`input__form-container ${containerClassName}`}>
                <label htmlFor={id} className="input__form-title">
                    {title}
                </label>
                <div className="input-select-container">
                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="DNI">DNI</option>
                        <option value="CE">CE</option>
                    </select>
                    {children ? children : (
                        <Input 
                            autoComplete="off" 
                            id={id} 
                            ref={ref} 
                            onChange={handleInputChange}
                            {...props} 
                        />
                    )}
                </div>
                {typeof error === "string" && <p className="input-form-error">{error}</p>}
            </div>
        );
    }
);
