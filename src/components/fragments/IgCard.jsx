import { color } from "@/lib/theme/theme"

const IgCard = ({iconStyle}) => {
    return(
        <div className="w-full col-span-1 lg:col-span-2 rounded-xl h-60 bg-slate-100 flex">
            <div className="w-1/3 flex justify-center items-center">
                <div style={iconStyle} className=" bg-slate-200 rounded-full aspect-square"></div>
            </div>
            <div className="w-2/3 flex flex-col justify-evenly">
                <div className="flex gap-4">
                    <p className="font-bold text-lg">ryo.kf</p>
                    <button style={{ backgroundColor: color.primary }} className="bg-zinc-500 text-white px-4 text-sm py-1 rounded-lg cursor-pointer">follow</button>
                </div>
                <div className="flex gap-4 font-medium pr-4">
                    <div className="text-center text-sm lg:text-base">30 posts</div>
                    <div className="text-center text-sm lg:text-base">300 follower</div>
                    <div className="text-center text-sm lg:text-base">300 following</div>
                </div>
                <div className="">
                    <div className="font-medium text-sm lg:text-base">ryo khrisna fitriawan</div>
                    <div className="text-zinc-400 text-sm lg:text-base">web designer</div>
                    <div className="text-sm lg:text-base">Part of <a href="" className="text-sky-500">@tigasulung.creative</a></div>
                </div>
            </div>
        </div>
    )
}

export default IgCard