/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import RouteTitle from '@/components/elements/RouteTitle'
import GithubCard from '@/components/fragments/GithubCard'
import IgCard from '@/components/fragments/IgCard'
import LinkedinCard from '@/components/fragments/LinkedinCard'
import PortoCard from '@/components/fragments/PortoCard'
import RouteList from '@/components/fragments/RouteList'
import useWindowDimensions from '@/lib/helper/dimensioInfo'
import { color, aclonica, poppins } from '@/lib/theme/theme'
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
    // right: '400px',
    width: '100px',
    color: 'white'
  },
  starIcon2: {
    position: 'absolute',
    // left: '350px',
    // top: '430px',
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
  const [isHidden, setIsHidden] = useState(false)

  const handleClick = (route) => {
    if (route == currentRoute) return;
    setCurrentRoute(route)

    setTimeout(() => {
      setIsHidden(!isHidden)
    }, 500)
  }

  const [width, height] = useWindowDimensions();
  console.log(width)

  const star = () => {
    return (
      <>
        <Image style={{
          position: 'absolute',
          right: width / 6,
          width: '100px',
          color: 'white'
        }} width={100} height={100} src="/Star.svg" alt='' />


        <Image style={{
          position: 'absolute',
          left: width / 6.3,
          top: height / 2.5,
          width: '100px',
          color: 'white'
        }} width={100} height={100} src="/Star.svg" alt='' />
      </>
    )
  }

  return (
    <div style={{ backgroundImage: "url('/background.png')" }} className="absolute w-full min-h-screen bg-cover overflow-hidden">
      <div className="flex gap-4 justify-center my-5">
        {
          routeList.map((route, index) => {
            return <RouteTitle key={index} title={route} isCurrent={currentRoute == route} onClick={() => handleClick(route)} />
          })
        }
      </div>

      <div className={`${currentRoute === 'home' ? 'opacity-100' : 'opacity-0 absolute w-screen'} ${isHidden ? 'hidden' : ''} transition-all duration-500`}>

        {width > 1024 ? star() : ''}

        <h1 style={{
          color: color.primary,
          fontSize: (width > 1024) ? width / 20 : width / 12,
        }} className={`text-center mt-10 md:mt-20 mb-5 md:mb-10 ${aclonica.className}`}> {data.home.title}</h1>

        <p style={{
          color: color.primary,
          fontSize: (width > 1024) ? width / 90 : width / 30,
          width: (width > 1024) ? '650px' : width / 1.2,
          fontweight: 'medium',
        }} className={`m-auto text-center  ${poppins.className}`}>{data.home.description}</p>

        <div className="w-10/12 m-auto my-10 md:my-20 grid grid-cols-1 md:grid-cols-5 gap-10 justify-center">
          <PortoCard linkGithub={"https://github.com/ryokf/clone-kompas-v2"} title={"Confess"} className={`col-span-1 md:col-span-2 min-h-fit`} category={'News Portal'}></PortoCard>
          <PortoCard linkProject={"https://learn.dnccudinus.org/"} linkGithub={"https://github.com/dnccsemarang/devlearn-dncc"} title={"Devlearn"} className={`col-span-1 md:col-span-3`} category={'Learning platform'}></PortoCard>
        </div>

      </div>

      <div className={`${currentRoute === 'skills' ? 'opacity-100' : 'opacity-0 absolute w-screen z-10'} transition-all duration-500`}>
        <h1 style={{ color: color.primary }} className={`text-center mt-20 mb-8 text-5xl ${aclonica.className}`}>Skills</h1>
        <p style={{ color: color.primary }} className={`text-center ${poppins.className}`}>Alat yang sering saya gunakan dalam membangun aplikasi</p>
        <div className="grid grid-cols-2 w-10/12 m-auto gap-10 mt-10">
          {/* <PortoCard className={`w-full `} title={"Confess"} category={'News Portal'}></PortoCard> */}
        </div>
      </div>

      <div className={`${currentRoute === 'about' ? 'opacity-100' : 'opacity-0 absolute w-screen z-20'} transition-all duration-500`}>
        <div className='flex justify-center gap-10 w-10/12 flex-wrap m-auto my-20'>
          <div style={{
            width: '350px',
            height: '350px',
            backgroundImage: 'url(/myself.JPG)'
          }} className="rounded-3xl bg-cover">
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

      <div className={`${currentRoute === 'portfolio' ? 'opacity-100' : 'opacity-0 absolute w-screen z-40'} transition-all duration-500`}>
        <h1 style={{ color: color.primary }} className={`text-center mt-20 mb-8 text-5xl ${aclonica.className}`}>Portfolio</h1>
        <p style={{ color: color.primary }} className={`text-center ${poppins.className}`}>Beberapa hasil dari project yang pernah saya kerjakan</p>
        <div className="grid grid-cols-2 w-10/12 m-auto gap-10 mt-10">
          <PortoCard className={`w-full `} title={"Confess"} category={'News Portal'}></PortoCard>
        </div>
      </div>

    </div>
  )
}
