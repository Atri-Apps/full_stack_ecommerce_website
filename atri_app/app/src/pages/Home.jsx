import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Checkbox } from "@atrilabs/react-component-manifests/src/manifests/Checkbox/Checkbox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { useFlex1Cb, useFlex2Cb, useFlex3Cb, useTextBox1Cb, useTextBox2Cb, useFlex4Cb, useImage1Cb, useFlex5Cb, useFlex6Cb, useFlex7Cb, useImage2Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useButton1Cb, useTextBox10Cb, useFlex8Cb, useTextBox11Cb, useTextBox12Cb, useFlex10Cb, useFlex11Cb, useFlex12Cb, useFlex13Cb, useFlex14Cb, useFlex15Cb, useFlex16Cb, useImage3Cb, useImage4Cb, useImage5Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useTextBox16Cb, useImage6Cb, useTextBox17Cb, useImage7Cb, useTextBox18Cb, useImage8Cb, useFlex19Cb, useFlex20Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useFlex24Cb, useFlex25Cb, useTextBox19Cb, useTextBox20Cb, useFlex26Cb, useFlex27Cb, useFlex28Cb, useFlex29Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useFlex30Cb, useFlex31Cb, useFlex33Cb, useImage10Cb, useFlex35Cb, useTextBox25Cb, useTextBox26Cb, useImage12Cb, useTextBox27Cb, useTextBox28Cb, useFlex36Cb, useFlex37Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useTextBox29Cb, useTextBox30Cb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useFlex48Cb, useFlex49Cb, useImage13Cb, useTextBox31Cb, useFlex55Cb, useImage16Cb, useFlex58Cb, useImage17Cb, useFlex59Cb, useImage20Cb, useFlex62Cb, useImage22Cb, useFlex64Cb, useImage24Cb, useFlex66Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useImage25Cb, useImage26Cb, useImage27Cb, useFlex67Cb, useFlex68Cb, useTextBox41Cb, useTextBox42Cb, useFlex69Cb, useFlex70Cb, useFlex71Cb, useFlex72Cb, useFlex73Cb, useTextBox43Cb, useTextBox44Cb, useTextBox45Cb, useTextBox47Cb, useTextBox50Cb, useTextBox57Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useButton2Cb, useFlex74Cb, useFlex75Cb, useFlex76Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useButton3Cb, useImage28Cb, useFlex77Cb, useImage29Cb, useTextBox64Cb, useTextBox65Cb, useFlex78Cb, useFlex79Cb, useCheckbox1Cb, useTextBox66Cb, useFlex81Cb, useImage31Cb, useInput3Cb, useButton4Cb, useFlex82Cb, useTextBox67Cb, useTextBox68Cb, useFlex83Cb, useFlex84Cb, useFlex85Cb, useFlex86Cb, useImage32Cb, useTextBox69Cb, useTextBox70Cb, useImage33Cb, useTextBox71Cb, useTextBox72Cb, useImage34Cb, useTextBox73Cb, useTextBox74Cb, useTextBox219Cb, useImage107Cb, useTextBox224Cb, useTextBox225Cb, useTextBox226Cb, useTextBox227Cb, useTextBox228Cb, useImage108Cb, useFlex246Cb, useMenu2Cb, useTextBox229Cb, useTextBox230Cb, useTextBox231Cb, useTextBox232Cb, useTextBox233Cb, useFlex247Cb, useImage111Cb, useTextBox235Cb, useFlex258Cb, useFlex259Cb, useFlex260Cb, useFlex261Cb, useImage112Cb, useTextBox236Cb, useFlex262Cb, useImage113Cb, useTextBox237Cb, useFlex266Cb, useFlex267Cb, useFlex268Cb, useFlex269Cb, useTextBox250Cb, useTextBox251Cb, useTextBox252Cb, useTextBox253Cb, useTextBox254Cb, useTextBox255Cb, useTextBox256Cb, useTextBox257Cb, useTextBox258Cb, useTextBox259Cb, useTextBox260Cb, useTextBox261Cb, useImage118Cb, useFlex283Cb, useInput15Cb, useImage119Cb, useFlex284Cb, useInput16Cb, useImage120Cb, useFlex285Cb, useInput17Cb, useInput18Cb, useFlex286Cb, useImage121Cb, useImage122Cb, useTextBox262Cb, useFlex287Cb, useFlex288Cb, useFlex289Cb, useFlex290Cb, useFlex291Cb, useCart_Card_Name_1Cb, useCart_Card_Remove_1Cb, useCart_Card_Price_1Cb, useCart_Card_Name_2Cb, useCart_Card_Remove_2Cb, useCart_Card_Price_2Cb, useCart_Card_Name_3Cb, useCart_Card_Remove_3Cb, useCart_Card_Price_3Cb, useCart_Card_Price_4Cb, useCart_Card_Remove_4Cb, useCart_Card_Name_4Cb, useCart_Card_Image_1Cb, useFlex295Cb, useCart_Card_Quantity_1Cb, useCart_Card_Image_2Cb, useFlex296Cb, useCart_Card_Quantity_2Cb, useCart_Card_Image_3Cb, useFlex297Cb, useCart_Card_Quantity_3Cb, useCart_Card_Quantity_4Cb, useFlex298Cb, useCart_Card_Image_4Cb, useImage127Cb, useTextBox275Cb, useCart_Card_1Cb, useCart_Card_2Cb, useCart_Card_3Cb, useCart_Card_4Cb, useFlex303Cb, useFlex304Cb, useFlex305Cb, useFlex306Cb } from "../page-cbs/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Checkbox1Props = useStore((state)=>state["Home"]["Checkbox1"]);
const Checkbox1IoProps = useIoStore((state)=>state["Home"]["Checkbox1"]);
const Checkbox1Cb = useCheckbox1Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Flex83Props = useStore((state)=>state["Home"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Image108Props = useStore((state)=>state["Home"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Home"]["Image108"]);
const Image108Cb = useImage108Cb()
const Flex246Props = useStore((state)=>state["Home"]["Flex246"]);
const Flex246IoProps = useIoStore((state)=>state["Home"]["Flex246"]);
const Flex246Cb = useFlex246Cb()
const Menu2Props = useStore((state)=>state["Home"]["Menu2"]);
const Menu2IoProps = useIoStore((state)=>state["Home"]["Menu2"]);
const Menu2Cb = useMenu2Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const TextBox233Props = useStore((state)=>state["Home"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["Home"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const Flex247Props = useStore((state)=>state["Home"]["Flex247"]);
const Flex247IoProps = useIoStore((state)=>state["Home"]["Flex247"]);
const Flex247Cb = useFlex247Cb()
const Image111Props = useStore((state)=>state["Home"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["Home"]["Image111"]);
const Image111Cb = useImage111Cb()
const TextBox235Props = useStore((state)=>state["Home"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Home"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex259Props = useStore((state)=>state["Home"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Home"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex260Props = useStore((state)=>state["Home"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["Home"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex261Props = useStore((state)=>state["Home"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["Home"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Image112Props = useStore((state)=>state["Home"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["Home"]["Image112"]);
const Image112Cb = useImage112Cb()
const TextBox236Props = useStore((state)=>state["Home"]["TextBox236"]);
const TextBox236IoProps = useIoStore((state)=>state["Home"]["TextBox236"]);
const TextBox236Cb = useTextBox236Cb()
const Flex262Props = useStore((state)=>state["Home"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["Home"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Image113Props = useStore((state)=>state["Home"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["Home"]["Image113"]);
const Image113Cb = useImage113Cb()
const TextBox237Props = useStore((state)=>state["Home"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["Home"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()
const Flex266Props = useStore((state)=>state["Home"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["Home"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex267Props = useStore((state)=>state["Home"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["Home"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex268Props = useStore((state)=>state["Home"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["Home"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex269Props = useStore((state)=>state["Home"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["Home"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const TextBox250Props = useStore((state)=>state["Home"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["Home"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const TextBox251Props = useStore((state)=>state["Home"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["Home"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const TextBox252Props = useStore((state)=>state["Home"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["Home"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const TextBox253Props = useStore((state)=>state["Home"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["Home"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox254Props = useStore((state)=>state["Home"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["Home"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const TextBox255Props = useStore((state)=>state["Home"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["Home"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["Home"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Home"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox257Props = useStore((state)=>state["Home"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Home"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["Home"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Home"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const TextBox259Props = useStore((state)=>state["Home"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Home"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox260Props = useStore((state)=>state["Home"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["Home"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const TextBox261Props = useStore((state)=>state["Home"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["Home"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const Image118Props = useStore((state)=>state["Home"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Home"]["Image118"]);
const Image118Cb = useImage118Cb()
const Flex283Props = useStore((state)=>state["Home"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Home"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Input15Props = useStore((state)=>state["Home"]["Input15"]);
const Input15IoProps = useIoStore((state)=>state["Home"]["Input15"]);
const Input15Cb = useInput15Cb()
const Image119Props = useStore((state)=>state["Home"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Home"]["Image119"]);
const Image119Cb = useImage119Cb()
const Flex284Props = useStore((state)=>state["Home"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["Home"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Input16Props = useStore((state)=>state["Home"]["Input16"]);
const Input16IoProps = useIoStore((state)=>state["Home"]["Input16"]);
const Input16Cb = useInput16Cb()
const Image120Props = useStore((state)=>state["Home"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Home"]["Image120"]);
const Image120Cb = useImage120Cb()
const Flex285Props = useStore((state)=>state["Home"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Home"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Input17Props = useStore((state)=>state["Home"]["Input17"]);
const Input17IoProps = useIoStore((state)=>state["Home"]["Input17"]);
const Input17Cb = useInput17Cb()
const Input18Props = useStore((state)=>state["Home"]["Input18"]);
const Input18IoProps = useIoStore((state)=>state["Home"]["Input18"]);
const Input18Cb = useInput18Cb()
const Flex286Props = useStore((state)=>state["Home"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Home"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Image121Props = useStore((state)=>state["Home"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Home"]["Image121"]);
const Image121Cb = useImage121Cb()
const Image122Props = useStore((state)=>state["Home"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["Home"]["Image122"]);
const Image122Cb = useImage122Cb()
const TextBox262Props = useStore((state)=>state["Home"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["Home"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const Flex287Props = useStore((state)=>state["Home"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["Home"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex288Props = useStore((state)=>state["Home"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["Home"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex289Props = useStore((state)=>state["Home"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["Home"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex290Props = useStore((state)=>state["Home"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["Home"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex291Props = useStore((state)=>state["Home"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["Home"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Cart_Card_Name_1Props = useStore((state)=>state["Home"]["Cart_Card_Name_1"]);
const Cart_Card_Name_1IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Name_1"]);
const Cart_Card_Name_1Cb = useCart_Card_Name_1Cb()
const Cart_Card_Remove_1Props = useStore((state)=>state["Home"]["Cart_Card_Remove_1"]);
const Cart_Card_Remove_1IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Remove_1"]);
const Cart_Card_Remove_1Cb = useCart_Card_Remove_1Cb()
const Cart_Card_Price_1Props = useStore((state)=>state["Home"]["Cart_Card_Price_1"]);
const Cart_Card_Price_1IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Price_1"]);
const Cart_Card_Price_1Cb = useCart_Card_Price_1Cb()
const Cart_Card_Name_2Props = useStore((state)=>state["Home"]["Cart_Card_Name_2"]);
const Cart_Card_Name_2IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Name_2"]);
const Cart_Card_Name_2Cb = useCart_Card_Name_2Cb()
const Cart_Card_Remove_2Props = useStore((state)=>state["Home"]["Cart_Card_Remove_2"]);
const Cart_Card_Remove_2IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Remove_2"]);
const Cart_Card_Remove_2Cb = useCart_Card_Remove_2Cb()
const Cart_Card_Price_2Props = useStore((state)=>state["Home"]["Cart_Card_Price_2"]);
const Cart_Card_Price_2IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Price_2"]);
const Cart_Card_Price_2Cb = useCart_Card_Price_2Cb()
const Cart_Card_Name_3Props = useStore((state)=>state["Home"]["Cart_Card_Name_3"]);
const Cart_Card_Name_3IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Name_3"]);
const Cart_Card_Name_3Cb = useCart_Card_Name_3Cb()
const Cart_Card_Remove_3Props = useStore((state)=>state["Home"]["Cart_Card_Remove_3"]);
const Cart_Card_Remove_3IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Remove_3"]);
const Cart_Card_Remove_3Cb = useCart_Card_Remove_3Cb()
const Cart_Card_Price_3Props = useStore((state)=>state["Home"]["Cart_Card_Price_3"]);
const Cart_Card_Price_3IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Price_3"]);
const Cart_Card_Price_3Cb = useCart_Card_Price_3Cb()
const Cart_Card_Price_4Props = useStore((state)=>state["Home"]["Cart_Card_Price_4"]);
const Cart_Card_Price_4IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Price_4"]);
const Cart_Card_Price_4Cb = useCart_Card_Price_4Cb()
const Cart_Card_Remove_4Props = useStore((state)=>state["Home"]["Cart_Card_Remove_4"]);
const Cart_Card_Remove_4IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Remove_4"]);
const Cart_Card_Remove_4Cb = useCart_Card_Remove_4Cb()
const Cart_Card_Name_4Props = useStore((state)=>state["Home"]["Cart_Card_Name_4"]);
const Cart_Card_Name_4IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Name_4"]);
const Cart_Card_Name_4Cb = useCart_Card_Name_4Cb()
const Cart_Card_Image_1Props = useStore((state)=>state["Home"]["Cart_Card_Image_1"]);
const Cart_Card_Image_1IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Image_1"]);
const Cart_Card_Image_1Cb = useCart_Card_Image_1Cb()
const Flex295Props = useStore((state)=>state["Home"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["Home"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Cart_Card_Quantity_1Props = useStore((state)=>state["Home"]["Cart_Card_Quantity_1"]);
const Cart_Card_Quantity_1IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Quantity_1"]);
const Cart_Card_Quantity_1Cb = useCart_Card_Quantity_1Cb()
const Cart_Card_Image_2Props = useStore((state)=>state["Home"]["Cart_Card_Image_2"]);
const Cart_Card_Image_2IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Image_2"]);
const Cart_Card_Image_2Cb = useCart_Card_Image_2Cb()
const Flex296Props = useStore((state)=>state["Home"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["Home"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Cart_Card_Quantity_2Props = useStore((state)=>state["Home"]["Cart_Card_Quantity_2"]);
const Cart_Card_Quantity_2IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Quantity_2"]);
const Cart_Card_Quantity_2Cb = useCart_Card_Quantity_2Cb()
const Cart_Card_Image_3Props = useStore((state)=>state["Home"]["Cart_Card_Image_3"]);
const Cart_Card_Image_3IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Image_3"]);
const Cart_Card_Image_3Cb = useCart_Card_Image_3Cb()
const Flex297Props = useStore((state)=>state["Home"]["Flex297"]);
const Flex297IoProps = useIoStore((state)=>state["Home"]["Flex297"]);
const Flex297Cb = useFlex297Cb()
const Cart_Card_Quantity_3Props = useStore((state)=>state["Home"]["Cart_Card_Quantity_3"]);
const Cart_Card_Quantity_3IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Quantity_3"]);
const Cart_Card_Quantity_3Cb = useCart_Card_Quantity_3Cb()
const Cart_Card_Quantity_4Props = useStore((state)=>state["Home"]["Cart_Card_Quantity_4"]);
const Cart_Card_Quantity_4IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Quantity_4"]);
const Cart_Card_Quantity_4Cb = useCart_Card_Quantity_4Cb()
const Flex298Props = useStore((state)=>state["Home"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["Home"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Cart_Card_Image_4Props = useStore((state)=>state["Home"]["Cart_Card_Image_4"]);
const Cart_Card_Image_4IoProps = useIoStore((state)=>state["Home"]["Cart_Card_Image_4"]);
const Cart_Card_Image_4Cb = useCart_Card_Image_4Cb()
const Image127Props = useStore((state)=>state["Home"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Home"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox275Props = useStore((state)=>state["Home"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["Home"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const Cart_Card_1Props = useStore((state)=>state["Home"]["Cart_Card_1"]);
const Cart_Card_1IoProps = useIoStore((state)=>state["Home"]["Cart_Card_1"]);
const Cart_Card_1Cb = useCart_Card_1Cb()
const Cart_Card_2Props = useStore((state)=>state["Home"]["Cart_Card_2"]);
const Cart_Card_2IoProps = useIoStore((state)=>state["Home"]["Cart_Card_2"]);
const Cart_Card_2Cb = useCart_Card_2Cb()
const Cart_Card_3Props = useStore((state)=>state["Home"]["Cart_Card_3"]);
const Cart_Card_3IoProps = useIoStore((state)=>state["Home"]["Cart_Card_3"]);
const Cart_Card_3Cb = useCart_Card_3Cb()
const Cart_Card_4Props = useStore((state)=>state["Home"]["Cart_Card_4"]);
const Cart_Card_4IoProps = useIoStore((state)=>state["Home"]["Cart_Card_4"]);
const Cart_Card_4Cb = useCart_Card_4Cb()
const Flex303Props = useStore((state)=>state["Home"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["Home"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex304Props = useStore((state)=>state["Home"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["Home"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex305Props = useStore((state)=>state["Home"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["Home"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Flex306Props = useStore((state)=>state["Home"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["Home"]["Flex306"]);
const Flex306Cb = useFlex306Cb()

  return (<>
  <Flex {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
<Flex {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<TextBox {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<TextBox {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<Flex {...Flex246Props} {...Flex246Cb} {...Flex246IoProps}>
<Image {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<TextBox {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
</Flex>
</Flex>
<Menu {...Menu2Props} {...Menu2Cb} {...Menu2IoProps}>
<Flex {...Flex247Props} {...Flex247Cb} {...Flex247IoProps}>
<TextBox {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<TextBox {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<TextBox {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<TextBox {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
</Flex>
</Menu>
</Flex>
<Flex {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Flex {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<TextBox {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<Flex {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<Button {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Flex>
<Flex {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Image {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
</Flex>
<Flex {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Flex {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Flex {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<TextBox {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex>
</Flex>
<Flex {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Flex {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
</Flex>
<Flex {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Flex {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Image {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<TextBox {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
<Flex {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<TextBox {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Flex>
</Flex>
<Flex {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Flex {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Flex {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
</Flex>
<Flex {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
</Flex>
<Flex {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<TextBox {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
<Flex {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Image {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Flex {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Flex {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Flex>
<TextBox {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex>
<Flex {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Flex {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Image {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
<TextBox {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<Flex {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Image {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
<TextBox {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
</Flex>
<Flex {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Flex {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Flex {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Image {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex>
<TextBox {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
<Flex {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Image {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
<TextBox {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Flex>
<Flex {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Image {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
<TextBox {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex>
</Flex>
<Button {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
<Flex {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Button {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
<Flex {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Image {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
</Flex>
<Flex {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Image {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Flex {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Flex {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Image {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Input {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex>
<Button {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
<Flex {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Checkbox {...Checkbox1Props} {...Checkbox1Cb} {...Checkbox1IoProps}/>
<TextBox {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex>
</Flex>
<Flex {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<TextBox {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Flex {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Image {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<TextBox {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Flex>
<Flex {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Image {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<TextBox {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Flex>
<Flex {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Image {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<TextBox {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Flex {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Flex {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<TextBox {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
<Image {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
</Flex>
</Flex>
<Flex {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}/>
</Flex>
<Flex {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Flex {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Flex {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<TextBox {...TextBox237Props} {...TextBox237Cb} {...TextBox237IoProps}/>
<Image {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex>
</Flex>
<Flex {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}/>
</Flex>
<Flex {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<Flex {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<Flex {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<TextBox {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
<Image {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
</Flex>
<Flex {...Cart_Card_1Props} {...Cart_Card_1Cb} {...Cart_Card_1IoProps}>
<Image {...Cart_Card_Image_1Props} {...Cart_Card_Image_1Cb} {...Cart_Card_Image_1IoProps}/>
<Flex {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<TextBox {...Cart_Card_Name_1Props} {...Cart_Card_Name_1Cb} {...Cart_Card_Name_1IoProps}/>
<TextBox {...Cart_Card_Price_1Props} {...Cart_Card_Price_1Cb} {...Cart_Card_Price_1IoProps}/>
<TextBox {...Cart_Card_Remove_1Props} {...Cart_Card_Remove_1Cb} {...Cart_Card_Remove_1IoProps}/>
</Flex>
<Input {...Cart_Card_Quantity_1Props} {...Cart_Card_Quantity_1Cb} {...Cart_Card_Quantity_1IoProps}/>
</Flex>
<Flex {...Cart_Card_2Props} {...Cart_Card_2Cb} {...Cart_Card_2IoProps}>
<Image {...Cart_Card_Image_2Props} {...Cart_Card_Image_2Cb} {...Cart_Card_Image_2IoProps}/>
<Flex {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<TextBox {...Cart_Card_Name_2Props} {...Cart_Card_Name_2Cb} {...Cart_Card_Name_2IoProps}/>
<TextBox {...Cart_Card_Price_2Props} {...Cart_Card_Price_2Cb} {...Cart_Card_Price_2IoProps}/>
<TextBox {...Cart_Card_Remove_2Props} {...Cart_Card_Remove_2Cb} {...Cart_Card_Remove_2IoProps}/>
</Flex>
<Input {...Cart_Card_Quantity_2Props} {...Cart_Card_Quantity_2Cb} {...Cart_Card_Quantity_2IoProps}/>
</Flex>
<Flex {...Cart_Card_3Props} {...Cart_Card_3Cb} {...Cart_Card_3IoProps}>
<Image {...Cart_Card_Image_3Props} {...Cart_Card_Image_3Cb} {...Cart_Card_Image_3IoProps}/>
<Flex {...Flex297Props} {...Flex297Cb} {...Flex297IoProps}>
<TextBox {...Cart_Card_Name_3Props} {...Cart_Card_Name_3Cb} {...Cart_Card_Name_3IoProps}/>
<TextBox {...Cart_Card_Price_3Props} {...Cart_Card_Price_3Cb} {...Cart_Card_Price_3IoProps}/>
<TextBox {...Cart_Card_Remove_3Props} {...Cart_Card_Remove_3Cb} {...Cart_Card_Remove_3IoProps}/>
</Flex>
<Input {...Cart_Card_Quantity_3Props} {...Cart_Card_Quantity_3Cb} {...Cart_Card_Quantity_3IoProps}/>
</Flex>
<Flex {...Cart_Card_4Props} {...Cart_Card_4Cb} {...Cart_Card_4IoProps}>
<Image {...Cart_Card_Image_4Props} {...Cart_Card_Image_4Cb} {...Cart_Card_Image_4IoProps}/>
<Flex {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<TextBox {...Cart_Card_Name_4Props} {...Cart_Card_Name_4Cb} {...Cart_Card_Name_4IoProps}/>
<TextBox {...Cart_Card_Price_4Props} {...Cart_Card_Price_4Cb} {...Cart_Card_Price_4IoProps}/>
<TextBox {...Cart_Card_Remove_4Props} {...Cart_Card_Remove_4Cb} {...Cart_Card_Remove_4IoProps}/>
</Flex>
<Input {...Cart_Card_Quantity_4Props} {...Cart_Card_Quantity_4Cb} {...Cart_Card_Quantity_4IoProps}/>
</Flex>
</Flex>
<Flex {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}/>
</Flex>
  </>);
}
