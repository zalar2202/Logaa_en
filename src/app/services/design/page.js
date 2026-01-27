import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DesignHero from "@/components/design/DesignHero";
import IdealFor from "@/components/design/IdealFor";
import ServiceBreakdown from "@/components/design/ServiceBreakdown";
import DesignProcess from "@/components/design/DesignProcess";
import Deliverables from "@/components/design/Deliverables";
import PricingGuidance from "@/components/design/PricingGuidance";
import UseCases from "@/components/design/UseCases";
import WhyDifferent from "@/components/design/WhyDifferent";
import BundleBanner from "@/components/design/BundleBanner";
import DesignFAQ from "@/components/design/DesignFAQ";
import DesignCTA from "@/components/design/DesignCTA";

export const metadata = {
    title: "Design Services",
    description:
        "Strategic web design that elevates your brand, communicates your message, and converts visitors into customers. Beautiful, strategic, built for growth.",
};

export default function DesignServicePage() {
    return (
        <div className="page design-page">
            <Header />
            <main className="main-content">
                <DesignHero />
                <IdealFor />
                <ServiceBreakdown />
                <DesignProcess />
                <Deliverables />
                <PricingGuidance />
                <UseCases />
                <WhyDifferent />
                <BundleBanner />
                <DesignFAQ />
                <DesignCTA />
            </main>
            <Footer />
        </div>
    );
}
