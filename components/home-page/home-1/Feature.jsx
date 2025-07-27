import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#E6E6E6",
      title: (
        <>
          Smart Card Suggestions 
 <br /> in Real-Time
        </>
      ),
description: (
  <>
    Always use the best card for fuel, travel, shopping &amp; <br />
    more
  </>
),
      icon: "images/icon/icon_100.svg",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#E9E9E9",
      title: (
        <>
          Track Rewards & 
 <br /> Due Dates Effortlessly
        </>
      ),
      width: "202",
      height: "170",
      description: "Never miss a payment or lose out on points again.",
      icon: "images/icon/icon_101.svg",
      delay: "200",
    },
    {
      background: "#F5F5F5",
      title: (
        <>
          Your Wallet. 
 <br /> Organized.
        </>
      ),
      width: "175",
      height: "175",
      description: "All your cards. One place. Full control.",
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <Image
              width={feature.width}
              height={feature.height}
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
