/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery, gql } from "@apollo/client";

const basicProductFragment = gql`
  fragment ProductFragment on Product {
    id
    name
    isAvailable
    isPublished
    isPublishedByTenant
    productStatus
  }
`;

const PRODUCT_LIST_QUERY = gql`
  ${basicProductFragment}
  query ProductList($first: Int) {
    products(first: $first) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
`;

export default function ProductList() {
  const { data, loading } = useQuery(PRODUCT_LIST_QUERY, {
    variables: { first: 5 },
  });

  if (loading) {
    <p>loading</p>;
  }
  return (
    <div>
      <h1>PRODUCT LIST</h1>
      {data?.products.edges.map(({ node }: any) => (
        <p key={node.id}>{node.name}</p>
      ))}
    </div>
  );
}
