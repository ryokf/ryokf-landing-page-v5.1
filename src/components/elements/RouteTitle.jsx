import { color } from "@/lib/theme/theme"

const style = {
    current: {
        color: color.primary,
        backgroundColor: "#ffffffaa",
        padding: "5px 20px",
    }, notCurrent: {
        color: color.primary,
        padding: "5px 20px",
    }
}

const RouteTitle = ({title, isCurrent, onClick, fontSize}) => {
    
    return(
        <div className="">
            <button onClick={() => onClick(title)} style={isCurrent ? style.current : style.notCurrent} className="text-xs md:text-lg rounded-lg font-bold">{title}</button>
        </div>
    )
}

export default RouteTitle