import React, { useState } from "react";
import "../css/Appointment.css";

const Appointment = () => {
  const [selectedData, setSelectedData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null); 

  const data = [
    {
      id: "66225541",
      name: "หมอ test",
      type: "ทันตแพทย์",
      time: "09.00-19.00",
      tel: "088888888",
      img: "https://i.pinimg.com/474x/9f/07/a0/9f07a0e1ed52a8d12af018dabfd952c0.jpg",
      appointment: [
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
      id: "66225544",
      name: "หมอ test-2",
      type: "ทันตแพทย์",
      time: "09.00-12.00",
      tel: "088888888",
      img: "https://png.pngtree.com/png-clipart/20190902/original/pngtree-cartoon-doctor-can-use-commercial-elements-png-image_4391392.jpg",
      appointment: [
        {
          id: "32336658",
          name: "คนไข้ 1",
          serve: "ทำฟัน",
          tel: "088888788",
          service: "2000",
          time: "10.00-10.45",
        },
        {
          id: "32336659",
          name: "คนไข้ 2",
          serve: "ทำฟัน",
          tel: "088888780",
          service: "8000",
          time: "11.00-11.45",
        },
      ],
    },
  ];

  const times = [
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
  ];

  const handleFilterChange = (e) => {
    const id = e.target.value;
    setSelectedData(id);
    if (id === "") {
      setFilteredData([]);
    } else {
      setFilteredData(data.filter((item) => item.id === id));
    }
  };

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setIsModalOpen(false);
  };

  return (
    <div className="text">
      <select value={selectedData} onChange={handleFilterChange}>
        <option value="">Select Data</option>
        {data.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <div className="c-name">
        {filteredData.map((doctor, index) => (
          <>
            <p><b style={{color: "white"}}>{doctor.type}</b></p>{" "}
            <img src={doctor.img} className='img' alt="Description of the image" />
          </>
        ))}
      </div>
      <div>
        {filteredData.map((doctor, index) => (
          <div className="c-time">เวลาเข้างาน {doctor.time} น.</div>
        ))}
      </div>
      <div className="schedule" aria-labelledby="schedule-heading">
        
        {times.map((time, index) => (
          <p
            key={index}
            className="time-slot"
            style={{ gridRow: `time-${time.replace(":", "").toLowerCase()}` }}
          >
            {time}
          </p>
        ))}

        
        {filteredData.map((doctor, index) => (
          <>
            {doctor.appointment.map((item, index) => {
              const times = item.time.split("-");
              const formattedTime = `time-${times[0].replace(
                ".",
                ""
              )} / time-${times[1].replace(".", "")}`;
              return (
                <div
                  key={index}
                  className="session"
                  style={{
                    gridColumn: 2, 
                    gridRow: formattedTime,
                  }}
                  onClick={() => openModal(item)}
                >
                  <h3 className="session-title">
                    <a href="#">{item.name}</a>
                  </h3>
                  <span className="session-time">
                    {item.time} 
                  </span>
                </div>
              );
            })}
          </>
        ))}
      </div>

      {isModalOpen && selectedAppointment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Appointment Details</h3>
            <p>Name: {selectedAppointment.name}</p>
            <p>Service: {selectedAppointment.serve}</p>
            <p>Phone: {selectedAppointment.tel}</p>
            <p>Cost: {selectedAppointment.service} ฿</p>
            <p>Time: {selectedAppointment.time}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Appointment;
