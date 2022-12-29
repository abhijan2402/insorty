import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaChartLine,
  FaFileInvoiceDollar,
  FaPowerOff,
} from "react-icons/fa";
import { TbParking } from "react-icons/tb";
import { AiOutlineStock } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./Style/SideNav.scss";
import Logo from "../../images/logo.png";

const routes = [
  {
    path: "/",
    name: "Daily Report / दैनिक रिपोर्ट ",
    icon: <FaChartLine />,
  },
  {
    path: "/",
    name: "Stock / स्टॉक",
    icon: <AiOutlineStock />,
  },

  {
    path: "/",
    name: "Investments",
    icon: <FaFileInvoiceDollar />,
  },
  {
    path: "/",
    name: "Parterns",
    icon: <TbParking />,
  },

  {
    path: "/",
    name: "Party Payment",
    icon: <MdPayment />,
  },
  {
    path: "/",
    name: "Log out",
    icon: <FaPowerOff />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "235px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src={Logo} alt="" />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
