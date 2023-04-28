// Import React's Component
import { React, useState } from "react";

// Import Ant Design Components
import { Button, Col, Row, Typography } from "antd";
import DashboardModal from "../Component/Dashboard/DashboardModal";

// CODE
export default function DashboardPage() {
  // State Management
  const [open, setOpen] = useState(false);

  return (
    <>
      <Col span={24}>
        <Row justify="center" style={{ margin: 20 }}>
          <Typography style={{ fontSize: 17, fontWeight: 500 }}>
            OPEN MODAL DIFFERENT PAGE
          </Typography>
        </Row>
        <Row justify="center">
          <Button
            className="modal-btn"
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Open Modal
          </Button>
        </Row>
      </Col>
      <DashboardModal openModal={open} is_closeModal={setOpen} />
    </>
  );
}
