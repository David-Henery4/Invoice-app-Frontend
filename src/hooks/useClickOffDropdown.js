import {useEffect} from "react";

const useClickOffDropdown = (ref, set, id) => {
  //
  const handleCloseDropdown = (e) => {
    if (e.target.closest(id) !== ref.current) {
      set(false);
    }
  };
  //
  useEffect(() => {
    document.body.addEventListener("click", handleCloseDropdown);
    //
    return () =>
      document.body.removeEventListener("click", handleCloseDropdown);
  }, []);
  //
  return {handleCloseDropdown}
};

export default useClickOffDropdown;
