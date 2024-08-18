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
    <ul className="checkout-tab-list">
      <li>
        <button className="active">Shipping</button>
      </li>
      <li>
        <button>Payment</button>
      </li>
      </ul>
      <form className="check-out-form">
        <div>
          <h4>Contact</h4>
          <div className="two-col">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone No." />
          </div>
        </div>
        <div>
        <h4>Shipping Address</h4>
        <div className="two-col">
          <select>
            <option selected>India</option>
          </select>
        </div>
        </div>
  <button className="btn type1">Coutinue To Payment</button>
      </form>
      </div>
    <div>
        <CheckOutItems />
    </div>
        </div>
</Section>
    </LayoutWrapper>
    )
} 