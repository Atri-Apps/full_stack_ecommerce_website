import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Menu as Menu3 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { useTextBox147Cb, useFlex167Cb, useTextBox148Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useTextBox152Cb, useFlex168Cb, useFlex170Cb, useTextBox153Cb, useTextBox154Cb, useFlex171Cb, useFlex172Cb, useFlex173Cb, useFlex174Cb, useFlex175Cb, useImage78Cb, useTextBox155Cb, useTextBox156Cb, useTextBox157Cb, useTextBox158Cb, useTextBox159Cb, useTextBox160Cb, useFlex176Cb, useTextBox161Cb, useTextBox162Cb, useInput7Cb, useButton6Cb, useFlex179Cb, useTextBox163Cb, useFlex180Cb, useTextBox164Cb, useImage79Cb, useImage80Cb, useImage81Cb, useFlex181Cb, useImage82Cb, useImage83Cb, useImage84Cb, useTextBox165Cb, useTextBox166Cb, useFlex182Cb, useTextBox167Cb, useFlex183Cb, useTextBox168Cb, useTextBox169Cb, useTextBox170Cb, useFlex184Cb, useFlex190Cb, useTextBox171Cb, useImage85Cb, useImage86Cb, useImage87Cb, useTextBox172Cb, useTextBox173Cb, useFlex191Cb, useTextBox174Cb, useFlex192Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useFlex193Cb, useFlex194Cb, useFlex195Cb, useFlex196Cb, useFlex197Cb, useFlex198Cb, useButton7Cb, useMenu4Cb, useImage130Cb, useTextBox286Cb, useImage131Cb, useTextBox291Cb, useFlex314Cb, useTextBox292Cb, useTextBox293Cb, useTextBox294Cb, useTextBox295Cb, useFlex315Cb, useTextBox307Cb, useTextBox308Cb, useTextBox309Cb, useTextBox310Cb, useFlex321Cb, useMenu6Cb, useTextBox311Cb } from "../page-cbs/product";

export default function Product() {
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
    setEffectivePropsForPage("product")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("product")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox147Props = useStore((state)=>state["product"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["product"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const Flex167Props = useStore((state)=>state["product"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["product"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const TextBox148Props = useStore((state)=>state["product"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["product"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox149Props = useStore((state)=>state["product"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["product"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["product"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["product"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["product"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["product"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const TextBox152Props = useStore((state)=>state["product"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["product"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const Flex168Props = useStore((state)=>state["product"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["product"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex170Props = useStore((state)=>state["product"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["product"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const TextBox153Props = useStore((state)=>state["product"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["product"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["product"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["product"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const Flex171Props = useStore((state)=>state["product"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["product"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex172Props = useStore((state)=>state["product"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["product"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex173Props = useStore((state)=>state["product"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["product"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex174Props = useStore((state)=>state["product"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["product"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex175Props = useStore((state)=>state["product"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["product"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Image78Props = useStore((state)=>state["product"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["product"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox155Props = useStore((state)=>state["product"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["product"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["product"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["product"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["product"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["product"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["product"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["product"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["product"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["product"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["product"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["product"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Flex176Props = useStore((state)=>state["product"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["product"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const TextBox161Props = useStore((state)=>state["product"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["product"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["product"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["product"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Input7Props = useStore((state)=>state["product"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["product"]["Input7"]);
const Input7Cb = useInput7Cb()
const Button6Props = useStore((state)=>state["product"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["product"]["Button6"]);
const Button6Cb = useButton6Cb()
const Flex179Props = useStore((state)=>state["product"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["product"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const TextBox163Props = useStore((state)=>state["product"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["product"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Flex180Props = useStore((state)=>state["product"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["product"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const TextBox164Props = useStore((state)=>state["product"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["product"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Image79Props = useStore((state)=>state["product"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["product"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image80Props = useStore((state)=>state["product"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["product"]["Image80"]);
const Image80Cb = useImage80Cb()
const Image81Props = useStore((state)=>state["product"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["product"]["Image81"]);
const Image81Cb = useImage81Cb()
const Flex181Props = useStore((state)=>state["product"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["product"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Image82Props = useStore((state)=>state["product"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["product"]["Image82"]);
const Image82Cb = useImage82Cb()
const Image83Props = useStore((state)=>state["product"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["product"]["Image83"]);
const Image83Cb = useImage83Cb()
const Image84Props = useStore((state)=>state["product"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["product"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox165Props = useStore((state)=>state["product"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["product"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["product"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["product"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const Flex182Props = useStore((state)=>state["product"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["product"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const TextBox167Props = useStore((state)=>state["product"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["product"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Flex183Props = useStore((state)=>state["product"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["product"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const TextBox168Props = useStore((state)=>state["product"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["product"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["product"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["product"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["product"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["product"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Flex184Props = useStore((state)=>state["product"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["product"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex190Props = useStore((state)=>state["product"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["product"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const TextBox171Props = useStore((state)=>state["product"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["product"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Image85Props = useStore((state)=>state["product"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["product"]["Image85"]);
const Image85Cb = useImage85Cb()
const Image86Props = useStore((state)=>state["product"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["product"]["Image86"]);
const Image86Cb = useImage86Cb()
const Image87Props = useStore((state)=>state["product"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["product"]["Image87"]);
const Image87Cb = useImage87Cb()
const TextBox172Props = useStore((state)=>state["product"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["product"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["product"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["product"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Flex191Props = useStore((state)=>state["product"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["product"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const TextBox174Props = useStore((state)=>state["product"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["product"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Flex192Props = useStore((state)=>state["product"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["product"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const TextBox175Props = useStore((state)=>state["product"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["product"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["product"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["product"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["product"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["product"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Flex193Props = useStore((state)=>state["product"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["product"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex194Props = useStore((state)=>state["product"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["product"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex195Props = useStore((state)=>state["product"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["product"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex196Props = useStore((state)=>state["product"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["product"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex197Props = useStore((state)=>state["product"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["product"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex198Props = useStore((state)=>state["product"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["product"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Button7Props = useStore((state)=>state["product"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["product"]["Button7"]);
const Button7Cb = useButton7Cb()
const Menu4Props = useStore((state)=>state["product"]["Menu4"]);
const Menu4IoProps = useIoStore((state)=>state["product"]["Menu4"]);
const Menu4Cb = useMenu4Cb()
const Image130Props = useStore((state)=>state["product"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["product"]["Image130"]);
const Image130Cb = useImage130Cb()
const TextBox286Props = useStore((state)=>state["product"]["TextBox286"]);
const TextBox286IoProps = useIoStore((state)=>state["product"]["TextBox286"]);
const TextBox286Cb = useTextBox286Cb()
const Image131Props = useStore((state)=>state["product"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["product"]["Image131"]);
const Image131Cb = useImage131Cb()
const TextBox291Props = useStore((state)=>state["product"]["TextBox291"]);
const TextBox291IoProps = useIoStore((state)=>state["product"]["TextBox291"]);
const TextBox291Cb = useTextBox291Cb()
const Flex314Props = useStore((state)=>state["product"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["product"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const TextBox292Props = useStore((state)=>state["product"]["TextBox292"]);
const TextBox292IoProps = useIoStore((state)=>state["product"]["TextBox292"]);
const TextBox292Cb = useTextBox292Cb()
const TextBox293Props = useStore((state)=>state["product"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["product"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const TextBox294Props = useStore((state)=>state["product"]["TextBox294"]);
const TextBox294IoProps = useIoStore((state)=>state["product"]["TextBox294"]);
const TextBox294Cb = useTextBox294Cb()
const TextBox295Props = useStore((state)=>state["product"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["product"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const Flex315Props = useStore((state)=>state["product"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["product"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const TextBox307Props = useStore((state)=>state["product"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["product"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["product"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["product"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const TextBox309Props = useStore((state)=>state["product"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["product"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const TextBox310Props = useStore((state)=>state["product"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["product"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const Flex321Props = useStore((state)=>state["product"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["product"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Menu6Props = useStore((state)=>state["product"]["Menu6"]);
const Menu6IoProps = useIoStore((state)=>state["product"]["Menu6"]);
const Menu6Cb = useMenu6Cb()
const TextBox311Props = useStore((state)=>state["product"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["product"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()

  return (<>
  <Flex3 {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<TextBox3 {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<Flex3 {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<TextBox3 {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
<TextBox3 {...TextBox294Props} {...TextBox294Cb} {...TextBox294IoProps}/>
<TextBox3 {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
<TextBox3 {...TextBox292Props} {...TextBox292Cb} {...TextBox292IoProps}/>
<Flex3 {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Image3 {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
<TextBox3 {...TextBox291Props} {...TextBox291Cb} {...TextBox291IoProps}/>
</Flex3>
</Flex3>
<Menu3 {...Menu4Props} {...Menu4Cb} {...Menu4IoProps}>
<Flex3 {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<TextBox3 {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<TextBox3 {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<TextBox3 {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox3 {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<Flex3 {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<TextBox3 {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
</Flex3>
</Flex3>
</Menu3>
<Menu3 {...Menu6Props} {...Menu6Cb} {...Menu6IoProps}>
<Flex3 {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<TextBox3 {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
<TextBox3 {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
<TextBox3 {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
<TextBox3 {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
<TextBox3 {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
</Flex3>
</Menu3>
</Flex3>
<Flex3 {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<Flex3 {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<TextBox3 {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox3 {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Flex3>
</Flex3>
<Flex3 {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<Flex3 {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<Image3 {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Flex3>
<Flex3 {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<TextBox3 {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox3 {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox3 {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox3 {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<Flex3 {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<TextBox3 {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox3 {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex3>
<Flex3 {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<TextBox3 {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox3 {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex3>
<Flex3 {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<TextBox3 {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<Flex3 {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<Image3 {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<Image3 {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
<Image3 {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
</Flex3>
</Flex3>
<TextBox3 {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<Input2 {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
<Button2 {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex3>
</Flex3>
<Flex3 {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<TextBox3 {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex3>
<Flex3 {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex3 {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Flex3 {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<Image3 {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
</Flex3>
<TextBox3 {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox3 {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex3>
<Flex3 {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Flex3 {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Image3 {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
</Flex3>
<TextBox3 {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox3 {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex3>
<Flex3 {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex3 {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Image3 {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
</Flex3>
<TextBox3 {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox3 {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex3>
</Flex3>
<Flex3 {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Button2 {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex3>
  </>);
}
