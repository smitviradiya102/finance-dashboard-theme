import Facebook from '../assets/facebook.png';
import twitter from '../assets/TwitterLogo.png';
import instagram from '../assets/InstagramLogo.png';
import youtube from '../assets/YoutubeLogo.png';
import linkedin from '../assets/LinkedinLogo.png';

export default function Footer() {
    return(
         <footer className="w-[1246px] h-[24px] flex justify-between items-center pt-2">
        <div className="w-[1024px] h-[16px] gap-[20px] flex flex-row">
          <p className="text-[#242E2C] text-[12px] font-medium cursor-pointer">
            Copyright © 2024 Peterdraw
          </p>
          <div className="text-[#BCBEBD] w-[263px] h-[16px] gap-[16px] flex flex-row ">
            <p className="font-medium text-[12px] cursor-pointer hover:text-[#242E2C]">Privacy Policy</p>
            <p className="font-medium text-[12px] cursor-pointer hover:text-[#242E2C]">Term and conditions</p>
            <p className="font-medium text-[12px] cursor-pointer hover:text-[#242E2C]">Contact</p>
          </div>
        </div>

        <div className="w-[168px] h-[24px] flex flex-row justify-between items-center">
          <img src={Facebook} alt="Facebook" className="cursor-pointer hover:brightness-0" />
          <img src={twitter} alt="Twitter" className="cursor-pointer hover:brightness-0" />
          <img src={instagram} alt="Instagram" className="cursor-pointer hover:brightness-0" />
          <img src={youtube} alt="YouTube" className="cursor-pointer hover:brightness-0" />
          <img src={linkedin} alt="LinkedIn" className="cursor-pointer hover:brightness-0" />
        </div>
      </footer>
    
)
}