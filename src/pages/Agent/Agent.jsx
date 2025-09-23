import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { useGlobal } from "../../provider/GlobalProvider";
import AgentCard from "./components/AgentCard";
import { BounceLoader } from "react-spinners";
import SEO from "../../components/SEO";

const Agent = () => {
  const { data, loading } = useGlobal();

  return (
    <main>
      <SEO
        title="Our Agents | Rubble Real Estate"
        description="Meet our dedicated agents who are here to help you find your dream property."
        name="Rubble Real Estate"
        type="website"
      />
      <section className="py-10 lg:py-20">
        <SectionHeader
          sectionName={"Our Agents"}
          title={"Find Your Property with Guidance"}
          firstLineDesc={
            "Our agents offer support to help you navigate the property market."
          }
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {loading ? (
            <div className="lg:col-span-3 flex items-center justify-center h-[50vh]">
              <BounceLoader />;
            </div>
          ) : (
            data.agents.map(function (item) {
              return (
                <AgentCard
                  key={item.id}
                  name={item.name}
                  image={item.desktopImageUrl}
                  listings={item.listings}
                />
              );
            })
          )}
        </section>
      </section>
    </main>
  );
};

export default Agent;
