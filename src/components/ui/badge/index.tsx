import "./badge.scss"

export const Badge = ({ children } : { children : React.ReactNode}) => {
    return (
        <div className="badge__contend">
            {children}
        </div>
    )
}
