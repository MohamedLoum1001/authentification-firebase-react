import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Container, Row, Col } from "react-bootstrap";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <Container style={{ width: "400px" }}>
    <Row>
      <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserAuthContextProvider>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
