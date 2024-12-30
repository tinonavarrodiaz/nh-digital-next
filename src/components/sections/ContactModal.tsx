import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { Mail } from "@/components/icons/Mail";
import { Whatsapp } from "@/components/icons/Whatsapp";
import Menu from "@/components/organism/Menu";
import { Social } from "@/components/atoms/Social";

interface Props {
    isActive: boolean;
    handleClick?: () => void;
}


const ContactModal = ({isActive, handleClick}:Props) => {
  const handleAsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // const target = e.target as HTMLElement;
    // if (target.nodeName === "ASIDE") {
      handleClick?.();
    // }
  }
  return (
    <aside className={`ContactModal ${isActive ? "active" : ""}`} onClick={handleAsideClick}>
      <div className={`shape-left ${isActive ? "active" : ""}`}>
        <Menu classNameMenu="ContactModal__menu" classNameNav="ContactModal__nav" isActive={isActive}/>
      </div>
      <div className={`shape-right ${isActive ? "active" : ""}`}>
        <h2>Contacto</h2>
        <ul className="ContactModal__list">
          <Social className="ContactModal" url="https://api.whatsapp.com/send?phone=+5213313048691&text=Quiero%20solicitar%20una%20cotizaci%C3%B3n" text="3313048691">
            <Whatsapp />
          </Social>
          <Social className="ContactModal"
           url="mailto:tino.navarrod@gmail.com" text="tino.navarrod@gmail.com">
            <Mail />
          </Social>
          {/* <Social url="https://www.instagram.com/p/CpW348rJ239/"><Instagram /></Social>
          <Social url="https://www.facebook.com/nhdigitalsite"><Facebook /></Social> */}
        </ul>
        <ul className="ContactModal__list--icons">
           <Social url="https://www.instagram.com/p/CpW348rJ239/">
             <Instagram />
           </Social>
           <Social url="https://www.facebook.com/nhdigitalsite">
             <Facebook />
           </Social>
        </ul>
      </div>
    </aside>
  )
}
export default ContactModal
