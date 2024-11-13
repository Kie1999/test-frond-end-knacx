import React from "react";
import "../css/Service.css";

const Service = () => {
  const data = [
    {
      stepname: "ห้องพิเศษ",
      subdata: [
        {
          id: "22336658",
          name: "คนไข้ 1",
          serve: "ทำฟัน",
          tel: "088888788",
          service: "2000",
          time: "10.15-10.30",
        },
        {
          id: "22336659",
          name: "คนไข้ 2",
          serve: "ทำฟัน",
          tel: "088888780",
          service: "8000",
          time: "12.00-12.15",
        },
      ],
    },
    {
      stepname: "แอดมิน",
      subdata: [
        {
          id: "22354657",
          name: "คนไข้ 1",
          serve: "ทำฟัน",
          tel: "088888788",
          service: "2000",
          time: "10.15-10.30",
        },
      ],
    },
    {
      stepname: "จุดชำระเงิน",
      subdata: [
        {
          id: "22536657",
          name: "คนไข้ 1",
          serve: "ทำฟัน",
          tel: "088888788",
          service: "2000",
          time: "10.15-10.30",
        },
        {
          id: "32536657",
          name: "คนไข้ 2",
          serve: "ทำฟัน",
          tel: "088888788",
          service: "2000",
          time: "10.15-10.30",
        },
        {
          id: "72536657",
          name: "คนไข้ 3",
          serve: "ทำฟัน",
          tel: "088888788",
          service: "2000",
          time: "10.15-10.30",
        },
      ],
    },
  ];
  return (
    <div className="grid-containe-3">
    <div className="grid-item"><b>วันที่ 13 ม.ค. 2556</b></div>
    <div className="grid-item"></div>
    <div className="grid-item">รายได้ทั้งหมด 250,000 บาท</div>
      {data.map((item, index) => (
        <div key={index} className="grid-item">
            <div className="h-stepname">{item.stepname}</div>
            <div className="b-stepname">
            {item.subdata.map((subdata, index) => (
                <div key={index} className="b-subdata">
                    <p>{subdata.name}</p>
                    <p>{subdata.tel}</p>
                </div>
            ))}
            </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
