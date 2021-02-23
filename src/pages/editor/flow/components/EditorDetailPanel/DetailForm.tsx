import React from 'react'
import { Card, Input, Select, Form } from 'antd'
import { withPropsAPI } from 'gg-editor'


const upperFirst = (str: string) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, (l: string) => l.toUpperCase());

const {Item} = Form;
const { Option} = Select;

const inlineFormItemLayout = {
  labelCol: {
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    sm: {
      span: 16
    }
  }
}

interface DetailFormProps {
  type: string;
  propsAPI?: any;
}

class DetailForm extends React.Component<DetailFormProps> {

  get item() {
    const {propsAPI} = this.props;
    return propsAPI.getSelected()[0];
  }

  handleFieldChange = (values: any) => {
    const { propsAPI } = this.props;
    const { getSelected, executeCommand, update } = propsAPI; // ???

    setTimeout(() => {
      const item = getSelected()[0];
      if (!item) {
        return ;
      }
      executeCommand(() => {
        update(item, {
          ...values,
        })
      })
    }, 0);
  }

  handleInputBlur = (type: string) => (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.handleFieldChange({
      [type]: e.currentTarget.value,
    })
  }

  renderNodeDetail = () => {
    // todo
    return null;
  }

  renderEdgeDetail = () => {
    return null;
  }

  renderGroupDetail = () => {
    return null;
  }

  render () {
    const { type } = this.props;
    if (! this.item) {
      return null;
    }

    return (
      <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'group' && this.renderGroupDetail()}
      </Card>
    );
  }
}

export default withPropsAPI(DetailForm as any);
