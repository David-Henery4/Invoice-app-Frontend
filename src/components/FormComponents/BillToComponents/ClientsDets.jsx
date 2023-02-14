import React from "react";

const ClientsDets = () => {
  return (
    <div className="w-full grid gap-6 grid-cols-6 pb-10 col-start-1 col-end-7">
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Client's Name
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Clients's Email
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Street Address
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          City
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>

      <div className="grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Post Code
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>

      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Country
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
    </div>
  );
};

export default ClientsDets;
