import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Lobby.module.css";
import dynamic from "next/dynamic";

const HomeCard = dynamic(() => import("../../HomeCard/HomeCard"), {
  ssr: false,
});

const CollegeCard = dynamic(() => import("../../collegeCard/CollegeCard"), {
  ssr: false,
});

const checkRest1 = (ty, filters) => {
  let check = true;
  let keys = Object.keys(filters);
  let idx = keys.indexOf(ty);
  for (let i = 0; i < idx; i++) {
    if (filters[ty].toLowerCase() === "up") {
    }
    if (keys[i] === "stream" && filters[keys[i]] !== "all-stream") {
      check = false;
    }
    if (keys[i] === "course" && filters[keys[i]] !== "all-courses") {
      check = false;
    }
    if (keys[i] === "state" && filters[keys[i] !== "All-India"]) {
      check = false;
    }
  }
  if (idx === 0) {
    check = false;
  }
  return check;
};

const urlGenerator1 = (queryParent, type, filters, value) => {
  let url = `/explore/${queryParent}`;
  let streamUrl, courseUrl, stateUrl, cityUrl;
  let keys = Object.keys(filters);

  if (type === "stream") {
    if (filters.stream === value) {
      if (filters.state !== "all-India") {
        streamUrl = "all-stream";
      } else streamUrl = "";
    } else streamUrl = value;
  } else {
    streamUrl = filters.stream;
  }

  if (type === "course") {
    if (filters.course === value) {
      if (filters.state !== "all-India") {
        courseUrl = "all-courses";
      } else courseUrl = "";
    } else courseUrl = value;
  } else {
    courseUrl = filters.course;
  }

  if (type === "state") {
    if (filters.state === value) {
      stateUrl = "";
    } else stateUrl = value;
  } else {
    if (keys.indexOf(type) < keys.indexOf("state")) {
      if (filters.state === "all-India") {
        stateUrl = "";
      } else {
        stateUrl = filters.state;
      }
    } else if (keys.indexOf(type) > keys.indexOf("state")) {
      stateUrl = filters.state;
    }
  }

  if (type === "city") {
    if (filters.city === value) {
      cityUrl = "";
    } else cityUrl = value;
  } else {
    cityUrl = filters.city;
  }

  if (type === "state" && filters.state === value) {
    cityUrl = "";
  }
  if (type === "state" && filters.state !== value) {
    cityUrl = "";
  }
  if (type === "stream") {
    if (filters.state !== "all-India") {
      courseUrl = "all-courses";
    } else courseUrl = "";
  }
  if (
    type === "stream" &&
    filters.course === "all-courses" &&
    filters.state === "all-India"
  ) {
    courseUrl = "";
    stateUrl = "";
  }
  // console.log(checkRest(type), filters[type])
  if (filters[type] === value && checkRest1(type, filters)) {
    courseUrl = "";
    stateUrl = "";
    streamUrl = "";
    cityUrl = "";
  }
  return `${url}${streamUrl !== "" ? "/" + streamUrl : ""}${
    courseUrl !== "" ? "/" + courseUrl : ""
  }${stateUrl !== "" ? "/" + stateUrl : ""}/${cityUrl}`;
};

const FilterItem = ({ queryParent, type, filters, value }) => {
  return (
    <Link
      href={{
        pathname: urlGenerator1(queryParent, type, filters, value),
      }}
    >
      <a>
        <div className={styles.lobbyFilItem}>
          <span>
            {filters[type] === value ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="7.5" fill="#171717" stroke="#4F4F4F" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="7.5" fill="white" stroke="#4F4F4F" />
              </svg>
            )}
          </span>
          {value.replace(/-/g, " ")}
        </div>
      </a>
    </Link>
  );
};

const Lobby = ({ query, data }) => {
  const filtersType = [
    {
      type: "stream",
      values: [
        "Engineering",
        "Medical",
        "Hotel-Management",
        "Design",
        "Agriculture",
        "Commerce",
        "Aviation",
        "Defence",
        "Law",
      ],
    },
    {
      type: "course",
      values: {
        engineering: [
          "Bsc-IT",
          "Msc-IT",
          "B.Sc",
          "B.Tech",
          "mtech",
          "Electrical-Engineering",
          "Civil-Engineering",
          "Metallurgical-And-Materials-Engineering",
          "Aerospace-Engineering",
          "Mechanical-Engineering",
          "Computer-Science-And-Engineering",
          "Chemical-Engineering",
          "Naval-Architecture-&-Ocean-Engineering",
          "Engineering-Physics",
          "Textile-Engineering",
          "Material-Science-&-Engineering",
          "Maths-&-computing-Engineering",
          "Power-Engineering",
          "Industrial-Production-Engineering",
          "Biotechnology",
          "Biochemical-Engineering",
          "Polymer-science-and-technology",
          "Electronics-and-communications-Engineering",
          "Biomedical-Engineering",
          "Artificial-Intelligence",
          "Instrumentation-and-control-Engineering",
          "Naval-Architecture-and-Ocean-Engineering",
        ],
        medical: [
          "MBBS",
          "BSc-Nursing-Hons",
          "BSc-Nursing-Post-Basic",
          "Bachelor-of-optometry",
          "Bachelor-of-Physiotherapy",
          "BAMS",
          "Bsc",
          "BDC",
          "B.Pharm",
          "BBA-Healthcare-and-hospital-management",
        ],
        agriculture: ["B.Sc", "M.Sc", "PHD", "Diploma", "Bsc-Hons","Msc-Agronomy"],
        commerce: [
          "B.Com-Hons",
          "B.com",
          "M.com",
          "PG-Diploma",
          "M.com",
          "B.B.A",
          "M.B.A",
        ],
        law: [
          "B.A.",
          "LL.B-Hons",
          "LL.B.",
          "L.L.M",
          "L.L.M-corporate-laws",
          "L.L.M-IPR",
          "PhD",
          "M.Phill",
          "L.L.D",
          "B.S.W.LLB",
          "B.B.A.LLB",
          "B.B.A",
          "PG-Diploma-in-Labourlaw",
          "Air-space-law",
        ],
        aviation: [
          "Bsc-Aviation",
          "Msc-in-aviation",
          "commercial-pilot-license",
          "PG-diploma-in-airline-operation",
          "BE-in-Aircraft-maintainance-engineering",
          "B.Tech",
          "M.Tech",
          "MS-Research",
          "PhD-Aerospace engineering",
        ],
        "hotel-management": [
          "Bsc-in-Hospitality",
          "Bsc-in-Hotel-Administration",
          "Msc-in-Hotel-Administration",
          "PGD-in-accomodation-operation-and-management",
          "Diploma-in-bakery-and-cofectionery",
          "Diploma-in-food-and-beverages",
          "BHM",
          "Diploma-in-Hotel-Management",
          "Craftsmanship-course-in-food-production-and-patisserie",
          "Craftsmanship-course-in-food-and-beverage-service",
          "Diploma-in-food-production",
          "bachelor-of-Hotel-management",
          "Bachelor-of-Hotel-management-and-catering-technology",
        ],
        design: [
          "B.Des",
          "M.Des",
          "Doctoral-program-in-design",
          "BA-Hons-fashion-design",
          "BA-Hons-communication-design",
          "BA-Hons-interior-design",
          "BA-Hons-fashion-business",
          "MA-fashion-design",
          "MA-fashion-business",
          "B.F.tech",
          "M.F.tech",
        ],

        defence: [
          "Bsc-in-Security-and-intelligence",
          "bsc-in-Millitary-science",
          "Bsc-in-computer-science",
          "Bsc-Cyber-security",
        ],
      },
    },
    {
      type: "state",
      values: [
        "Uttar-Pradesh",
        "Uttarakhand",
        "Punjab",
        "Maharashtra",
        "Gujarat",
        "Tamilnadu",
        "Andhra-Pradesh",
        "Haryana",
        "Jammu",
        "Kerala",
        "Madhya-Pradesh",
        "Orissa",
        "Telangana",
        "karnataka",
        "New-Delhi",
        "West-Bengal",
        "Rajasthan",
        "Assam",
        "Delhi-NCR",
      ],
    },
    {
      type: "city",
      values: {
        "uttar-pradesh": [
          "Aligarh",
          "Meerut",
          "Amethi",
          "kanpur",
          "Lucknow",
          "Varanasi",
          "Ghaziabad",
          "Noida",
        ],
        mp: ["Indore"],
        gujarat: ["Gandhinagar", "Ahmedabad"],
        maharashtra: ["Mumbai", "Gondia", "Boramati", "Pune"],
        uttarakhand: ["Patnagar", "Roorkie", "Dehradun"],
        punjab: ["Patiala", "Chandigarh", "Ludhiana"],
        jammu: ["jammu"],
        puducherry: ["puducherry"],
        kerala: ["Kochi"],
        orrisa: ["Bhuvneshwar"],
        telengana: ["Hydrabad"],
        karnataka: ["Bengaluru"],
        "new-delhi": ["Delhi"],
        "west-bengal": ["Kharagpur", "Kolkata"],
        rajasthan: ["Jodhpur"],
        assam: ["Guwahati"],
        tamilnadu: ["Coimbator", "Chennai", "Tiruchirapalli", "Vellore"],
        "andhra-pradesh": ["Guntur"],
        hariyana: ["Hissar", "Gurgaon"],
        "delhi-ncr": [
          "Hauzkhas",
          "Muzaffarnagar",
          "Anand-vihar",
          "Gurgaon",
          "Ghaziabad",
          "Hapur",
          "Bahadurgarh",
          "Pitampura",
        ],
      },
    },
  ];

  const [filters, setFilters] = useState({
    stream: "all-stream",
    course: "all-courses",
    state: "aLL-India",
    city: "",
  });

  const [mobFilOpen, setMobFilOpen] = useState(false);

  const [curMobFil, setCurMobFil] = useState(0);

  const [nextUrl, setNextUrl] = useState();

  let DrpItemTypeRef = useRef([]);

  const handleFilterClick = () => {};

  const handleFilterItemClick = (idx) => {
    DrpItemTypeRef.current[idx].childNodes[1].classList.toggle(
      styles.lobbyDrpItemContShow
    );
    DrpItemTypeRef.current[idx].childNodes[0].childNodes[1].classList.toggle(
      styles.lobbyFilArrOpen
    );
  };

  const filterClickHandler = () => {
    setMobFilOpen(!mobFilOpen);
  };

  const handleSetCurMObFil = (type) => {
    let idx = filtersType.findIndex((el) => el.type === type);
    // console.debug(type, idx);
    setCurMobFil(idx);
  };

  const handleUrlGeneration = (val, idx) => {
    const nFilters = JSON.parse(JSON.stringify(filters));
    if (nFilters[filtersType[idx].type] !== val) {
      nFilters[filtersType[idx].type] = val;
    } else {
      if (filtersType[idx].type === "stream") {
        nFilters[filtersType[idx].type] = "all-stream";
      } else if (filtersType[idx].type === "course") {
        nFilters[filtersType[idx].type] = "all-courses";
      } else if (filtersType[idx].type === "state") {
        nFilters[filtersType[idx].type] = "all-India";
      } else if (filtersType[idx].type === "city") {
        nFilters[filtersType[idx].type] = "";
      }
    }
    // console.debug(filters);
    let nextUrl = urlGenerator1(
      query.type,
      filtersType[idx].type,
      filters,
      val
    );

    setNextUrl(nextUrl);
    setFilters(nFilters);
  };

  useEffect(() => {
    setMobFilOpen(false);
    setFilters({
      stream: query.filters
        ? query.filters[0]
          ? query.filters[0]
          : "all-stream"
        : "all-stream",
      course: query.filters
        ? query.filters[1]
          ? query.filters[1]
          : "all-courses"
        : "all-courses",
      state: query.filters
        ? query.filters[2]
          ? query.filters[2]
          : "all-India"
        : "all-India",
      city: query.filters ? (query.filters[3] ? query.filters[3] : "") : "",
    });
    let url = `/explore/${query.type}`;
    if (query.filters && query.filters.length > 0) {
      query.filters.forEach((filter) => {
        url = url + `/${filter}`;
      });
    }
    setNextUrl(url);
  }, [query]);

  return (
    <div className={styles.lobbyWrapper}>
      {/* {query.type === "colleges" ? (
        <></>
      ) : ( */}
      <div className={styles.lobbyFilterWrapper}>
        <div className={styles.lobbyFilTop}>
          <div>Filters</div>
          <div>
            <Link href={`/explore/${query.type}`}>Clear All</Link>
          </div>
        </div>
        {filtersType.map((items, i) => {
          if (items.type === "stream") {
            return (
              <div
                key={`${items.type + i}`}
                ref={(el) => {
                  if (!DrpItemTypeRef[i]) {
                    DrpItemTypeRef.current[i] = el;
                  }
                }}
                className={styles.lobbyDropdownWrapper}
              >
                <div
                  onClick={() => handleFilterItemClick(i)}
                  className={styles.lobbyDropdownType}
                >
                  Stream
                  <div className={styles.lobbyFilArr}>
                    <Image src="/filterArrow.svg" alt=">" layout="fill" />
                  </div>
                </div>
                <div className={styles.lobbyDrpItemContHidden}>
                  {items.values.map((val, idx) => (
                    <FilterItem
                      key={`${val + idx}`}
                      queryParent={query.type}
                      type={items.type}
                      filters={filters}
                      value={val}
                      onCLick={handleFilterClick}
                    />
                  ))}
                </div>
              </div>
            );
          } else if (items.type === "course") {
            if (
              filters.stream !== "" &&
              filters.stream !== "all-courses" &&
              items.values[filters.stream.toLowerCase()]
            ) {
              return (
                <div
                  key={`${items.type + i}`}
                  ref={(el) => {
                    if (!DrpItemTypeRef[i]) {
                      DrpItemTypeRef.current[i] = el;
                    }
                  }}
                  className={styles.lobbyDropdownWrapper}
                >
                  <div
                    onClick={() => handleFilterItemClick(i)}
                    className={styles.lobbyDropdownType}
                  >
                    Course
                    <div className={styles.lobbyFilArr}>
                      <Image src="/filterArrow.svg" alt=">" layout="fill" />
                    </div>
                  </div>
                  <div className={styles.lobbyDrpItemContHidden}>
                    {items.values[filters.stream.toLowerCase()].map(
                      (val, idx) => (
                        <FilterItem
                          key={`${val + idx}`}
                          queryParent={query.type}
                          type={items.type}
                          filters={filters}
                          value={val}
                          onCLick={handleFilterClick}
                        />
                      )
                    )}
                  </div>
                </div>
              );
            }
          } else if (items.type === "state") {
            return (
              <div
                key={`${items.type + i}`}
                ref={(el) => {
                  if (!DrpItemTypeRef[i]) {
                    DrpItemTypeRef.current[i] = el;
                  }
                }}
                className={styles.lobbyDropdownWrapper}
              >
                <div
                  onClick={() => handleFilterItemClick(i)}
                  className={styles.lobbyDropdownType}
                >
                  State
                  <div className={styles.lobbyFilArr}>
                    <Image src="/filterArrow.svg" alt=">" layout="fill" />
                  </div>
                </div>
                <div className={styles.lobbyDrpItemContHidden}>
                  {items.values.map((val, idx) => (
                    <FilterItem
                      key={`${val + idx}`}
                      queryParent={query.type}
                      type={items.type}
                      filters={filters}
                      value={val}
                      onCLick={handleFilterClick}
                    />
                  ))}
                </div>
              </div>
            );
          } else if (items.type === "city") {
            if (
              filters.state !== "" &&
              filters.state !== "all-state" &&
              query.type !== "exams" &&
              items.values[filters.state.toLowerCase()]
            ) {
              return (
                <div
                  key={`${items.type + i}`}
                  ref={(el) => {
                    if (!DrpItemTypeRef[i]) {
                      DrpItemTypeRef.current[i] = el;
                    }
                  }}
                  className={styles.lobbyDropdownWrapper}
                >
                  <div
                    onClick={() => handleFilterItemClick(i)}
                    className={styles.lobbyDropdownType}
                  >
                    City
                    <div className={styles.lobbyFilArr}>
                      <Image src="/filterArrow.svg" alt=">" layout="fill" />
                    </div>
                  </div>
                  <div className={styles.lobbyDrpItemContHidden}>
                    {items.values[filters.state.toLowerCase()].map(
                      (val, idx) => (
                        <FilterItem
                          key={`${val + idx}`}
                          queryParent={query.type}
                          type={items.type}
                          filters={filters}
                          value={val}
                          onCLick={handleFilterClick}
                        />
                      )
                    )}
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
      {/* )} */}
      <div className={styles.lobbyCardComp}>
        <>
          {query.type === "exams" &&
            data.map((card, idx) => (
              <div key={idx} className={styles.lobbyCard}>
                <HomeCard card={card} />
              </div>
            ))}

          {query.type === "colleges" &&
            data.map((card, idx) => (
              <div key={idx} className={styles.lobbyCard}>
                <CollegeCard card={card} />
              </div>
            ))}
        </>
      </div>
      {/* {query.type === "colleges" ? (
        <></>
      ) : ( */}
      <div
        className={
          mobFilOpen ? styles.mobFilHeight100 : styles.lobbyMobileFilter
        }
      >
        {mobFilOpen ? (
          <>
            <div className={styles.lobbyFilTopMob}>
              <div>Filters</div>
              <div>
                <Link href={`/explore/${query.type}`}>Clear All</Link>
              </div>
            </div>
            <div className={styles.lobbyMobFilterCont}>
              <div className={styles.lobbyMobFilTypeCont}>
                {filtersType.map((item) => {
                  if (item.type === "stream" || item.type === "state") {
                    return (
                      <div onClick={() => handleSetCurMObFil(item.type)}>
                        {item.type}
                      </div>
                    );
                  } else if (
                    item.type === "course" &&
                    filters.stream !== "all-stream"
                  ) {
                    return (
                      <div onClick={() => handleSetCurMObFil(item.type)}>
                        {item.type}
                      </div>
                    );
                  } else if (
                    item.type === "city" &&
                    filters.state !== "all-India" &&
                    query.type !== "exams"
                  ) {
                    return (
                      <div onClick={() => handleSetCurMObFil(item.type)}>
                        {item.type}
                      </div>
                    );
                  }
                })}
              </div>

              <div className={styles.lobbyMobFilItemCont}>
                {curMobFil === 0 || curMobFil === 2
                  ? filtersType[curMobFil].values.map((item) => {
                      return (
                        <div
                          onClick={() => handleUrlGeneration(item, curMobFil)}
                        >
                          {filters[filtersType[curMobFil].type] === item ? (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="7.5"
                                fill="#171717"
                                stroke="#4F4F4F"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="7.5"
                                fill="white"
                                stroke="#4F4F4F"
                              />
                            </svg>
                          )}
                          {item.replace(/-/g, " ")}
                        </div>
                      );
                    })
                  : filtersType[curMobFil].values[
                      curMobFil === 1
                        ? filters.stream.toLowerCase()
                        : filters.state.toLowerCase()
                    ]
                  ? filtersType[curMobFil].values[
                      curMobFil === 1
                        ? filters.stream.toLowerCase()
                        : filters.state.toLowerCase()
                    ].map((item) => {
                      return (
                        <div
                          onClick={() => handleUrlGeneration(item, curMobFil)}
                        >
                          {filters[filtersType[curMobFil].type] === item ? (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="7.5"
                                fill="#171717"
                                stroke="#4F4F4F"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="7.5"
                                fill="white"
                                stroke="#4F4F4F"
                              />
                            </svg>
                          )}
                          {item.replace(/-/g, " ")}
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {mobFilOpen ? (
          <div className={styles.lobbyOpenFilterButtons}>
            <div onClick={filterClickHandler}>Cancel</div>
            <div>
              <Link href={nextUrl}>Apply</Link>
            </div>
          </div>
        ) : (
          <div
            onClick={filterClickHandler}
            className={styles.lobbyClosedFilterButtons}
          >
            Filters
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
};
export default Lobby;
