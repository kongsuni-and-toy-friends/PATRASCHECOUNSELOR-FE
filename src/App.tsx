import { Route, Routes } from "react-router-dom";
import RootPage from "./routes/RootPage";
import LoginPage from "./routes/LoginPage";
import SignUpPage from "./routes/SignUpPage";
import SignUpOptionsPage from "./routes/SignUpOptionPage";
import KakaoPage from "./routes/KakaoPage";
import SignUpSuccessPage from "./routes/SignUpSuccessPage";
import ProvePage from "./routes/ProvePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<RootPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="kakao" element={<KakaoPage />} />
        <Route path="signup">
          <Route path="" element={<SignUpOptionsPage />} />
          <Route path="email" element={<SignUpPage />} />
          <Route path="success" element={<SignUpSuccessPage />} />
        </Route>
        <Route path="prove" element={<ProvePage />} />
      </Routes>
    </>
  );
}

export default App;
