'use client'
import AOS from 'aos';
import { getScrollBarWidth } from "@/helpers/getScrollbarWidth";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`)
    addEventListener('resize', ()=>{
      document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`)
    })
    AOS.init({
      disable: 'mobile',
      duration: 1200,
      offset: 100
     });

  }, [])


  return (
    <>
    </>
  );
}
