import React from 'react'
import './Team.css'
import Footer from '../../Components/Footer/Footer'
import MemberCard from './MemberCard/MemberCard'
import AidanImg from "./pfps/Aidan.png"
import AlexImg from "./pfps/Alex.png"
import ArayanImg from "./pfps/Arayan.png"
import ArmaanImg from "./pfps/Armaan.png"
import LukeImg from "./pfps/Luke.png"
import RajahImg from "./pfps/Rajah.png"
import TaraImg from "./pfps/Tara.png"
import MaazImg from "./pfps/Maaz.png"
import SwathiImg from "./pfps/Swathi.png"
import UzairImg from "./pfps/Uzair.png"
import RoseGaoImg from "./pfps/RoseGao.png";
import ElaineLinImg from "./pfps/ElaineLin.png";
import ArnavGoyalImg from "./pfps/ArnavGoyal.png";
import BraydenThompsonImg from "./pfps/BraydenThompson.png";
import LeenAlJalladImg from "./pfps/LeenAl-Jallad.png";
import DivijaBhargavaImg from "./pfps/DivijaBhargava.png";
import JustinTsangImg from "./pfps/JustinTsang.png";
import TaggLeeImg from "./pfps/TaggLee.png";
import JaxWangImg from "./pfps/JaxWang.png";
import LucasHartmanImg from "./pfps/LucasHartman.png";
import SehajNaangalImg from "./pfps/SehajNaangal.png";
import SharafImg from "./pfps/Sharaf.png";

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
            title='President'
            />
            <MemberCard
            img={TaraImg}
            name='Tara Lee'
            title='VP Development'
            />
            <MemberCard
            img={BraydenThompsonImg}
            name='Brayden Thompson'
            title='VP Development'
            />
            <MemberCard
            img={SharafImg}
            name='Sharaf Sayed'
            title='VP External'
            />
            <MemberCard
            img={LucasHartmanImg}
            name='Lucas Hartman'
            title='VP Technology'
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
            <a>Join Now!</a>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Team
