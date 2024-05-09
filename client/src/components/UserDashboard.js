import React from 'react';
import BigChartBox from "./emsFiles/bigChartBox/BigChartBox";
import ChartBox from "./emsFiles/chartBox/ChartBox";
import TopBox from "./emsFiles/topBox/TopBox";
import UserId from "./emsFiles/userID/User";
import { chartBoxConversion, chartBoxProduct, chartBoxUser } from "./emsFiles/data";
import { SideNavDark } from "./sideNavDark";

import "./emsFiles/ems.scss";
export const UserDash = () => {
  return (
    <div className="home">
      <div className="box1">
        <SideNavDark />
      </div>
      
      <div className='box0'>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxProduct} />
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxConversion} />
        </div>
      </div>
      
      <div className='box0'>
        <div className="box0 box3">
          <UserId/>
        </div>
      </div>

      <div className='box0'>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxProduct} />
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxConversion} />
        </div>
      </div>
      <div className='box0'>
        <div className="box box4">
          <TopBox />
        </div>
      </div>
      <div className="box0">
        <div className="box box5">
          <BigChartBox />
        </div>
      </div>
      
      
      

    </div>
  );
};

export default UserDash;
/*

    */