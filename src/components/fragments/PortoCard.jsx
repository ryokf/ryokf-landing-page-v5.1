import { poppins, aclonica } from "@/theme/theme"

const PortoCard = ({style}) => {
    return (
        <div style={style} className={`rounded-3xl bg-white/50 backdrop-blur-md  p-5`}>
            <p className={`text-right text-lg ${poppins.className} mb-2`}>Learning Platform</p>
            <h1 className={`text-right text-4xl ${aclonica.className}`}>DEVLEARN</h1>
        </div>
    )
}

export default PortoCard