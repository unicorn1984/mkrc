---
order: 12
title:
  zh-CN: 表单布局
  en-US: Form Layout
---

## zh-CN

表单有三种布局。

## en-US

There are three layout for form: `horizontal`, `vertical`, `inline`.

````jsx

import { Form, Input, Button, Radio } from 'mkrc';

const FormItem = Form.Item;

class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
      <div>
        <Form layout={formLayout} onSubmit={this.handleSubmit}>
          <FormItem
            label="Form Layout"
            {...formItemLayout}
          >
            <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem
            label="Field A"
            {...formItemLayout}
          >
            {getFieldDecorator('fieldA', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <Input placeholder="input placeholder" />
            )}
          </FormItem>
          <FormItem
            label="Field B"
            {...formItemLayout}
          >
            {getFieldDecorator('fieldB', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <Input placeholder="input placeholder" />
            )}
          </FormItem>
          <FormItem
            label="Field C"
            {...formItemLayout}
          >
            {getFieldDecorator('fieldc', {
              rules: [],
                })(
                  <Input placeholder="input placeholder" />
                  )}
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedFormLayoutDemo = Form.create()(FormLayoutDemo);
ReactDOM.render(<WrappedFormLayoutDemo />, mountNode);
````
