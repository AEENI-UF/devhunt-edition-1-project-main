import React from "react";
import OrganismSection from "../sections/home/organisme.section";
import { PartenaireSection } from "../sections/home/partener.section";

// mui custom font
export default function Home() {
  return (
    <div>
      <PartenaireSection />
      <OrganismSection />
    </div>
  );
}
