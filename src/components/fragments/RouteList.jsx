import RouteTitle from "../elements/RouteTitle"

const RouteList = () => {
    return(
        <div className="flex gap-4 justify-center my-5">
            <RouteTitle title="Home" isCurrent={true}/>
            <RouteTitle title="About" isCurrent={false}/>
            <RouteTitle title="Skills" isCurrent={false}/>
            <RouteTitle title="Portfolio" isCurrent={false}/>
            <RouteTitle title="Gallery" isCurrent={false}/>
        </div>
    )
}

export default RouteList