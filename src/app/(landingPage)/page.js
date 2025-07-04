 

"use client";
 
import Banner from "@/components/home/Banner";
import DoctorTeamPage from "@/components/home/DoctorTeam";
import FitnessPage from "@/components/home/FitnessPage";
import HowItWorksPage from "@/components/home/HowItWorksPage";
import PlansPage from "@/components/home/PlanPage";
import TrainersTeam from "@/components/home/TrainersTeam";
import TrainingProgram from "@/components/home/TrainingProgram";
import WorkoutClassPage from "@/components/home/WorkoutClass";
import React, { useState } from "react";
 

export default function Home() {
  // const [searchCriteria, setSearchCriteria] = useState(null);

  // const handleSearch = (criteria) => {
  //   setSearchCriteria(criteria);
  // };

  return (
    <div>
    
       <Banner />
       <HowItWorksPage />
       <FitnessPage />
       <DoctorTeamPage />
       <TrainersTeam />
       <PlansPage />
       <WorkoutClassPage />
       <TrainingProgram />
    
      
    </div>
  );
}