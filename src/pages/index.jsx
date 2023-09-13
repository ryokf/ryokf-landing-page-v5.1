/* eslint-disable jsx-a11y/alt-text */
import RouteTitle from '@/components/elements/RouteTitle'
import StarIcon from '@/components/elements/starIcon'
import PortoCard from '@/components/fragments/PortoCard'
import RouteList from '@/components/fragments/RouteList'
import { color, aclonica, poppins } from '@/theme/theme'
import Image from 'next/image'
import { useState } from 'react'

const style = {
  nameTitle: {
    color: color.primary,
    // fontFamily: aclonica,
    fontSize: '96px',
  },
  description: {
    color: color.primary,
    fontSize: '20px',
    width: '650px',
    fontweight: 'medium',
  }, starIcon1: {
    position: 'absolute',
    right: '400px',
    width: '100px',
    color: 'white'
  },
  starIcon2: {
    position: 'absolute',
    left: '350px',
    top: '430px',
    width: '100px',
    color: 'white'
  },
}

const route = {
  Home: true,
  About: false,
  Skills: false,
  Portfolio: false,
  Gallery: false,
}

const data = {
  home: {
    title: (<>Hi, I’m Ryo. <br /> A Programmer.</>),
    description: 'saya adalah seorang programmer yang juga menekuni bidang desain, sehingga saya mampu menciptakan Aplikasi dengan fungsionalitas tinggi dan juga indah.',
  }
}

export default function Home() {

  const routeList = ['home', 'about', 'skills', 'portfolio', 'gallery']
  const [currentRoute, setCurrentRoute] = useState(routeList[0])
  const handleClick = (route) => {
      console.log(route)
      setCurrentRoute(route)
  }

  return (
    <div style={{ backgroundImage: "url('/background.png')" }} className="absolute w-full min-h-screen bg-cover overflow-hidden">
      {/* <RouteList onClick={() => handleClick(route)} routeList={routeList} currentRoute={route}></RouteList> */}

      <div className="flex gap-4 justify-center my-5">
            {
                routeList.map((route, index) => {
                    return <RouteTitle key={index} title={route} isCurrent={currentRoute == route} onClick={() => handleClick(route)}/>
                })
            }

        </div>

      <div className={`${currentRoute === 'home' ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>

        <Image style={style.starIcon1} width={100} height={100} src="/star.svg" alt=''></Image>
        <Image style={style.starIcon2} width={100} height={100} src="/star.svg" alt=''></Image>

        <h1 style={style.nameTitle} className={`text-center my-20 ${aclonica.className}`}> {data.home.title}</h1>
        <p style={style.description} className={`m-auto text-center  ${poppins.className}`}>{data.home.description}</p>

        <div className="w-10/12 m-auto my-20 flex gap-10 justify-center">
          <PortoCard style={{ width: '500px', height: '300px' }} title={"Confess"} category={'News Portal'}></PortoCard>
          <PortoCard style={{ width: '900px', height: '300px' }} title={"Devlearn"} category={'Learning platform'}></PortoCard>
        </div>

      </div>
      <p>hello</p>
    </div>
  )
}
