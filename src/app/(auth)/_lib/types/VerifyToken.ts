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

export interface VerifyToken_tokenVerify_user_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface VerifyToken_tokenVerify_user_avatar {
  __typename: "Image";
  url: string;
}

export interface VerifyToken_tokenVerify_user_businessDetails {
  __typename: "Brand";
  id: string;
  status: SmopStatusEnum | null;
}

export interface VerifyToken_tokenVerify_user_permissionGroups {
  __typename: "Group";
  name: string;
  mfaEnabledDate: any | null;
  mfaRemainingGraceDays: any | null;
  smopUsertypeCode: SmopUserTypeCode | null;
}

export interface VerifyToken_tokenVerify_user_accessGroup_accesses {
  __typename: "Access";
  objectId: string | null;
  privateObjectId: string | null;
  accessType: AccessTypeEnum | null;
  description: string | null;
  storeType: StoreTypeEnum | null;
}

export interface VerifyToken_tokenVerify_user_accessGroup {
  __typename: "AccessGroup";
  name: string | null;
  smopUsertypeCode: SmopUserTypeCode | null;
  accesses: (VerifyToken_tokenVerify_user_accessGroup_accesses | null)[];
}

export interface VerifyToken_tokenVerify_user_malls_edges_node {
  __typename: "Mall";
  id: string;
  name: string | null;
}

export interface VerifyToken_tokenVerify_user_malls_edges {
  __typename: "MallCountableEdge";
  node: VerifyToken_tokenVerify_user_malls_edges_node;
}

export interface VerifyToken_tokenVerify_user_malls_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VerifyToken_tokenVerify_user_malls {
  __typename: "MallCountableConnection";
  edges: VerifyToken_tokenVerify_user_malls_edges[];
  totalCount: number | null;
  pageInfo: VerifyToken_tokenVerify_user_malls_pageInfo;
}

export interface VerifyToken_tokenVerify_user {
  __typename: "User";
  id: string;
  email: string | null;
  firstName: string;
  lastName: string;
  userPermissions:
    | (VerifyToken_tokenVerify_user_userPermissions | null)[]
    | null;
  avatar: VerifyToken_tokenVerify_user_avatar | null;
  businessDetails: VerifyToken_tokenVerify_user_businessDetails | null;
  permissionGroups:
    | (VerifyToken_tokenVerify_user_permissionGroups | null)[]
    | null;
  accessGroup: VerifyToken_tokenVerify_user_accessGroup | null;
  status: LockStatus | null;
  contactNo: string | null;
  promoCreator: StaffPromoCreatorEnum | null;
  malls: VerifyToken_tokenVerify_user_malls | null;
}

export interface VerifyToken_tokenVerify {
  __typename: "VerifyToken";
  payload: any | null;
  user: VerifyToken_tokenVerify_user | null;
}

export interface VerifyTokenMutation {
  tokenVerify: VerifyToken_tokenVerify | null;
}

export interface VerifyTokenMutationVariables {
  token: string;
  after?: string | null;
  before?: string | null;
}
