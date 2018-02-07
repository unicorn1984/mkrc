/**
 * Create by pzf on 2018/2/7
 */

import {Form, Input, Button, Radio} from 'mkrc';

const FormItem = Form.Item;

class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({formLayout: e.target.value});
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {formLayout} = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: {span: 4},
      wrapperCol: {span: 14},
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: {span: 14, offset: 4},
    } : null;
    return (
      <div>
        <Form layout={formLayout}>
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
            {getFieldDecorator('note', {
              rules: [{required: true, message: 'Please input your note!'}],
            })(
              <Input placeholder="input placeholder"/>
            )}

          </FormItem>
          <FormItem
            label="Field B"
            {...formItemLayout}
          >
            {getFieldDecorator('note', {
              rules: [{required: true, message: 'Please input your note!'}],
            })(
              <Input placeholder="input placeholder"/>
            )}
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedFormLayoutDemo = Form.create()(FormLayoutDemo);
ReactDOM.render(<WrappedFormLayoutDemo/>, mountNode);
