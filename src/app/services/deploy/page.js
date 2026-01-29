import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeployHero from "@/components/deploy/DeployHero";
import DeployTargetClients from "@/components/deploy/DeployTargetClients";
import DeployServices from "@/components/deploy/DeployServices";
import DeployProcess from "@/components/deploy/DeployProcess";
import DeployDeliverables from "@/components/deploy/DeployDeliverables";
import DeployPricing from "@/components/deploy/DeployPricing";
import DeployTechStack from "@/components/deploy/DeployTechStack";
import DeployWhyLoga from "@/components/deploy/DeployWhyLoga";
import DeployBundleBanner from "@/components/deploy/DeployBundleBanner";
import DeployFAQ from "@/components/deploy/DeployFAQ";
import DeployCTA from "@/components/deploy/DeployCTA";

export const metadata = {
    title: "Deployment Services | Loga Tech",
    description:
        "Launch your web application with confidence. Enterprise-grade cloud infrastructure, CI/CD automation, and zero-downtime deployments.",
};

export default function DeployServicePage() {
    return (
        <div className="deploy-page">
            <Header />
            <main>
                <DeployHero />
                <DeployTargetClients />
                <DeployServices />
                <DeployProcess />
                <DeployDeliverables />
                <DeployTechStack />
                <DeployPricing />
                <DeployWhyLoga />
                <DeployBundleBanner />
                <DeployFAQ />
                <DeployCTA />
            </main>
            <Footer />
        </div>
    );
}
