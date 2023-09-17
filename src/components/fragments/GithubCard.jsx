import { color } from "@/lib/theme/theme"

const GithubCard =() => {
    return(
        <div className="w-full col-span-1 h-60 bg-slate-50 rounded-xl flex flex-col justify-evenly px-8 lg:px-10">
            <div className="rounded-full self-center aspect-square w-20 bg-slate-200"></div>
            <div className="">
                <p className="text-left text-xl">Ryo khrisna fitriawan</p>
            </div>
            <div className="text-left -mt-4">
                <p className="text-zinc-400">ryokf</p>
            </div>
            <button style={{ backgroundColor: color.primary }} className="text-white px-3 py-1 rounded-lg cursor-pointer">follow</button>
        </div>
    )
}

export default GithubCard