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
import ClaireMcGuiganImg from "./pfps/ClaireMcGuigan.png";
import LeenAlJalladImg from "./pfps/LeenAl-Jallad.png";
import RoninWilliamsYoungImg from "./pfps/RoninWilliams-Young.png";
import TeddyNgoImg from "./pfps/TeddyN'go.png";
import DivijaBhargavaImg from "./pfps/DivijaBhargava.png";
import JustinTsangImg from "./pfps/JustinTsang.png";
import TaggLeeImg from "./pfps/TaggLee.png";
import JaxWangImg from "./pfps/JaxWang.png";
import KaitlynMooreImg from "./pfps/KaitlynMoore.png";
import ChristopherOjoImg from "./pfps/ChristopherOjo.png";
import LucasHartmanImg from "./pfps/LucasHartman.png";
import SehajNaangalImg from "./pfps/SehajNaangal.png";

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
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Team
