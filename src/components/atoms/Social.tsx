import { ReactNode } from "react";


interface SocialProps {
  url: string;
  children: ReactNode;
  className?: string;
  text?: string;
}

export const Social = ({url,children, className="Social", text}:SocialProps) => {
  return (
    <li className={`${className}__item`}>
      <a href={url} className={`${className}__link`} target="_blank">
        {text&& (<span>{text}</span>)} {children}
      </a>
    </li>
  )
}
