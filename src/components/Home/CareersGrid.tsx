import React from "react";

// Lista de carreras
const careers = [
  "Engineering", "Medicine", "Law", "Arts", "Business", "Education",
  "Physics", "Chemistry", "Biology", "Mathematics", "History", "Literature",
  "Psychology", "Sociology", "Philosophy", "Economics",
  "Computer Science", "Architecture", "Design", "Nursing", "Pharmacy", "Agriculture",
  "Environmental Science", "Music", "Theology", "Political Science", "Linguistics", "Marketing"
];

const CareersGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
      {careers.slice(0, 25).map((career, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 text-center text-gray-800 font-medium overflow-hidden hover:bg-slate-200 hover:cursor-pointer"
        >
          <p className="truncate">{career}</p>
        </div>
      ))}
    </div>
  );
};

export default CareersGrid;
