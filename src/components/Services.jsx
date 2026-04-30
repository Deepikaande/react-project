import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDna, FaAppleAlt, FaHeartbeat, FaUsers, FaBrain } from "react-icons/fa";
import { FaLungs } from "react-icons/fa6";

function Services() {
  const data = [
    { icon: <FaDna />, title: "Biotechnology", text: "Technological application that modifies biological systems." },
    { icon: <FaAppleAlt />, title: "Clinical Nutrition", text: "Maintains healthy energy balance in patients." },
    { icon: <FaHeartbeat />, title: "Addiction and Recovery", text: "Addresses major global addiction issues." },
    { icon: <FaUsers />, title: "Community Medicine", text: "Deals with public health and communities." },
    { icon: <FaLungs />, title: "Pulmonology" , text: "Focus on Liver and its disorders."},
    { icon: <FaBrain />, title: "Neurology", text: "Study of brain and nervous system." }
  ];

  return (
    <section className="container-fluid my-5" id="services">
      <div className="row">
        <div className="col-md-4 bg-primary text-white p-5 d-flex flex-column justify-content-center">
          <h2>Open Access Peer Reviewed Journals</h2>
          <p>
            We are dedicated to publishing informative journals covering science,
            medicine and latest technology with open access policies.
          </p>
          <button className="btn btn-outline-light mt-3">View All Journals</button>
        </div>
        <div className="col-md-8">
          <div className="row">

            {data.map((item, index) => (
              <div className="col-md-4 border p-4 text-center" key={index}>
                <div className="mb-3" style={{ fontSize: "30px", color: "#0d6efd" }}>
                  {item.icon}
                </div>
                <h5>{item.title}</h5>
                <p className="text-muted">{item.text}</p>
                <button className="btn btn-outline-primary btn-sm">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;