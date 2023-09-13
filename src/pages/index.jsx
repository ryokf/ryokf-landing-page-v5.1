import StarIcon from '@/components/elements/starIcon'
import PortoCard from '@/components/fragments/PortoCard'
import RouteList from '@/components/fragments/RouteList'
import { color, aclonica, poppins } from '@/theme/theme'
import Image from 'next/image'

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

export default function Home() {
  return (
    <div style={{ backgroundImage: "url('/background.png')" }} className="absolute w-full min-h-screen bg-cover overflow-hidden">
      <RouteList></RouteList>

      <Image style={style.starIcon1} width={100} height={100} src="/star.svg"></Image>
      <Image style={style.starIcon2} width={100} height={100} src="/star.svg"></Image>

      <h1 style={style.nameTitle} className={`text-center my-20 ${aclonica.className}`}>Hi, I’m Ryo. <br /> A Programmer.</h1>
      <p style={style.description} className={`m-auto text-center  ${poppins.className}`}>saya adalah seorang programmer yang juga menekuni bidang desain, sehingga saya mampu menciptakan Aplikasi dengan fungsionalitas tinggi dan juga indah.</p>

<div className="w-10/12 m-auto my-20 flex gap-10 justify-center">
      <PortoCard style={{ width: '500px', height: '300px' }}></PortoCard>
      <PortoCard style={{ width: '900px', height: '300px' }}></PortoCard>
</div>
    </div>
  )
}
