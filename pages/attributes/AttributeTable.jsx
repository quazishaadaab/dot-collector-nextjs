import { Table, useAsyncList } from "@nextui-org/react";

export default function AttributeTable({array}) {
  const columns = [
    { name: "Attribute Name", uid: "name" }
  ];

  
  async function load({ signal, cursor }) {
    // If no cursor is available, then we're loading the first page.
    // Otherwise, the cursor is the next URL to load, as returned from the previous page.
    return {
      items: array};
  }
  const list = useAsyncList({ load });
  return (
    <Table
      bordered
      shadow={false}
      aria-label="Example tgable with dyngamic content & infinity pagination"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      color="secondary"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.uid}>{column.name}</Table.Column>
        )}
      </Table.Header>
      <Table.Body
        items={list.items}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {(item,index) => (

<Table.Row key={(item)}>
            {(key) => <Table.Cell>{item}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
