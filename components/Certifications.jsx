import React from "react";

const Certifications = () => {
  const certs = [
    {
      title: "AWS Cloud Practitioner (Solutions Architect in progress)",
      logo: "/assets/aws.png",
    },
    {
      title: "Snowflake SnowPro Core",
      logo: "/assets/snowflake.png",
    },
    {
      title: "Google Data Analytics",
      logo: "/assets/google.png",
    },
  ];

  return (
    <div id="certifications">
      <div className="certTitle">Certifications</div>
      <div className="certRow">
        {certs.map((cert, index) => (
          <div key={index} className="cert">
            <img src={cert.logo} alt={cert.title} />
            <div>{cert.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
