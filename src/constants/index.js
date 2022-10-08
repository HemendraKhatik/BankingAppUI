import U1 from "../assets/images/u1.png";
import U2 from "../assets/images/u2.png";
import U3 from "../assets/images/u3.png";
import U4 from "../assets/images/u4.png";
import U5 from "../assets/images/u5.png";
import U6 from "../assets/images/u6.png";


import K1 from "../assets/images/k1.png";
import K2 from "../assets/images/k2.png";
import K3 from "../assets/images/k3.png";
import K4 from "../assets/images/k4.png";

const dummyData = [
    {
      name: "Adedoyin Leke",
      img: U1,
      phoneNumber: "(+234) 505 1694 275"
    },
    {
      name: "Adelaide Uti (son)",
      img: U2,
      phoneNumber: "(+234) 335 1694 275"
    },
    {
      name: "Adolph colleague",
      img: U3,
      phoneNumber: "(+234) 505 7694 275"
    },
    {
      name: "Aduni Wale",
      img: U4,
      phoneNumber: "(+134) 905 1694 275"
    },
    {
      name: "Adeluki niya",
      img: U5,
      phoneNumber: "(+254) 115 1694 275"
    }
    ,
    {
      name: "Adeleke Adeyanju",
      img: U6,
      phoneNumber: "(+234) 905 1694 275"
    }
  ]

const TransactionsData = [
  {
    name: "Adeboye Usman",
    status: "received",
    img: K1,
    amount:"200,000"
  },
  {
    name: "Mercy Popoola",
    status: "failed",
    img: K2,
    amount:"10,000"
  },
  {
    name: "Onome Adetayo",
    status: "sent",
    img: K3,
    amount:"200,000"
  },
  {
    name: "Kingsley Abiodun",
    status: "received",
    img: K4,
    amount:"200,000"
  },

];

// For IOS we need to make changes here
const fonts = {
  thin:{
    weight:"100",
    name:"Inter-thin"
  },
  extralight:{
    weight:"200",
    name:"Inter-ExtraLight"
  },
  light:{
    weight:"300",
    name:"Inter-Light"
  },
  regular:{
    weight:"400",
    name:"Inter-Regular"
  },
  medium:{
    weight:"500",
    name:"Inter-Medium"
  },
  bold:{
    weight:"700",
    name:"Inter-Bold"
  },
  semiBold:{
    weight:"600",
    name:"Inter-SemiBold"
  },
  extraBold:{
    weight:"800",
    name:"Inter-ExtraBold"
  },
  extraBold:{
    weight:"900",
    name:"Inter-Black"
  }
}
  export {
    dummyData,
    TransactionsData,
    fonts
  }