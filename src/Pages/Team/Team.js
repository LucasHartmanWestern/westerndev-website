
import React from 'react'
import './Team.css'
import Footer from '../../Components/Footer/Footer'
import MemberCard from './MemberCard/MemberCard'
import AidanImg from "./pfps/Aidan.png"
import AlexImg from "./pfps/Alex.png"
import ArmaanImg from "./pfps/Armaan.png"
import LukeImg from "./pfps/Luke.png"
import RajahImg from "./pfps/Rajah.png"
import TaraImg from "./pfps/Tara.png"
import SwathiImg from "./pfps/Swathi.png"
import UzairImg from "./pfps/Uzair.png"
import RoseGaoImg from "./pfps/RoseGao.png";
import ElaineLinImg from "./pfps/ElaineLin.png";
import ArnavGoyalImg from "./pfps/ArnavGoyal.png";
import BraydenThompsonImg from "./pfps/BraydenThompson.png";
import LeenAlJalladImg from "./pfps/LeenAl-Jallad.png";
import JustinTsangImg from "./pfps/JustinTsang.png";
import JaxWangImg from "./pfps/JaxWang.png";
import LucasHartmanImg from "./pfps/LucasHartman.png";
import SharafImg from "./pfps/Sharaf.png";
import Ylin from "./pfps/Ylin.jpeg"
import Jocelyn from "./pfps/Jocelyn.jpg"
import ZiWei from "./pfps/ZiWei.jpg"
import Tagg from "./pfps/Tagg.jpg"
import Andrew from "./pfps/Andrew.jpeg"
import Pranav from "./pfps/Pranav.png"
import Ariba from "./pfps/ariba.jpeg"
import Aryan from "./pfps/Aryan.jpeg"


function Team() {
  return (
    <div className='team-container'>
        <div className='team-title'>
            Meet The Team
        </div>
        <div className='team-member-container'>
            <MemberCard
            img={LukeImg}
            name='Luke Blommysten'
            title='Co-President'
            link='https://www.linkedin.com/in/lukeblommesteyn/'
            />
            <MemberCard
            img={Aryan}
            name='Aryan Khurana'
            title='Co-President'
            link='https://www.linkedin.com/in/aryan-khurana/'
            />
            <MemberCard
            img={TaraImg}
            name='Tara Lee'
            title='VP Development'
            link='https://www.linkedin.com/in/tara-zoe-lee/'
            />
            <MemberCard
            img={BraydenThompsonImg}
            name='Brayden Thompson'
            title='VP Development'
            link='https://www.linkedin.com/in/brayden-thompson/'
            />
            <MemberCard
            img={SharafImg}
            name='Sharaf Sayed'
            title='VP External'
            link='https://www.linkedin.com/in/sharaf-syed-005744221/'
            />
             <MemberCard
            img={Ylin}
            name='Yilin Wang'
            title='VP Marketing'
            link='https://www.linkedin.com/in/yilinwanguwo'
            />
            <MemberCard
            img={Jocelyn}
            name='Jocelyn Chang'
            title='VP Marketing'
            link='https://www.linkedin.com/in/jocelyn-chang-a710921b7'
            />
            <MemberCard
            img={ZiWei}
            name='Zi Li'
            title='VP Careers'
            link='https://www.linkedin.com/in/zi-wei-li/'
            />
            <MemberCard
            img={Ariba}
            name='Ariba Akhtar'
            title='VP Careers'
            link='http://www.linkedin.com/in/aribaakhtar'
            />
            <MemberCard
            img={Tagg}
            name='Tagg Lee'
            title='VP Finance'
            link='https://www.linkedin.com/in/tagg-lee-22a77b205'
            />
            <MemberCard
            img={Andrew}
            name='Andrew Cautisanu'
            title='VP Technology '
            link='linkedin.com/in/andrew-cautisanu/'
            />
            <MemberCard
            img={LucasHartmanImg}
            name='Lucas Hartman'
            title='VP Technology'
            link='https://www.linkedin.com/in/lucas-hartman-2a2b25171/'
            />
            <MemberCard
            img={Pranav}
            name='Pranav Varma'
            title='VP Internal'
            link='https://www.linkedin.com/in/pranavarma/'
            />
        </div>
        <div className='join-team-container'>
          <div className='join-team-title'>
            Want to join our team? 
          </div>
          <div className='join-team-info'>
            We offer a variety of roles across multiple teams. Whether you come from a business, engineering, humanities, or any other background, there is a position for you! 
          </div>
          <div className='join-team-btn'>
            <a href="/Join">Join Now!</a>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Team
