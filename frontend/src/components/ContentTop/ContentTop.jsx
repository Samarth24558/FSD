import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [time,setTime]=useState(new Date());

  useEffect(()=>
  {
    const interval=setInterval(()=>
    {
      setTime(new Date());
    })
    return ()=> clearInterval(interval);
  })
  return (
    <>
    <div className="cont">
    <h2>{time.toLocaleTimeString()}</h2>  
    </div>
    </>
  )
}

export default ContentTop