import React from "react";

import { Card, Button, Tag, Row, Col, Drawer } from "antd";

const UserEOI = ({ eoi }) => {
  return (
    <Card
      title="automated web POrtal for capstone project"
      extra={<Tag color="#12D6BE">Rejected</Tag>}
    >
      <Row gutter={16}>
        <Col span={18}>
          <p>{eoi.eoi_sub_date}</p>
          <p>{eoi.interest}</p>
          <Button type="danger" htmpType="View">
            View
          </Button>
          <Drawer> </Drawer>
        </Col>
      </Row>
    </Card>
  );
};

export default UserEOI;
