import { gql } from "@apollo/client";

export const fragmentUser = gql`
  fragment User on User {
    id
    email
    firstName
    lastName
    userPermissions {
      code
      name
    }
    avatar {
      url
    }
    businessDetails {
      id
      status
    }
    permissionGroups {
      name
      smopUsertypeCode
    }
    accessGroup {
      name
      smopUsertypeCode
      accesses {
        objectId
        privateObjectId
        accessType
        description
        storeType
      }
    }
    status
    contactNo
    promoCreator
  }
`;

export const pageInfoFragment = gql`
  fragment PageInfoFragment on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
