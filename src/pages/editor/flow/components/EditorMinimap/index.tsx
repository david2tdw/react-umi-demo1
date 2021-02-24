import React from 'react'

import { Minimap } from 'gg-editor'
import { Card } from 'antd'

const EditorMinimap = () => (
  <Card type="inner" size="small" title="Minimap" bordered={false}>
    <Minimap height={200} />
  </Card>
)

export default EditorMinimap
