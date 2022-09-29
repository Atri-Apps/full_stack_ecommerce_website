import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex5 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox5 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image5 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input4 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex254Cb, useFlex255Cb, useFlex256Cb, useTextBox234Cb, useImage110Cb, useFlex257Cb, useCart_Card_4Cb, useCart_Card_Image_4Cb, useFlex276Cb, useCart_Card_Name_4Cb, useCart_Card_Remove_4Cb, useCart_Card_Price_4Cb, useCart_Card_Quantity_4Cb, useCart_Card_Price_3Cb, useCart_Card_Remove_3Cb, useCart_Card_Name_3Cb, useCart_Card_Quantity_3Cb, useFlex277Cb, useCart_Card_Image_3Cb, useCart_Card_3Cb, useCart_Card_Price_2Cb, useCart_Card_Remove_2Cb, useCart_Card_Name_2Cb, useCart_Card_Quantity_2Cb, useFlex279Cb, useCart_Card_Image_2Cb, useCart_Card_2Cb, useCart_Card_Price_1Cb, useCart_Card_Remove_1Cb, useCart_Card_Name_1Cb, useCart_Card_Quantity_1Cb, useFlex281Cb, useCart_Card_Image_1Cb, useCart_Card_1Cb } from "../page-cbs/extra";

export default function Extra() {
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
    setEffectivePropsForPage("extra")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("extra")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Flex254Props = useStore((state)=>state["extra"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["extra"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex255Props = useStore((state)=>state["extra"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["extra"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex256Props = useStore((state)=>state["extra"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["extra"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const TextBox234Props = useStore((state)=>state["extra"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["extra"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const Image110Props = useStore((state)=>state["extra"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["extra"]["Image110"]);
const Image110Cb = useImage110Cb()
const Flex257Props = useStore((state)=>state["extra"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["extra"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Cart_Card_4Props = useStore((state)=>state["extra"]["Cart_Card_4"]);
const Cart_Card_4IoProps = useIoStore((state)=>state["extra"]["Cart_Card_4"]);
const Cart_Card_4Cb = useCart_Card_4Cb()
const Cart_Card_Image_4Props = useStore((state)=>state["extra"]["Cart_Card_Image_4"]);
const Cart_Card_Image_4IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Image_4"]);
const Cart_Card_Image_4Cb = useCart_Card_Image_4Cb()
const Flex276Props = useStore((state)=>state["extra"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["extra"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Cart_Card_Name_4Props = useStore((state)=>state["extra"]["Cart_Card_Name_4"]);
const Cart_Card_Name_4IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Name_4"]);
const Cart_Card_Name_4Cb = useCart_Card_Name_4Cb()
const Cart_Card_Remove_4Props = useStore((state)=>state["extra"]["Cart_Card_Remove_4"]);
const Cart_Card_Remove_4IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Remove_4"]);
const Cart_Card_Remove_4Cb = useCart_Card_Remove_4Cb()
const Cart_Card_Price_4Props = useStore((state)=>state["extra"]["Cart_Card_Price_4"]);
const Cart_Card_Price_4IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Price_4"]);
const Cart_Card_Price_4Cb = useCart_Card_Price_4Cb()
const Cart_Card_Quantity_4Props = useStore((state)=>state["extra"]["Cart_Card_Quantity_4"]);
const Cart_Card_Quantity_4IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Quantity_4"]);
const Cart_Card_Quantity_4Cb = useCart_Card_Quantity_4Cb()
const Cart_Card_Price_3Props = useStore((state)=>state["extra"]["Cart_Card_Price_3"]);
const Cart_Card_Price_3IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Price_3"]);
const Cart_Card_Price_3Cb = useCart_Card_Price_3Cb()
const Cart_Card_Remove_3Props = useStore((state)=>state["extra"]["Cart_Card_Remove_3"]);
const Cart_Card_Remove_3IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Remove_3"]);
const Cart_Card_Remove_3Cb = useCart_Card_Remove_3Cb()
const Cart_Card_Name_3Props = useStore((state)=>state["extra"]["Cart_Card_Name_3"]);
const Cart_Card_Name_3IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Name_3"]);
const Cart_Card_Name_3Cb = useCart_Card_Name_3Cb()
const Cart_Card_Quantity_3Props = useStore((state)=>state["extra"]["Cart_Card_Quantity_3"]);
const Cart_Card_Quantity_3IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Quantity_3"]);
const Cart_Card_Quantity_3Cb = useCart_Card_Quantity_3Cb()
const Flex277Props = useStore((state)=>state["extra"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["extra"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Cart_Card_Image_3Props = useStore((state)=>state["extra"]["Cart_Card_Image_3"]);
const Cart_Card_Image_3IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Image_3"]);
const Cart_Card_Image_3Cb = useCart_Card_Image_3Cb()
const Cart_Card_3Props = useStore((state)=>state["extra"]["Cart_Card_3"]);
const Cart_Card_3IoProps = useIoStore((state)=>state["extra"]["Cart_Card_3"]);
const Cart_Card_3Cb = useCart_Card_3Cb()
const Cart_Card_Price_2Props = useStore((state)=>state["extra"]["Cart_Card_Price_2"]);
const Cart_Card_Price_2IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Price_2"]);
const Cart_Card_Price_2Cb = useCart_Card_Price_2Cb()
const Cart_Card_Remove_2Props = useStore((state)=>state["extra"]["Cart_Card_Remove_2"]);
const Cart_Card_Remove_2IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Remove_2"]);
const Cart_Card_Remove_2Cb = useCart_Card_Remove_2Cb()
const Cart_Card_Name_2Props = useStore((state)=>state["extra"]["Cart_Card_Name_2"]);
const Cart_Card_Name_2IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Name_2"]);
const Cart_Card_Name_2Cb = useCart_Card_Name_2Cb()
const Cart_Card_Quantity_2Props = useStore((state)=>state["extra"]["Cart_Card_Quantity_2"]);
const Cart_Card_Quantity_2IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Quantity_2"]);
const Cart_Card_Quantity_2Cb = useCart_Card_Quantity_2Cb()
const Flex279Props = useStore((state)=>state["extra"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["extra"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Cart_Card_Image_2Props = useStore((state)=>state["extra"]["Cart_Card_Image_2"]);
const Cart_Card_Image_2IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Image_2"]);
const Cart_Card_Image_2Cb = useCart_Card_Image_2Cb()
const Cart_Card_2Props = useStore((state)=>state["extra"]["Cart_Card_2"]);
const Cart_Card_2IoProps = useIoStore((state)=>state["extra"]["Cart_Card_2"]);
const Cart_Card_2Cb = useCart_Card_2Cb()
const Cart_Card_Price_1Props = useStore((state)=>state["extra"]["Cart_Card_Price_1"]);
const Cart_Card_Price_1IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Price_1"]);
const Cart_Card_Price_1Cb = useCart_Card_Price_1Cb()
const Cart_Card_Remove_1Props = useStore((state)=>state["extra"]["Cart_Card_Remove_1"]);
const Cart_Card_Remove_1IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Remove_1"]);
const Cart_Card_Remove_1Cb = useCart_Card_Remove_1Cb()
const Cart_Card_Name_1Props = useStore((state)=>state["extra"]["Cart_Card_Name_1"]);
const Cart_Card_Name_1IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Name_1"]);
const Cart_Card_Name_1Cb = useCart_Card_Name_1Cb()
const Cart_Card_Quantity_1Props = useStore((state)=>state["extra"]["Cart_Card_Quantity_1"]);
const Cart_Card_Quantity_1IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Quantity_1"]);
const Cart_Card_Quantity_1Cb = useCart_Card_Quantity_1Cb()
const Flex281Props = useStore((state)=>state["extra"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["extra"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Cart_Card_Image_1Props = useStore((state)=>state["extra"]["Cart_Card_Image_1"]);
const Cart_Card_Image_1IoProps = useIoStore((state)=>state["extra"]["Cart_Card_Image_1"]);
const Cart_Card_Image_1Cb = useCart_Card_Image_1Cb()
const Cart_Card_1Props = useStore((state)=>state["extra"]["Cart_Card_1"]);
const Cart_Card_1IoProps = useIoStore((state)=>state["extra"]["Cart_Card_1"]);
const Cart_Card_1Cb = useCart_Card_1Cb()

  return (<>
  <Flex5 {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<Flex5 {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Flex5 {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<TextBox5 {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
<Image5 {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
</Flex5>
<Flex5 {...Cart_Card_1Props} {...Cart_Card_1Cb} {...Cart_Card_1IoProps}>
<Image5 {...Cart_Card_Image_1Props} {...Cart_Card_Image_1Cb} {...Cart_Card_Image_1IoProps}/>
<Flex5 {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<TextBox5 {...Cart_Card_Name_1Props} {...Cart_Card_Name_1Cb} {...Cart_Card_Name_1IoProps}/>
<TextBox5 {...Cart_Card_Price_1Props} {...Cart_Card_Price_1Cb} {...Cart_Card_Price_1IoProps}/>
<TextBox5 {...Cart_Card_Remove_1Props} {...Cart_Card_Remove_1Cb} {...Cart_Card_Remove_1IoProps}/>
</Flex5>
<Input4 {...Cart_Card_Quantity_1Props} {...Cart_Card_Quantity_1Cb} {...Cart_Card_Quantity_1IoProps}/>
</Flex5>
<Flex5 {...Cart_Card_2Props} {...Cart_Card_2Cb} {...Cart_Card_2IoProps}>
<Image5 {...Cart_Card_Image_2Props} {...Cart_Card_Image_2Cb} {...Cart_Card_Image_2IoProps}/>
<Flex5 {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<TextBox5 {...Cart_Card_Name_2Props} {...Cart_Card_Name_2Cb} {...Cart_Card_Name_2IoProps}/>
<TextBox5 {...Cart_Card_Price_2Props} {...Cart_Card_Price_2Cb} {...Cart_Card_Price_2IoProps}/>
<TextBox5 {...Cart_Card_Remove_2Props} {...Cart_Card_Remove_2Cb} {...Cart_Card_Remove_2IoProps}/>
</Flex5>
<Input4 {...Cart_Card_Quantity_2Props} {...Cart_Card_Quantity_2Cb} {...Cart_Card_Quantity_2IoProps}/>
</Flex5>
<Flex5 {...Cart_Card_3Props} {...Cart_Card_3Cb} {...Cart_Card_3IoProps}>
<Image5 {...Cart_Card_Image_3Props} {...Cart_Card_Image_3Cb} {...Cart_Card_Image_3IoProps}/>
<Flex5 {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox5 {...Cart_Card_Name_3Props} {...Cart_Card_Name_3Cb} {...Cart_Card_Name_3IoProps}/>
<TextBox5 {...Cart_Card_Price_3Props} {...Cart_Card_Price_3Cb} {...Cart_Card_Price_3IoProps}/>
<TextBox5 {...Cart_Card_Remove_3Props} {...Cart_Card_Remove_3Cb} {...Cart_Card_Remove_3IoProps}/>
</Flex5>
<Input4 {...Cart_Card_Quantity_3Props} {...Cart_Card_Quantity_3Cb} {...Cart_Card_Quantity_3IoProps}/>
</Flex5>
<Flex5 {...Cart_Card_4Props} {...Cart_Card_4Cb} {...Cart_Card_4IoProps}>
<Image5 {...Cart_Card_Image_4Props} {...Cart_Card_Image_4Cb} {...Cart_Card_Image_4IoProps}/>
<Flex5 {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<TextBox5 {...Cart_Card_Name_4Props} {...Cart_Card_Name_4Cb} {...Cart_Card_Name_4IoProps}/>
<TextBox5 {...Cart_Card_Price_4Props} {...Cart_Card_Price_4Cb} {...Cart_Card_Price_4IoProps}/>
<TextBox5 {...Cart_Card_Remove_4Props} {...Cart_Card_Remove_4Cb} {...Cart_Card_Remove_4IoProps}/>
</Flex5>
<Input4 {...Cart_Card_Quantity_4Props} {...Cart_Card_Quantity_4Cb} {...Cart_Card_Quantity_4IoProps}/>
</Flex5>
</Flex5>
<Flex5 {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}/>
</Flex5>
  </>);
}
