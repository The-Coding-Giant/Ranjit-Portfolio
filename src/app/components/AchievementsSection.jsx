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
    <section className="py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="rounded-2xl bg-[#1a1624] border border-[#2f2838] p-6 text-center"
            >
              <p className="text-3xl font-bold text-white">{achievement.value}</p>
              <p className="text-[#ADB7BE] text-sm mt-2">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AchievementsSection;
