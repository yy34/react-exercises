import "./App.css";
import "antd/dist/reset.css";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
function App() {
  return (
    <Row>
      <Col span={12} offset={6}>
        <div className="App">
          <h1>React Github Api TypeScript</h1>
          <Outlet />
        </div>
      </Col>
    </Row>
  );
}

export default App;
