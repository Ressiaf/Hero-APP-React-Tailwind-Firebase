import { GiMightyForce, GiStrong } from "react-icons/gi";
import { TiFlashOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BiBrain } from "react-icons/bi";
import React from "react";
import "animate.css";

export const HeroCard = ({ ...hero }) => {
    // STYLES
    const StatsStyle = "text-md font-semibold px-2 ";
    const DivStatsStyle = "flex item-center mb-2";
    const StatsIconsStyle = " text-xl mt-0.5";

  return (
    <>
        <Link
            to={`/hero/${hero.id}`}
            className="flex bg-gray-200/80 rounded-md w-80 md:w-auto  border md:max-w-sm  sm:max-w-md sm:w-11/12 m-8 hover:bg-gray-50/90 overflow-hidden shadow-xl shadow-black animate__animated animate__fadeInUp"
        >
            <img
            src={hero.imgLg}
            alt={hero.name}
            className="object-cover bg-cover h-96  md:h-auto sm:w-38 w-40 md:w-36 lg:w-44 md:rounded-none md:rounded-l-lg shadow-2xl shadow-black"
            />
            <div className="flex flex-col justify-around px-4 py-2 leading-normal item-center lg:pl-10 md:pl-4 pl-8 text-gray-900/75 md:ml-2 justify-content: center  ">
                <h2 className="mb-2 text-2xl  font-bold tracking-tight ">
                    {hero.name}
                </h2>
                <p className="mb-2 text-md  font-semibold tracking-tight ">
                    {hero.publisher}
                </p>
                <div className={DivStatsStyle}>
                    <BiBrain className={StatsIconsStyle} />
                    <p className={StatsStyle}> INT: {hero.heroInt} </p>
                </div>
                <div className={DivStatsStyle}>
                    <TiFlashOutline className={StatsIconsStyle} />
                    <p className={StatsStyle}>SPD: {hero.heroSpd} </p>
                </div>
                <div className={DivStatsStyle}>
                    <GiStrong className={StatsIconsStyle} />
                    <p className={StatsStyle}> STR: {hero.heroStr} </p>
                </div>
                <div className={DivStatsStyle}>
                    <GiMightyForce className={StatsIconsStyle} />
                    <p className={StatsStyle}>PWR {hero.heroPwr} </p>
                </div>
                <p className="mt-2 lg:text-lg md:text-sm  text-lg  font-semibold tracking-tight text-red-600 uppercase underline underline-offset-2">
                    more info
                </p>
            </div>
        </Link>
    </>
    );
};
