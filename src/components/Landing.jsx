import React from "react";
import LOGO from "../assets/logo.png";

const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center font-poppins font-semibold text-white bg-mobile lg:bg-pc bg-stretch lg:h-screen">
      <div className="flex-col items-center hidden lg:flex">
        <img src={LOGO} alt="LOGO" />
        <button className="text-[28px]">Exit App</button>
      </div>

      <div className="flex items-center justify-center -ml-3 mt-7 lg:hidden">
        <img src={LOGO} alt="LOGO" className="w-[128px] h-[128px]" />
        <div className="-ml-2">
          <p className="font-extrabold text-2xl mb-2">Trove Token</p>
          <button className="font-medium italic text-base">Exit App</button>
        </div>
      </div>

      <div className="bigBox flex flex-col items-center mt-8 lg:mt-10 h-min mx-4 lg:mx-0">
        <p className="text-2xl lg:text-4xl mt-[2.31rem] lg:mt-[3.56rem] px-8">
          Claim your <span className="text-[#FAA72C]">Treasures</span>
        </p>
        <form action="" className="mt-[3.25rem] lg:mt-[4.69rem]">
          <label htmlFor="reward" className="text-base">
            SELECT REWARD:
          </label>
          <br />
          <select
            name="reward"
            id="reward"
            className="text-black w-[12.5rem] lg:w-[16.44rem] shadow-selectFRMShadow mt-4 mb-[7.31rem] lg:mb-[10.69rem]"
          >
            {/* <option value="a">Reward A</option>
            <option value="b">Reward B</option>
            <option value="c">Reward C</option>
            <option value="d">Reward D</option> */}
          </select>
          <br />
          <input
            type="submit"
            value="CLAIM"
            className="btnTrove py-3 px-[4.69rem] lg:px-[6.69rem] mb-[2.88rem] lg:mb-20 hover:cursor-pointer"
          />
        </form>
      </div>

      <div className="bigBox flex flex-col items-center mt-10 h-min lg:ml-6 mx-4 mb-[3.5rem] lg:mb-0">
        <p className="text-2xl lg:text-4xl mt-8 lg:mt-[3.88rem] px-[4.19rem] lg:px-[5.13rem]">
          Account History
        </p>
        <div className="w-[12.5rem] lg:w-[16.38rem] text-xs mt-[2.63rem] lg:mt-[4.13rem]">
          <p>Claimable rewards:</p>
          <p className="my-3">$100.00</p>
          <hr />
          <p className="my-3">Total rewards claimed:</p>
          <p>$100.00</p>
          <hr className="my-3" />
          <p>Rewards / Day:</p>
          <p className="mt-3 mb-6 lg:mb-[59px]">$4.52</p>
        </div>
        <button className="btnTrove mb-9 lg:mb-20 py-3 px-[2.88rem] lg:px-[60px] text-xs lg:text-base">
          CONNECT WALLET
        </button>
      </div>
    </div>
  );
};

export default Landing;
