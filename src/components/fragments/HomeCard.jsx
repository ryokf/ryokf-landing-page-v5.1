import { color } from "@/lib/theme/theme"

const HomeCard = ({title, desc, icon, className}) => {
    return(
        <div style={{ color: color.primary }} className={` ${className} grid grid-cols-4 bg-white/50 rounded-3xl py-4 px-2 shadow-lg`}>
            <div className="col-span-1 flex justify-center items-center">
                {icon}
            </div>
            <div className="col-span-3">
                <h1 className="text-base md:text-xl font-medium mb-1">{title}</h1>
                <p className="text-xs md:text-sm text-zinc-400">{desc}</p>
            </div>
        </div>
    )
}

export default HomeCard