/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import RouteTitle from '@/components/elements/RouteTitle'
import GithubCard from '@/components/fragments/GithubCard'
import IgCard from '@/components/fragments/IgCard'
import LinkedinCard from '@/components/fragments/LinkedinCard'
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
            return <RouteTitle key={index} title={route} isCurrent={currentRoute == route} onClick={() => handleClick(route)} />
          })
        }

      </div>

      <div className={`${currentRoute === 'home' ? 'opacity-100' : 'opacity-0 absolute w-screen'} transition-all duration-500`}>

        <Image style={style.starIcon1} width={100} height={100} src="/Star.svg" alt=''></Image>
        <Image style={style.starIcon2} width={100} height={100} src="/Star.svg" alt=''></Image>

        <h1 style={style.nameTitle} className={`text-center my-20 ${aclonica.className}`}> {data.home.title}</h1>
        <p style={style.description} className={`m-auto text-center  ${poppins.className}`}>{data.home.description}</p>

        <div className="w-10/12 m-auto my-20 flex gap-10 justify-center">
          <PortoCard style={{ width: '500px', height: '300px' }} title={"Confess"} category={'News Portal'}></PortoCard>
          <PortoCard style={{ width: '900px', height: '300px' }} title={"Devlearn"} category={'Learning platform'}></PortoCard>
        </div>

      </div>

      <div className={`${currentRoute === 'about' ? 'opacity-100' : 'opacity-0 absolute w-screen'} transition-all duration-500`}>
        <div className='flex justify-center gap-10 w-10/12 flex-wrap m-auto my-20'>
          <div style={{
            width: '350px',
            height: '350px',
          }} className="rounded-3xl bg-slate-100 ">
            <Image></Image>
          </div>
          <div className="w-1/3 flex flex-col justify-around">
            <div style={{ color: color.primary }} className={`text-4xl ${aclonica.className}`}>I’m a Informatics Engineering student
              from semarang, indonesia </div>
            <div style={{ color: color.primary }} className={`${poppins.className}`}>
              <span className='ml-5'></span>Hai, nama saya adalah Ryo Khrisna Fitriawan. ketertarikan saya pada website bermula pada tahun 2021 ketika saya memutuskan untuk mendaftar kuliah di jurusan teknik informatika. pada tahun 2021 saya lulus dari jenjang SMA dan memutuskan untuk gap year, pada waktu satu tahun itulah saya belajar otodidak mengenai website.
            </div>
          </div>
        </div>
        <div className="">
          <p style={{ color: color.primary }} className={`text-center text-2xl ${aclonica.className}`} >Let's be friend</p>
        </div>
        <hr className='w-10/12 m-auto my-5' />
        <div className="w-10/12 m-auto flex gap-4">
          <IgCard></IgCard>
          <GithubCard></GithubCard>
          <LinkedinCard></LinkedinCard>
        </div>
      </div>
    </div>
  )
}
