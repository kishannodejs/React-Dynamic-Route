import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToUserProfile = () => {
    navigate(`/user/123`);  // Navigate to user profile with dynamic ID
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToUserProfile}>Go to User 123 Profile</button>
    </div>
  );
};

export default Home;
