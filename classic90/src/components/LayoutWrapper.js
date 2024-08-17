import Footer from "./Footer";
import { HeaderUnique} from "@/components"
import Header from "./Header";

export default function LayoutWrapper({ children , quickHeader }) {
  return (
    <>
    {
      quickHeader ? <HeaderUnique /> :
      <Header />
    }
      <main>{children}</main>
      <Footer />
    </>
  );
}
