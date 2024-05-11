import { useEffect } from "react";

import { close } from "../assets";

type BannerProps = {
  hide: boolean;
  setHide: (hide: boolean) => void;
};

const BANNER_KEY = "hide-banner";

const Banner = ({ hide, setHide }: BannerProps) => {
  useEffect(() => {
    const hideBanner = localStorage.getItem(BANNER_KEY);

    if (hideBanner) return;

    const bannerTimer = setTimeout(() => {
      setHide(false);
    }, 5000);

    return () => clearTimeout(bannerTimer);
  }, []);

  const handleBannerClose = () => {
    setHide(true);
    localStorage.setItem(BANNER_KEY, "1");
  };

  return (
    <div
      id="sticky-banner"
      tabIndex={-1}
      className={`${
        hide ? "hidden" : "block"
      } absolute h-20 top-0 left-0 z-50 flex justify-between w-full p-4 bg-primary shadow-md opacity-[0.98]`}
    >
      
            
      <div className="flex items-center">
        <button
          data-dismiss-target="#sticky-banner"
          onClick={handleBannerClose}
          type="button"
          className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-800 rounded-lg text-sm p-1.5 "
        >
          <img src={close} alt="close" height={12} width={12} />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
