import React from "react";
import CatalogueCard from "./CatalogueCard";
import catalogues from "../../data/layout/catalogues";

const Catalogue = () => {
  const ItemCatalogue = catalogues.map((catalogues) => {
    return <CatalogueCard key={catalogues.id} {...catalogues} />;
  });

  return (
    <section className="catalogue">
      <div className="catalogue-header-wrapper">
        <h1 className="catalogue-header">Shop Online</h1>
      </div>
      <div className="catalogue-container">
        <div className="catalogue-wrapper">
          <div className="catalogue-card-wrapper">{ItemCatalogue}</div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
