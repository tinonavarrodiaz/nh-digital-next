
import { isMovile } from '@/helpers/isMovil'
import { menu } from '@/data/menu'
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { Mail } from "@/components/icons/Mail";
import { Whatsapp } from "@/components/icons/Whatsapp";
import { Social } from "@/components/atoms/Social";


interface Props {
    isActive?: boolean;
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
    classNameNav?: string;
    classNameMenu?: string;
}


const Menu = ({isActive, handleClick, classNameMenu="Menu", classNameNav="Nav"}:Props) => {
  const handleClick1 = ()=>{
    if(isMovile()){
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      handleClick()
    }
  }
  return (
    <nav className= {`${classNameNav} ${isActive ? "active" : ""}`} onClick={handleClick1}>
      <ul className={classNameMenu}>
        {
          menu.map(item => (
            <li key={item.id}>
              <a href={item.path} >{item.title}</a>
            </li>
          ))
        }

      </ul>
      <ul className="Social">
        <Social url="https://api.whatsapp.com/send?phone=+5213313048691&text=Quiero%20solicitar%20una%20cotizaci%C3%B3n">
          <Whatsapp />
        </Social>
        <Social url="mailto:tino.navarrod@gmail.com">
          <Mail />
        </Social>
        <Social url="https://www.instagram.com/p/CpW348rJ239/">
          <Instagram />
        </Social>
        <Social url="https://www.facebook.com/nhdigitalsite">
          <Facebook />
        </Social>
      </ul>
    </nav>
  )
}
export default Menu
