import { HeroSection } from "./components/HeroSection";
import { TimelineSection } from "./components/TimelineSection";
import { SegmentsSection } from "./components/SegmentsSection";
import { ProductMatrixSection } from "./components/ProductMatrixSection";
import { ProductionSection } from "./components/ProductionSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { OrderProcessSection } from "./components/OrderProcessSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";

export default function MarketingHomePage() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <TimelineSection />
      <SegmentsSection />
      <ProductMatrixSection />
      <ProductionSection />
      <ReviewsSection />
      <OrderProcessSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
