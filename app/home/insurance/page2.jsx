import Link from "next/link";
import DefaulHeader from "@/components/header/DefaulHeader";
import Feature from "@/components/home-page/home-1/Feature";
import Hero from "@/components/home-page/home-1/Hero";
import Image from "next/image";

export const metadata = {
  title: "main page ",
};
const Insurance2 = () => {
  return (
    <>
      <DefaulHeader />
      <Hero />

      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>

      <div
  className="footer-style-ten theme-basic-footer zn2 position-relative"
  data-aos="fade-up"
>
  <div className="container"style={{ minHeight: "25vh", height: "auto" }}>
    <div className="inner-wrapper">
      <div className="row">
        <div className="col-lg-3 footer-intro mb-40 ms-auto">
          <div className="logo" data-aos="fade-up">
            <Link href="/">
              <img src="/white_logo.png" alt="logo2" width={95} />
            </Link>
          </div>
          <span className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10"> Smarter credit card usage starts here.</span> 
           
          
          <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
            © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
              TapNow inc
          </p>
          <div className="flex items-center mt-2">
            <Image
              src="/india-flag.png"
              alt="India"
              width={24}
              height={16}
              className="mr-2 inline-block"
            />
            <span className="text-white">Proudly Made in India</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <img
    src="/images/assets/Frame 8 1.png"
    alt="illustration"
    className="lazy-img illustration-one"
    data-aos="fade-left"
  />
  <img
    src="/images/assets/Frame 7 1.png"
    alt="illustration"
    className="lazy-img illustration-two"
    data-aos="fade-right"
  />
</div>

    </>
  );
};

export default Insurance2;
