import React from 'react'

const ActionBtns = ({ isOnLargerScreens = false }) => {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-2 ${isOnLargerScreens && "hidden flex-nowrap mdTab:flex"}`}>
      <button className="w-[73px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight">
        Edit
      </button>
      <button className="w-[89px] h-12 rounded-3xl bg-deleteBtn text-basicWhite">
        Delete
      </button>
      <button className="w-[149px] h-12 rounded-3xl bg-primaryPurple text-basicWhite mdTab:w-[131px]">
        Mark as Paid
      </button>
    </div>
  );
};

export default ActionBtns