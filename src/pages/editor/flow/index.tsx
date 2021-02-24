import { Col, Row } from 'antd';
import GGEditor, { Flow } from 'gg-editor';

import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { FlowDetailPanel } from './components/EditorDetailPanel'
import EditorMinimap from './components/EditorMinimap'
import { FlowItemPanel } from './components/EditorItemPanel';
import { FlowToolbar } from './components/EditorToolbar';

import styles from './index.less';

GGEditor.setTrackable(false);

export default () => (
  <PageContainer content="千言万语不如一张图，流程图是表示算法思路的好方法">
    <GGEditor className={styles.editor}>
      <Row>
        <Col>
          <FlowToolbar />
        </Col>
      </Row>
      <Row className={styles.editorBd}>
        <Col span={4} className={styles.editorSidebar}>
          <FlowItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Flow className={styles.flow}></Flow>
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <FlowDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
    </GGEditor>
  </PageContainer>
);
