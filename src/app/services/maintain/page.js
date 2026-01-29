import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MaintainHero from "@/components/maintain/MaintainHero";
import MaintainTargetClients from "@/components/maintain/MaintainTargetClients";
import MaintainServices from "@/components/maintain/MaintainServices";
import MaintainProcess from "@/components/maintain/MaintainProcess";
import MaintainDeliverables from "@/components/maintain/MaintainDeliverables";
import MaintainPricing from "@/components/maintain/MaintainPricing";
import MaintainWhyLoga from "@/components/maintain/MaintainWhyLoga";
import MaintainBundleBanner from "@/components/maintain/MaintainBundleBanner";
import MaintainFAQ from "@/components/maintain/MaintainFAQ";
import MaintainCTA from "@/components/maintain/MaintainCTA";

export const metadata = {
    title: "Maintenance & Support Services | Loga Tech",
    description:
        "Proactive website maintenance, security patching, and 24/7 uptime monitoring. Keep your digital business running smoothly with Loga Tech support plans.",
};

export default function MaintainServicePage() {
    return (
        <div className="maintain-page">
            <Header />
            <main>
                <MaintainHero />
                <MaintainTargetClients />
                <MaintainServices />
                <MaintainProcess />
                <MaintainDeliverables />
                <MaintainPricing />
                <MaintainWhyLoga />
                <MaintainBundleBanner />
                <MaintainFAQ />
                <MaintainCTA />
            </main>
            <Footer />
        </div>
    );
}
