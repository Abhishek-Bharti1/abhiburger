import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";

const LogIn = () => {
const loginHandler = ()=>{
  window.open(`${server}/googlelogin`,"_self") //for current window load
}

  return (
    <section className="login">
      <motion.button initial={{ y: "-100vh" }} animate={{ y: 0 }}
      onClick={loginHandler}
      >
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default LogIn;
