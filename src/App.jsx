import RequireAuthLayout from "./layouts/RequireAuthLayout";
import { HeroesByPublisher } from "./routes/HeroesByPublisher";
import HeroProvider from "./context/Hero/HeroProvider";
import { UserContext } from "./context/UserProvider";
import { Routes, Route } from "react-router-dom";
import FormLayout from "./layouts/FormLayout";
import { HeroPage } from "./routes/HeroPage";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Login from "./routes/Login";
import AllPublishers from "./routes/AllPublishers";
import { useContext } from "react";
import NotFound from "./routes/NotFound";


const App = ( ) => {
    const { user } = useContext(UserContext);
    if (user === false) {
      return <p>loading ....</p>;
    }

  return (
    <>
      <Header />
        <HeroProvider>
          <Routes>
            <Route path="/" element={<RequireAuthLayout />}>
              <Route path='publisher/:publisher' element={<HeroesByPublisher />} />
              <Route path='hero/:heroID' element={<HeroPage />} />
              <Route path='publisher/allpublisher' element={<AllPublishers/>}/>
              <Route index element={<Home />} />
            </Route>

            <Route path="/" element={<FormLayout />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HeroProvider>
      <Footer />
    </>
  );
};

export default App;
