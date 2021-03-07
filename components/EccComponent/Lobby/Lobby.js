import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Lobby.module.css";
import HomeCard from "../../HomeCard/HomeCard";

const FilterItem = ({ queryParent, type, filters, value }) => {
  const checkRest = (ty) => {
    let check = true;
    let keys = Object.keys(filters);
    // console.log(keys);
    let idx = keys.indexOf(ty);
    for (let i = 0; i < idx; i++) {
      if (filters[ty].toLowerCase() === "up") {
        console.log(keys[i]);
      }
      // if (keys[i] !== type) {
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
  const urlGenerator = () => {
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
    if (filters[type] === value && checkRest(type)) {
      courseUrl = "";
      stateUrl = "";
      streamUrl = "";
      cityUrl = "";
    }

    return `${url}${streamUrl !== "" ? "/" + streamUrl : ""}${
      courseUrl !== "" ? "/" + courseUrl : ""
    }${stateUrl !== "" ? "/" + stateUrl : ""}/${cityUrl}`;
  };
  return (
    <Link
      href={{
        pathname: urlGenerator(),
        // pathname: `/explore/${queryParent}/${type === "stream" ? value : filters.stream}/${type === "course" ? value : filters.course}/${type === "state" ? value : filters.state}/${type === "city" ? value : filters.city}`,
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
          {value}
        </div>
      </a>
    </Link>
  );
};

const Lobby = ({ query, data }) => {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const filtersType = [
    {
      type: "stream",
      values: ["Engineering", "Medical", "Law", "Management", "Defence"],
    },
    {
      type: "course",
      values: {
        all: ["sare"],
        engineering: ["bsc", "btech", "mtech"],
        medical: ["Mbbs", "phd"],
      },
    },
    {
      type: "state",
      values: ["UP", "MP", "Bihar"],
    },
    {
      type: "city",
      values: {
        up: ["Kanpur", "Agra"],
        mp: ["Bhopal", "Indore", "Ujjain"],
        bihar: ["Ara", "chapra", "patna"],
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
    // console.log(DrpItemTypeRef.current[idx]);
    DrpItemTypeRef.current[idx].childNodes[1].classList.toggle(
      styles.lobbyDrpItemContShow
    );
    DrpItemTypeRef.current[idx].childNodes[0].childNodes[1].classList.toggle(
      styles.lobbyFilArrOpen
    );
    console.log(DrpItemTypeRef.current[idx].childNodes[0].childNodes[1]);
  };

  const filterClickHandler = () => {
    setMobFilOpen(!mobFilOpen);
  };

  const handleSetCurMObFil = (type) => {
    let idx = filtersType.findIndex((el) => el.type === type);
    console.debug(type, idx);
    setCurMobFil(idx);
  };

  const checkRest = (ty) => {
    let check = true;
    let keys = Object.keys(filters);
    // console.log(keys);
    let idx = keys.indexOf(ty);
    for (let i = 0; i < idx; i++) {
      if (filters[ty].toLowerCase() === "up") {
        console.log(keys[i]);
      }
      // if (keys[i] !== type) {
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

  const urlGenerator = (queryParent, type, filters, value) => {
    // console.debug(queryParent, type, filters, value);
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
    if (filters[type] === value && checkRest(type)) {
      courseUrl = "";
      stateUrl = "";
      streamUrl = "";
      cityUrl = "";
    }
    // if (filters.stream==="all-stream" && filters.course === "all-courses" && filters.state === "all-India") {
    //   courseUrl = "";
    //   stateUrl = "";
    // }
    return `${url}${streamUrl !== "" ? "/" + streamUrl : ""}${
      courseUrl !== "" ? "/" + courseUrl : ""
    }${stateUrl !== "" ? "/" + stateUrl : ""}/${cityUrl}`;
  };

  const handleUrlGeneration = (val, idx) => {
    // let nFilters = filters;
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
    console.debug(filters);
    let nextUrl = urlGenerator(query.type, filtersType[idx].type, filters, val);
    console.debug(nFilters);
    console.debug(nextUrl);
    setNextUrl(nextUrl);
    setFilters(nFilters);
  };

  useEffect(() => {
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
    console.debug(url, "run");
  }, [query]);

  return (
    <div className={styles.lobbyWrapper}>
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
                ref={(el) => {
                  if (!DrpItemTypeRef[i]) {
                    DrpItemTypeRef.current[i] = el;
                  }
                  // console.log(i, DrpItemTypeRef.current);
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
                  {items.values.map((val) => (
                    <FilterItem
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
                  ref={(el) => {
                    if (!DrpItemTypeRef[i]) {
                      DrpItemTypeRef.current[i] = el;
                    }
                    // console.log(i, DrpItemTypeRef.current);
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
                    {items.values[filters.stream.toLowerCase()].map((val) => (
                      <FilterItem
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
            }
          } else if (items.type === "state") {
            return (
              <div
                ref={(el) => {
                  if (!DrpItemTypeRef[i]) {
                    DrpItemTypeRef.current[i] = el;
                  }
                  // console.log(i, DrpItemTypeRef.current);
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
                  {items.values.map((val) => (
                    <FilterItem
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
              items.values[filters.state.toLowerCase()]
            ) {
              return (
                <div
                  ref={(el) => {
                    if (!DrpItemTypeRef[i]) {
                      DrpItemTypeRef.current[i] = el;
                    }
                    // console.log(i, DrpItemTypeRef.current);
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
                    {items.values[filters.state.toLowerCase()].map((val) => (
                      <FilterItem
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
            }
          }
        })}
      </div>
      <div className={styles.lobbyCardComp}>
        {data.map((card) => (
          <div className={styles.lobbyCard}>
            <HomeCard card={card} />
          </div>
        ))}
      </div>
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
                    filters.state !== "all-India"
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
                          {item}
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
                          {item}
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
    </div>
  );
};
export default Lobby;
