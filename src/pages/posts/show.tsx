import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from "@pankod/refine-core";
import { Show, Typography, Tag, MarkdownField } from "@pankod/refine-antd";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<IPost>();
  const { data, isLoading } = queryResult;
  const record = data?.data;


  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{t("posts.fields.title")}</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>{t("posts.fields.status.title")}</Title>
      
    </Show>
  );
};
