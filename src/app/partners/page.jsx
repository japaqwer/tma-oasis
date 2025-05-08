import HowItWorks from "@/components/partials/HowItWorks/HowItWorks";
import ReferralCard from "@/components/shared/ReferralCard/ReferralCard";
import ReferralDashboard from "@/components/shared/ReferralDashboard/ReferralDashboard";
import React from "react";

export default function PartnersPage() {
  return (
    <div className="container flex flex-col gap-[20px]">
      <ReferralCard />
      <ReferralDashboard />
      <HowItWorks />
    </div>
  );
}
