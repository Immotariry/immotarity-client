import axios from "axios";

export const Main = () => {
  const handleButtonClick = async (role) => {
    try {
      await axios.get(`http://localhost:8080/${role.toLowerCase()}`, {
        withCredentials: true,
      });
      console.log(`${role} 페이지로 이동합니다.`);
    } catch (error) {
      if (error.response.status === 403) {
        alert("권한이 없습니다.");
      } else {
        console.error("페이지로의 이동 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div>
      <h1>Main 페이지</h1>
      <button onClick={() => handleButtonClick("STAFF")}>Staff</button>
      <button onClick={() => handleButtonClick("RESEARCHER")}>
        Researcher
      </button>
      <button onClick={() => handleButtonClick("MANAGER")}>Manager</button>
      <button onClick={() => handleButtonClick("EXECUTIVE")}>Executive</button>
      <button onClick={() => handleButtonClick("ADMIN")}>Admin</button>
    </div>
  );
};
