// Import React's Component
import React, { useState } from "react";

// Import Ant Design Components
import { Button, Col, Row, Modal } from "antd";

// CODE
export default function DashboardModal() {
  // Modal
  const [open, setOpen] = useState(false);

  // Modal Open Set State
  const handleOpen = () => {
    setOpen(true);
  };

  // CLOSE MODAL
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Col span={24}>
        <Row justify="center">
          <Button className="modal-btn" type="primary" onClick={handleOpen}>
            Open Modal
          </Button>
        </Row>
      </Col>
      <Modal
        title="Open Modal Same File"
        centered
        open={open}
        onCancel={handleCancel}
        width={800}
        bodyStyle={{
          borderRadius: 30,
        }}
        footer={null}
      >
        <Row
          justify="end"
          align="middle"
          style={{ padding: "15px 0px 15px 0px" }}
        >
          <Button
            type="primary"
            htmlType="submit"
            key={"submit"}
            onClick={handleCancel}
            className="submit-add-article-inventory"
            style={{
              backgroundColor: "#1BC5BD",
              borderColor: "#1BC5BD",
              marginRight: 15,
            }}
          >
            Back
          </Button>

          <Button type="default" onClick={handleCancel}>
            Cancel
          </Button>
        </Row>
      </Modal>
    </>
  );
}
