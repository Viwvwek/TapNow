"use client";

import { useState } from "react";
import ModalVideo from "../common/ModalVideo";

const VideoBlock = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo isOpen={isOpen} videoId="rDYdeq3JW_E" setIsOpen={setOpen} />
      <div className="fancy-feature-fiftyTwo mt-130 lg-mt-100">
        <div className="container">
          <div className="video-banner d-flex align-items-center justify-content-center">
            <button
              className="fancybox video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
              onClick={() => setOpen(true)}
            >
              <img
                src="/images/icon/icon_140.svg"
                alt="icon"
                className="lazy-img"
              />
            </button>
          </div>
          {/* /.video-banner */}
        </div>
      </div>
    </>
  );
};

export default VideoBlock;
