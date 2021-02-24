import React from 'react'

import { Col, Row } from 'antd'
import GGEditor, { Koni } from 'gg-editor'

import { PageContainer } from '@ant-design/pro-layout'
import { KoniToolbar } from './components/EditorToolbar'
import { KoniItemPanel } from './components/EditorItemPanel'

import styles from './index.less'

GGEditor.setTrackable(false)

export default () => (
  <PageContainer
    content="拓扑结构图是指由网络节点设备和通信介质构成的网络结构图"
  >
    <GGEditor className={styles.editor}>
      <Row className={styles.editorHd}>
        <Col span={24}>
          <KoniToolbar />
        </Col>
      </Row>
      <Row>
        <Col span={2} className={styles.editorSidebar}>
          <KoniItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          2
        </Col>
        <Col span={6} className={styles.editorSidebar}>
          3
        </Col>
      </Row>
    </GGEditor>

  </PageContainer>
)