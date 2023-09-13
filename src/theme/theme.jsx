import { Aclonica, Inter, Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

const aclonica = Aclonica({subsets: ['latin'],weight: '400'})

const color = {
    primary: "#7F669D",
    purple: "#BA94D1",
    pink: "#DEBACE",
    light: "#FBFACD",
    blcak: "#333333"
}

export {poppins, aclonica, color}