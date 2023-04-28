// Import React's Component
import { React, useEffect, useState } from "react";

// Import Ant Design Components
import { Button, Col, Row, Modal } from "antd";

// CODE
export default function DashboardModal({ openModal, is_closeModal }) {
  // State Management
  const [open, setOpen] = useState(false);

  // USE EFFECT
  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  // CLOSE MODAL
  const handleCancel = () => {
    setOpen(false);
    is_closeModal(false);
  };

  return (
    <>
      <Modal
        title="Open Modal Different File"
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
