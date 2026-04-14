import React from "react";
import { useParams } from "react-router-dom";

// imports
import SMM from "./Smm";
import SEM from "./Sem";
import AI from "./Ai";
import AppDevelopment from "./App";
import ERP from "./Erp";
import PersonalBranding from "./PersonalBranding";
import Web from "./Web";
import SEO from "./Seo";
import WhatsAppAPI from "./Whatsapp";
import VideoProduction from "./Video";

export default function ServiceDetails() {
  const { type } = useParams();

  const serviceKey = type?.toLowerCase().trim(); // 🔥 safer

  const serviceMap = {
    smm: SMM,
    sem: SEM,
    ai: AI,
    app: AppDevelopment,
    erp: ERP,
    branding: PersonalBranding, // or "personal-branding"
    web: Web,
    seo: SEO,
    whatsapp: WhatsAppAPI,
    video: VideoProduction,
  };

  const Component = serviceMap[serviceKey];

  if (!Component) {
    return (
      <h1 style={{ padding: "100px", textAlign: "center" }}>
        Service Not Found ❌
      </h1>
    );
  }

  return <Component />;
}