import {
  useTranslate,
  IResourceComponentsProps,
  useMany,
} from "@pankod/refine-core";
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  DateField,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  TagField,
  FilterDropdown,
  Select,
  ShowButton,
} from "@pankod/refine-antd";
import { IPost, ICategory } from "interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { tableProps, sorter } = useTable<IPost>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
  });

  // const categoryIds =
  //   tableProps?.dataSource?.map((item) => item.category.id) ?? [];
  // const { data: categoriesData, isLoading } = useMany<ICategory>({
  //   resource: "user",
  //   ids: categoryIds,
  //   queryOptions: {
  //     enabled: categoryIds.length > 0,
  //   },
  // });

  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "user",
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="name"
          key="name"
          title={t("posts.fields.title")}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("name", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="createdAt"
          key="createdAt"
          title={t("posts.fields.createdAt")}
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
          sorter
        />
       
        <Table.Column<IPost>
          title={t("table.actions")}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
