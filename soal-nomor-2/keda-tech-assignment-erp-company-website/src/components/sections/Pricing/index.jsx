import { PricingProvider } from "./PricingContext";
import PricingUI from "./PricingUI";

export default function Pricing() {
  return (
    <PricingProvider>
      <PricingUI />
    </PricingProvider>
  );
}
