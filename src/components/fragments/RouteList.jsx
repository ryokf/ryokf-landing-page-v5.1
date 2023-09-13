import { useState } from "react"
import RouteTitle from "../elements/RouteTitle"

const RouteList = ({ onClick, currentRoute, routeList }) => {

    // console.log(routeList)
    // console.log(currentRoute)

    return (
        <div className="flex gap-4 justify-center my-5">
            {
                routeList.map((route, index) => {
                    return <RouteTitle key={index} title={route} isCurrent={currentRoute == route} onClick={() => onClick(route)}/>
                })
            }



        </div>
    );
}

export default RouteList