import React from "react";
import BasicMasonry from "../sections/home/club.section";
import OrganismSection from "../sections/home/organisme.section";
import { PartenaireSection } from "../sections/home/partener.section";

// mui custom font
export default function Home() {
  return (
    <div>
      <PartenaireSection />
      <BasicMasonry />
    </div>
  );
}
