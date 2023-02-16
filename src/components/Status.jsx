import React from "react";

const Status = ({ status = "paid" }) => {
  //
  const handleStatusColourChange = () => {
    if (status === "paid")
      return {
        bg: "bg-paidStatus/10",
        text: "text-paidStatus",
        dot: "bg-paidStatus",
      };
    if (status === "pending") 
    return {
      bg: "bg-pendingStatus/10",
      text: "text-pendingStatus",
      dot: "bg-pendingStatus",
    };
    if (status === "draft") return {
      bg: "bg-navbarLight/10",
      text: "text-navbarLight",
      dot: "bg-navbarLight",
    };
  };
  //
  return (
    <div
      className={`${
        handleStatusColourChange().bg
      } flex justify-center items-center w-[104px] h-10 gap-2`}
    >
      <div
        className={`w-2 h-2 rounded-full ${handleStatusColourChange().dot}`}
      ></div>
      <p className={`${handleStatusColourChange().text} capitalize md:text-med`}>{status}</p>
    </div>
  );
};

export default Status;
