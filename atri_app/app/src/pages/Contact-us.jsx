import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useImage68Cb, useTextBox118Cb, useFlex137Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useFlex138Cb, useFlex139Cb, useFlex140Cb, useTextBox124Cb, useTextBox125Cb, useFlex141Cb, useFlex142Cb, useTextBox126Cb, useTextBox127Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useFlex143Cb, useFlex144Cb, useFlex145Cb, useTextBox132Cb, useTextBox133Cb, useFlex146Cb, useFlex147Cb, useFlex148Cb, useFlex149Cb, useFlex151Cb, useFlex152Cb, useFlex153Cb, useFlex154Cb, useTextBox134Cb, useFlex155Cb, useFlex156Cb, useTextBox135Cb, useFlex158Cb, useImage72Cb, useInput4Cb, useInput5Cb, useImage73Cb, useFlex159Cb, useTextBox136Cb, useFlex160Cb, useFlex161Cb, useTextBox137Cb, useTextBox138Cb, useInput6Cb, useButton5Cb, useImage74Cb, useTextBox139Cb, useTextBox140Cb, useImage75Cb, useTextBox141Cb, useTextBox142Cb, useImage76Cb, useTextBox143Cb, useTextBox144Cb, useFlex162Cb, useFlex163Cb, useFlex164Cb, useTextBox145Cb, useTextBox146Cb, useFlex165Cb, useFlex166Cb } from "../page-cbs/contact-us";

export default function ContactUs() {
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
    setEffectivePropsForPage("contact-us")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("contact-us")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Image68Props = useStore((state)=>state["contact-us"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["contact-us"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox118Props = useStore((state)=>state["contact-us"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["contact-us"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Flex137Props = useStore((state)=>state["contact-us"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["contact-us"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const TextBox119Props = useStore((state)=>state["contact-us"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["contact-us"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["contact-us"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["contact-us"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["contact-us"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["contact-us"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["contact-us"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["contact-us"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["contact-us"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["contact-us"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Flex138Props = useStore((state)=>state["contact-us"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["contact-us"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex139Props = useStore((state)=>state["contact-us"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["contact-us"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex140Props = useStore((state)=>state["contact-us"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["contact-us"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const TextBox124Props = useStore((state)=>state["contact-us"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["contact-us"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["contact-us"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["contact-us"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Flex141Props = useStore((state)=>state["contact-us"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["contact-us"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex142Props = useStore((state)=>state["contact-us"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["contact-us"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const TextBox126Props = useStore((state)=>state["contact-us"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["contact-us"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["contact-us"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["contact-us"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["contact-us"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["contact-us"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["contact-us"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["contact-us"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["contact-us"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["contact-us"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["contact-us"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["contact-us"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const Flex143Props = useStore((state)=>state["contact-us"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["contact-us"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex144Props = useStore((state)=>state["contact-us"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["contact-us"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex145Props = useStore((state)=>state["contact-us"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["contact-us"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const TextBox132Props = useStore((state)=>state["contact-us"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["contact-us"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["contact-us"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["contact-us"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Flex146Props = useStore((state)=>state["contact-us"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["contact-us"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex147Props = useStore((state)=>state["contact-us"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["contact-us"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex148Props = useStore((state)=>state["contact-us"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["contact-us"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["contact-us"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["contact-us"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex151Props = useStore((state)=>state["contact-us"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["contact-us"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex152Props = useStore((state)=>state["contact-us"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["contact-us"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex153Props = useStore((state)=>state["contact-us"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["contact-us"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex154Props = useStore((state)=>state["contact-us"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["contact-us"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const TextBox134Props = useStore((state)=>state["contact-us"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["contact-us"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Flex155Props = useStore((state)=>state["contact-us"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["contact-us"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex156Props = useStore((state)=>state["contact-us"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["contact-us"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const TextBox135Props = useStore((state)=>state["contact-us"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["contact-us"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Flex158Props = useStore((state)=>state["contact-us"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["contact-us"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Image72Props = useStore((state)=>state["contact-us"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["contact-us"]["Image72"]);
const Image72Cb = useImage72Cb()
const Input4Props = useStore((state)=>state["contact-us"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["contact-us"]["Input4"]);
const Input4Cb = useInput4Cb()
const Input5Props = useStore((state)=>state["contact-us"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["contact-us"]["Input5"]);
const Input5Cb = useInput5Cb()
const Image73Props = useStore((state)=>state["contact-us"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["contact-us"]["Image73"]);
const Image73Cb = useImage73Cb()
const Flex159Props = useStore((state)=>state["contact-us"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["contact-us"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const TextBox136Props = useStore((state)=>state["contact-us"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["contact-us"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Flex160Props = useStore((state)=>state["contact-us"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["contact-us"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex161Props = useStore((state)=>state["contact-us"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["contact-us"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const TextBox137Props = useStore((state)=>state["contact-us"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["contact-us"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["contact-us"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["contact-us"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const Input6Props = useStore((state)=>state["contact-us"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["contact-us"]["Input6"]);
const Input6Cb = useInput6Cb()
const Button5Props = useStore((state)=>state["contact-us"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["contact-us"]["Button5"]);
const Button5Cb = useButton5Cb()
const Image74Props = useStore((state)=>state["contact-us"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["contact-us"]["Image74"]);
const Image74Cb = useImage74Cb()
const TextBox139Props = useStore((state)=>state["contact-us"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["contact-us"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["contact-us"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["contact-us"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const Image75Props = useStore((state)=>state["contact-us"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["contact-us"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox141Props = useStore((state)=>state["contact-us"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["contact-us"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["contact-us"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["contact-us"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Image76Props = useStore((state)=>state["contact-us"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["contact-us"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox143Props = useStore((state)=>state["contact-us"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["contact-us"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["contact-us"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["contact-us"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Flex162Props = useStore((state)=>state["contact-us"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["contact-us"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex163Props = useStore((state)=>state["contact-us"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["contact-us"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex164Props = useStore((state)=>state["contact-us"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["contact-us"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const TextBox145Props = useStore((state)=>state["contact-us"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["contact-us"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox146Props = useStore((state)=>state["contact-us"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["contact-us"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const Flex165Props = useStore((state)=>state["contact-us"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["contact-us"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex166Props = useStore((state)=>state["contact-us"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["contact-us"]["Flex166"]);
const Flex166Cb = useFlex166Cb()

  return (<>
  <Flex2 {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Flex2 {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox2 {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
</Flex2>
<Flex2 {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<TextBox2 {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<TextBox2 {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<TextBox2 {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox2 {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Flex2 {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Image2 {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
<TextBox2 {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<Flex2 {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<TextBox2 {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox2 {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<TextBox2 {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox2 {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<Flex2 {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Flex2 {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<TextBox2 {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox2 {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex2>
<Flex2 {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<TextBox2 {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox2 {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex2>
<Flex2 {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<TextBox2 {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox2 {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Flex2 {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}/>
<Flex2 {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Flex2 {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<Flex2 {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}/>
</Flex2>
<Flex2 {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<TextBox2 {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<Flex2 {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Flex2 {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<TextBox2 {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<Flex2 {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<Image2 {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<Input1 {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<TextBox2 {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<Flex2 {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<Image2 {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
<Input1 {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox2 {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<Input1 {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
<TextBox2 {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
</Flex2>
<Button1 {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<TextBox2 {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<TextBox2 {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<Flex2 {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<Flex2 {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<Image2 {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<TextBox2 {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<TextBox2 {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
</Flex2>
<Flex2 {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Image2 {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
<TextBox2 {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox2 {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
</Flex2>
<Flex2 {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Image2 {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<TextBox2 {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox2 {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
