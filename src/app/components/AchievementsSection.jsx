import React from "react";

const achievementsList = [
  {
    metric: "Projects Built",
    value: "12+",
  },
  {
    metric: "Tech Domains",
    value: "5",
  },
  {
    metric: "Practice Hours",
    value: "100+",
  },
  {
    metric: "Open to Roles",
    value: "2026",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-[#181818] to-[#1a1a2e]">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base text-center">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
