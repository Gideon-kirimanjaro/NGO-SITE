import React from "react";
import BlogArticle from "../BlogArticle/BlogArticle";
import CallToAction from "../CallToAction/CallToAction";
import Footer from "../Footer/Footer";
import ImpactSection from "../ImpactSection/ImpactSection";
import Navigation from "../Navigation/Navigation";
import SolutionSection from "../SolutionSection/SolutionSection";

const HomeComponent = () => {
  const color = "#DB7093";
  return (
    <div>
      <Navigation color={color} />
      <CallToAction color={color} />
      <SolutionSection color={color} />
      <ImpactSection />
      <BlogArticle color={color} />
      <Footer color={color} />
    </div>
  );
};

export default HomeComponent;
