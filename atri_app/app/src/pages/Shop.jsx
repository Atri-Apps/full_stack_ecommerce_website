import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Input as Input3 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Checkbox as Checkbox1 } from "@atrilabs/react-component-manifests/src/manifests/Checkbox/Checkbox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useTextBox178Cb, useImage88Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useTextBox182Cb, useTextBox183Cb, useFlex199Cb, useFlex200Cb, useFlex201Cb, useFlex202Cb, useTextBox184Cb, useTextBox185Cb, useFlex203Cb, useFlex204Cb, useFlex205Cb, useTextBox186Cb, useTextBox187Cb, useImage89Cb, useImage90Cb, useImage91Cb, useImage92Cb, useImage93Cb, useImage94Cb, useTextBox188Cb, useFlex206Cb, useTextBox189Cb, useTextBox190Cb, useTextBox191Cb, useFlex207Cb, useTextBox192Cb, useTextBox193Cb, useFlex208Cb, useTextBox194Cb, useTextBox195Cb, useFlex209Cb, useTextBox196Cb, useFlex210Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useFlex211Cb, useFlex212Cb, useFlex213Cb, useFlex214Cb, useFlex215Cb, useFlex216Cb, useFlex217Cb, useFlex218Cb, useFlex219Cb, useFlex220Cb, useImage95Cb, useImage96Cb, useImage97Cb, useFlex221Cb, useTextBox200Cb, useTextBox201Cb, useFlex222Cb, useTextBox202Cb, useTextBox203Cb, useTextBox204Cb, useFlex223Cb, useTextBox205Cb, useFlex224Cb, useFlex225Cb, useFlex226Cb, useFlex227Cb, useImage98Cb, useImage99Cb, useImage100Cb, useFlex228Cb, useTextBox206Cb, useTextBox207Cb, useFlex229Cb, useTextBox208Cb, useTextBox209Cb, useTextBox210Cb, useFlex230Cb, useTextBox211Cb, useFlex231Cb, useFlex232Cb, useFlex233Cb, useFlex234Cb, useInput8Cb, useImage101Cb, useTextBox212Cb, useCheckbox2Cb, useButton9Cb, useFlex235Cb, useFlex236Cb, useFlex237Cb, useTextBox213Cb, useTextBox214Cb, useImage102Cb, useFlex238Cb } from "../page-cbs/shop";

export default function Shop() {
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
    setEffectivePropsForPage("shop")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("shop")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox178Props = useStore((state)=>state["shop"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["shop"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const Image88Props = useStore((state)=>state["shop"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["shop"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox179Props = useStore((state)=>state["shop"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["shop"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["shop"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["shop"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["shop"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["shop"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["shop"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["shop"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["shop"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["shop"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const Flex199Props = useStore((state)=>state["shop"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["shop"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex200Props = useStore((state)=>state["shop"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["shop"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex201Props = useStore((state)=>state["shop"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["shop"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex202Props = useStore((state)=>state["shop"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["shop"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const TextBox184Props = useStore((state)=>state["shop"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["shop"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["shop"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["shop"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Flex203Props = useStore((state)=>state["shop"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["shop"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const Flex204Props = useStore((state)=>state["shop"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["shop"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex205Props = useStore((state)=>state["shop"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["shop"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const TextBox186Props = useStore((state)=>state["shop"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["shop"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["shop"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["shop"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const Image89Props = useStore((state)=>state["shop"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["shop"]["Image89"]);
const Image89Cb = useImage89Cb()
const Image90Props = useStore((state)=>state["shop"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["shop"]["Image90"]);
const Image90Cb = useImage90Cb()
const Image91Props = useStore((state)=>state["shop"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["shop"]["Image91"]);
const Image91Cb = useImage91Cb()
const Image92Props = useStore((state)=>state["shop"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["shop"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image93Props = useStore((state)=>state["shop"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["shop"]["Image93"]);
const Image93Cb = useImage93Cb()
const Image94Props = useStore((state)=>state["shop"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["shop"]["Image94"]);
const Image94Cb = useImage94Cb()
const TextBox188Props = useStore((state)=>state["shop"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["shop"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const Flex206Props = useStore((state)=>state["shop"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["shop"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const TextBox189Props = useStore((state)=>state["shop"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["shop"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["shop"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["shop"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["shop"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["shop"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const Flex207Props = useStore((state)=>state["shop"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["shop"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const TextBox192Props = useStore((state)=>state["shop"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["shop"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["shop"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["shop"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const Flex208Props = useStore((state)=>state["shop"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["shop"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const TextBox194Props = useStore((state)=>state["shop"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["shop"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["shop"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["shop"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const Flex209Props = useStore((state)=>state["shop"]["Flex209"]);
const Flex209IoProps = useIoStore((state)=>state["shop"]["Flex209"]);
const Flex209Cb = useFlex209Cb()
const TextBox196Props = useStore((state)=>state["shop"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["shop"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const Flex210Props = useStore((state)=>state["shop"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["shop"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const TextBox197Props = useStore((state)=>state["shop"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["shop"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["shop"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["shop"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["shop"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["shop"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const Flex211Props = useStore((state)=>state["shop"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["shop"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Flex212Props = useStore((state)=>state["shop"]["Flex212"]);
const Flex212IoProps = useIoStore((state)=>state["shop"]["Flex212"]);
const Flex212Cb = useFlex212Cb()
const Flex213Props = useStore((state)=>state["shop"]["Flex213"]);
const Flex213IoProps = useIoStore((state)=>state["shop"]["Flex213"]);
const Flex213Cb = useFlex213Cb()
const Flex214Props = useStore((state)=>state["shop"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["shop"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const Flex215Props = useStore((state)=>state["shop"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["shop"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const Flex216Props = useStore((state)=>state["shop"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["shop"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Flex217Props = useStore((state)=>state["shop"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["shop"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex218Props = useStore((state)=>state["shop"]["Flex218"]);
const Flex218IoProps = useIoStore((state)=>state["shop"]["Flex218"]);
const Flex218Cb = useFlex218Cb()
const Flex219Props = useStore((state)=>state["shop"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["shop"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex220Props = useStore((state)=>state["shop"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["shop"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Image95Props = useStore((state)=>state["shop"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["shop"]["Image95"]);
const Image95Cb = useImage95Cb()
const Image96Props = useStore((state)=>state["shop"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["shop"]["Image96"]);
const Image96Cb = useImage96Cb()
const Image97Props = useStore((state)=>state["shop"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["shop"]["Image97"]);
const Image97Cb = useImage97Cb()
const Flex221Props = useStore((state)=>state["shop"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["shop"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const TextBox200Props = useStore((state)=>state["shop"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["shop"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["shop"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["shop"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const Flex222Props = useStore((state)=>state["shop"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["shop"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const TextBox202Props = useStore((state)=>state["shop"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["shop"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["shop"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["shop"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["shop"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["shop"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const Flex223Props = useStore((state)=>state["shop"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["shop"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const TextBox205Props = useStore((state)=>state["shop"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["shop"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const Flex224Props = useStore((state)=>state["shop"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["shop"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["shop"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["shop"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex226Props = useStore((state)=>state["shop"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["shop"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex227Props = useStore((state)=>state["shop"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["shop"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Image98Props = useStore((state)=>state["shop"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["shop"]["Image98"]);
const Image98Cb = useImage98Cb()
const Image99Props = useStore((state)=>state["shop"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["shop"]["Image99"]);
const Image99Cb = useImage99Cb()
const Image100Props = useStore((state)=>state["shop"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["shop"]["Image100"]);
const Image100Cb = useImage100Cb()
const Flex228Props = useStore((state)=>state["shop"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["shop"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const TextBox206Props = useStore((state)=>state["shop"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["shop"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["shop"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["shop"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const Flex229Props = useStore((state)=>state["shop"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["shop"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const TextBox208Props = useStore((state)=>state["shop"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["shop"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox209Props = useStore((state)=>state["shop"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["shop"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["shop"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["shop"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const Flex230Props = useStore((state)=>state["shop"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["shop"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const TextBox211Props = useStore((state)=>state["shop"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["shop"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const Flex231Props = useStore((state)=>state["shop"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["shop"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex232Props = useStore((state)=>state["shop"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["shop"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex233Props = useStore((state)=>state["shop"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["shop"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex234Props = useStore((state)=>state["shop"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["shop"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Input8Props = useStore((state)=>state["shop"]["Input8"]);
const Input8IoProps = useIoStore((state)=>state["shop"]["Input8"]);
const Input8Cb = useInput8Cb()
const Image101Props = useStore((state)=>state["shop"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["shop"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox212Props = useStore((state)=>state["shop"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["shop"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const Checkbox2Props = useStore((state)=>state["shop"]["Checkbox2"]);
const Checkbox2IoProps = useIoStore((state)=>state["shop"]["Checkbox2"]);
const Checkbox2Cb = useCheckbox2Cb()
const Button9Props = useStore((state)=>state["shop"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["shop"]["Button9"]);
const Button9Cb = useButton9Cb()
const Flex235Props = useStore((state)=>state["shop"]["Flex235"]);
const Flex235IoProps = useIoStore((state)=>state["shop"]["Flex235"]);
const Flex235Cb = useFlex235Cb()
const Flex236Props = useStore((state)=>state["shop"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["shop"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const Flex237Props = useStore((state)=>state["shop"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["shop"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const TextBox213Props = useStore((state)=>state["shop"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["shop"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["shop"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["shop"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const Image102Props = useStore((state)=>state["shop"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["shop"]["Image102"]);
const Image102Cb = useImage102Cb()
const Flex238Props = useStore((state)=>state["shop"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["shop"]["Flex238"]);
const Flex238Cb = useFlex238Cb()

  return (<>
  <Flex4 {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Flex4 {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<TextBox4 {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Flex4>
<Flex4 {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<TextBox4 {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox4 {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<TextBox4 {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox4 {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<Flex4 {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Image4 {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
<TextBox4 {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Flex4 {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<TextBox4 {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<TextBox4 {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
</Flex4>
</Flex4>
<Flex4 {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<TextBox4 {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox4 {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
</Flex4>
<Flex4 {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<Flex4 {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<Flex4 {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<Flex4 {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Image4 {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
</Flex4>
<TextBox4 {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox4 {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
</Flex4>
<Flex4 {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Flex4 {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Image4 {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
</Flex4>
<TextBox4 {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox4 {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Flex4>
<Flex4 {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Flex4 {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Image4 {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
</Flex4>
<TextBox4 {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox4 {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
</Flex4>
</Flex4>
<Flex4 {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<Flex4 {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<Flex4 {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Image4 {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
</Flex4>
<TextBox4 {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox4 {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
</Flex4>
<Flex4 {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Flex4 {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<Image4 {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
</Flex4>
<TextBox4 {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox4 {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
</Flex4>
<Flex4 {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<Flex4 {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<Image4 {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
</Flex4>
<TextBox4 {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<TextBox4 {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Flex4>
</Flex4>
<Flex4 {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<Flex4 {...Flex216Props} {...Flex216Cb} {...Flex216IoProps}>
<Flex4 {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<Image4 {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Flex4>
<TextBox4 {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox4 {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
</Flex4>
<Flex4 {...Flex215Props} {...Flex215Cb} {...Flex215IoProps}>
<Flex4 {...Flex209Props} {...Flex209Cb} {...Flex209IoProps}>
<Image4 {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Flex4>
<TextBox4 {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<TextBox4 {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
</Flex4>
<Flex4 {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<Flex4 {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<Image4 {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Flex4>
<TextBox4 {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<TextBox4 {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
</Flex4>
</Flex4>
<Flex4 {...Flex218Props} {...Flex218Cb} {...Flex218IoProps}>
<Flex4 {...Flex213Props} {...Flex213Cb} {...Flex213IoProps}>
<Flex4 {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Image4 {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
</Flex4>
<TextBox4 {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<TextBox4 {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
</Flex4>
<Flex4 {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<Flex4 {...Flex208Props} {...Flex208Cb} {...Flex208IoProps}>
<Image4 {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex4>
<TextBox4 {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<TextBox4 {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
</Flex4>
<Flex4 {...Flex212Props} {...Flex212Cb} {...Flex212IoProps}>
<Flex4 {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<Image4 {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Flex4>
<TextBox4 {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox4 {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<Image4 {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<TextBox4 {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<TextBox4 {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<Flex4 {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<Flex4 {...Flex235Props} {...Flex235Cb} {...Flex235IoProps}>
<Image4 {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
<Input3 {...Input8Props} {...Input8Cb} {...Input8IoProps}/>
</Flex4>
<Button3 {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex4>
<Flex4 {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<Checkbox1 {...Checkbox2Props} {...Checkbox2Cb} {...Checkbox2IoProps}/>
<TextBox4 {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
</Flex4>
</Flex4>
  </>);
}
