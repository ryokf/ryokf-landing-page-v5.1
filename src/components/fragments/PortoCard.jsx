import { poppins, aclonica, color } from "@/theme/theme"

const PortoCard = ({style, title, category, photo}) => {
    return (
        <div style={style} className={`rounded-3xl bg-white/50 backdrop-blur-md  p-5`}>
            <p style={{ color: color.black }} className={`text-right text-lg ${poppins.className} mb-2`}>{category}</p>
            <h1 style={{ color: color.primary }} className={`text-right text-4xl ${aclonica.className}`}>{title}</h1>
        </div>
    )
}

export default PortoCard