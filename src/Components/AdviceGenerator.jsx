import React from "react";
import useSWR from "swr";
import axios from "axios";

import dividerDesktop from "../assets/images/pattern-divider-mobile.svg";
import dividerMobile from "../assets/images/pattern-divider-desktop.svg";
import diceIcon from "../assets/images/icon-dice.svg";
import { Skeleton } from "@mui/material";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const AdviceGenerator = () => {
  const { data, error, mutate, isLoading } = useSWR(
    "https://api.adviceslip.com/advice",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (error)
    return (
      <div className=" bg-darkGrayishBlue p-8 rounded-lg shadow-lg text-center max-w-lg mx-4">
        <p className=" text-[#e11d48]">There is an error</p>
      </div>
    );

  if (isLoading)
    return (
      <div className=" bg-darkGrayishBlue p-8 rounded-lg shadow-lg flex flex-col gap-4 text-center justify-center w-[90vw] max-w-lg mx-4">
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton
          variant="circular"
          className=" mx-auto"
          width={64}
          height={64}
        />
      </div>
    );
  return (
    <div className=" bg-darkGrayishBlue p-8 rounded-lg shadow-lg flex flex-col gap-4 text-center justify-center max-w-lg mx-4">
      <p className=" text-neonGreen uppercase">Advice {data.slip.id}</p>
      <q className=" text-lightCyan text-qouteFontSize">{data.slip.advice}</q>
      <picture>
        <source media="(max-width: 600px)" srcSet={dividerDesktop} />
        <img className=" mx-auto" src={dividerMobile} alt="" />
      </picture>
      <button
        onClick={() => mutate()}
        className=" translate-y-16 -mt-16 mx-auto bg-neonGreen rounded-full hover:bg-neonGreen hover:shadow-buttonShadow p-4 "
      >
        <img src={diceIcon} alt="" />
      </button>
    </div>
  );
};

export default AdviceGenerator;
