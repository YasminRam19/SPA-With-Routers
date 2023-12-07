import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigationHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
