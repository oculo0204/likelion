import React,{Component} from "react"; // eslint-disable-line no-unused-vars
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App(){
  return(
    <div>
      <Header />
      <Footer />
      <Main myname="장서원" />
    </div>
  )
}
export default App;
//다른 js 파일에서도 불러올 수 있도록