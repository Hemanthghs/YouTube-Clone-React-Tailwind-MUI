import React from "react";
import { Avatar } from "@mui/material";

const Shorts = () => {
  const imgLink =
    "https://i.ytimg.com/vi/xSDEDsMiaTc/hq720.jpg?sqp=-oaymwEoCJUDENAFSFryq4qpAxoIARUAAIhC0AEB2AEB4gEKCBwQAhgGIAE4AQ==&rs=AOn4CLAHZR2jlbl7OOPME6Q23XLHDCwo5w";
  return (
    <>
      {[1, 2, 3, 4].map(() => (
        <>
          <div className="mt-16 overflow-hidden tablet:ml-20 ml-0 flex justify-center">
            <div className="relative h-5/6 w-[356px]">
              <img
                src={imgLink}
                className="h-5/6 w-[356px] rounded-xl"
                alt="thumb-nail-image"
              />
              <div className="absolute bottom-5 w-full">
                <div className="ml-[15px] mb-2">World's largest Community</div>
                <div className="flex justify-between items-center mx-[15px]">
                  <div className="flex items-center">
                    <div>
                      <Avatar
                        sx={{ height: "36px", width: "36px" }}
                        src="https://yt3.ggpht.com/WZ8TaDvrwqa8got8Rqc5U9Q5iTACmOrXqKXHyU47Cyhrsv83sTrrl8SjlC9KDSgWcmkqSTZC=s48-c-k-c0x00ffffff-no-rj"
                      />
                    </div>
                    <div className="pl-[6px] font-semibold text-sm">
                      @NasDaily
                    </div>
                  </div>
                  <div>
                    <span className="bg-[#fff] text-[#212121] text-[14px] font-bold py-[10px] px-4 font- line-h rounded-full">
                      Subscribe
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden tablet:flex flex-col justify-end px-3 text-[14px]">
              <div className="pb-4">
                <div className="bg-[#272727] flex justify-center items-center p-3 rounded-full">
                  <div className="fill-white h-6 w-6">
                    <svg viewBox="0 0 32 32" focusable="false">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.8411 11.9977C26.6778 11.9977 27.4597 12.414 27.9268 13.1082C28.6951 14.2498 28.6876 15.745 27.908 16.8789L27.1796 17.9383L27.8546 19.5037C28.257 20.4368 28.1597 21.5102 27.596 22.3558L26.4999 24V25.9977C26.4999 27.1023 25.6044 27.9977 24.4999 27.9977L11.9999 27.9976C10.8953 27.9976 9.99987 27.1022 9.99987 25.9976V12.8264C9.99987 11.9927 10.2604 11.1799 10.7449 10.5015L15.8632 3.33586C16.0776 3.03569 16.4721 2.92531 16.8112 3.07062C18.5762 3.82706 19.5347 5.74955 19.0766 7.6144L17.9999 11.9976L25.8411 11.9977ZM5 13.4999C3.89543 13.4999 3 14.3954 3 15.4999V25.9999C3 27.1045 3.89543 27.9999 5 27.9999H8V13.4999H5Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center">254K</div>
              </div>
              <div className="pb-4">
                <div className="bg-[#272727] flex justify-center items-center p-3 rounded-full">
                  <div className="fill-white h-6 w-6">
                    <svg viewBox="0 0 32 32" focusable="false">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.15895 20.0023C5.32221 20.0023 4.54031 19.586 4.07317 18.8918C3.30492 17.7502 3.31241 16.255 4.09205 15.1211L4.82045 14.0617L4.14538 12.4963C3.74297 11.5632 3.84031 10.4898 4.40399 9.64424L5.50013 8.00004L5.50013 6.00231C5.50013 4.89774 6.39557 4.00231 7.50014 4.00232L20.0001 4.00239C21.1047 4.0024 22.0001 4.89783 22.0001 6.0024L22.0001 19.1736C22.0001 20.0073 21.7396 20.8201 21.2551 21.4985L16.1368 28.6641C15.9224 28.9643 15.5279 29.0747 15.1888 28.9294C13.4238 28.1729 12.4653 26.2504 12.9234 24.3856L14.0001 20.0024L6.15895 20.0023ZM27 18.5001C28.1046 18.5001 29 17.6046 29 16.5001L29 6.00006C29 4.89549 28.1046 4.00006 27 4.00006L24 4.00006L24 18.5001L27 18.5001Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center">Dislike</div>
              </div>
              <div className="pb-4">
                <div className="bg-[#272727] flex justify-center items-center p-3 rounded-full">
                  <div className="fill-white h-6 w-6">
                    <svg viewBox="0 0 32 32" focusable="false">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.5 3C4.11929 3 3 4.11929 3 5.5V21.5C3 22.8807 4.11929 24 5.5 24H22.5L26.7474 28.5741C27.5513 29.4399 29 28.871 29 27.6895V24V5.5C29 4.11929 27.8807 3 26.5 3H5.5ZM8 10.5C8 9.67157 8.67157 9 9.5 9H22.5C23.3284 9 24 9.67157 24 10.5C24 11.3284 23.3284 12 22.5 12H9.5C8.67157 12 8 11.3284 8 10.5ZM8 16.5C8 15.6716 8.67157 15 9.5 15H18.5C19.3284 15 20 15.6716 20 16.5C20 17.3284 19.3284 18 18.5 18H9.5C8.67157 18 8 17.3284 8 16.5Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center">1.1K</div>
              </div>
              <div className="pb-4">
                <div className="bg-[#272727] flex justify-center items-center p-3 rounded-full">
                  <div className="fill-white h-6 w-6">
                    <svg viewBox="0 0 32 32" focusable="false">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.7375 5.26556L28.6745 15.2624C29.1083 15.6589 29.1083 16.3422 28.6745 16.7387L17.7375 26.7356C17.0958 27.3222 16.0628 26.8669 16.0628 25.9975V21.6217C16.0628 21.6217 16.0627 21.6217 16.0626 21.6217C9.92564 21.6217 6.69114 23.9378 5.1615 25.5968C4.80726 25.981 3.97329 25.7343 4.00015 25.2125C4.22558 20.8321 5.86088 10.8892 16.0626 10.8892C16.0627 10.8892 16.0628 10.8892 16.0628 10.8892V6.00368C16.0628 5.13426 17.0958 4.67898 17.7375 5.26556Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center">Share</div>
              </div>
              <div className="pb-4">
                <div className="bg-[#272727] flex justify-center items-center p-3 rounded-full">
                  <div className="fill-white h-6 w-6">
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                    >
                      <path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center"></div>
              </div>
              <div>
                <img
                  className="h-10 w-10 rounded-md"
                  src="https://yt3.ggpht.com/ytc/AOPolaRTPMRdc7uXb2SV6JmRhr39ccuqDrcRAKB22aPClQ=s88-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Shorts;
