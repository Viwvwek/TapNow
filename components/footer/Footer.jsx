import React from "react";

const Footer = () => {
  /*const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "About us", href: "/about-v1" },
        { label: "Careers", href: "#" },
        { label: "Features", href: "#" },
        { label: "Blog", href: "/blog-v2." },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Health Insurance Plans", href: "/service-details" },
        { label: "Car Insurance", href: "/service-details" },
        { label: "Investment", href: "/service-details" },
        { label: "Mediclaim Policy", href: "/service-details" },
        { label: "Others", href: "/service-details" },
        { label: "Health Insurance", href: "/service-details" },
      ],
    },
  ];
  */
  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      <div
        className="col-xl-3 col-lg-4 col-md-5 mb-30"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          YET TO ADD
          <br />
          IN THE FUTURE
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
