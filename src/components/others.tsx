import React from "react";

export default function Others() {
  const languages = [
    { name: "Kinyarwanda", level: "Native", width: "100%" },
    { name: "English", level: "Fluent", width: "80%" },
    { name: "French", level: "Fluent", width: "80%" },
  ];

  const studies = [
    {
      school: "Rwanda Coding Academy",
      details: "SPE | 2023 - Now",
    },
    {
      school: "Lycee Notre Dame De Citeaux",
      details: "Ordinary Level Education  | 2020 - 2023",
    },
  ];

  return (
    <div className="text-white flex flex-col justify-center items-center px-4 sm:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl w-full">
        {/* Language Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold border-b-[3px] border-white pb-2">
            <span className="text-3xl sm:text-4xl tracking-widest">Languages</span>
          </h2>
          <div className="mt-5">
            {languages.map((lang, index) => (
              <div key={index} className="mt-6">
                <p className="flex justify-between text-sm sm:text-base">
                  {lang.name} <span className="text-gray-400">{lang.level}</span>
                </p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-gradient2 to-gradient1 h-2 rounded-full"
                    style={{ width: lang.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studies Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold border-b-[3px] border-white pb-2">
            <span className="text-3xl sm:text-4xl tracking-widest">Studies</span>
          </h2>
          <div className="mt-4 space-y-8 sm:space-y-10">
            {studies.map((study, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 sm:w-[55px] h-12 sm:h-[55px] bg-gradient-to-b from-gradient1 to-gradient2 rounded-full flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    className="sm:w-[34px] sm:h-[34px]"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_47_124)">
                      <path
                        d="M4.22035 26.0382V7.14048C4.22035 6.0267 4.6628 4.95854 5.45036 4.17098C6.23792 3.38343 7.30608 2.94098 8.41985 2.94098H28.0175C28.3888 2.94098 28.7448 3.08846 29.0074 3.35098C29.2699 3.6135 29.4174 3.96955 29.4174 4.34081V29.5378C29.4174 29.9091 29.2699 30.2651 29.0074 30.5276C28.7448 30.7902 28.3888 30.9376 28.0175 30.9376H9.11977C7.82036 30.9376 6.57418 30.4215 5.65536 29.5026C4.73654 28.5838 4.22035 27.3376 4.22035 26.0382ZM26.6177 28.138V23.9385H9.11977C8.56288 23.9385 8.0288 24.1597 7.63502 24.5535C7.24124 24.9473 7.02002 25.4813 7.02002 26.0382C7.02002 26.5951 7.24124 27.1292 7.63502 27.523C8.0288 27.9168 8.56288 28.138 9.11977 28.138H26.6177ZM7.02002 21.6106C7.67611 21.299 8.39347 21.1378 9.11977 21.1388H26.6177V5.74065H8.41985C8.04859 5.74065 7.69254 5.88813 7.43002 6.15065C7.1675 6.41317 7.02002 6.76922 7.02002 7.14048V21.6106Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_47_124">
                        <rect
                          width="33.596"
                          height="33.596"
                          fill="white"
                          transform="translate(0.020874 0.141357)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold">{study.school}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{study.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
