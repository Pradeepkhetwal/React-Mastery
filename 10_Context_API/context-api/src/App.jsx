// Now we can use the created UserContext store directly either in App.jsx or in main.jsx , we are directly using it here .So simply import it and jo bhi component uske(UserContextProvider) andar wrap karoge usko access mil jayega to the global states  ka jo ki aapne pass ki thi in userContextProvider.jsx file

import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContextProvider.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <div>hello context api</div>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>
    </>
  );
}

export default App;
