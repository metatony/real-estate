import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { useGlobal } from "../../provider/GlobalProvider";
import AgentCard from "./components/AgentCard";
import { BounceLoader } from "react-spinners";

const Agent = () => {
  const { data, loading } = useGlobal();

  return (
    <main>
      <section className="py-10 lg:py-20">
        <SectionHeader
          sectionName={"Our Agents"}
          title={"Find Your Property with Guidance"}
          firstLineDesc={
            "Our agents offer support to help you navigate the property market."
          }
        />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
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
