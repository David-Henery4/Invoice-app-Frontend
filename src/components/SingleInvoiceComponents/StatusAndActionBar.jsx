import React from 'react'
import {Status} from "../../components";
import ActionBtns from './ActionBtns';

const StatusAndActionBar = () => {
  return (
    <div className="w-full bg-basicWhite p-6 rounded-lg mdTab:flex items-center justify-between md:p-8">
      <div className="flex justify-between items-center mdTab:justify-start mdTab:gap-4">
        <p className="text-xs text-toggleColourDark leading-body1 tracking-body1 md:text-med">
          Status
        </p>
        <Status status={"Pending"} />
      </div>
      <ActionBtns isOnLargerScreens={true} />
    </div>
  );
}

export default StatusAndActionBar