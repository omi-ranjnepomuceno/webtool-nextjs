/* eslint-disable  @typescript-eslint/no-explicit-any */

import {
  AccountErrorCode,
  PermissionEnum,
  SmopStatusEnum,
  SmopUserTypeCode,
  AccessTypeEnum,
  StoreTypeEnum,
  LockStatus,
  StaffPromoCreatorEnum,
} from "@/types/globalTypes";

export interface TokenAuth_tokenCreate_errors_user {
  __typename: "User";
  id: string;
  email: string | null;
}

export interface TokenAuth_tokenCreate_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
  user: TokenAuth_tokenCreate_errors_user | null;
}

export interface TokenAuth_tokenCreate_user_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface TokenAuth_tokenCreate_user_avatar {
  __typename: "Image";
  url: string;
}

export interface TokenAuth_tokenCreate_user_businessDetails {
  __typename: "Brand";
  id: string;
  status: SmopStatusEnum | null;
}

export interface TokenAuth_tokenCreate_user_permissionGroups {
  __typename: "Group";
  name: string;
  mfaEnabledDate: any | null;
  mfaRemainingGraceDays: any | null;
  smopUsertypeCode: SmopUserTypeCode | null;
}

export interface TokenAuth_tokenCreate_user_accessGroup_accesses {
  __typename: "Access";
  objectId: string | null;
  privateObjectId: string | null;
  accessType: AccessTypeEnum | null;
  description: string | null;
  storeType: StoreTypeEnum | null;
}

export interface TokenAuth_tokenCreate_user_accessGroup {
  __typename: "AccessGroup";
  name: string | null;
  smopUsertypeCode: SmopUserTypeCode | null;
  accesses: (TokenAuth_tokenCreate_user_accessGroup_accesses | null)[];
}

export interface TokenAuth_tokenCreate_user_malls_edges_node {
  __typename: "Mall";
  id: string;
  name: string | null;
}

export interface TokenAuth_tokenCreate_user_malls_edges {
  __typename: "MallCountableEdge";
  node: TokenAuth_tokenCreate_user_malls_edges_node;
}

export interface TokenAuth_tokenCreate_user_malls_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface TokenAuth_tokenCreate_user_malls {
  __typename: "MallCountableConnection";
  edges: TokenAuth_tokenCreate_user_malls_edges[];
  totalCount: number | null;
  pageInfo: TokenAuth_tokenCreate_user_malls_pageInfo;
}

export interface TokenAuth_tokenCreate_user {
  __typename: "User";
  id: string;
  email: string | null;
  firstName: string;
  lastName: string;
  userPermissions: (TokenAuth_tokenCreate_user_userPermissions | null)[] | null;
  avatar: TokenAuth_tokenCreate_user_avatar | null;
  businessDetails: TokenAuth_tokenCreate_user_businessDetails | null;
  permissionGroups:
    | (TokenAuth_tokenCreate_user_permissionGroups | null)[]
    | null;
  accessGroup: TokenAuth_tokenCreate_user_accessGroup | null;
  status: LockStatus | null;
  contactNo: string | null;
  promoCreator: StaffPromoCreatorEnum | null;
  malls: TokenAuth_tokenCreate_user_malls | null;
}

export interface TokenAuth_tokenCreate {
  __typename: "CreateToken";
  errors: TokenAuth_tokenCreate_errors[];
  csrfToken: string | null;
  token: string | null;
  user: TokenAuth_tokenCreate_user | null;
}

export interface CreateTokenMutation {
  tokenCreate: TokenAuth_tokenCreate | null;
}

export interface CreateTokenMutationVariables {
  email: string;
  password: string;
}
