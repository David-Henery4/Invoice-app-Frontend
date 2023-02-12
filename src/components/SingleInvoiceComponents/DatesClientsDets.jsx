import React from 'react'

const DatesClientsDets = () => {
  return (
    <div className="grid grid-cols-datesAddressMob grid-rows-datesAddressMob mdTab:grid-cols-datesAddressTab mdTab:grid-rows-datesAddressTab md:grid-cols-datesAddressDesk">
      <div className="grid gap-8 col-start-1 col-end-2 md:row-start-1 md:row-end-2">
        <div className="grid gap-3">
          <h4 className="text-xs tracking-heading4 leading-heading4 text-shadedTextLight md:text-med">
            Invoice Date
          </h4>
          <p className="text-med font-bold leading-subheading tracking-subheading text-textLight md:text-lg">
            21 Aug 2021
          </p>
        </div>
        <div className="grid gap-3">
          <h4 className="text-xs tracking-heading4 leading-heading4 text-shadedTextLight md:text-med">
            Payment Due
          </h4>
          <p className="text-med font-bold leading-subheading tracking-subheading text-textLight md:text-lg">
            20 Sep 2021
          </p>
        </div>
      </div>
      <div className="text-xtraSm text-shadedTextLight tracking-body2 leading-body2 grid gap-3 col-start-3 col-end-4 md:text-14 md:row-start-1 md:row-end-3">
        <h4 className="text-xs tracking-heading4 leading-heading4 md:text-med">
          Bill To
        </h4>
        <div>
          <h2 className="text-med font-bold leading-subheading tracking-subheading text-textLight mb-2 md:text-lg">
            Alex Grim
          </h2>
          <p>84 Church Way</p>
          <p>Bradford</p>
          <p>BD1 9PB</p>
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="col-start-1 col-end-5 row-start-3 row-end-4 mdTab:row-start-1 mdTab:row-end-2 mdTab:col-start-5 mdTab:col-end-6">
        <h4 className="text-xs text-shadedTextLight tracking-heading4 leading-heading4 md:text-med">
          Sent to
        </h4>
        <p className="text-med font-bold leading-subheading tracking-subheading text-textLight break-all md:text-lg">
          alexgrim@mail.com
        </p>
      </div>
    </div>
  );
}

export default DatesClientsDets