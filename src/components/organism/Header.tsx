'use client'
import ContactModal from "@/components/sections/ContactModal";
import Menu from "@/components/organism/Menu"
import Toggle from "@/components/molecules/Toggle"
import Image from "next/image";
import { useState } from "react";



const Header = () => {

  const [isActive, setIsActive] = useState<boolean>(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <header className="Header" >
      <Toggle isActive={isActive} handleClick={handleClick} />
      <Image className="Header__logo" src="/logo_light.svg" alt="Logo" width={100} height={100} priority={true}  />
      <Menu isActive={isActive} handleClick={handleClick}/>
      <ContactModal isActive={isActive} handleClick={handleClick}/>
    </header>
  )
}

export default Header
