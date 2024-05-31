export default function({ children} : {
    children: React.ReactNode
}){
    return(
        <div>
            <div className="text-center border-2">
                20% off for next 3 days
            </div>
            {children}
        </div>
    )
}