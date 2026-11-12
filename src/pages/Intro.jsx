import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css"

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro-screen">
      <img src="/images/logo/main_logo.png" alt="Fewture" />
    </div>
  );
};

export default Intro;