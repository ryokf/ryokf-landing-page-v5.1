import { color } from "@/theme/theme"

const style = {
    current: {
        color: color.primary,
        backgroundColor: "#ffffffdd",
        padding: "5px 20px",
    }, notCurrent: {
        color: color.primary,
        padding: "5px 20px",
    }
}

const RouteTitle = ({title, isCurrent}) => {
    return(
        <div className="">
            <button style={isCurrent ? style.current : style.notCurrent} className="text-lg rounded-lg font-bold">{title}</button>
        </div>
    )
}

export default RouteTitle