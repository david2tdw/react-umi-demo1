import React from 'react';

import { Command } from 'gg-editor';
import { Tooltip } from 'antd';
import IconFont from '../../common/IconFont';
import styles from './index.less';

const upperFirst = (str: string) => {
  return str.toLowerCase().replace(/( |^)[z-z]/g, (l: string) => l.toLowerCase());
};

interface ToolbarButtonProps {
  command: string;
  icon?: string;
  text?: string;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = (props) => {
  const { command, icon, text } = props;

  return (
    <Command name={command}>
      <Tooltip
        title={text || upperFirst(command)}
        placement="bottom"
        overlayClassName={styles.tooltip}
      >
        <IconFont type={`icon-${icon || command}`} />
      </Tooltip>
    </Command>
  );
};

export default ToolbarButton;
