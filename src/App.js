import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { Button, CustomProvider, Container } from "rsuite";
import { Toaster } from "react-hot-toast";
import PageRouter from "./routers/PageRouter";

function App() {
  return (
    <CustomProvider theme="light">
      <PageRouter />
      <Toaster />
    </CustomProvider>
  );
}

export default App;
