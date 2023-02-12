import React from 'react'

const TitleRefAddress = () => {
  return (
    <div className="w-full flex justify-between items-start flex-col gap-8 mdTab:flex-row">
      <div className="text-xs font-bold tracking-heading4 leading-heading4 md:text-med">
        <h4 className=" text-textLight">
          <span className="text-shadedTextLight">#</span>XM9141
        </h4>
        <p className="font-medium text-shadedTextLight">Graphic Design</p>
      </div>
      <div className="text-xtraSm text-shadedTextLight tracking-body2 leading-body2 md:text-14">
        <p>19 Union Terrace</p>
        <p>London</p>
        <p>E1 3EZ</p>
        <p>United Kingdom</p>
      </div>
    </div>
  );
}

export default TitleRefAddress