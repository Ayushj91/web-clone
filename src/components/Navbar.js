import React from "react";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { GrSubtract } from "react-icons/gr";
import { motion } from "framer-motion";
const Navbar = () => {
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  const image = {
    hidden: { opacity: 0, scale: 0.3, x: "100vw", y: "0vh" }, // Move the image outside the view to the right
    visible: {
      opacity: 1,
      scale: 0.5,
      x: "60vw",
      y: "-10vh",
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const [showDescription, setShowDescription] = useState(true);
  const [showServe, setShowServe] = useState(false);
  const [showTaste, setShowTaste] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showLD, setShowLD] = useState(false);
  const [imgnum, setImgnum] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [cart, setCart] = useState(0);
  return (
    <div>
      {showAnnouncement && (
        <div className="bg-black text-white text-center p-2 flex flex-wrap justify-center">
          <p className="text-xl ">
            Use code <span className="font-medium">DECEM10</span> for{" "}
            <span className="font-medium">$10 OFF</span> your first order
          </p>
          <p
            className="absolute right-2 cursor-pointer"
            onClick={() => setShowAnnouncement(false)}
          >
            X
          </p>
        </div>
      )}
      {showLD && (
        <motion.img
          src={require(`./${imgnum}.webp`)}
          variants={image}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-3 z-30"
        />
      )}

      <nav
        className="bg-white fixed w-full z-20 top-0 left-0"
        style={{ position: "sticky", top: 0 }}
      >
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <button
              className="text-black font-medium rounded-lg text-2xl px-4 py-2 text-center"
              onMouseEnter={() => setShowShop(true)}
            >
              SHOP
            </button>
            {showShop && (
              <div onMouseLeave={() => setShowShop(false)}>
                <motion.div
                  className="absolute top-16 left-0 w-full z-29"
                  initial="exit"
                  animate={showShop ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <div className="bg-white border p-4">
                    <p
                      className="text-4xl text-left"
                      onMouseEnter={() => {
                        setShowLD(true);
                        setImgnum(1);
                      }}
                      onMouseLeave={() => setShowLD(false)}
                    >
                      LONDON DRY made with British Gin
                    </p>
                  </div>
                  <div className="bg-white border p-4">
                    <p
                      className="text-4xl text-left"
                      onMouseEnter={() => {
                        setShowLD(true);
                        setImgnum(2);
                      }}
                      onMouseLeave={() => setShowLD(false)}
                    >
                      SPICED BLEND made with Caribbean Rum
                    </p>
                  </div>
                  <div className="bg-white border p-4">
                    <p
                      className="text-4xl text-left"
                      onMouseEnter={() => {
                        setShowLD(true);
                        setImgnum(3);
                      }}
                      onMouseLeave={() => setShowLD(false)}
                    >
                      APERITIF made with Heritage Botanicals
                    </p>
                  </div>
                  <div className="bg-white border p-4">
                    <p
                      className="text-4xl text-left"
                      onMouseEnter={() => {
                        setShowLD(true);
                        setImgnum(4);
                      }}
                      onMouseLeave={() => setShowLD(false)}
                    >
                      TRIO London Dry, Spiced Blend & Aperitif
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
            <button className="text-black font-medium rounded-lg text-2xl px-4 py-2 text-center">
              STORY
            </button>
          </div>
          <a href="#" className="flex items-center">
            <span className="self-center text-5xl font-semibold whitespace-nowrap">
              DECEM
            </span>
          </a>
          <button className="text-black font-medium rounded-lg text-2xl px-4 py-2 text-center">
            BASKET<span className="bakerville">({cart})</span>
          </button>
        </div>
      </nav>
      <ul className=" hidden max-lg:flex max-lg:flex-wrap  p-4">
  <li className="w-full md:w-1/4">
    <a
      href="#"
      className="text-black font-medium rounded-lg text-2xl px-4 py-2 text-center"
    >
      LONDON DRY
    </a>
  </li>
  <li className="w-full md:w-1/4">
    <a
      href="#"
      className="text-black font-medium rounded-lg text-2xl px-4 py-2 text-center"
    >
      SPICED BLEND
    </a>
  </li>
  <li className="w-full md:w-1/4">
    <a
      href="#"
      className="text-black font-medium rounded-lg text-2xl px-4 py-2 text-center"
    >
      APERITIF
    </a>
  </li>
  <li className="w-full md:w-1/4">
    <a
      href="#"
      className="text-black font-medium rounded-lg text-2xl px-4 py-2 text-center"
    >
      TRIO
    </a>
  </li>
</ul>
      <div className="flex flex-wrap mt-10">
        <div className="flex-1 p-4">
          <div className="m-8">
            <div className="border border-black rounded-full overflow-hidden w-13 p-3 my-8">
              <img
                src={require("./product.webp")}
                alt="1"
                className="w-full h-full object-cover px-16 py-16"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 p-24">
          <p className="p-2 m-6"></p>
          <div className="flex-1 p-4">
            <div className="p-2 border-b border-gray-300">
              {/* Section 1 */}
              <ul className="hidden min-sm:flex min-sm:flex-wrap lg:flex lg:flex-wrap">
                <li className="w-1/4">
                  <a
                    href="#"
                    className="text-black focus:font-medium focus:underline"
                  >
                    <span className="2xl:text-xl xl:text-sm max-xs:text-sm">
                      LONDON DRY
                    </span>
                  </a>
                </li>
                <li className="w-1/4">
                  <a
                    href="#"
                    className="text-black focus:font-medium focus:underline"
                  >
                    <span className="2xl:text-xl xl:text-sm sm:text-lg">
                      SPICED BLEND
                    </span>
                  </a>
                </li>
                <li className="w-1/4">
                  <a
                    href="#"
                    className="text-black focus:font-medium focus:underline"
                  >
                    <span className="2xl:text-xl xl:text-sm sm:text-lg">
                      APERITIF
                    </span>
                  </a>
                </li>
                <li className="w-1/4">
                  <a
                    href="#"
                    className="text-black focus:font-medium focus:underline"
                  >
                    <span className="2xl:text-xl xl:text-sm sm:text-lg">
                      TRIO
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-2">
              {/* Section 2 Content */}
              <div className="p-2 ">
                {/* Subsection 1 */}
                <h1 className="text-4xl text-left">SPICED BLEND</h1>
              </div>
              <div className="p-2">
                {/* Subsection 2 */}
                <p className="text-4xl text-left ">
                  <span className="bakerville">made with</span> Caribbean Rum
                </p>
              </div>
              <div className="p-2 flex justify-between">
                {/* Subsection 3 */}
                <p className="text-2xl">
                  Blended <span className="bakerville">in</span> England
                </p>
                <p className="text-2xl">10%vol/700ml</p>
              </div>
              <div className="p-2">
                {/* Subsection 4 */}
                <button
                  className="text-white bg-black hover:bg-blue-600 font-medium rounded-full text-2xl px-4 py-2 text-center w-full"
                  onClick={() => setCart(cart + 1)}
                >
                  ADD TO BASKET
                </button>
              </div>
              <div className="p-2">
                {/* Subsection 5 */}
                <p className="font-medium text-blue-600 text-xl">
                  FREE UK DELIVERY
                </p>
              </div>
            </div>
            <div className="p-2 border-b border-gray-300 ">
              {/* Section 3 */}
              <div
                className="flex justify-between"
                onClick={() => {
                  setShowDescription(!showDescription);
                  setShowServe(false);
                  setShowTaste(false);
                }}
              >
                <p className="text-2xl">DESCRIPTION</p>
                {showDescription ? (
                  <GrSubtract className="w-6 h-7" />
                ) : (
                  <IoAddSharp className="w-6 h-7" />
                )}
              </div>
              {showDescription && (
                <motion.p
                  className="text-xl bakerville"
                  initial="exit"
                  animate={showDescription ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  Blending a duo of light and white Caribbean rums from
                  Martinique and Dominican Republic as the smooth base. Spices
                  are then added and the mix is allowed to steep for 2 days to
                  draw out all of the flavour before being filtered and
                  masterfully blended with natural distillates to 10%ABV. The
                  result is a buttery, caramel-forward, savoury and spicy light
                  spirit with a big impact both on the nose and the taste buds.
                </motion.p>
              )}
            </div>
            <div className="p-2 border-b border-gray-300 ">
              {/* Section 3 */}
              <div
                className="flex justify-between"
                onClick={() => {
                  setShowTaste(!showTaste);
                  setShowServe(false);
                  setShowDescription(false);
                }}
              >
                <p className="text-2xl">TASTE</p>
                {showTaste ? (
                  <GrSubtract className="w-6 h-7" />
                ) : (
                  <IoAddSharp className="w-6 h-7" />
                )}
              </div>
              {showTaste && (
                <motion.p
                  className="text-xl bakerville"
                  initial="exit"
                  animate={showTaste ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  Deep bonfire toffee, warming savoury spice, rounded honey
                  sweetness, buttery caramel throughout with a hint of tropical
                  fruit.
                </motion.p>
              )}
            </div>
            <div className="p-2 border-b border-gray-300 ">
              {/* Section 3 */}
              <div
                className="flex justify-between"
                onClick={() => {
                  setShowServe(!showServe);
                  setShowTaste(false);
                  setShowDescription(false);
                }}
              >
                <p className="text-2xl">SERVE</p>
                {showServe ? (
                  <GrSubtract className="w-6 h-7" />
                ) : (
                  <IoAddSharp className="w-6 h-7" />
                )}
              </div>
              {showServe && (
                <motion.p
                  className="text-xl bakerville"
                  initial="exit"
                  animate={showServe ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  Simply serve 50ml chilled over ice with 150ml premium Ginger
                  Ale and a lime wedge. 2.3% ABV.
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
