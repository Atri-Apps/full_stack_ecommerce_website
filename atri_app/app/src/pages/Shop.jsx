import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input3 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Checkbox as Checkbox1 } from "@atrilabs/react-component-manifests/src/manifests/Checkbox/Checkbox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Menu as Menu4 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useTextBox182Cb, useTextBox183Cb, useFlex201Cb, useFlex202Cb, useTextBox184Cb, useTextBox185Cb, useFlex203Cb, useFlex204Cb, useFlex205Cb, useTextBox186Cb, useTextBox187Cb, useImage89Cb, useImage90Cb, useImage91Cb, useImage92Cb, useImage93Cb, useImage94Cb, useTextBox188Cb, useFlex206Cb, useTextBox189Cb, useTextBox190Cb, useTextBox191Cb, useFlex207Cb, useTextBox192Cb, useTextBox193Cb, useFlex208Cb, useTextBox194Cb, useTextBox195Cb, useFlex209Cb, useTextBox196Cb, useFlex210Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useFlex211Cb, useFlex220Cb, useProd_image_5Cb, useProd_image_4Cb, useProd_image_6Cb, useFlex221Cb, useName_5Cb, usePrice_5Cb, useFlex222Cb, useName_4Cb, usePrice_4Cb, useName_6Cb, useFlex223Cb, usePrice_6Cb, useCard_5Cb, useCard_4Cb, useCard_6Cb, useFlex227Cb, useProd_image_2Cb, useProd_image_1Cb, useProd_image_3Cb, useFlex228Cb, useName_2Cb, usePrice_2Cb, useFlex229Cb, useName_1Cb, usePrice_1Cb, useName_3Cb, useFlex230Cb, usePrice_3Cb, useCard_2Cb, useCard_1Cb, useCard_3Cb, useFlex234Cb, useInput8Cb, useImage101Cb, useTextBox212Cb, useCheckbox2Cb, useButton9Cb, useFlex235Cb, useFlex239Cb, useTextBox215Cb, useImage103Cb, useInput9Cb, useFlex240Cb, useButton10Cb, useCheckbox3Cb, useTextBox216Cb, useImage104Cb, useTextBox217Cb, useTextBox218Cb, useFlex241Cb, useFlex242Cb, useFlex243Cb, useImage105Cb, useImage106Cb, useMenu5Cb, useImage132Cb, useTextBox296Cb, useImage133Cb, useTextBox301Cb, useFlex318Cb, useTextBox302Cb, useTextBox303Cb, useTextBox304Cb, useTextBox305Cb, useFlex319Cb, useTextBox313Cb } from "../page-cbs/shop";

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
const Flex220Props = useStore((state)=>state["shop"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["shop"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Prod_image_5Props = useStore((state)=>state["shop"]["Prod_image_5"]);
const Prod_image_5IoProps = useIoStore((state)=>state["shop"]["Prod_image_5"]);
const Prod_image_5Cb = useProd_image_5Cb()
const Prod_image_4Props = useStore((state)=>state["shop"]["Prod_image_4"]);
const Prod_image_4IoProps = useIoStore((state)=>state["shop"]["Prod_image_4"]);
const Prod_image_4Cb = useProd_image_4Cb()
const Prod_image_6Props = useStore((state)=>state["shop"]["Prod_image_6"]);
const Prod_image_6IoProps = useIoStore((state)=>state["shop"]["Prod_image_6"]);
const Prod_image_6Cb = useProd_image_6Cb()
const Flex221Props = useStore((state)=>state["shop"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["shop"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Name_5Props = useStore((state)=>state["shop"]["Name_5"]);
const Name_5IoProps = useIoStore((state)=>state["shop"]["Name_5"]);
const Name_5Cb = useName_5Cb()
const Price_5Props = useStore((state)=>state["shop"]["Price_5"]);
const Price_5IoProps = useIoStore((state)=>state["shop"]["Price_5"]);
const Price_5Cb = usePrice_5Cb()
const Flex222Props = useStore((state)=>state["shop"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["shop"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Name_4Props = useStore((state)=>state["shop"]["Name_4"]);
const Name_4IoProps = useIoStore((state)=>state["shop"]["Name_4"]);
const Name_4Cb = useName_4Cb()
const Price_4Props = useStore((state)=>state["shop"]["Price_4"]);
const Price_4IoProps = useIoStore((state)=>state["shop"]["Price_4"]);
const Price_4Cb = usePrice_4Cb()
const Name_6Props = useStore((state)=>state["shop"]["Name_6"]);
const Name_6IoProps = useIoStore((state)=>state["shop"]["Name_6"]);
const Name_6Cb = useName_6Cb()
const Flex223Props = useStore((state)=>state["shop"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["shop"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Price_6Props = useStore((state)=>state["shop"]["Price_6"]);
const Price_6IoProps = useIoStore((state)=>state["shop"]["Price_6"]);
const Price_6Cb = usePrice_6Cb()
const Card_5Props = useStore((state)=>state["shop"]["Card_5"]);
const Card_5IoProps = useIoStore((state)=>state["shop"]["Card_5"]);
const Card_5Cb = useCard_5Cb()
const Card_4Props = useStore((state)=>state["shop"]["Card_4"]);
const Card_4IoProps = useIoStore((state)=>state["shop"]["Card_4"]);
const Card_4Cb = useCard_4Cb()
const Card_6Props = useStore((state)=>state["shop"]["Card_6"]);
const Card_6IoProps = useIoStore((state)=>state["shop"]["Card_6"]);
const Card_6Cb = useCard_6Cb()
const Flex227Props = useStore((state)=>state["shop"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["shop"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Prod_image_2Props = useStore((state)=>state["shop"]["Prod_image_2"]);
const Prod_image_2IoProps = useIoStore((state)=>state["shop"]["Prod_image_2"]);
const Prod_image_2Cb = useProd_image_2Cb()
const Prod_image_1Props = useStore((state)=>state["shop"]["Prod_image_1"]);
const Prod_image_1IoProps = useIoStore((state)=>state["shop"]["Prod_image_1"]);
const Prod_image_1Cb = useProd_image_1Cb()
const Prod_image_3Props = useStore((state)=>state["shop"]["Prod_image_3"]);
const Prod_image_3IoProps = useIoStore((state)=>state["shop"]["Prod_image_3"]);
const Prod_image_3Cb = useProd_image_3Cb()
const Flex228Props = useStore((state)=>state["shop"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["shop"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Name_2Props = useStore((state)=>state["shop"]["Name_2"]);
const Name_2IoProps = useIoStore((state)=>state["shop"]["Name_2"]);
const Name_2Cb = useName_2Cb()
const Price_2Props = useStore((state)=>state["shop"]["Price_2"]);
const Price_2IoProps = useIoStore((state)=>state["shop"]["Price_2"]);
const Price_2Cb = usePrice_2Cb()
const Flex229Props = useStore((state)=>state["shop"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["shop"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Name_1Props = useStore((state)=>state["shop"]["Name_1"]);
const Name_1IoProps = useIoStore((state)=>state["shop"]["Name_1"]);
const Name_1Cb = useName_1Cb()
const Price_1Props = useStore((state)=>state["shop"]["Price_1"]);
const Price_1IoProps = useIoStore((state)=>state["shop"]["Price_1"]);
const Price_1Cb = usePrice_1Cb()
const Name_3Props = useStore((state)=>state["shop"]["Name_3"]);
const Name_3IoProps = useIoStore((state)=>state["shop"]["Name_3"]);
const Name_3Cb = useName_3Cb()
const Flex230Props = useStore((state)=>state["shop"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["shop"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Price_3Props = useStore((state)=>state["shop"]["Price_3"]);
const Price_3IoProps = useIoStore((state)=>state["shop"]["Price_3"]);
const Price_3Cb = usePrice_3Cb()
const Card_2Props = useStore((state)=>state["shop"]["Card_2"]);
const Card_2IoProps = useIoStore((state)=>state["shop"]["Card_2"]);
const Card_2Cb = useCard_2Cb()
const Card_1Props = useStore((state)=>state["shop"]["Card_1"]);
const Card_1IoProps = useIoStore((state)=>state["shop"]["Card_1"]);
const Card_1Cb = useCard_1Cb()
const Card_3Props = useStore((state)=>state["shop"]["Card_3"]);
const Card_3IoProps = useIoStore((state)=>state["shop"]["Card_3"]);
const Card_3Cb = useCard_3Cb()
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
const Flex239Props = useStore((state)=>state["shop"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["shop"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const TextBox215Props = useStore((state)=>state["shop"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["shop"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const Image103Props = useStore((state)=>state["shop"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["shop"]["Image103"]);
const Image103Cb = useImage103Cb()
const Input9Props = useStore((state)=>state["shop"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["shop"]["Input9"]);
const Input9Cb = useInput9Cb()
const Flex240Props = useStore((state)=>state["shop"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["shop"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Button10Props = useStore((state)=>state["shop"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["shop"]["Button10"]);
const Button10Cb = useButton10Cb()
const Checkbox3Props = useStore((state)=>state["shop"]["Checkbox3"]);
const Checkbox3IoProps = useIoStore((state)=>state["shop"]["Checkbox3"]);
const Checkbox3Cb = useCheckbox3Cb()
const TextBox216Props = useStore((state)=>state["shop"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["shop"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const Image104Props = useStore((state)=>state["shop"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["shop"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox217Props = useStore((state)=>state["shop"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["shop"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["shop"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["shop"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Flex241Props = useStore((state)=>state["shop"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["shop"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex242Props = useStore((state)=>state["shop"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["shop"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex243Props = useStore((state)=>state["shop"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["shop"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Image105Props = useStore((state)=>state["shop"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["shop"]["Image105"]);
const Image105Cb = useImage105Cb()
const Image106Props = useStore((state)=>state["shop"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["shop"]["Image106"]);
const Image106Cb = useImage106Cb()
const Menu5Props = useStore((state)=>state["shop"]["Menu5"]);
const Menu5IoProps = useIoStore((state)=>state["shop"]["Menu5"]);
const Menu5Cb = useMenu5Cb()
const Image132Props = useStore((state)=>state["shop"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["shop"]["Image132"]);
const Image132Cb = useImage132Cb()
const TextBox296Props = useStore((state)=>state["shop"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["shop"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const Image133Props = useStore((state)=>state["shop"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["shop"]["Image133"]);
const Image133Cb = useImage133Cb()
const TextBox301Props = useStore((state)=>state["shop"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["shop"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const Flex318Props = useStore((state)=>state["shop"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["shop"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const TextBox302Props = useStore((state)=>state["shop"]["TextBox302"]);
const TextBox302IoProps = useIoStore((state)=>state["shop"]["TextBox302"]);
const TextBox302Cb = useTextBox302Cb()
const TextBox303Props = useStore((state)=>state["shop"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["shop"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox304Props = useStore((state)=>state["shop"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["shop"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox305Props = useStore((state)=>state["shop"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["shop"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const Flex319Props = useStore((state)=>state["shop"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["shop"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const TextBox313Props = useStore((state)=>state["shop"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["shop"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()

  return (<>
  <Flex4 {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<TextBox4 {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<Menu4 {...Menu5Props} {...Menu5Cb} {...Menu5IoProps}>
<Flex4 {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<TextBox4 {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox4 {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<TextBox4 {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox4 {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<TextBox4 {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
</Flex4>
</Menu4>
<Flex4 {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<TextBox4 {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
<TextBox4 {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<TextBox4 {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
<TextBox4 {...TextBox302Props} {...TextBox302Cb} {...TextBox302IoProps}/>
<Flex4 {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Image4 {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
<TextBox4 {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
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
<Flex4 {...Card_4Props} {...Card_4Cb} {...Card_4IoProps}>
<Flex4 {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Image4 {...Prod_image_4Props} {...Prod_image_4Cb} {...Prod_image_4IoProps}/>
</Flex4>
<TextBox4 {...Name_4Props} {...Name_4Cb} {...Name_4IoProps}/>
<TextBox4 {...Price_4Props} {...Price_4Cb} {...Price_4IoProps}/>
</Flex4>
<Flex4 {...Card_5Props} {...Card_5Cb} {...Card_5IoProps}>
<Flex4 {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Image4 {...Prod_image_5Props} {...Prod_image_5Cb} {...Prod_image_5IoProps}/>
</Flex4>
<TextBox4 {...Name_5Props} {...Name_5Cb} {...Name_5IoProps}/>
<TextBox4 {...Price_5Props} {...Price_5Cb} {...Price_5IoProps}/>
</Flex4>
<Flex4 {...Card_6Props} {...Card_6Cb} {...Card_6IoProps}>
<Flex4 {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Image4 {...Prod_image_6Props} {...Prod_image_6Cb} {...Prod_image_6IoProps}/>
</Flex4>
<TextBox4 {...Name_6Props} {...Name_6Cb} {...Name_6IoProps}/>
<TextBox4 {...Price_6Props} {...Price_6Cb} {...Price_6IoProps}/>
</Flex4>
</Flex4>
<Flex4 {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<Flex4 {...Card_1Props} {...Card_1Cb} {...Card_1IoProps}>
<Flex4 {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Image4 {...Prod_image_1Props} {...Prod_image_1Cb} {...Prod_image_1IoProps}/>
</Flex4>
<TextBox4 {...Name_1Props} {...Name_1Cb} {...Name_1IoProps}/>
<TextBox4 {...Price_1Props} {...Price_1Cb} {...Price_1IoProps}/>
</Flex4>
<Flex4 {...Card_2Props} {...Card_2Cb} {...Card_2IoProps}>
<Flex4 {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<Image4 {...Prod_image_2Props} {...Prod_image_2Cb} {...Prod_image_2IoProps}/>
</Flex4>
<TextBox4 {...Name_2Props} {...Name_2Cb} {...Name_2IoProps}/>
<TextBox4 {...Price_2Props} {...Price_2Cb} {...Price_2IoProps}/>
</Flex4>
<Flex4 {...Card_3Props} {...Card_3Cb} {...Card_3IoProps}>
<Flex4 {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<Image4 {...Prod_image_3Props} {...Prod_image_3Cb} {...Prod_image_3IoProps}/>
</Flex4>
<TextBox4 {...Name_3Props} {...Name_3Cb} {...Name_3IoProps}/>
<TextBox4 {...Price_3Props} {...Price_3Cb} {...Price_3IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Image4 {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<TextBox4 {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<Image4 {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
</Flex4>
<Flex4 {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Image4 {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
<TextBox4 {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox4 {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<Flex4 {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<Flex4 {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Image4 {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<Input3 {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Flex4>
<Button3 {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex4>
<Flex4 {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<Checkbox1 {...Checkbox3Props} {...Checkbox3Cb} {...Checkbox3IoProps}/>
<TextBox4 {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
</Flex4>
</Flex4>
  </>);
}
