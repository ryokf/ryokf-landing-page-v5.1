/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import RouteTitle from '@/components/elements/RouteTitle'
import GithubCard from '@/components/fragments/GithubCard'
import HomeCard from '@/components/fragments/HomeCard'
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

  const routeList = ['home', 'about', 'portfolio']
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
          color: 'white'
        }} width={width / 15} height={0} src="/Star.svg" alt='' />


        <Image style={{
          position: 'absolute',
          left: width / 6.3,
          top: height / 2.5,
          color: 'white'
        }} width={width / 15} height={0} src="/Star.svg" alt='' />
      </>
    )
  }

  return (
    <div style={{ backgroundImage: "url('/background.png')" }} className={`${poppins.className} absolute w-full min-h-screen bg-cover bg-center overflow-hidden`}>
      <div className="flex m-auto md:gap-4 justify-center my-5">
        {
          routeList.map((route, index) => {
            return <RouteTitle key={index} title={route} isCurrent={currentRoute == route} onClick={() => handleClick(route)} />
          })
        }
      </div>

      <div className={`${currentRoute === 'portfolio' ? 'opacity-100' : 'opacity-0 absolute w-screen z-40'} transition-all duration-500`}>
        <h1 style={{ color: color.primary }} className={`text-center mt-20 mb-8 text-5xl ${aclonica.className}`}>Portfolio</h1>
        <p style={{ color: color.primary }} className={`text-center ${poppins.className}`}>Beberapa hasil dari project yang pernah saya kerjakan</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-10/12 m-auto mt-10 mb-10">

          <PortoCard
            photo={'/portfolio/devlearn.png'}
            titleStyle={{
              color: color.primary,
              fontSize: (width > 767) ? width / 40 : width / 16
            }}
            linkProject={"https://learn.dnccudinus.org/"}
            linkGithub={"https://github.com/dnccsemarang/devlearn-dncc"}
            title={"Devlearn"}
            className={`col-span-1`}
            category={'Learning platform'}
            desc={"DevLearn adalah sebuah aplikasi learning platform yang dirancang untuk memfasilitasi pembelajaran online dan pengembangan keterampilan. Dengan berbagai fitur interaktif dan konten pendidikan yang berkualitas, DevLearn memungkinkan pengguna untuk mengakses berbagai materi pembelajaran, mengikuti kursus, serta mengembangkan pengetahuan dan keterampilan mereka sesuai dengan kebutuhan dan minat masing-masing."}
          />

          <PortoCard
            portoImgSize='w-3/5'
            photo={'/portfolio/confess_news.png'} 
            titleStyle={{
              color: color.primary,
              fontSize: (width > 767) ? width / 40 : width / 16
            }} linkGithub={"https://github.com/ryokf/clone-kompas-v2"}
            title={"Confess"}
            className={`col-span-1 min-h-full`}
            category={'News Portal (kompas clone)'}
            desc={"Confess News adalah sebuah aplikasi portal berita yang saya buat sebagai kloning dari kompas.com. Aplikasi ini menawarkan berita terkini dengan tampilan dan fitur yang mirip dengan situs berita terkemuka tersebut, memungkinkan pengguna untuk dengan mudah mengakses informasi terbaru dari berbagai bidang, termasuk politik, ekonomi, olahraga, dan hiburan."}
          />

          <PortoCard
            portoImgSize='w-11/12'
            photo={'/portfolio/tigasulung.png'} 
            titleStyle={{
              color: color.primary,
              fontSize: (width > 767) ? width / 40 : width / 16
            }} 
            linkGithub={"https://github.com/tigaslg/tigaslg.github.io"}
            linkProject={"https://tigaslg.github.io/"}
            title={"TigaSulung Creative"}
            className={`col-span-1 min-h-full`}
            category={'Landing Page'}
            desc={"Tigasulung adalah creative agency yang berlokasi di Semarang. Mereka adalah tim yang berdedikasi dalam menciptakan konsep-konsep kreatif dan solusi desain yang inovatif untuk berbagai proyek, mulai dari desain grafis hingga kampanye pemasaran."}
          />

          <PortoCard
            portoImgSize='w-11/12'
            photo={'/portfolio/tokotangga.png'} 
            titleStyle={{
              color: color.primary,
              fontSize: (width > 767) ? width / 40 : width / 16
            }} 
            linkProject={"https://ryokf.github.io/uas-pbw/"}
            linkGithub={"https://github.com/ryokf/uas-pbw"}
            title={"TanggaJohar Semarang"}
            className={`col-span-1 min-h-full`}
            category={'E-commerce'}
            desc={"Tanggajohar adalah sebuah platform e-commerce yang memiliki lokasi fisik di Pasar Johar, Semarang. Dengan kehadiran fisiknya di pusat pasar tradisional, Tanggajohar tidak hanya memberikan kemudahan berbelanja secara online tetapi juga menjembatani pengguna dengan pengalaman belanja yang autentik dan lokal di Pasar Johar, Semarang."}
          />

          <PortoCard
            portoImgSize='w-11/12'
            photo={'/portfolio/top_speed_counter.png'} 
            titleStyle={{
              color: color.primary,
              fontSize: (width > 767) ? width / 40 : width / 16
            }} linkGithub={"https://github.com/ryokf/top-speed-counter"}
            title={"Top Speed Counter"}
            className={`col-span-1 min-h-full`}
            category={'Physics Project'}
            desc={"Top Speed counter adalah aplikasi berbasis web yang berfungsi sebagai memprediksi kecepatan suatu kendaraan berdasarkan data yang diberikan oleh pengguna seperti torsi mesin, rasio gir, berat kendaraan, dsb."}
          />

        </div>
      </div>

      <div className={`${currentRoute === 'home' ? 'opacity-100' : 'opacity-0 absolute w-screen'}  transition-all duration-500`}>

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

        <h1 style={{ color: color.primary }} className={`text-center mt-10 md:mt-20 text-2xl  ${aclonica.className}`}>What i'm doing</h1>

        <div className="w-10/12 m-auto mt-8 mb-10 md:mb-20 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
          <HomeCard
            title={'Web Development'}
            desc={'saat ini saya aktif mengembangkan website  yang optimal dan aman di berbagai perangkat menggunakan teknologi seperti Laravel dan React JS'}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="purple" height="40px" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>}
          />

          <HomeCard
            title={'Backend Engineering'}
            desc={'Saya tengah mengasah keterampilan dalam optimisasi kinerja server serta pengembangan API untuk memastikan aplikasi berjalan lancar dan efisien di sisi server'}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="purple" height="40px" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V280.4c-17-15.2-39.4-24.4-64-24.4H64c-24.6 0-47 9.2-64 24.4V96zM64 288H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V352c0-35.3 28.7-64 64-64zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>}
          />

          <HomeCard
            title={'Mobile Development'}
            desc={'Di tengah ramai nya penggunaan smartphone saya mengembangkan aplikasi mobile menggunakan framework Flutter'}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="purple" height="40px" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>}
          />


        </div>
        <h1 style={{ color: color.primary }} className={`text-center mt-10 md:mt-20 text-2xl  ${aclonica.className}`}>What i'm currently learning</h1>


        <div className="w-10/12 m-auto mt-8 mb-10 md:mb-20 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
          <div className="hidden md:block"></div>
          <HomeCard
            title={'Machine Learning'}
            desc={'Saya saat ini tengah fokus pada bidang Machine Learning. Saya sedang menggali lebih dalam dunia kecerdasan buatan ini dengan mempelajari berbagai algoritma machine learning'}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="purple" height="40px" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>}
          />

        </div>

      </div>

      <div className={`${currentRoute === 'about' ? 'opacity-100' : 'opacity-0 absolute w-screen z-20'} transition-all duration-500 flex justify-center`}>
        <div className='absolute z-50 flex flex-col md:flex-row items-center justify-center gap-10 w-10/12 flex-wrap m-auto my-10 lg:my-20'>
          <div style={{
            width: width > 1024 ? width / 5 : width / 2.5,
            height: width > 1024 ? width / 5 : width / 2.5,
            backgroundImage: 'url(/myself.JPG)'
          }} className="rounded-3xl bg-cover">
            <Image></Image>
          </div>
          <div className="w-11/12 lg:w-1/3 flex flex-col justify-around gap-4">

            <div style={{
              color: color.primary,
              fontSize: (width > 1024) ? width / 60 : width / 25
            }} className={`${aclonica.className}`}>I’m a Informatics Engineering student
              from semarang, indonesia </div>

            <div style={{
              color: color.primary,
              fontSize: (width > 1024) ? width / 110 : width / 40
            }} className={`${poppins.className}`}>
              <span className='ml-5'></span>Hai, nama saya Ryo Khrisna Fitriawan. Ketertarikan saya terhadap pembuatan website bermula pada tahun 2021 ketika saya memutuskan untuk mendaftar kuliah di jurusan Teknik Informatika. Pada tahun 2021, saya lulus dari SMA dan memutuskan untuk mengambil gap year, selama setahun tersebut saya belajar secara otodidak mengenai pembuatan website.
            </div>

            <a href='' style={{
              backgroundColor: color.primary,
            }} className="p-2 rounded-lg text-white w-1/4 text-center">
              Download CV
            </a>

          </div>
        </div>
      </div>



    </div>
  )
}
