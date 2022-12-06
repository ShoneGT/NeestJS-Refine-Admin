import { useTranslate, IResourceComponentsProps } from "@pankod/refine-core";
import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
} from "@pankod/refine-antd";

import MDEditor from "@uiw/react-md-editor";

import { IPost, ICategory } from "interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { formProps, saveButtonProps } = useForm<IPost>();

  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "user",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t("posts.fields.name")}
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
       

        
      </Form>
    </Create>
  );
};
