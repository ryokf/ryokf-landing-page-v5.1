import { color } from "@/lib/theme/theme"

const IgCard = () => {
    return(
        <div className="w-full rounded-xl h-60 bg-slate-100 flex">
            <div className="w-1/3 flex justify-center items-center">
                <div className="bg-slate-200 rounded-full w-24 aspect-square"></div>
            </div>
            <div className="w-2/3 flex flex-col justify-evenly">
                <div className="flex gap-4">
                    <p className="font-bold text-lg">ryo.kf</p>
                    <button style={{ backgroundColor: color.primary }} className="bg-zinc-500 text-white px-4 text-sm py-1 rounded-lg cursor-pointer">follow</button>
                </div>
                <div className="flex gap-8 font-medium">
                    <div className="">30 posts</div>
                    <div className="">300 follower</div>
                    <div className="">300 following</div>
                </div>
                <div className="">
                    <div className="font-medium">ryo khrisna fitriawan</div>
                    <div className="text-zinc-400">web designer</div>
                    <div className="">Part of <a href="" className="text-sky-500">@tigasulung.creative</a></div>
                </div>
            </div>
        </div>
    )
}

export default IgCard