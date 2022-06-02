import { defineComponent, reactive, ref } from "vue";

import { Button, DatePicker, Form, Input, Select } from "ant-design-vue";

export default defineComponent({
  setup() {
    const formState = reactive({
      time: [],
      type: 1,
    });

    return () => (
      <div>
        <Form
          layout="inline"
          // model={formState}
          onFinish={() => {
            console.log(333);
          }}
        >
          <Form.Item label="时间范围" name="time">
            <DatePicker.RangePicker
              picker="month"
              v-model={[formState.time, "value"]}
            />
          </Form.Item>
          <Form.Item label="细分方式" name="type">
            <Select
              style={{ width: "200px" }}
              v-model={[formState.type, "value"]}
            >
              <Select.Option value={1}>业务领域</Select.Option>
              <Select.Option value={2}>排碳活动</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">123</Button>
          </Form.Item>
        </Form>
      </div>
    );
  },
});
