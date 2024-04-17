import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  about?: Maybe<Scalars['String']['output']>;
  avatarURL?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  members: Array<MemberWithRolesResponse>;
  socialAccounts: Array<SocialAccountWithoutAuthResponse>;
  username: Scalars['String']['output'];
};

export type BumpOfferInput = {
  id: Scalars['ID']['input'];
  newPrice: Scalars['Int']['input'];
  offerId: Scalars['ID']['input'];
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CommentReportInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  reportId: Scalars['ID']['input'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  postId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type CreateManyUserImageInput = {
  data: Array<CreateUserImageInput>;
};

export type CreateOfferInput = {
  businessFunction: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  name0?: InputMaybe<Scalars['String']['input']>;
  name1?: InputMaybe<Scalars['String']['input']>;
  post: CreatePostInput;
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  shippingCost: Scalars['Int']['input'];
  shippingType: Scalars['String']['input'];
  status?: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreatePostInput = {
  categoryId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  groupId: Scalars['ID']['input'];
  tagIds: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateReportInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
  reportedCommentId?: InputMaybe<Scalars['ID']['input']>;
  reportedPostId?: InputMaybe<Scalars['ID']['input']>;
  reportedUserId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

export type CreateRoleInput = {
  groupId: Scalars['ID']['input'];
  hexColor?: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSignedUrlInput = {
  filename: Scalars['String']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateUserImageInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  refId: Scalars['ID']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserReviewInput = {
  auctionId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  offerId?: InputMaybe<Scalars['ID']['input']>;
  post: CreatePostInput;
  rating: Scalars['Float']['input'];
  reviewedUserId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

export type GroupPreviewResponse = {
  __typename?: 'GroupPreviewResponse';
  buys: Array<OfferPreviewResponse>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  sells: Array<OfferPreviewResponse>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type GroupProfileResponse = {
  __typename?: 'GroupProfileResponse';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};

export type GroupProfileResponseEdge = {
  __typename?: 'GroupProfileResponseEdge';
  cursor: Scalars['String']['output'];
  node: GroupProfileResponse;
};

export type GroupResponse = {
  __typename?: 'GroupResponse';
  categories: Array<CategoryResponse>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  roles: Array<RoleResponse>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type GroupResponseEdge = {
  __typename?: 'GroupResponseEdge';
  cursor: Scalars['String']['output'];
  node: GroupResponse;
};

export type JwtResponse = {
  __typename?: 'JwtResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type LinkSocialProfileInput = {
  provider: Scalars['String']['input'];
};

export type MemberWithRolesResponse = {
  __typename?: 'MemberWithRolesResponse';
  createdAt: Scalars['DateTime']['output'];
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  roles: Array<RoleResponse>;
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bumpOffer: OfferPreviewResponse;
  commentReport: Scalars['String']['output'];
  createComment: Scalars['String']['output'];
  createGroup: Scalars['String']['output'];
  createManyUserImage: Scalars['String']['output'];
  createOffer: Scalars['String']['output'];
  createReport: Scalars['String']['output'];
  createRole: Scalars['String']['output'];
  createSignedUrl: SignedUrlResponse;
  createUserImage: Scalars['String']['output'];
  createUserReview: Scalars['String']['output'];
  deleteOffer: Scalars['String']['output'];
  deleteRole: Scalars['String']['output'];
  deleteUserImage: Scalars['String']['output'];
  linkSocialProfile: Scalars['String']['output'];
  logout: SocialUserResponse;
  reGenerateTokens: JwtResponse;
  refreshTokens: JwtResponse;
  updateComment: CommentResponse;
  updateGroup: Scalars['String']['output'];
  updateOffer: OfferPreviewResponse;
  updateReportComment: Scalars['String']['output'];
  updateRole: Scalars['String']['output'];
  updateUser: Scalars['String']['output'];
  updateUserImage: Scalars['String']['output'];
};


export type MutationBumpOfferArgs = {
  input: BumpOfferInput;
};


export type MutationCommentReportArgs = {
  input: CommentReportInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateManyUserImageArgs = {
  input: CreateManyUserImageInput;
};


export type MutationCreateOfferArgs = {
  input: CreateOfferInput;
};


export type MutationCreateReportArgs = {
  input: CreateReportInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSignedUrlArgs = {
  input: CreateSignedUrlInput;
};


export type MutationCreateUserImageArgs = {
  input: CreateUserImageInput;
};


export type MutationCreateUserReviewArgs = {
  input: CreateUserReviewInput;
};


export type MutationDeleteOfferArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLinkSocialProfileArgs = {
  input: LinkSocialProfileInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationUpdateOfferArgs = {
  input: UpdateOfferInput;
};


export type MutationUpdateReportCommentArgs = {
  input: UpdateReportCommentInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserImageArgs = {
  input: UpdateUserImageInput;
};

export type MyUserResponse = {
  __typename?: 'MyUserResponse';
  about?: Maybe<Scalars['String']['output']>;
  avatarURL?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  members: Array<MemberWithRolesResponse>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  socialAccounts: Array<SocialAccountResponse>;
  username: Scalars['String']['output'];
};

export type OfferPreviewResponse = {
  __typename?: 'OfferPreviewResponse';
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name0?: Maybe<Scalars['String']['output']>;
  name1?: Maybe<Scalars['String']['output']>;
  post: PostPreviewResponse;
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  shippingCost: Scalars['Int']['output'];
  shippingType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OfferPreviewResponseEdge = {
  __typename?: 'OfferPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: OfferPreviewResponse;
};

export type OfferResponse = {
  __typename?: 'OfferResponse';
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name0?: Maybe<Scalars['String']['output']>;
  name1?: Maybe<Scalars['String']['output']>;
  post: PostResponse;
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  shippingCost: Scalars['Int']['output'];
  shippingType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type PaginatedGroupProfilesResponse = {
  __typename?: 'PaginatedGroupProfilesResponse';
  edges: Array<GroupProfileResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedGroupsResponse = {
  __typename?: 'PaginatedGroupsResponse';
  edges: Array<GroupResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedOfferPreviewsResponse = {
  __typename?: 'PaginatedOfferPreviewsResponse';
  edges: Array<OfferPreviewResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedReportPreviewsResponse = {
  __typename?: 'PaginatedReportPreviewsResponse';
  edges: Array<ReportPreviewResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedUsersResponse = {
  __typename?: 'PaginatedUsersResponse';
  edges: Array<UserResponseEdge>;
  pageInfo: PageInfo;
};

export type PostPreviewResponse = {
  __typename?: 'PostPreviewResponse';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  categoryId: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  groupId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pending?: Maybe<Scalars['String']['output']>;
  reportCommentCount: Scalars['Int']['output'];
  reportCount: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserResponse;
};

export type PostResponse = {
  __typename?: 'PostResponse';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  category: CategoryResponse;
  categoryId: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  group: GroupProfileResponse;
  groupId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  pending?: Maybe<Scalars['String']['output']>;
  reportCommentCount: Scalars['Int']['output'];
  reportCount: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: AuthorResponse;
};

export type Query = {
  __typename?: 'Query';
  findAuthor?: Maybe<AuthorResponse>;
  findComment?: Maybe<CommentResponse>;
  findGroup?: Maybe<GroupResponse>;
  findGroupPreviews: Array<GroupPreviewResponse>;
  findGroupProfiles: PaginatedGroupProfilesResponse;
  findGroups: PaginatedGroupsResponse;
  findLastReport: ReportResponse;
  findMyUser?: Maybe<MyUserResponse>;
  findOffer?: Maybe<OfferResponse>;
  findOfferCount: Scalars['Float']['output'];
  findOfferPreviews: PaginatedOfferPreviewsResponse;
  findPostPreview: PostPreviewResponse;
  findReport: ReportResponse;
  findReportComment: ReportCommentResponse;
  findReportPreviews: PaginatedReportPreviewsResponse;
  findRoleById?: Maybe<RoleResponse>;
  findTags: Array<TagResponse>;
  findTerm?: Maybe<TermResponse>;
  findUser?: Maybe<UserResponse>;
  findUserImageById?: Maybe<UserImageResponse>;
  findUserImagesOfRef: Array<UserImageResponse>;
  findUsers: PaginatedUsersResponse;
  findVersion?: Maybe<VersionResponse>;
  findVersionPreview?: Maybe<VersionPreviewResponse>;
};


export type QueryFindAuthorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFindGroupArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindGroupProfilesArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindGroupsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindOfferArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindOfferCountArgs = {
  businessFunction: Scalars['String']['input'];
  categoryId: Scalars['ID']['input'];
  fromHours: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryFindOfferPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFindPostPreviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindReportCommentArgs = {
  reportId: Scalars['ID']['input'];
};


export type QueryFindReportPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFindRoleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindTermArgs = {
  name: Scalars['String']['input'];
};


export type QueryFindUserArgs = {
  provider?: InputMaybe<Scalars['String']['input']>;
  socialId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindUserImageByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindUserImagesOfRefArgs = {
  refId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};


export type QueryFindUsersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindVersionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindVersionPreviewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReportCommentResponse = {
  __typename?: 'ReportCommentResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  reportId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: AuthorResponse;
};

export type ReportPreviewResponse = {
  __typename?: 'ReportPreviewResponse';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
  reportedCommentId?: Maybe<Scalars['ID']['output']>;
  reportedPostId?: Maybe<Scalars['ID']['output']>;
  reportedUser?: Maybe<AuthorResponse>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReportPreviewResponseEdge = {
  __typename?: 'ReportPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: ReportPreviewResponse;
};

export type ReportResponse = {
  __typename?: 'ReportResponse';
  comments: Array<ReportCommentResponse>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
  reportedCommentId?: Maybe<Scalars['ID']['output']>;
  reportedPostId?: Maybe<Scalars['ID']['output']>;
  reportedUser?: Maybe<AuthorResponse>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  groupId: Scalars['ID']['output'];
  hexColor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
};

export type SignedUrlResponse = {
  __typename?: 'SignedUrlResponse';
  signedUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type SocialAccountResponse = {
  __typename?: 'SocialAccountResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  expiresAt?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  idToken?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  sessionState?: Maybe<Scalars['String']['output']>;
  socialId: Scalars['String']['output'];
  tokenType?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type SocialAccountWithoutAuthResponse = {
  __typename?: 'SocialAccountWithoutAuthResponse';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  provider: Scalars['String']['output'];
  socialId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SocialUserResponse = {
  __typename?: 'SocialUserResponse';
  provider: Scalars['String']['output'];
  socialId: Scalars['String']['output'];
};

export type TagResponse = {
  __typename?: 'TagResponse';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TermResponse = {
  __typename?: 'TermResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  meta?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOfferInput = {
  id: Scalars['ID']['input'];
  name0?: InputMaybe<Scalars['String']['input']>;
  name1?: InputMaybe<Scalars['String']['input']>;
  post: UpdatePostInput;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  shippingCost?: InputMaybe<Scalars['Int']['input']>;
  shippingType?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  pending?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReportCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  reportId: Scalars['ID']['input'];
};

export type UpdateRoleInput = {
  hexColor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserImageInput = {
  id: Scalars['ID']['input'];
  position: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserImageResponse = {
  __typename?: 'UserImageResponse';
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  refId: Scalars['ID']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  about?: Maybe<Scalars['String']['output']>;
  avatarURL?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserResponseEdge = {
  __typename?: 'UserResponseEdge';
  cursor: Scalars['String']['output'];
  node: UserResponse;
};

export type VersionPreviewResponse = {
  __typename?: 'VersionPreviewResponse';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  op: Scalars['String']['output'];
  refId: Scalars['ID']['output'];
  schemaName: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  values: Scalars['JSON']['output'];
};

export type VersionResponse = {
  __typename?: 'VersionResponse';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  op: Scalars['String']['output'];
  refId: Scalars['ID']['output'];
  schemaName: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  values: Scalars['JSON']['output'];
};

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: { __typename?: 'JwtResponse', accessToken: string, refreshToken: string } };

export type ReGenerateTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type ReGenerateTokensMutation = { __typename?: 'Mutation', reGenerateTokens: { __typename?: 'JwtResponse', accessToken: string, refreshToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'SocialUserResponse', provider: string, socialId: string } };

export type CommentFragment = { __typename?: 'CommentResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content: string };

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: string };

export type UpdateCommentMutationVariables = Exact<{
  input: UpdateCommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'CommentResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content: string } };

export type FindCommentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FindCommentQuery = { __typename?: 'Query', findComment?: { __typename?: 'CommentResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content: string } | null };

export type CategoryFragment = { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null };

export type GroupFragment = { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }>, categories: Array<{ __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }> };

export type GroupProfileFragment = { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null };

export type GroupPreviewFragment = { __typename?: 'GroupPreviewResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position: number, sells: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, post: { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } } }>, buys: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, post: { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } } }> };

export type FindGroupsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindGroupsQuery = { __typename?: 'Query', findGroups: { __typename?: 'PaginatedGroupsResponse', edges: Array<{ __typename?: 'GroupResponseEdge', node: { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }>, categories: Array<{ __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

export type FindGroupProfilesQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindGroupProfilesQuery = { __typename?: 'Query', findGroupProfiles: { __typename?: 'PaginatedGroupProfilesResponse', edges: Array<{ __typename?: 'GroupProfileResponseEdge', cursor: string, node: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindGroupQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindGroupQuery = { __typename?: 'Query', findGroup?: { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }>, categories: Array<{ __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }> } | null };

export type FindGroupPreviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindGroupPreviewsQuery = { __typename?: 'Query', findGroupPreviews: Array<{ __typename?: 'GroupPreviewResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position: number, sells: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, post: { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } } }>, buys: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, post: { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } } }> }> };

export type OfferFragment = { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, totalPrice: number, shippingCost: number, shippingType: string, businessFunction: string, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, reportCount: number, reportCommentCount: number, groupId: string, categoryId: string, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, category: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } } };

export type OfferPreviewFragment = { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, post: { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } } };

export type FindOfferPreviewsQueryVariables = Exact<{
  where?: InputMaybe<Scalars['JSON']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindOfferPreviewsQuery = { __typename?: 'Query', findOfferPreviews: { __typename?: 'PaginatedOfferPreviewsResponse', edges: Array<{ __typename?: 'OfferPreviewResponseEdge', cursor: string, node: { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, post: { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindOfferQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindOfferQuery = { __typename?: 'Query', findOffer?: { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, price: number, priceCurrency: string, totalPrice: number, shippingCost: number, shippingType: string, businessFunction: string, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, reportCount: number, reportCommentCount: number, groupId: string, categoryId: string, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, category: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } } } | null };

export type CreateOfferMutationVariables = Exact<{
  input: CreateOfferInput;
}>;


export type CreateOfferMutation = { __typename?: 'Mutation', createOffer: string };

export type UpdateOfferMutationVariables = Exact<{
  input: UpdateOfferInput;
}>;


export type UpdateOfferMutation = { __typename?: 'Mutation', updateOffer: { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, status: string, name0?: string | null, name1?: string | null, price: number, shippingCost: number, shippingType: string, totalPrice: number } };

export type DeleteOfferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOfferMutation = { __typename?: 'Mutation', deleteOffer: string };

export type BumpOfferMutationVariables = Exact<{
  input: BumpOfferInput;
}>;


export type BumpOfferMutation = { __typename?: 'Mutation', bumpOffer: { __typename?: 'OfferPreviewResponse', id: string, bumpedAt: any, price: number, shippingCost: number, shippingType: string, totalPrice: number } };

export type PostFragment = { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, reportCount: number, reportCommentCount: number, groupId: string, categoryId: string, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, category: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } };

export type PostPreviewFragment = { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } };

export type FindPostPreviewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindPostPreviewQuery = { __typename?: 'Query', findPostPreview: { __typename?: 'PostPreviewResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, content?: string | null, thumbnail?: string | null, groupId: string, categoryId: string, reportCount: number, reportCommentCount: number, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } } };

export type ReportPreviewFragment = { __typename?: 'ReportPreviewResponse', id: string, createdAt: any, updatedAt: any, type: string, groupId: string, status: string, reason: string, description?: string | null, reportedUser?: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null };

export type ReportFragment = { __typename?: 'ReportResponse', id: string, createdAt: any, updatedAt: any, type: string, groupId: string, status: string, reason: string, description?: string | null, reportedUser?: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null, comments: Array<{ __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } }> };

export type ReportCommentFragment = { __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } };

export type CreateReportMutationVariables = Exact<{
  input: CreateReportInput;
}>;


export type CreateReportMutation = { __typename?: 'Mutation', createReport: string };

export type FindReportPreviewsQueryVariables = Exact<{
  where?: InputMaybe<Scalars['JSON']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindReportPreviewsQuery = { __typename?: 'Query', findReportPreviews: { __typename?: 'PaginatedReportPreviewsResponse', edges: Array<{ __typename?: 'ReportPreviewResponseEdge', cursor: string, node: { __typename?: 'ReportPreviewResponse', id: string, createdAt: any, updatedAt: any, type: string, groupId: string, status: string, reason: string, description?: string | null, reportedUser?: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindLastReportQueryVariables = Exact<{ [key: string]: never; }>;


export type FindLastReportQuery = { __typename?: 'Query', findLastReport: { __typename?: 'ReportResponse', id: string, createdAt: any, updatedAt: any, type: string, groupId: string, status: string, reason: string, description?: string | null, reportedUser?: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null, comments: Array<{ __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } }> } };

export type FindReportCommentQueryVariables = Exact<{
  reportId: Scalars['ID']['input'];
}>;


export type FindReportCommentQuery = { __typename?: 'Query', findReportComment: { __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } } };

export type CommentReportMutationVariables = Exact<{
  input: CommentReportInput;
}>;


export type CommentReportMutation = { __typename?: 'Mutation', commentReport: string };

export type UpdateReportCommentMutationVariables = Exact<{
  input: UpdateReportCommentInput;
}>;


export type UpdateReportCommentMutation = { __typename?: 'Mutation', updateReportComment: string };

export type SocialAccountWithoutAuthFragment = { __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string };

export type SocialAccountFragment = { __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null };

export type TagFragment = { __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number };

export type FindTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindTagsQuery = { __typename?: 'Query', findTags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> };

export type TermFragment = { __typename?: 'TermResponse', id: string, createdAt: any, updatedAt: any, name: string, title: string, content: string, meta?: any | null };

export type FindTermQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type FindTermQuery = { __typename?: 'Query', findTerm?: { __typename?: 'TermResponse', id: string, createdAt: any, updatedAt: any, name: string, title: string, content: string, meta?: any | null } | null };

export type ImageFragment = { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string };

export type CreateSignedUrlMutationVariables = Exact<{
  input: CreateSignedUrlInput;
}>;


export type CreateSignedUrlMutation = { __typename?: 'Mutation', createSignedUrl: { __typename?: 'SignedUrlResponse', signedUrl: string, url: string } };

export type CreateUserImageMutationVariables = Exact<{
  input: CreateUserImageInput;
}>;


export type CreateUserImageMutation = { __typename?: 'Mutation', createUserImage: string };

export type DeleteUserImageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserImageMutation = { __typename?: 'Mutation', deleteUserImage: string };

export type CreateUserReviewMutationVariables = Exact<{
  input: CreateUserReviewInput;
}>;


export type CreateUserReviewMutation = { __typename?: 'Mutation', createUserReview: string };

export type RoleFragment = { __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string };

export type MemberFragment = { __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> };

export type UserFragment = { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean };

export type AuthorFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> };

export type MyUserFragment = { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, about?: string | null, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> };

export type FindUserQueryVariables = Exact<{
  provider?: InputMaybe<Scalars['String']['input']>;
  socialId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } | null };

export type FindAuthorQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindAuthorQuery = { __typename?: 'Query', findAuthor?: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null };

export type FindMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyUserQuery = { __typename?: 'Query', findMyUser?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, about?: string | null, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: string };

export type LinkSocialProfileMutationVariables = Exact<{
  input: LinkSocialProfileInput;
}>;


export type LinkSocialProfileMutation = { __typename?: 'Mutation', linkSocialProfile: string };

export type VersionPreviewFragment = { __typename?: 'VersionPreviewResponse', id: string, createdAt: any, schemaName: string, tableName: string, op: string, refId: string, values: any };

export type VersionFragment = { __typename?: 'VersionResponse', id: string, createdAt: any, schemaName: string, tableName: string, op: string, refId: string, values: any, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> };

export type FindVersionPreviewQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FindVersionPreviewQuery = { __typename?: 'Query', findVersionPreview?: { __typename?: 'VersionPreviewResponse', id: string, createdAt: any, schemaName: string, tableName: string, op: string, refId: string, values: any } | null };

export type FindVersionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindVersionQuery = { __typename?: 'Query', findVersion?: { __typename?: 'VersionResponse', id: string, createdAt: any, schemaName: string, tableName: string, op: string, refId: string, values: any, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> } | null };

export const CommentFragmentDoc = gql`
    fragment comment on CommentResponse {
  id
  createdAt
  updatedAt
  parentId
  postId
  content
}
    `;
export const CategoryFragmentDoc = gql`
    fragment category on CategoryResponse {
  id
  type
  name
  slug
  position
}
    `;
export const GroupFragmentDoc = gql`
    fragment group on GroupResponse {
  id
  name
  slug
  description
  icon
  position
  roles {
    id
    name
    position
    hexColor
    groupId
  }
  categories {
    ...category
  }
}
    ${CategoryFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment user on UserResponse {
  id
  createdAt
  username
  about
  avatarURL
  bot
}
    `;
export const PostPreviewFragmentDoc = gql`
    fragment postPreview on PostPreviewResponse {
  id
  createdAt
  updatedAt
  archivedAt
  pending
  type
  title
  slug
  content
  thumbnail
  groupId
  categoryId
  reportCount
  reportCommentCount
  user {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const OfferPreviewFragmentDoc = gql`
    fragment offerPreview on OfferPreviewResponse {
  post {
    ...postPreview
  }
  id
  createdAt
  updatedAt
  bumpedAt
  name0
  name1
  price
  priceCurrency
  shippingCost
  shippingType
  totalPrice
  businessFunction
  status
}
    ${PostPreviewFragmentDoc}`;
export const GroupPreviewFragmentDoc = gql`
    fragment groupPreview on GroupPreviewResponse {
  id
  name
  slug
  description
  icon
  position
  sells {
    ...offerPreview
  }
  buys {
    ...offerPreview
  }
}
    ${OfferPreviewFragmentDoc}`;
export const ImageFragmentDoc = gql`
    fragment image on UserImageResponse {
  id
  createdAt
  updatedAt
  name
  url
  contentType
  description
  size
  height
  width
  position
  type
  refId
  userId
}
    `;
export const GroupProfileFragmentDoc = gql`
    fragment groupProfile on GroupProfileResponse {
  id
  name
  slug
  icon
}
    `;
export const SocialAccountWithoutAuthFragmentDoc = gql`
    fragment socialAccountWithoutAuth on SocialAccountWithoutAuthResponse {
  id
  createdAt
  provider
  socialId
  userId
}
    `;
export const RoleFragmentDoc = gql`
    fragment role on RoleResponse {
  id
  name
  position
  hexColor
  groupId
}
    `;
export const MemberFragmentDoc = gql`
    fragment member on MemberWithRolesResponse {
  id
  createdAt
  userId
  group {
    ...groupProfile
  }
  roles {
    ...role
  }
}
    ${GroupProfileFragmentDoc}
${RoleFragmentDoc}`;
export const AuthorFragmentDoc = gql`
    fragment author on AuthorResponse {
  id
  createdAt
  username
  about
  avatarURL
  bot
  socialAccounts {
    ...socialAccountWithoutAuth
  }
  members {
    ...member
  }
}
    ${SocialAccountWithoutAuthFragmentDoc}
${MemberFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment post on PostResponse {
  id
  createdAt
  updatedAt
  archivedAt
  pending
  type
  title
  slug
  content
  thumbnail
  reportCount
  reportCommentCount
  images {
    ...image
  }
  groupId
  group {
    ...groupProfile
  }
  categoryId
  category {
    ...category
  }
  user {
    ...author
  }
}
    ${ImageFragmentDoc}
${GroupProfileFragmentDoc}
${CategoryFragmentDoc}
${AuthorFragmentDoc}`;
export const OfferFragmentDoc = gql`
    fragment offer on OfferResponse {
  post {
    ...post
  }
  id
  createdAt
  updatedAt
  bumpedAt
  name0
  name1
  price
  priceCurrency
  totalPrice
  shippingCost
  shippingType
  totalPrice
  businessFunction
  status
}
    ${PostFragmentDoc}`;
export const ReportPreviewFragmentDoc = gql`
    fragment reportPreview on ReportPreviewResponse {
  id
  createdAt
  updatedAt
  type
  reportedUser {
    ...author
  }
  groupId
  status
  reason
  description
}
    ${AuthorFragmentDoc}`;
export const ReportCommentFragmentDoc = gql`
    fragment reportComment on ReportCommentResponse {
  id
  createdAt
  updatedAt
  reportId
  content
  user {
    ...author
  }
}
    ${AuthorFragmentDoc}`;
export const ReportFragmentDoc = gql`
    fragment report on ReportResponse {
  id
  createdAt
  updatedAt
  type
  reportedUser {
    ...author
  }
  groupId
  status
  reason
  description
  comments {
    ...reportComment
  }
}
    ${AuthorFragmentDoc}
${ReportCommentFragmentDoc}`;
export const TagFragmentDoc = gql`
    fragment Tag on TagResponse {
  id
  type
  name
  description
  position
}
    `;
export const TermFragmentDoc = gql`
    fragment term on TermResponse {
  id
  createdAt
  updatedAt
  name
  title
  content
  meta
}
    `;
export const SocialAccountFragmentDoc = gql`
    fragment socialAccount on SocialAccountResponse {
  id
  createdAt
  provider
  socialId
  userId
  refreshToken
  accessToken
  expiresAt
  tokenType
  scope
  idToken
  sessionState
}
    `;
export const MyUserFragmentDoc = gql`
    fragment myUser on MyUserResponse {
  id
  createdAt
  username
  about
  name
  phoneNumber
  avatarURL
  bot
  socialAccounts {
    ...socialAccount
  }
  members {
    ...member
  }
}
    ${SocialAccountFragmentDoc}
${MemberFragmentDoc}`;
export const VersionPreviewFragmentDoc = gql`
    fragment versionPreview on VersionPreviewResponse {
  id
  createdAt
  schemaName
  tableName
  op
  refId
  values
}
    `;
export const VersionFragmentDoc = gql`
    fragment version on VersionResponse {
  id
  createdAt
  schemaName
  tableName
  op
  refId
  values
  images {
    ...image
  }
}
    ${ImageFragmentDoc}`;
export const RefreshTokensDocument = gql`
    mutation RefreshTokens {
  refreshTokens {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshTokensMutationFn = Apollo.MutationFunction<RefreshTokensMutation, RefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokensMutation, RefreshTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument, options);
      }
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const ReGenerateTokensDocument = gql`
    mutation ReGenerateTokens {
  reGenerateTokens {
    accessToken
    refreshToken
  }
}
    `;
export type ReGenerateTokensMutationFn = Apollo.MutationFunction<ReGenerateTokensMutation, ReGenerateTokensMutationVariables>;

/**
 * __useReGenerateTokensMutation__
 *
 * To run a mutation, you first call `useReGenerateTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReGenerateTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reGenerateTokensMutation, { data, loading, error }] = useReGenerateTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useReGenerateTokensMutation(baseOptions?: Apollo.MutationHookOptions<ReGenerateTokensMutation, ReGenerateTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReGenerateTokensMutation, ReGenerateTokensMutationVariables>(ReGenerateTokensDocument, options);
      }
export type ReGenerateTokensMutationHookResult = ReturnType<typeof useReGenerateTokensMutation>;
export type ReGenerateTokensMutationResult = Apollo.MutationResult<ReGenerateTokensMutation>;
export type ReGenerateTokensMutationOptions = Apollo.BaseMutationOptions<ReGenerateTokensMutation, ReGenerateTokensMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    provider
    socialId
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input)
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    ...comment
  }
}
    ${CommentFragmentDoc}`;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, options);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const FindCommentDocument = gql`
    query FindComment($id: ID, $postId: ID) {
  findComment(id: $id, postId: $postId) {
    ...comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useFindCommentQuery__
 *
 * To run a query within a React component, call `useFindCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useFindCommentQuery(baseOptions?: Apollo.QueryHookOptions<FindCommentQuery, FindCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCommentQuery, FindCommentQueryVariables>(FindCommentDocument, options);
      }
export function useFindCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCommentQuery, FindCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCommentQuery, FindCommentQueryVariables>(FindCommentDocument, options);
        }
export function useFindCommentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCommentQuery, FindCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCommentQuery, FindCommentQueryVariables>(FindCommentDocument, options);
        }
export type FindCommentQueryHookResult = ReturnType<typeof useFindCommentQuery>;
export type FindCommentLazyQueryHookResult = ReturnType<typeof useFindCommentLazyQuery>;
export type FindCommentSuspenseQueryHookResult = ReturnType<typeof useFindCommentSuspenseQuery>;
export type FindCommentQueryResult = Apollo.QueryResult<FindCommentQuery, FindCommentQueryVariables>;
export const FindGroupsDocument = gql`
    query FindGroups($cursor: ID, $skip: Int! = 1, $take: Int!) {
  findGroups(cursor: $cursor, skip: $skip, take: $take) {
    edges {
      node {
        ...group
      }
    }
    pageInfo {
      endCursor
    }
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useFindGroupsQuery__
 *
 * To run a query within a React component, call `useFindGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGroupsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindGroupsQuery(baseOptions: Apollo.QueryHookOptions<FindGroupsQuery, FindGroupsQueryVariables> & ({ variables: FindGroupsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGroupsQuery, FindGroupsQueryVariables>(FindGroupsDocument, options);
      }
export function useFindGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGroupsQuery, FindGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGroupsQuery, FindGroupsQueryVariables>(FindGroupsDocument, options);
        }
export function useFindGroupsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindGroupsQuery, FindGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGroupsQuery, FindGroupsQueryVariables>(FindGroupsDocument, options);
        }
export type FindGroupsQueryHookResult = ReturnType<typeof useFindGroupsQuery>;
export type FindGroupsLazyQueryHookResult = ReturnType<typeof useFindGroupsLazyQuery>;
export type FindGroupsSuspenseQueryHookResult = ReturnType<typeof useFindGroupsSuspenseQuery>;
export type FindGroupsQueryResult = Apollo.QueryResult<FindGroupsQuery, FindGroupsQueryVariables>;
export const FindGroupProfilesDocument = gql`
    query FindGroupProfiles($keyword: String, $cursor: ID, $skip: Int! = 1, $take: Int!) {
  findGroupProfiles(keyword: $keyword, cursor: $cursor, skip: $skip, take: $take) {
    edges {
      node {
        ...groupProfile
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${GroupProfileFragmentDoc}`;

/**
 * __useFindGroupProfilesQuery__
 *
 * To run a query within a React component, call `useFindGroupProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGroupProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGroupProfilesQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindGroupProfilesQuery(baseOptions: Apollo.QueryHookOptions<FindGroupProfilesQuery, FindGroupProfilesQueryVariables> & ({ variables: FindGroupProfilesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGroupProfilesQuery, FindGroupProfilesQueryVariables>(FindGroupProfilesDocument, options);
      }
export function useFindGroupProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGroupProfilesQuery, FindGroupProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGroupProfilesQuery, FindGroupProfilesQueryVariables>(FindGroupProfilesDocument, options);
        }
export function useFindGroupProfilesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindGroupProfilesQuery, FindGroupProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGroupProfilesQuery, FindGroupProfilesQueryVariables>(FindGroupProfilesDocument, options);
        }
export type FindGroupProfilesQueryHookResult = ReturnType<typeof useFindGroupProfilesQuery>;
export type FindGroupProfilesLazyQueryHookResult = ReturnType<typeof useFindGroupProfilesLazyQuery>;
export type FindGroupProfilesSuspenseQueryHookResult = ReturnType<typeof useFindGroupProfilesSuspenseQuery>;
export type FindGroupProfilesQueryResult = Apollo.QueryResult<FindGroupProfilesQuery, FindGroupProfilesQueryVariables>;
export const FindGroupDocument = gql`
    query findGroup($id: ID, $slug: String) {
  findGroup(id: $id, slug: $slug) {
    ...group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useFindGroupQuery__
 *
 * To run a query within a React component, call `useFindGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindGroupQuery(baseOptions?: Apollo.QueryHookOptions<FindGroupQuery, FindGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGroupQuery, FindGroupQueryVariables>(FindGroupDocument, options);
      }
export function useFindGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGroupQuery, FindGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGroupQuery, FindGroupQueryVariables>(FindGroupDocument, options);
        }
export function useFindGroupSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindGroupQuery, FindGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGroupQuery, FindGroupQueryVariables>(FindGroupDocument, options);
        }
export type FindGroupQueryHookResult = ReturnType<typeof useFindGroupQuery>;
export type FindGroupLazyQueryHookResult = ReturnType<typeof useFindGroupLazyQuery>;
export type FindGroupSuspenseQueryHookResult = ReturnType<typeof useFindGroupSuspenseQuery>;
export type FindGroupQueryResult = Apollo.QueryResult<FindGroupQuery, FindGroupQueryVariables>;
export const FindGroupPreviewsDocument = gql`
    query findGroupPreviews {
  findGroupPreviews {
    ...groupPreview
  }
}
    ${GroupPreviewFragmentDoc}`;

/**
 * __useFindGroupPreviewsQuery__
 *
 * To run a query within a React component, call `useFindGroupPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGroupPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGroupPreviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindGroupPreviewsQuery(baseOptions?: Apollo.QueryHookOptions<FindGroupPreviewsQuery, FindGroupPreviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGroupPreviewsQuery, FindGroupPreviewsQueryVariables>(FindGroupPreviewsDocument, options);
      }
export function useFindGroupPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGroupPreviewsQuery, FindGroupPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGroupPreviewsQuery, FindGroupPreviewsQueryVariables>(FindGroupPreviewsDocument, options);
        }
export function useFindGroupPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindGroupPreviewsQuery, FindGroupPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGroupPreviewsQuery, FindGroupPreviewsQueryVariables>(FindGroupPreviewsDocument, options);
        }
export type FindGroupPreviewsQueryHookResult = ReturnType<typeof useFindGroupPreviewsQuery>;
export type FindGroupPreviewsLazyQueryHookResult = ReturnType<typeof useFindGroupPreviewsLazyQuery>;
export type FindGroupPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindGroupPreviewsSuspenseQuery>;
export type FindGroupPreviewsQueryResult = Apollo.QueryResult<FindGroupPreviewsQuery, FindGroupPreviewsQueryVariables>;
export const FindOfferPreviewsDocument = gql`
    query findOfferPreviews($where: JSON, $orderBy: JSON, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findOfferPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...offerPreview
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${OfferPreviewFragmentDoc}`;

/**
 * __useFindOfferPreviewsQuery__
 *
 * To run a query within a React component, call `useFindOfferPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOfferPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOfferPreviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      keyword: // value for 'keyword'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindOfferPreviewsQuery(baseOptions: Apollo.QueryHookOptions<FindOfferPreviewsQuery, FindOfferPreviewsQueryVariables> & ({ variables: FindOfferPreviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOfferPreviewsQuery, FindOfferPreviewsQueryVariables>(FindOfferPreviewsDocument, options);
      }
export function useFindOfferPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOfferPreviewsQuery, FindOfferPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOfferPreviewsQuery, FindOfferPreviewsQueryVariables>(FindOfferPreviewsDocument, options);
        }
export function useFindOfferPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindOfferPreviewsQuery, FindOfferPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOfferPreviewsQuery, FindOfferPreviewsQueryVariables>(FindOfferPreviewsDocument, options);
        }
export type FindOfferPreviewsQueryHookResult = ReturnType<typeof useFindOfferPreviewsQuery>;
export type FindOfferPreviewsLazyQueryHookResult = ReturnType<typeof useFindOfferPreviewsLazyQuery>;
export type FindOfferPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindOfferPreviewsSuspenseQuery>;
export type FindOfferPreviewsQueryResult = Apollo.QueryResult<FindOfferPreviewsQuery, FindOfferPreviewsQueryVariables>;
export const FindOfferDocument = gql`
    query findOffer($id: ID, $slug: String) {
  findOffer(id: $id, slug: $slug) {
    ...offer
  }
}
    ${OfferFragmentDoc}`;

/**
 * __useFindOfferQuery__
 *
 * To run a query within a React component, call `useFindOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOfferQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindOfferQuery(baseOptions?: Apollo.QueryHookOptions<FindOfferQuery, FindOfferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOfferQuery, FindOfferQueryVariables>(FindOfferDocument, options);
      }
export function useFindOfferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOfferQuery, FindOfferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOfferQuery, FindOfferQueryVariables>(FindOfferDocument, options);
        }
export function useFindOfferSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindOfferQuery, FindOfferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOfferQuery, FindOfferQueryVariables>(FindOfferDocument, options);
        }
export type FindOfferQueryHookResult = ReturnType<typeof useFindOfferQuery>;
export type FindOfferLazyQueryHookResult = ReturnType<typeof useFindOfferLazyQuery>;
export type FindOfferSuspenseQueryHookResult = ReturnType<typeof useFindOfferSuspenseQuery>;
export type FindOfferQueryResult = Apollo.QueryResult<FindOfferQuery, FindOfferQueryVariables>;
export const CreateOfferDocument = gql`
    mutation CreateOffer($input: CreateOfferInput!) {
  createOffer(input: $input)
}
    `;
export type CreateOfferMutationFn = Apollo.MutationFunction<CreateOfferMutation, CreateOfferMutationVariables>;

/**
 * __useCreateOfferMutation__
 *
 * To run a mutation, you first call `useCreateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfferMutation, { data, loading, error }] = useCreateOfferMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOfferMutation(baseOptions?: Apollo.MutationHookOptions<CreateOfferMutation, CreateOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOfferMutation, CreateOfferMutationVariables>(CreateOfferDocument, options);
      }
export type CreateOfferMutationHookResult = ReturnType<typeof useCreateOfferMutation>;
export type CreateOfferMutationResult = Apollo.MutationResult<CreateOfferMutation>;
export type CreateOfferMutationOptions = Apollo.BaseMutationOptions<CreateOfferMutation, CreateOfferMutationVariables>;
export const UpdateOfferDocument = gql`
    mutation UpdateOffer($input: UpdateOfferInput!) {
  updateOffer(input: $input) {
    id
    createdAt
    updatedAt
    status
    name0
    name1
    price
    shippingCost
    shippingType
    totalPrice
  }
}
    `;
export type UpdateOfferMutationFn = Apollo.MutationFunction<UpdateOfferMutation, UpdateOfferMutationVariables>;

/**
 * __useUpdateOfferMutation__
 *
 * To run a mutation, you first call `useUpdateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOfferMutation, { data, loading, error }] = useUpdateOfferMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOfferMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOfferMutation, UpdateOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOfferMutation, UpdateOfferMutationVariables>(UpdateOfferDocument, options);
      }
export type UpdateOfferMutationHookResult = ReturnType<typeof useUpdateOfferMutation>;
export type UpdateOfferMutationResult = Apollo.MutationResult<UpdateOfferMutation>;
export type UpdateOfferMutationOptions = Apollo.BaseMutationOptions<UpdateOfferMutation, UpdateOfferMutationVariables>;
export const DeleteOfferDocument = gql`
    mutation DeleteOffer($id: ID!) {
  deleteOffer(id: $id)
}
    `;
export type DeleteOfferMutationFn = Apollo.MutationFunction<DeleteOfferMutation, DeleteOfferMutationVariables>;

/**
 * __useDeleteOfferMutation__
 *
 * To run a mutation, you first call `useDeleteOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOfferMutation, { data, loading, error }] = useDeleteOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOfferMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOfferMutation, DeleteOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOfferMutation, DeleteOfferMutationVariables>(DeleteOfferDocument, options);
      }
export type DeleteOfferMutationHookResult = ReturnType<typeof useDeleteOfferMutation>;
export type DeleteOfferMutationResult = Apollo.MutationResult<DeleteOfferMutation>;
export type DeleteOfferMutationOptions = Apollo.BaseMutationOptions<DeleteOfferMutation, DeleteOfferMutationVariables>;
export const BumpOfferDocument = gql`
    mutation BumpOffer($input: BumpOfferInput!) {
  bumpOffer(input: $input) {
    id
    bumpedAt
    price
    shippingCost
    shippingType
    totalPrice
  }
}
    `;
export type BumpOfferMutationFn = Apollo.MutationFunction<BumpOfferMutation, BumpOfferMutationVariables>;

/**
 * __useBumpOfferMutation__
 *
 * To run a mutation, you first call `useBumpOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBumpOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bumpOfferMutation, { data, loading, error }] = useBumpOfferMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBumpOfferMutation(baseOptions?: Apollo.MutationHookOptions<BumpOfferMutation, BumpOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BumpOfferMutation, BumpOfferMutationVariables>(BumpOfferDocument, options);
      }
export type BumpOfferMutationHookResult = ReturnType<typeof useBumpOfferMutation>;
export type BumpOfferMutationResult = Apollo.MutationResult<BumpOfferMutation>;
export type BumpOfferMutationOptions = Apollo.BaseMutationOptions<BumpOfferMutation, BumpOfferMutationVariables>;
export const FindPostPreviewDocument = gql`
    query findPostPreview($id: ID!) {
  findPostPreview(id: $id) {
    ...postPreview
  }
}
    ${PostPreviewFragmentDoc}`;

/**
 * __useFindPostPreviewQuery__
 *
 * To run a query within a React component, call `useFindPostPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPostPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPostPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindPostPreviewQuery(baseOptions: Apollo.QueryHookOptions<FindPostPreviewQuery, FindPostPreviewQueryVariables> & ({ variables: FindPostPreviewQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPostPreviewQuery, FindPostPreviewQueryVariables>(FindPostPreviewDocument, options);
      }
export function useFindPostPreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPostPreviewQuery, FindPostPreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPostPreviewQuery, FindPostPreviewQueryVariables>(FindPostPreviewDocument, options);
        }
export function useFindPostPreviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindPostPreviewQuery, FindPostPreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPostPreviewQuery, FindPostPreviewQueryVariables>(FindPostPreviewDocument, options);
        }
export type FindPostPreviewQueryHookResult = ReturnType<typeof useFindPostPreviewQuery>;
export type FindPostPreviewLazyQueryHookResult = ReturnType<typeof useFindPostPreviewLazyQuery>;
export type FindPostPreviewSuspenseQueryHookResult = ReturnType<typeof useFindPostPreviewSuspenseQuery>;
export type FindPostPreviewQueryResult = Apollo.QueryResult<FindPostPreviewQuery, FindPostPreviewQueryVariables>;
export const CreateReportDocument = gql`
    mutation CreateReport($input: CreateReportInput!) {
  createReport(input: $input)
}
    `;
export type CreateReportMutationFn = Apollo.MutationFunction<CreateReportMutation, CreateReportMutationVariables>;

/**
 * __useCreateReportMutation__
 *
 * To run a mutation, you first call `useCreateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportMutation, { data, loading, error }] = useCreateReportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReportMutation(baseOptions?: Apollo.MutationHookOptions<CreateReportMutation, CreateReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReportMutation, CreateReportMutationVariables>(CreateReportDocument, options);
      }
export type CreateReportMutationHookResult = ReturnType<typeof useCreateReportMutation>;
export type CreateReportMutationResult = Apollo.MutationResult<CreateReportMutation>;
export type CreateReportMutationOptions = Apollo.BaseMutationOptions<CreateReportMutation, CreateReportMutationVariables>;
export const FindReportPreviewsDocument = gql`
    query findReportPreviews($where: JSON, $orderBy: JSON, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findReportPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...reportPreview
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${ReportPreviewFragmentDoc}`;

/**
 * __useFindReportPreviewsQuery__
 *
 * To run a query within a React component, call `useFindReportPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindReportPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindReportPreviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      keyword: // value for 'keyword'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindReportPreviewsQuery(baseOptions: Apollo.QueryHookOptions<FindReportPreviewsQuery, FindReportPreviewsQueryVariables> & ({ variables: FindReportPreviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindReportPreviewsQuery, FindReportPreviewsQueryVariables>(FindReportPreviewsDocument, options);
      }
export function useFindReportPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindReportPreviewsQuery, FindReportPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindReportPreviewsQuery, FindReportPreviewsQueryVariables>(FindReportPreviewsDocument, options);
        }
export function useFindReportPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindReportPreviewsQuery, FindReportPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindReportPreviewsQuery, FindReportPreviewsQueryVariables>(FindReportPreviewsDocument, options);
        }
export type FindReportPreviewsQueryHookResult = ReturnType<typeof useFindReportPreviewsQuery>;
export type FindReportPreviewsLazyQueryHookResult = ReturnType<typeof useFindReportPreviewsLazyQuery>;
export type FindReportPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindReportPreviewsSuspenseQuery>;
export type FindReportPreviewsQueryResult = Apollo.QueryResult<FindReportPreviewsQuery, FindReportPreviewsQueryVariables>;
export const FindLastReportDocument = gql`
    query findLastReport {
  findLastReport {
    ...report
  }
}
    ${ReportFragmentDoc}`;

/**
 * __useFindLastReportQuery__
 *
 * To run a query within a React component, call `useFindLastReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLastReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLastReportQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindLastReportQuery(baseOptions?: Apollo.QueryHookOptions<FindLastReportQuery, FindLastReportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLastReportQuery, FindLastReportQueryVariables>(FindLastReportDocument, options);
      }
export function useFindLastReportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLastReportQuery, FindLastReportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLastReportQuery, FindLastReportQueryVariables>(FindLastReportDocument, options);
        }
export function useFindLastReportSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLastReportQuery, FindLastReportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLastReportQuery, FindLastReportQueryVariables>(FindLastReportDocument, options);
        }
export type FindLastReportQueryHookResult = ReturnType<typeof useFindLastReportQuery>;
export type FindLastReportLazyQueryHookResult = ReturnType<typeof useFindLastReportLazyQuery>;
export type FindLastReportSuspenseQueryHookResult = ReturnType<typeof useFindLastReportSuspenseQuery>;
export type FindLastReportQueryResult = Apollo.QueryResult<FindLastReportQuery, FindLastReportQueryVariables>;
export const FindReportCommentDocument = gql`
    query findReportComment($reportId: ID!) {
  findReportComment(reportId: $reportId) {
    ...reportComment
  }
}
    ${ReportCommentFragmentDoc}`;

/**
 * __useFindReportCommentQuery__
 *
 * To run a query within a React component, call `useFindReportCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindReportCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindReportCommentQuery({
 *   variables: {
 *      reportId: // value for 'reportId'
 *   },
 * });
 */
export function useFindReportCommentQuery(baseOptions: Apollo.QueryHookOptions<FindReportCommentQuery, FindReportCommentQueryVariables> & ({ variables: FindReportCommentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindReportCommentQuery, FindReportCommentQueryVariables>(FindReportCommentDocument, options);
      }
export function useFindReportCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindReportCommentQuery, FindReportCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindReportCommentQuery, FindReportCommentQueryVariables>(FindReportCommentDocument, options);
        }
export function useFindReportCommentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindReportCommentQuery, FindReportCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindReportCommentQuery, FindReportCommentQueryVariables>(FindReportCommentDocument, options);
        }
export type FindReportCommentQueryHookResult = ReturnType<typeof useFindReportCommentQuery>;
export type FindReportCommentLazyQueryHookResult = ReturnType<typeof useFindReportCommentLazyQuery>;
export type FindReportCommentSuspenseQueryHookResult = ReturnType<typeof useFindReportCommentSuspenseQuery>;
export type FindReportCommentQueryResult = Apollo.QueryResult<FindReportCommentQuery, FindReportCommentQueryVariables>;
export const CommentReportDocument = gql`
    mutation CommentReport($input: CommentReportInput!) {
  commentReport(input: $input)
}
    `;
export type CommentReportMutationFn = Apollo.MutationFunction<CommentReportMutation, CommentReportMutationVariables>;

/**
 * __useCommentReportMutation__
 *
 * To run a mutation, you first call `useCommentReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentReportMutation, { data, loading, error }] = useCommentReportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCommentReportMutation(baseOptions?: Apollo.MutationHookOptions<CommentReportMutation, CommentReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommentReportMutation, CommentReportMutationVariables>(CommentReportDocument, options);
      }
export type CommentReportMutationHookResult = ReturnType<typeof useCommentReportMutation>;
export type CommentReportMutationResult = Apollo.MutationResult<CommentReportMutation>;
export type CommentReportMutationOptions = Apollo.BaseMutationOptions<CommentReportMutation, CommentReportMutationVariables>;
export const UpdateReportCommentDocument = gql`
    mutation UpdateReportComment($input: UpdateReportCommentInput!) {
  updateReportComment(input: $input)
}
    `;
export type UpdateReportCommentMutationFn = Apollo.MutationFunction<UpdateReportCommentMutation, UpdateReportCommentMutationVariables>;

/**
 * __useUpdateReportCommentMutation__
 *
 * To run a mutation, you first call `useUpdateReportCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReportCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReportCommentMutation, { data, loading, error }] = useUpdateReportCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReportCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReportCommentMutation, UpdateReportCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReportCommentMutation, UpdateReportCommentMutationVariables>(UpdateReportCommentDocument, options);
      }
export type UpdateReportCommentMutationHookResult = ReturnType<typeof useUpdateReportCommentMutation>;
export type UpdateReportCommentMutationResult = Apollo.MutationResult<UpdateReportCommentMutation>;
export type UpdateReportCommentMutationOptions = Apollo.BaseMutationOptions<UpdateReportCommentMutation, UpdateReportCommentMutationVariables>;
export const FindTagsDocument = gql`
    query findTags {
  findTags {
    ...Tag
  }
}
    ${TagFragmentDoc}`;

/**
 * __useFindTagsQuery__
 *
 * To run a query within a React component, call `useFindTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindTagsQuery(baseOptions?: Apollo.QueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
      }
export function useFindTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
        }
export function useFindTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
        }
export type FindTagsQueryHookResult = ReturnType<typeof useFindTagsQuery>;
export type FindTagsLazyQueryHookResult = ReturnType<typeof useFindTagsLazyQuery>;
export type FindTagsSuspenseQueryHookResult = ReturnType<typeof useFindTagsSuspenseQuery>;
export type FindTagsQueryResult = Apollo.QueryResult<FindTagsQuery, FindTagsQueryVariables>;
export const FindTermDocument = gql`
    query findTerm($name: String!) {
  findTerm(name: $name) {
    ...term
  }
}
    ${TermFragmentDoc}`;

/**
 * __useFindTermQuery__
 *
 * To run a query within a React component, call `useFindTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTermQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFindTermQuery(baseOptions: Apollo.QueryHookOptions<FindTermQuery, FindTermQueryVariables> & ({ variables: FindTermQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTermQuery, FindTermQueryVariables>(FindTermDocument, options);
      }
export function useFindTermLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTermQuery, FindTermQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTermQuery, FindTermQueryVariables>(FindTermDocument, options);
        }
export function useFindTermSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindTermQuery, FindTermQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTermQuery, FindTermQueryVariables>(FindTermDocument, options);
        }
export type FindTermQueryHookResult = ReturnType<typeof useFindTermQuery>;
export type FindTermLazyQueryHookResult = ReturnType<typeof useFindTermLazyQuery>;
export type FindTermSuspenseQueryHookResult = ReturnType<typeof useFindTermSuspenseQuery>;
export type FindTermQueryResult = Apollo.QueryResult<FindTermQuery, FindTermQueryVariables>;
export const CreateSignedUrlDocument = gql`
    mutation CreateSignedUrl($input: CreateSignedUrlInput!) {
  createSignedUrl(input: $input) {
    signedUrl
    url
  }
}
    `;
export type CreateSignedUrlMutationFn = Apollo.MutationFunction<CreateSignedUrlMutation, CreateSignedUrlMutationVariables>;

/**
 * __useCreateSignedUrlMutation__
 *
 * To run a mutation, you first call `useCreateSignedUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSignedUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSignedUrlMutation, { data, loading, error }] = useCreateSignedUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSignedUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateSignedUrlMutation, CreateSignedUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSignedUrlMutation, CreateSignedUrlMutationVariables>(CreateSignedUrlDocument, options);
      }
export type CreateSignedUrlMutationHookResult = ReturnType<typeof useCreateSignedUrlMutation>;
export type CreateSignedUrlMutationResult = Apollo.MutationResult<CreateSignedUrlMutation>;
export type CreateSignedUrlMutationOptions = Apollo.BaseMutationOptions<CreateSignedUrlMutation, CreateSignedUrlMutationVariables>;
export const CreateUserImageDocument = gql`
    mutation CreateUserImage($input: CreateUserImageInput!) {
  createUserImage(input: $input)
}
    `;
export type CreateUserImageMutationFn = Apollo.MutationFunction<CreateUserImageMutation, CreateUserImageMutationVariables>;

/**
 * __useCreateUserImageMutation__
 *
 * To run a mutation, you first call `useCreateUserImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserImageMutation, { data, loading, error }] = useCreateUserImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserImageMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserImageMutation, CreateUserImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserImageMutation, CreateUserImageMutationVariables>(CreateUserImageDocument, options);
      }
export type CreateUserImageMutationHookResult = ReturnType<typeof useCreateUserImageMutation>;
export type CreateUserImageMutationResult = Apollo.MutationResult<CreateUserImageMutation>;
export type CreateUserImageMutationOptions = Apollo.BaseMutationOptions<CreateUserImageMutation, CreateUserImageMutationVariables>;
export const DeleteUserImageDocument = gql`
    mutation DeleteUserImage($id: ID!) {
  deleteUserImage(id: $id)
}
    `;
export type DeleteUserImageMutationFn = Apollo.MutationFunction<DeleteUserImageMutation, DeleteUserImageMutationVariables>;

/**
 * __useDeleteUserImageMutation__
 *
 * To run a mutation, you first call `useDeleteUserImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserImageMutation, { data, loading, error }] = useDeleteUserImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserImageMutation, DeleteUserImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserImageMutation, DeleteUserImageMutationVariables>(DeleteUserImageDocument, options);
      }
export type DeleteUserImageMutationHookResult = ReturnType<typeof useDeleteUserImageMutation>;
export type DeleteUserImageMutationResult = Apollo.MutationResult<DeleteUserImageMutation>;
export type DeleteUserImageMutationOptions = Apollo.BaseMutationOptions<DeleteUserImageMutation, DeleteUserImageMutationVariables>;
export const CreateUserReviewDocument = gql`
    mutation createUserReview($input: CreateUserReviewInput!) {
  createUserReview(input: $input)
}
    `;
export type CreateUserReviewMutationFn = Apollo.MutationFunction<CreateUserReviewMutation, CreateUserReviewMutationVariables>;

/**
 * __useCreateUserReviewMutation__
 *
 * To run a mutation, you first call `useCreateUserReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserReviewMutation, { data, loading, error }] = useCreateUserReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserReviewMutation, CreateUserReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserReviewMutation, CreateUserReviewMutationVariables>(CreateUserReviewDocument, options);
      }
export type CreateUserReviewMutationHookResult = ReturnType<typeof useCreateUserReviewMutation>;
export type CreateUserReviewMutationResult = Apollo.MutationResult<CreateUserReviewMutation>;
export type CreateUserReviewMutationOptions = Apollo.BaseMutationOptions<CreateUserReviewMutation, CreateUserReviewMutationVariables>;
export const FindUserDocument = gql`
    query findUser($provider: String, $socialId: String, $username: String) {
  findUser(provider: $provider, socialId: $socialId, username: $username) {
    ...user
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      provider: // value for 'provider'
 *      socialId: // value for 'socialId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions?: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export function useFindUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserSuspenseQueryHookResult = ReturnType<typeof useFindUserSuspenseQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const FindAuthorDocument = gql`
    query findAuthor($id: ID, $username: String) {
  findAuthor(id: $id, username: $username) {
    ...author
  }
}
    ${AuthorFragmentDoc}`;

/**
 * __useFindAuthorQuery__
 *
 * To run a query within a React component, call `useFindAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindAuthorQuery(baseOptions?: Apollo.QueryHookOptions<FindAuthorQuery, FindAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAuthorQuery, FindAuthorQueryVariables>(FindAuthorDocument, options);
      }
export function useFindAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAuthorQuery, FindAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAuthorQuery, FindAuthorQueryVariables>(FindAuthorDocument, options);
        }
export function useFindAuthorSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAuthorQuery, FindAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAuthorQuery, FindAuthorQueryVariables>(FindAuthorDocument, options);
        }
export type FindAuthorQueryHookResult = ReturnType<typeof useFindAuthorQuery>;
export type FindAuthorLazyQueryHookResult = ReturnType<typeof useFindAuthorLazyQuery>;
export type FindAuthorSuspenseQueryHookResult = ReturnType<typeof useFindAuthorSuspenseQuery>;
export type FindAuthorQueryResult = Apollo.QueryResult<FindAuthorQuery, FindAuthorQueryVariables>;
export const FindMyUserDocument = gql`
    query findMyUser {
  findMyUser {
    ...myUser
  }
}
    ${MyUserFragmentDoc}`;

/**
 * __useFindMyUserQuery__
 *
 * To run a query within a React component, call `useFindMyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyUserQuery(baseOptions?: Apollo.QueryHookOptions<FindMyUserQuery, FindMyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyUserQuery, FindMyUserQueryVariables>(FindMyUserDocument, options);
      }
export function useFindMyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyUserQuery, FindMyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyUserQuery, FindMyUserQueryVariables>(FindMyUserDocument, options);
        }
export function useFindMyUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindMyUserQuery, FindMyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyUserQuery, FindMyUserQueryVariables>(FindMyUserDocument, options);
        }
export type FindMyUserQueryHookResult = ReturnType<typeof useFindMyUserQuery>;
export type FindMyUserLazyQueryHookResult = ReturnType<typeof useFindMyUserLazyQuery>;
export type FindMyUserSuspenseQueryHookResult = ReturnType<typeof useFindMyUserSuspenseQuery>;
export type FindMyUserQueryResult = Apollo.QueryResult<FindMyUserQuery, FindMyUserQueryVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateUser(input: $input)
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const LinkSocialProfileDocument = gql`
    mutation linkSocialProfile($input: LinkSocialProfileInput!) {
  linkSocialProfile(input: $input)
}
    `;
export type LinkSocialProfileMutationFn = Apollo.MutationFunction<LinkSocialProfileMutation, LinkSocialProfileMutationVariables>;

/**
 * __useLinkSocialProfileMutation__
 *
 * To run a mutation, you first call `useLinkSocialProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLinkSocialProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [linkSocialProfileMutation, { data, loading, error }] = useLinkSocialProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLinkSocialProfileMutation(baseOptions?: Apollo.MutationHookOptions<LinkSocialProfileMutation, LinkSocialProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LinkSocialProfileMutation, LinkSocialProfileMutationVariables>(LinkSocialProfileDocument, options);
      }
export type LinkSocialProfileMutationHookResult = ReturnType<typeof useLinkSocialProfileMutation>;
export type LinkSocialProfileMutationResult = Apollo.MutationResult<LinkSocialProfileMutation>;
export type LinkSocialProfileMutationOptions = Apollo.BaseMutationOptions<LinkSocialProfileMutation, LinkSocialProfileMutationVariables>;
export const FindVersionPreviewDocument = gql`
    query findVersionPreview($id: ID, $refId: ID) {
  findVersionPreview(id: $id, refId: $refId) {
    ...versionPreview
  }
}
    ${VersionPreviewFragmentDoc}`;

/**
 * __useFindVersionPreviewQuery__
 *
 * To run a query within a React component, call `useFindVersionPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindVersionPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindVersionPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      refId: // value for 'refId'
 *   },
 * });
 */
export function useFindVersionPreviewQuery(baseOptions?: Apollo.QueryHookOptions<FindVersionPreviewQuery, FindVersionPreviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindVersionPreviewQuery, FindVersionPreviewQueryVariables>(FindVersionPreviewDocument, options);
      }
export function useFindVersionPreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindVersionPreviewQuery, FindVersionPreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindVersionPreviewQuery, FindVersionPreviewQueryVariables>(FindVersionPreviewDocument, options);
        }
export function useFindVersionPreviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindVersionPreviewQuery, FindVersionPreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindVersionPreviewQuery, FindVersionPreviewQueryVariables>(FindVersionPreviewDocument, options);
        }
export type FindVersionPreviewQueryHookResult = ReturnType<typeof useFindVersionPreviewQuery>;
export type FindVersionPreviewLazyQueryHookResult = ReturnType<typeof useFindVersionPreviewLazyQuery>;
export type FindVersionPreviewSuspenseQueryHookResult = ReturnType<typeof useFindVersionPreviewSuspenseQuery>;
export type FindVersionPreviewQueryResult = Apollo.QueryResult<FindVersionPreviewQuery, FindVersionPreviewQueryVariables>;
export const FindVersionDocument = gql`
    query findVersion($id: ID!) {
  findVersion(id: $id) {
    ...version
  }
}
    ${VersionFragmentDoc}`;

/**
 * __useFindVersionQuery__
 *
 * To run a query within a React component, call `useFindVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindVersionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindVersionQuery(baseOptions: Apollo.QueryHookOptions<FindVersionQuery, FindVersionQueryVariables> & ({ variables: FindVersionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindVersionQuery, FindVersionQueryVariables>(FindVersionDocument, options);
      }
export function useFindVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindVersionQuery, FindVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindVersionQuery, FindVersionQueryVariables>(FindVersionDocument, options);
        }
export function useFindVersionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindVersionQuery, FindVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindVersionQuery, FindVersionQueryVariables>(FindVersionDocument, options);
        }
export type FindVersionQueryHookResult = ReturnType<typeof useFindVersionQuery>;
export type FindVersionLazyQueryHookResult = ReturnType<typeof useFindVersionLazyQuery>;
export type FindVersionSuspenseQueryHookResult = ReturnType<typeof useFindVersionSuspenseQuery>;
export type FindVersionQueryResult = Apollo.QueryResult<FindVersionQuery, FindVersionQueryVariables>;