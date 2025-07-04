 

"use client";
 
import Banner from "@/components/home/Banner";
import ExploreDreamHome from "@/components/home/ExploreDreamHome";
import HowItWorksPage from "@/components/home/HowItWorksPage";

import React, { useState } from "react";
import NewListing from "@/components/home/NewListing";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import DreamHomeLanding from "@/components/home/DreamHomeLanding";
import AgentList from "@/components/home/AgentList";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import Contact from "@/components/home/Contact";
 
 

export default function Home() {
  // const [searchCriteria, setSearchCriteria] = useState(null);

  // const handleSearch = (criteria) => {
  //   setSearchCriteria(criteria);
  // };

  return (
    <div>
    
       <Banner />
       <HowItWorksPage />
       {/* <FitnessPage /> */}
       <ExploreDreamHome />
       <NewListing />
       <FeaturedProperties />
       <DreamHomeLanding />
       <AgentList />
       <NewsletterSignup />
       <Contact />
     
      
    
      
    </div>
  );
}