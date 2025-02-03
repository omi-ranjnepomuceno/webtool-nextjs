// /* eslint-disable */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import {
  PermissionEnum,
  SmopStatusEnum,
  SmopUserTypeCode,
  AccessTypeEnum,
  StoreTypeEnum,
  LockStatus,
  StaffPromoCreatorEnum,
} from "@/types/globalTypes";

export interface User_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface User_avatar {
  __typename: "Image";
  url: string;
}

export interface User_businessDetails {
  __typename: "Brand";
  id: string;
  status: SmopStatusEnum | null;
}

export interface User_permissionGroups {
  __typename: "Group";
  name: string;
  smopUsertypeCode: SmopUserTypeCode | null;
  mfaEnabledDate: any | null;
  mfaRemainingGraceDays: any | null;
}

export interface User_accessGroup_accesses {
  __typename: "Access";
  objectId: string | null;
  privateObjectId: string | null;
  accessType: AccessTypeEnum | null;
  description: string | null;
  storeType: StoreTypeEnum | null;
}

export interface User_accessGroup {
  __typename: "AccessGroup";
  name: string | null;
  smopUsertypeCode: SmopUserTypeCode | null;
  accesses: (User_accessGroup_accesses | null)[];
}

export interface User_node {
  __typename: "Mall";
  id: string;
  name: string | null;
}

export interface User_edges {
  __typename: "MallCountableEdge";
  node: User_node;
}

export interface User_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface User_malls {
  __typename: "MallCountableConnection";
  edges: User_edges[];
  totalCount: number | null;
  pageInfo: User_pageInfo;
}

export interface User {
  __typename: "User";
  id: string;
  email: string | null;
  firstName: string;
  lastName: string;
  userPermissions: (User_userPermissions | null)[] | null;
  avatar: User_avatar | null;
  businessDetails: User_businessDetails | null;
  permissionGroups: (User_permissionGroups | null)[] | null;
  accessGroup: User_accessGroup | null;
  status: LockStatus | null;
  contactNo: string | null;
  malls: User_malls | null;
  promoCreator?: StaffPromoCreatorEnum | null;
}
