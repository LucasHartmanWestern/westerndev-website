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

// NOTE: Imported images must be 250px by 250px

const PRESIDENTS = [
  {
    name: "Luke Blommestyn",
    role: "Co-President",
    image: LukeImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/lukeblommesteyn/",
      github: "https://github.com/lblommesteyn",
      email: "mailto:lblommes@uwo.ca",
    },
  },
  {
    name: "Arayan Khurana",
    role: "Co-President",
    image: ArayanImg,
    socials: {
      linkedin: "https://linkedin.com/in/aryan-khurana",
      email: "mailto:akhura4@uwo.ca",
    },
  }
];

const MARKETING = [
  {
    name: "Alex Lee",
    role: "Co-VP Marketing",
    image: AlexImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/alex-lee-a16a92172/",
      email: "mailto:llee297@uwo.ca",
    },
  },
  {
    name: "Rose Gao",
    role: "Co-VP Marketing",
    image: RoseGaoImg,
    socials: {
      email: "mailto:roseg.gao@gmail.com",
      linkedin: "https://www.linkedin.com/in/rose-gao-27240a200/",
      github: "https://github.com/MemoriaNoctis"
    },
  },
  {
    name: "Elaine Lin",
    role: "Co-Director Marketing",
    image: ElaineLinImg,
    socials: {
      email: "mailto:ylin767@uwo.ca",
      linkedin: "https://www.linkedin.com/in/yilei-elaine-lin/",
      github: "https://github.com/Elaine-lin-1"
    },
  },
  {
    name: "Arnav Goyal",
    role: "Co-Director Marketing",
    image: ArnavGoyalImg,
    socials: {
      email: "mailto:agoyal57@uwo.ca",
      linkedin: "https://www.linkedin.com/in/arnav-go/",
    },
  },
];

const INTERNAL = [
  {
    name: "Justin Tsang",
    role: "VP Internal",
    image: JustinTsangImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/justint-sang",
      email: "mailto:justinhltzemail@gmail.com",
      github: "https://github.com/JustinTsangg"
    },
  },
  {
    name: "Swathi Thushiyandan",
    role: "Director Internal",
    image: SwathiImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/swathi-thushiyandan",
      email: "mailto:sthushi2@uwo.ca",
    },
  },
  {
    name: "Kaitlyn Moore",
    role: "Director Internal",
    image: KaitlynMooreImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/kaitlyn-moore-",
      email: "mailto:kaitlynontherun@gmail.com",
      github: "https://github.com/kmoor48"
    },
  },
];

const EXTERNAL = [
  {
    name: "Aidan Lostracco",
    role: "VP External",
    image: AidanImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/aidan-lostracco-1b815a222",
      email: "mailto:alostrac@uwo.ca",
    },
  },
];

const FINANCE = [
  {
    name: "Armaan Sandhu",
    role: "VP Finance",
    image: ArmaanImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/armaan-sandhu",
      email: "mailto:asand24@uwo.ca",
    },
  },
  {
    name: "Tagg Lee",
    role: "Director Finance",
    image: TaggLeeImg,
    socials: {
      email: "mailto:tlee429@uwo.ca"
    }
  }
];

const CAREERS = [
  {
    name: "Rajah Chari",
    role: "VP Careers",
    image: RajahImg,
    socials: {
      email: "mailto:rajahchari@gmail.com",
      linkedin: "https://www.linkedin.com/in/rajah-chari",
    },
  },
];

const DEVELOPMENT = [
  {
    name: "Tara Lee",
    role: "VP Development",
    image: TaraImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/tara-zoe-lee/",
      github: "https://github.com/tarazoelee",
      email: "mailto:tlee379@uwo.ca",
    },
  },
  {
    name: "Ronin Williams-Young",
    role: "Tech Lead",
    image: RoninWilliamsYoungImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/ronin-williams-young/",
      github: "https://github.com/rwill33",
      email: "mailto:ronin@williams-young.com",
    },
  },
  {
    name: "Maaz Siddiqi",
    role: "Tech Lead",
    image: MaazImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/maaz-siddiqi",
      github: "https://github.com/MaazSiddiqi",
      email: "mailto:msidd54@uwo.ca",
    },
  },
  {
    name: "Teddy N'go",
    role: "Tech Lead",
    image: TeddyNgoImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/teddy-n-go-5a2568176/",
      github: "https://github.com/27caribou",
      email: "mailto:tngo26@uwo.ca",
    },
  },
  {
    name: "Christopher Ojo",
    role: "Tech Lead",
    image: ChristopherOjoImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/christopher-ojo/",
      github: "https://github.com/christopherojo",
      email: "mailto:cojo@uwo.ca",
    },
  },
  {
    name: "Lucas Hartman",
    role: "Tech Lead",
    image: LucasHartmanImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/lucas-hartman-2a2b25171/",
      github: "https://github.com/LucasHartmanWestern",
      email: "mailto:lhartma8@uwo.ca",
    },
  },
  {
    name: "Brayden Thompson",
    role: "Team Lead",
    image: BraydenThompsonImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/brayden-thompson/",
      github: "https://github.com/bthomp89",
      email: "mailto:bthomp89@uwo.ca",
    },
  },
  {
    name: "Claire McGuigan",
    role: "Team Lead",
    image: ClaireMcGuiganImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/claire-mcguigan/",
      github: "https://github.com/cmcguigan1",
      email: "mailto:mcguigan.claire@outlook.com",
    },
  },
  {
    name: "Sehaj Naangal",
    role: "Team Lead",
    image: SehajNaangalImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/sehajnaangal/",
      github: "https://github.com/sehaj1408",
      email: "mailto:sehajnaangal@gmail.com",
    },
  },
  {
    name: "Leen Al-Jallad",
    role: "Team Lead",
    image: LeenAlJalladImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/leen-al-jallad-0052b3208/",
      github: "https://github.com/jalladleen",
      email: "mailto:laljall@uwo.ca",
    },
  },
  {
    name: "Uzair Salim",
    role: "Team Lead",
    image: UzairImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/uzair-salim-515b50230/",
      email: "mailto:usalim2@uwo.ca",
      github: "https://github.com/uzairsalim02",
    },
  },
  {
    name: "Jax Wang",
    role: "Team Lead",
    image: JaxWangImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/jax-wang/",
      email: "mailto:jaxwang1010@gmail.com",
      github: "https://github.com/Jaxz102",
    },
  },
  {
    name: "Divija Bhargava",
    role: "UX/UI Designer",
    image: DivijaBhargavaImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/divija-bhargava/",
      email: "mailto:dbharga@uwo.ca",
      github: "https://github.com/Divija1967",
    },
  }
];

export {PRESIDENTS, MARKETING, INTERNAL, EXTERNAL, FINANCE, CAREERS, DEVELOPMENT }
