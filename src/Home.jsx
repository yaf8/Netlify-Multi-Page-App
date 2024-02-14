import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <div>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
