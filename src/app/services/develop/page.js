import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevelopHero from "@/components/develop/DevelopHero";
import TargetClients from "@/components/develop/TargetClients";
import TechCapabilities from "@/components/develop/TechCapabilities";
import DevProcess from "@/components/develop/DevProcess";
import DevDeliverables from "@/components/develop/DevDeliverables";
import DevPricing from "@/components/develop/DevPricing";
import DevUseCases from "@/components/develop/DevUseCases";
import CodeQuality from "@/components/develop/CodeQuality";
import TechStack from "@/components/develop/TechStack";
import DevBundleBanner from "@/components/develop/DevBundleBanner";
import DevFAQ from "@/components/develop/DevFAQ";
import DevCTA from "@/components/develop/DevCTA";

export const metadata = {
    title: "Development Services",
    description:
        "Build high-performance web applications with robust, scalable, and secure code. We transform ideas into powerful digital products.",
};

export default function DevelopServicePage() {
    return (
        <div className="page develop-page">
            <Header />
            <main className="main-content">
                <DevelopHero />
                <TargetClients />
                <TechCapabilities />
                <DevProcess />
                <DevDeliverables />
                <DevPricing />
                <DevUseCases />
                <CodeQuality />
                <TechStack />
                <DevBundleBanner />
                <DevFAQ />
                <DevCTA />
            </main>
            <Footer />
        </div>
    );
}
