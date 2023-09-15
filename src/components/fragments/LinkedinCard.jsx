import { color } from "@/theme/theme"

const LinkedinCard = () => {
    return (
        <div className="w-full h-60 bg-slate-50 rounded-xl flex flex-col box-border pl-10">
            {/* <div className="m-2 flex flex-col justify-evenly "> */}
                <div className="bg-slate-200 rounded-full w-20 aspect-square mt-5 mb-3"></div>
                <h1 className="text-xl font-bold">Ryo khrisna fitriawan</h1>
                <p>Dian Nuswantoro University Student Informatics Engineering</p>
                <p className="mb-2 text-zinc-400 text-sm">semarang, central java</p>
                <button style={{ backgroundColor: color.primary }} className="text-white px-4 py-1 rounded-full cursor-pointer w-1/5">follow</button>
            {/* </div> */}

        </div>
    )
}

export default LinkedinCard