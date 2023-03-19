import React, { useEffect, useState } from 'react'

const Status = ({status = "draft"}) => {
  //
  const handleStatusColourChanges = () => {
    if (status === "paid") return {
      dot: "bg-paidStatus",
      bg: "bg-paidStatus/10",
      text: "text-paidStatus",
    };
    if (status === "draft") return {
      dot: "bg-navbarLight dark:bg-shadedTextDark",
      bg: "bg-navbarLight/10 dark:bg-shadedTextDark/10",
      text: "text-navbarLight dark:text-shadedTextDark",
    };
    if (status === "pending") return {
      dot: "bg-pendingStatus",
      bg: "bg-pendingStatus/10",
      text: "text-pendingStatus",
    };
  }
  //
  return (
    <div
      className={`${
        handleStatusColourChanges()?.bg
      } flex justify-center items-center w-[104px] h-10 gap-2`}
    >
      <div
        className={`${handleStatusColourChanges()?.dot} w-2 h-2 rounded-full`}
      ></div>
      <p className={`${handleStatusColourChanges()?.text} capitalize md:text-xs`}>
        {status}
      </p>
    </div>
  );
}

export default Status