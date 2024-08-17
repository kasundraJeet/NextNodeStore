import LayoutWrapper from "@/components/LayoutWrapper";
import {
    Section,
    CheckOutItems
  } from "@/components";

export default function Home() {
return(
    <LayoutWrapper quickHeader={true}>
      <Section container="regular">
        <div className="two-col">
      <div>
    hello
      </div>
    <div>
        <CheckOutItems />
    </div>
        </div>
</Section>
    </LayoutWrapper>
    )
}