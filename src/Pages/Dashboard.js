// Import React's Component
import React from "react";

// Import Ant Design Components
import { Col, Row, Typography } from "antd";
import DashboardModal from "../Component/Dashboard/DashboardModal";

// CODE
export default function DashboardPage() {
  return (
    <>
      <Col span={24}>
        <Row justify="center" style={{ margin: 20 }}>
          <Typography style={{ fontSize: 17, fontWeight: 500 }}>
            OPEN MODAL SAME PAGE
          </Typography>
        </Row>
      </Col>
      <DashboardModal />
    </>
  );
}
