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

export type AddBidInput = {
  auctionId: Scalars['String']['input'];
  bidderId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  source: Scalars['String']['input'];
};

export type AuctionResponse = {
  __typename?: 'AuctionResponse';
  bids: Array<BidResponse>;
  brandId?: Maybe<Scalars['String']['output']>;
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endedAt: Scalars['DateTime']['output'];
  groupId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  seller: AuthorResponse;
  slug?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AuctionResponseEdge = {
  __typename?: 'AuctionResponseEdge';
  cursor: Scalars['String']['output'];
  node: AuctionResponse;
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  avatarURL?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  members: Array<MemberWithRolesResponse>;
  socialAccounts: Array<SocialAccountWithoutAuthResponse>;
  username: Scalars['String']['output'];
};

export type BidResponse = {
  __typename?: 'BidResponse';
  auctionId: Scalars['ID']['output'];
  bidder: AuthorResponse;
  canceledAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type BumpDemandInput = {
  buyerId: Scalars['ID']['input'];
  demandId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  newPrice: Scalars['Int']['input'];
};

export type BumpOfferInput = {
  id: Scalars['ID']['input'];
  newPrice: Scalars['Int']['input'];
  offerId: Scalars['ID']['input'];
  sellerId: Scalars['ID']['input'];
};

export type BumpSwapInput = {
  id: Scalars['ID']['input'];
  newPrice: Scalars['Int']['input'];
  proposerId: Scalars['ID']['input'];
  swapId: Scalars['ID']['input'];
};

export type CancelBidInput = {
  auctionId: Scalars['String']['input'];
  bidderId: Scalars['String']['input'];
};

export type ConnectRolesInput = {
  groupId: Scalars['ID']['input'];
  roleIds: Array<Scalars['ID']['input']>;
  roleNames: Array<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateAuctionInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endedAt: Scalars['DateTime']['input'];
  groupId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  productCategoryId: Scalars['String']['input'];
  sellerId: Scalars['String']['input'];
  source: Scalars['String']['input'];
  status?: Scalars['String']['input'];
};

export type CreateDemandInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction: Scalars['String']['input'];
  buyerId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  productCategoryId: Scalars['String']['input'];
  source: Scalars['String']['input'];
  status?: Scalars['String']['input'];
};

export type CreateDiscordMessageInput = {
  discordChannelId?: InputMaybe<Scalars['String']['input']>;
  discordGuildId?: InputMaybe<Scalars['String']['input']>;
  discordMessageId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
  modelName: Scalars['String']['input'];
};

export type CreateGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position: Scalars['Int']['input'];
};

export type CreateManyUserImageInput = {
  data: Array<CreateUserImageInput>;
};

export type CreateMemberInput = {
  groupId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateOfferInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  productCategoryId: Scalars['String']['input'];
  sellerId: Scalars['ID']['input'];
  source: Scalars['String']['input'];
  status?: Scalars['String']['input'];
};

export type CreateRoleInput = {
  groupId: Scalars['ID']['input'];
  hexColor?: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSessionInput = {
  expires: Scalars['DateTime']['input'];
  id: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateSignedUrlInput = {
  filename: Scalars['String']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateSocialAccountInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  idToken?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sessionState?: InputMaybe<Scalars['String']['input']>;
  socialId: Scalars['String']['input'];
  tokenType?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type CreateSwapInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction: Scalars['String']['input'];
  description0?: InputMaybe<Scalars['String']['input']>;
  description1?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name0: Scalars['String']['input'];
  name1: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  productCategoryId: Scalars['String']['input'];
  proposerId: Scalars['ID']['input'];
  source: Scalars['String']['input'];
  status?: Scalars['String']['input'];
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
  source: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserInput = {
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type DemandPreviewResponse = {
  __typename?: 'DemandPreviewResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  buyer: UserResponse;
  createdAt: Scalars['DateTime']['output'];
  groupId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DemandPreviewResponseEdge = {
  __typename?: 'DemandPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: DemandPreviewResponse;
};

export type DemandResponse = {
  __typename?: 'DemandResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  buyer: AuthorResponse;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DisconnectRolesInput = {
  id: Scalars['ID']['input'];
  roleIds: Array<Scalars['ID']['input']>;
  roleNames: Array<Scalars['String']['input']>;
};

export type GroupPreviewResponse = {
  __typename?: 'GroupPreviewResponse';
  demands: Array<DemandPreviewResponse>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  offers: Array<OfferPreviewResponse>;
  position: Scalars['Int']['output'];
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
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  postCategories: Array<PostCategoryResponse>;
  productCategories: Array<ProductCategoryResponse>;
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

export type MemberWithRolesResponse = {
  __typename?: 'MemberWithRolesResponse';
  createdAt: Scalars['DateTime']['output'];
  groupId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  roles: Array<RoleResponse>;
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBid: Scalars['String']['output'];
  bumpDemand: Scalars['String']['output'];
  bumpOffer: Scalars['String']['output'];
  bumpSwap: Scalars['String']['output'];
  cancelBid: Scalars['String']['output'];
  connectRoles: Scalars['String']['output'];
  createAuction: Scalars['String']['output'];
  createDemand: Scalars['String']['output'];
  createDiscordMessage: Scalars['String']['output'];
  createGroup: Scalars['String']['output'];
  createManyUserImage: Scalars['String']['output'];
  createMember: Scalars['String']['output'];
  createOffer: Scalars['String']['output'];
  createRole: Scalars['String']['output'];
  createSession: Scalars['String']['output'];
  createSignedUrl: SignedUrlResponse;
  createSocialAccount: Scalars['String']['output'];
  createSwap: Scalars['String']['output'];
  createUser: Scalars['String']['output'];
  createUserImage: Scalars['String']['output'];
  deleteAuction: Scalars['String']['output'];
  deleteDemand: Scalars['String']['output'];
  deleteGroup: Scalars['String']['output'];
  deleteMember: Scalars['String']['output'];
  deleteOffer: Scalars['String']['output'];
  deleteRole: Scalars['String']['output'];
  deleteSession: Scalars['String']['output'];
  deleteSocialAccount: Scalars['String']['output'];
  deleteSocialAccountByProvider: Scalars['String']['output'];
  deleteSwap: Scalars['String']['output'];
  deleteUser: Scalars['String']['output'];
  deleteUserImage: Scalars['String']['output'];
  disconnectRoles: Scalars['String']['output'];
  logout: SocialUserResponse;
  refreshTokens: JwtResponse;
  updateAuction: Scalars['String']['output'];
  updateDemand: Scalars['String']['output'];
  updateGroup: Scalars['String']['output'];
  updateMember: Scalars['String']['output'];
  updateOffer: Scalars['String']['output'];
  updateRole: Scalars['String']['output'];
  updateSession: Scalars['String']['output'];
  updateSocialAccount: Scalars['String']['output'];
  updateSwap: Scalars['String']['output'];
  updateUser: Scalars['String']['output'];
  updateUserImage: Scalars['String']['output'];
};


export type MutationAddBidArgs = {
  input: AddBidInput;
};


export type MutationBumpDemandArgs = {
  input: BumpDemandInput;
};


export type MutationBumpOfferArgs = {
  input: BumpOfferInput;
};


export type MutationBumpSwapArgs = {
  input: BumpSwapInput;
};


export type MutationCancelBidArgs = {
  input: CancelBidInput;
};


export type MutationConnectRolesArgs = {
  input: ConnectRolesInput;
};


export type MutationCreateAuctionArgs = {
  input: CreateAuctionInput;
};


export type MutationCreateDemandArgs = {
  input: CreateDemandInput;
};


export type MutationCreateDiscordMessageArgs = {
  input: CreateDiscordMessageInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateManyUserImageArgs = {
  input: CreateManyUserImageInput;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};


export type MutationCreateOfferArgs = {
  input: CreateOfferInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateSignedUrlArgs = {
  input: CreateSignedUrlInput;
};


export type MutationCreateSocialAccountArgs = {
  input: CreateSocialAccountInput;
};


export type MutationCreateSwapArgs = {
  input: CreateSwapInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserImageArgs = {
  input: CreateUserImageInput;
};


export type MutationDeleteAuctionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDemandArgs = {
  buyerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['ID']['input'];
  sellerId: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSessionArgs = {
  sessionToken: Scalars['String']['input'];
};


export type MutationDeleteSocialAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSocialAccountByProviderArgs = {
  provider: Scalars['String']['input'];
  socialId: Scalars['String']['input'];
};


export type MutationDeleteSwapArgs = {
  id: Scalars['ID']['input'];
  proposerId: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisconnectRolesArgs = {
  input: DisconnectRolesInput;
};


export type MutationUpdateAuctionArgs = {
  input: UpdateAuctionInput;
};


export type MutationUpdateDemandArgs = {
  input: UpdateDemandInput;
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationUpdateMemberArgs = {
  input: UpdateMemberInput;
};


export type MutationUpdateOfferArgs = {
  input: UpdateOfferInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


export type MutationUpdateSocialAccountArgs = {
  input: UpdateSocialAccountInput;
};


export type MutationUpdateSwapArgs = {
  input: UpdateSwapInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserImageArgs = {
  input: UpdateUserImageInput;
};

export type MyUserResponse = {
  __typename?: 'MyUserResponse';
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
  brandId?: Maybe<Scalars['String']['output']>;
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  groupId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  seller: UserResponse;
  slug?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  thumbnail?: Maybe<UserImageResponse>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OfferPreviewResponseEdge = {
  __typename?: 'OfferPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: OfferPreviewResponse;
};

export type OfferResponse = {
  __typename?: 'OfferResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  seller: AuthorResponse;
  slug?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  thumbnail?: Maybe<UserImageResponse>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type PaginatedAuctionsResponse = {
  __typename?: 'PaginatedAuctionsResponse';
  edges: Array<AuctionResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedDemandPreviewsResponse = {
  __typename?: 'PaginatedDemandPreviewsResponse';
  edges: Array<DemandPreviewResponseEdge>;
  pageInfo: PageInfo;
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

export type PaginatedSwapPreviewsResponse = {
  __typename?: 'PaginatedSwapPreviewsResponse';
  edges: Array<SwapPreviewResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedUsersResponse = {
  __typename?: 'PaginatedUsersResponse';
  edges: Array<UserResponseEdge>;
  pageInfo: PageInfo;
};

export type PostCategoryResponse = {
  __typename?: 'PostCategoryResponse';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type ProductCategoryResponse = {
  __typename?: 'ProductCategoryResponse';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  findAuctionById?: Maybe<AuctionResponse>;
  findAuctions: PaginatedAuctionsResponse;
  findDemand?: Maybe<DemandResponse>;
  findDemandPreviews: PaginatedDemandPreviewsResponse;
  findGroup?: Maybe<GroupResponse>;
  findGroupPreviews: Array<GroupPreviewResponse>;
  findGroupProfiles: PaginatedGroupProfilesResponse;
  findGroups: PaginatedGroupsResponse;
  findMemberByUserAndGroup?: Maybe<MemberWithRolesResponse>;
  findMyUserById?: Maybe<MyUserResponse>;
  findMyUserByUsername?: Maybe<MyUserResponse>;
  findOffer?: Maybe<OfferResponse>;
  findOfferPreviews: PaginatedOfferPreviewsResponse;
  findRoleById?: Maybe<RoleResponse>;
  findSession?: Maybe<SessionResponse>;
  findSwap?: Maybe<SwapResponse>;
  findSwapPreviews: PaginatedSwapPreviewsResponse;
  findTerm?: Maybe<TermResponse>;
  findUser?: Maybe<UserResponse>;
  findUserImageById?: Maybe<UserImageResponse>;
  findUserImagesOfRef: Array<UserImageResponse>;
  findUsers: PaginatedUsersResponse;
  getSocialAccountsByUserId: Scalars['String']['output'];
};


export type QueryFindAuctionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindAuctionsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindDemandArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindDemandPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFindGroupArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindGroupProfilesArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindGroupsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindMemberByUserAndGroupArgs = {
  groupId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryFindMyUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindMyUserByUsernameArgs = {
  username: Scalars['ID']['input'];
};


export type QueryFindOfferArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindOfferPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFindRoleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindSessionArgs = {
  sessionToken: Scalars['String']['input'];
};


export type QueryFindSwapArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindSwapPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFindTermArgs = {
  name: Scalars['String']['input'];
};


export type QueryFindUserArgs = {
  provider?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
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


export type QueryGetSocialAccountsByUserIdArgs = {
  id: Scalars['ID']['input'];
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  groupId: Scalars['ID']['output'];
  hexColor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
};

export type SessionResponse = {
  __typename?: 'SessionResponse';
  expires: Scalars['DateTime']['output'];
  sessionToken: Scalars['String']['output'];
  userId: Scalars['String']['output'];
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

export type SwapPreviewResponse = {
  __typename?: 'SwapPreviewResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  groupId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name0: Scalars['String']['output'];
  name1: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  proposer: UserResponse;
  slug?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  thumbnail?: Maybe<UserImageResponse>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SwapPreviewResponseEdge = {
  __typename?: 'SwapPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: SwapPreviewResponse;
};

export type SwapResponse = {
  __typename?: 'SwapResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description0?: Maybe<Scalars['String']['output']>;
  description1?: Maybe<Scalars['String']['output']>;
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name0: Scalars['String']['output'];
  name1: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  proposer: AuthorResponse;
  slug?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  thumbnail?: Maybe<UserImageResponse>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TermResponse = {
  __typename?: 'TermResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateAuctionInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  productCategoryId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateDemandInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  buyerId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  productCategoryId?: InputMaybe<Scalars['ID']['input']>;
  source: Scalars['String']['input'];
};

export type UpdateGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMemberInput = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateOfferInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  productCategoryId?: InputMaybe<Scalars['ID']['input']>;
  sellerId: Scalars['ID']['input'];
  source: Scalars['String']['input'];
};

export type UpdateRoleInput = {
  hexColor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSessionInput = {
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  sessionToken: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateSocialAccountInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sessionState?: InputMaybe<Scalars['String']['input']>;
  socialId?: InputMaybe<Scalars['String']['input']>;
  tokenType?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateSwapInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  description0?: InputMaybe<Scalars['String']['input']>;
  description1?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name0?: InputMaybe<Scalars['String']['input']>;
  name1?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  proposerId: Scalars['ID']['input'];
  source: Scalars['String']['input'];
};

export type UpdateUserImageInput = {
  id: Scalars['ID']['input'];
  position: Scalars['Int']['input'];
};

export type UpdateUserInput = {
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
  source: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
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

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: { __typename?: 'JwtResponse', accessToken: string, refreshToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'SocialUserResponse', provider: string, socialId: string } };

export type DemandFragment = { __typename?: 'DemandResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, buyer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } };

export type DemandPreviewFragment = { __typename?: 'DemandPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, buyer: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } };

export type FindDemandPreviewsQueryVariables = Exact<{
  where?: InputMaybe<Scalars['JSON']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindDemandPreviewsQuery = { __typename?: 'Query', findDemandPreviews: { __typename?: 'PaginatedDemandPreviewsResponse', edges: Array<{ __typename?: 'DemandPreviewResponseEdge', cursor: string, node: { __typename?: 'DemandPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, buyer: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindDemandQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindDemandQuery = { __typename?: 'Query', findDemand?: { __typename?: 'DemandResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, buyer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } } | null };

export type CreateDemandMutationVariables = Exact<{
  input: CreateDemandInput;
}>;


export type CreateDemandMutation = { __typename?: 'Mutation', createDemand: string };

export type UpdateDemandMutationVariables = Exact<{
  input: UpdateDemandInput;
}>;


export type UpdateDemandMutation = { __typename?: 'Mutation', updateDemand: string };

export type BumpDemandMutationVariables = Exact<{
  input: BumpDemandInput;
}>;


export type BumpDemandMutation = { __typename?: 'Mutation', bumpDemand: string };

export type GroupFragment = { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }>, productCategories: Array<{ __typename?: 'ProductCategoryResponse', id: string, name: string, slug?: string | null, position?: number | null }>, postCategories: Array<{ __typename?: 'PostCategoryResponse', id: string, name: string, slug?: string | null, description?: string | null, position?: number | null }> };

export type GroupProfileFragment = { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null };

export type GroupPreviewFragment = { __typename?: 'GroupPreviewResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position: number, offers: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, thumbnail?: { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string } | null, seller: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } }>, demands: Array<{ __typename?: 'DemandPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, buyer: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } }> };

export type FindGroupsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindGroupsQuery = { __typename?: 'Query', findGroups: { __typename?: 'PaginatedGroupsResponse', edges: Array<{ __typename?: 'GroupResponseEdge', node: { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }>, productCategories: Array<{ __typename?: 'ProductCategoryResponse', id: string, name: string, slug?: string | null, position?: number | null }>, postCategories: Array<{ __typename?: 'PostCategoryResponse', id: string, name: string, slug?: string | null, description?: string | null, position?: number | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

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


export type FindGroupQuery = { __typename?: 'Query', findGroup?: { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }>, productCategories: Array<{ __typename?: 'ProductCategoryResponse', id: string, name: string, slug?: string | null, position?: number | null }>, postCategories: Array<{ __typename?: 'PostCategoryResponse', id: string, name: string, slug?: string | null, description?: string | null, position?: number | null }> } | null };

export type FindGroupPreviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindGroupPreviewsQuery = { __typename?: 'Query', findGroupPreviews: Array<{ __typename?: 'GroupPreviewResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position: number, offers: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, thumbnail?: { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string } | null, seller: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } }>, demands: Array<{ __typename?: 'DemandPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, buyer: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } }> }> };

export type OfferFragment = { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, seller: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } };

export type OfferPreviewFragment = { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, thumbnail?: { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string } | null, seller: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } };

export type FindOfferPreviewsQueryVariables = Exact<{
  where?: InputMaybe<Scalars['JSON']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindOfferPreviewsQuery = { __typename?: 'Query', findOfferPreviews: { __typename?: 'PaginatedOfferPreviewsResponse', edges: Array<{ __typename?: 'OfferPreviewResponseEdge', cursor: string, node: { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, thumbnail?: { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string } | null, seller: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindOfferQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindOfferQuery = { __typename?: 'Query', findOffer?: { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, seller: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } } | null };

export type CreateOfferMutationVariables = Exact<{
  input: CreateOfferInput;
}>;


export type CreateOfferMutation = { __typename?: 'Mutation', createOffer: string };

export type UpdateOfferMutationVariables = Exact<{
  input: UpdateOfferInput;
}>;


export type UpdateOfferMutation = { __typename?: 'Mutation', updateOffer: string };

export type BumpOfferMutationVariables = Exact<{
  input: BumpOfferInput;
}>;


export type BumpOfferMutation = { __typename?: 'Mutation', bumpOffer: string };

export type CreateSessionMutationVariables = Exact<{
  input: CreateSessionInput;
}>;


export type CreateSessionMutation = { __typename?: 'Mutation', createSession: string };

export type UpdateSessionMutationVariables = Exact<{
  input: UpdateSessionInput;
}>;


export type UpdateSessionMutation = { __typename?: 'Mutation', updateSession: string };

export type DeleteSessionMutationVariables = Exact<{
  sessionToken: Scalars['String']['input'];
}>;


export type DeleteSessionMutation = { __typename?: 'Mutation', deleteSession: string };

export type SessionFragment = { __typename?: 'SessionResponse', sessionToken: string, expires: any, userId: string };

export type FindSessionQueryVariables = Exact<{
  sessionToken: Scalars['String']['input'];
}>;


export type FindSessionQuery = { __typename?: 'Query', findSession?: { __typename?: 'SessionResponse', sessionToken: string, expires: any, userId: string } | null };

export type SocialAccountWithoutAuthFragment = { __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string };

export type SocialAccountFragment = { __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null };

export type CreateSocialAccountMutationVariables = Exact<{
  input: CreateSocialAccountInput;
}>;


export type CreateSocialAccountMutation = { __typename?: 'Mutation', createSocialAccount: string };

export type DeleteSocialAccountByProviderMutationVariables = Exact<{
  provider: Scalars['String']['input'];
  socialId: Scalars['String']['input'];
}>;


export type DeleteSocialAccountByProviderMutation = { __typename?: 'Mutation', deleteSocialAccountByProvider: string };

export type SwapFragment = { __typename?: 'SwapResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, slug?: string | null, name0: string, name1: string, description0?: string | null, description1?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, proposer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } };

export type SwapPreviewFragment = { __typename?: 'SwapPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, slug?: string | null, name0: string, name1: string, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, thumbnail?: { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string } | null, proposer: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } };

export type FindSwapPreviewsQueryVariables = Exact<{
  where?: InputMaybe<Scalars['JSON']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindSwapPreviewsQuery = { __typename?: 'Query', findSwapPreviews: { __typename?: 'PaginatedSwapPreviewsResponse', edges: Array<{ __typename?: 'SwapPreviewResponseEdge', cursor: string, node: { __typename?: 'SwapPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, slug?: string | null, name0: string, name1: string, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, groupId: string, productCategoryId: string, brandId?: string | null, thumbnail?: { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string } | null, proposer: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindSwapQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindSwapQuery = { __typename?: 'Query', findSwap?: { __typename?: 'SwapResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, slug?: string | null, name0: string, name1: string, description0?: string | null, description1?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, icon?: string | null }, proposer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } } | null };

export type CreateSwapMutationVariables = Exact<{
  input: CreateSwapInput;
}>;


export type CreateSwapMutation = { __typename?: 'Mutation', createSwap: string };

export type UpdateSwapMutationVariables = Exact<{
  input: UpdateSwapInput;
}>;


export type UpdateSwapMutation = { __typename?: 'Mutation', updateSwap: string };

export type BumpSwapMutationVariables = Exact<{
  input: BumpSwapInput;
}>;


export type BumpSwapMutation = { __typename?: 'Mutation', bumpSwap: string };

export type TermFragment = { __typename?: 'TermResponse', id: string, createdAt: any, updatedAt: any, name: string, title: string, content: string, metaTitle: string, metaDescription: string };

export type FindTermQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type FindTermQuery = { __typename?: 'Query', findTerm?: { __typename?: 'TermResponse', id: string, createdAt: any, updatedAt: any, name: string, title: string, content: string, metaTitle: string, metaDescription: string } | null };

export type ImageFragment = { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string };

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

export type RoleFragment = { __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string };

export type MemberFragment = { __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> };

export type UserFragment = { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean };

export type SellerFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> };

export type BuyerFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> };

export type ProposerFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> };

export type MyUserFragment = { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> };

export type FindMyUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindMyUserByIdQuery = { __typename?: 'Query', findMyUserById?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null };

export type FindUserQueryVariables = Exact<{
  provider?: InputMaybe<Scalars['String']['input']>;
  socialId?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean } | null };

export type FindMyUserByUsernameQueryVariables = Exact<{
  username: Scalars['ID']['input'];
}>;


export type FindMyUserByUsernameQuery = { __typename?: 'Query', findMyUserByUsername?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, groupId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId: string }> }> } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: string };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: string };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: string };

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
  source
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
  groupId
  roles {
    ...role
  }
}
    ${RoleFragmentDoc}`;
export const BuyerFragmentDoc = gql`
    fragment buyer on AuthorResponse {
  id
  createdAt
  username
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
export const DemandFragmentDoc = gql`
    fragment demand on DemandResponse {
  id
  createdAt
  updatedAt
  bumpedAt
  name
  slug
  description
  price
  priceCurrency
  businessFunction
  status
  source
  images {
    ...image
  }
  group {
    ...groupProfile
  }
  productCategoryId
  buyer {
    ...buyer
  }
  brandId
}
    ${ImageFragmentDoc}
${GroupProfileFragmentDoc}
${BuyerFragmentDoc}`;
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
  productCategories {
    id
    name
    slug
    position
  }
  postCategories {
    id
    name
    slug
    description
    position
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment user on UserResponse {
  id
  createdAt
  username
  avatarURL
  bot
}
    `;
export const OfferPreviewFragmentDoc = gql`
    fragment offerPreview on OfferPreviewResponse {
  id
  createdAt
  updatedAt
  bumpedAt
  name
  slug
  price
  priceCurrency
  businessFunction
  status
  source
  thumbnail {
    ...image
  }
  groupId
  productCategoryId
  seller {
    ...user
  }
  brandId
}
    ${ImageFragmentDoc}
${UserFragmentDoc}`;
export const DemandPreviewFragmentDoc = gql`
    fragment demandPreview on DemandPreviewResponse {
  id
  createdAt
  updatedAt
  bumpedAt
  name
  slug
  price
  priceCurrency
  businessFunction
  status
  source
  groupId
  productCategoryId
  buyer {
    ...user
  }
  brandId
}
    ${UserFragmentDoc}`;
export const GroupPreviewFragmentDoc = gql`
    fragment groupPreview on GroupPreviewResponse {
  id
  name
  slug
  description
  icon
  position
  offers {
    ...offerPreview
  }
  demands {
    ...demandPreview
  }
}
    ${OfferPreviewFragmentDoc}
${DemandPreviewFragmentDoc}`;
export const SellerFragmentDoc = gql`
    fragment seller on AuthorResponse {
  id
  createdAt
  username
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
export const OfferFragmentDoc = gql`
    fragment offer on OfferResponse {
  id
  createdAt
  updatedAt
  bumpedAt
  name
  slug
  description
  price
  priceCurrency
  businessFunction
  status
  source
  images {
    ...image
  }
  group {
    ...groupProfile
  }
  productCategoryId
  seller {
    ...seller
  }
  brandId
}
    ${ImageFragmentDoc}
${GroupProfileFragmentDoc}
${SellerFragmentDoc}`;
export const SessionFragmentDoc = gql`
    fragment session on SessionResponse {
  sessionToken
  expires
  userId
}
    `;
export const ProposerFragmentDoc = gql`
    fragment proposer on AuthorResponse {
  id
  createdAt
  username
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
export const SwapFragmentDoc = gql`
    fragment swap on SwapResponse {
  id
  createdAt
  updatedAt
  bumpedAt
  slug
  name0
  name1
  description0
  description1
  price
  priceCurrency
  businessFunction
  status
  source
  images {
    ...image
  }
  group {
    ...groupProfile
  }
  productCategoryId
  proposer {
    ...proposer
  }
  brandId
}
    ${ImageFragmentDoc}
${GroupProfileFragmentDoc}
${ProposerFragmentDoc}`;
export const SwapPreviewFragmentDoc = gql`
    fragment swapPreview on SwapPreviewResponse {
  id
  createdAt
  updatedAt
  bumpedAt
  slug
  name0
  name1
  price
  priceCurrency
  businessFunction
  status
  source
  thumbnail {
    ...image
  }
  groupId
  productCategoryId
  proposer {
    ...user
  }
  brandId
}
    ${ImageFragmentDoc}
${UserFragmentDoc}`;
export const TermFragmentDoc = gql`
    fragment term on TermResponse {
  id
  createdAt
  updatedAt
  name
  title
  content
  metaTitle
  metaDescription
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
export const FindDemandPreviewsDocument = gql`
    query findDemandPreviews($where: JSON, $orderBy: JSON, $keyword: String, $distinct: Boolean, $cursor: ID, $skip: Int!, $take: Int!) {
  findDemandPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    distinct: $distinct
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...demandPreview
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${DemandPreviewFragmentDoc}`;

/**
 * __useFindDemandPreviewsQuery__
 *
 * To run a query within a React component, call `useFindDemandPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDemandPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDemandPreviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      keyword: // value for 'keyword'
 *      distinct: // value for 'distinct'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindDemandPreviewsQuery(baseOptions: Apollo.QueryHookOptions<FindDemandPreviewsQuery, FindDemandPreviewsQueryVariables> & ({ variables: FindDemandPreviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDemandPreviewsQuery, FindDemandPreviewsQueryVariables>(FindDemandPreviewsDocument, options);
      }
export function useFindDemandPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDemandPreviewsQuery, FindDemandPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDemandPreviewsQuery, FindDemandPreviewsQueryVariables>(FindDemandPreviewsDocument, options);
        }
export function useFindDemandPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindDemandPreviewsQuery, FindDemandPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindDemandPreviewsQuery, FindDemandPreviewsQueryVariables>(FindDemandPreviewsDocument, options);
        }
export type FindDemandPreviewsQueryHookResult = ReturnType<typeof useFindDemandPreviewsQuery>;
export type FindDemandPreviewsLazyQueryHookResult = ReturnType<typeof useFindDemandPreviewsLazyQuery>;
export type FindDemandPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindDemandPreviewsSuspenseQuery>;
export type FindDemandPreviewsQueryResult = Apollo.QueryResult<FindDemandPreviewsQuery, FindDemandPreviewsQueryVariables>;
export const FindDemandDocument = gql`
    query findDemand($id: ID, $slug: String) {
  findDemand(id: $id, slug: $slug) {
    ...demand
  }
}
    ${DemandFragmentDoc}`;

/**
 * __useFindDemandQuery__
 *
 * To run a query within a React component, call `useFindDemandQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDemandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDemandQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindDemandQuery(baseOptions?: Apollo.QueryHookOptions<FindDemandQuery, FindDemandQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDemandQuery, FindDemandQueryVariables>(FindDemandDocument, options);
      }
export function useFindDemandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDemandQuery, FindDemandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDemandQuery, FindDemandQueryVariables>(FindDemandDocument, options);
        }
export function useFindDemandSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindDemandQuery, FindDemandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindDemandQuery, FindDemandQueryVariables>(FindDemandDocument, options);
        }
export type FindDemandQueryHookResult = ReturnType<typeof useFindDemandQuery>;
export type FindDemandLazyQueryHookResult = ReturnType<typeof useFindDemandLazyQuery>;
export type FindDemandSuspenseQueryHookResult = ReturnType<typeof useFindDemandSuspenseQuery>;
export type FindDemandQueryResult = Apollo.QueryResult<FindDemandQuery, FindDemandQueryVariables>;
export const CreateDemandDocument = gql`
    mutation CreateDemand($input: CreateDemandInput!) {
  createDemand(input: $input)
}
    `;
export type CreateDemandMutationFn = Apollo.MutationFunction<CreateDemandMutation, CreateDemandMutationVariables>;

/**
 * __useCreateDemandMutation__
 *
 * To run a mutation, you first call `useCreateDemandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDemandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDemandMutation, { data, loading, error }] = useCreateDemandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDemandMutation(baseOptions?: Apollo.MutationHookOptions<CreateDemandMutation, CreateDemandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDemandMutation, CreateDemandMutationVariables>(CreateDemandDocument, options);
      }
export type CreateDemandMutationHookResult = ReturnType<typeof useCreateDemandMutation>;
export type CreateDemandMutationResult = Apollo.MutationResult<CreateDemandMutation>;
export type CreateDemandMutationOptions = Apollo.BaseMutationOptions<CreateDemandMutation, CreateDemandMutationVariables>;
export const UpdateDemandDocument = gql`
    mutation UpdateDemand($input: UpdateDemandInput!) {
  updateDemand(input: $input)
}
    `;
export type UpdateDemandMutationFn = Apollo.MutationFunction<UpdateDemandMutation, UpdateDemandMutationVariables>;

/**
 * __useUpdateDemandMutation__
 *
 * To run a mutation, you first call `useUpdateDemandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDemandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDemandMutation, { data, loading, error }] = useUpdateDemandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDemandMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDemandMutation, UpdateDemandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDemandMutation, UpdateDemandMutationVariables>(UpdateDemandDocument, options);
      }
export type UpdateDemandMutationHookResult = ReturnType<typeof useUpdateDemandMutation>;
export type UpdateDemandMutationResult = Apollo.MutationResult<UpdateDemandMutation>;
export type UpdateDemandMutationOptions = Apollo.BaseMutationOptions<UpdateDemandMutation, UpdateDemandMutationVariables>;
export const BumpDemandDocument = gql`
    mutation BumpDemand($input: BumpDemandInput!) {
  bumpDemand(input: $input)
}
    `;
export type BumpDemandMutationFn = Apollo.MutationFunction<BumpDemandMutation, BumpDemandMutationVariables>;

/**
 * __useBumpDemandMutation__
 *
 * To run a mutation, you first call `useBumpDemandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBumpDemandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bumpDemandMutation, { data, loading, error }] = useBumpDemandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBumpDemandMutation(baseOptions?: Apollo.MutationHookOptions<BumpDemandMutation, BumpDemandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BumpDemandMutation, BumpDemandMutationVariables>(BumpDemandDocument, options);
      }
export type BumpDemandMutationHookResult = ReturnType<typeof useBumpDemandMutation>;
export type BumpDemandMutationResult = Apollo.MutationResult<BumpDemandMutation>;
export type BumpDemandMutationOptions = Apollo.BaseMutationOptions<BumpDemandMutation, BumpDemandMutationVariables>;
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
    query findOfferPreviews($where: JSON, $orderBy: JSON, $keyword: String, $distinct: Boolean, $cursor: ID, $skip: Int!, $take: Int!) {
  findOfferPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    distinct: $distinct
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
 *      distinct: // value for 'distinct'
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
  updateOffer(input: $input)
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
export const BumpOfferDocument = gql`
    mutation BumpOffer($input: BumpOfferInput!) {
  bumpOffer(input: $input)
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
export const CreateSessionDocument = gql`
    mutation createSession($input: CreateSessionInput!) {
  createSession(input: $input)
}
    `;
export type CreateSessionMutationFn = Apollo.MutationFunction<CreateSessionMutation, CreateSessionMutationVariables>;

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(CreateSessionDocument, options);
      }
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>;
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>;
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<CreateSessionMutation, CreateSessionMutationVariables>;
export const UpdateSessionDocument = gql`
    mutation updateSession($input: UpdateSessionInput!) {
  updateSession(input: $input)
}
    `;
export type UpdateSessionMutationFn = Apollo.MutationFunction<UpdateSessionMutation, UpdateSessionMutationVariables>;

/**
 * __useUpdateSessionMutation__
 *
 * To run a mutation, you first call `useUpdateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSessionMutation, { data, loading, error }] = useUpdateSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSessionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSessionMutation, UpdateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSessionMutation, UpdateSessionMutationVariables>(UpdateSessionDocument, options);
      }
export type UpdateSessionMutationHookResult = ReturnType<typeof useUpdateSessionMutation>;
export type UpdateSessionMutationResult = Apollo.MutationResult<UpdateSessionMutation>;
export type UpdateSessionMutationOptions = Apollo.BaseMutationOptions<UpdateSessionMutation, UpdateSessionMutationVariables>;
export const DeleteSessionDocument = gql`
    mutation deleteSession($sessionToken: String!) {
  deleteSession(sessionToken: $sessionToken)
}
    `;
export type DeleteSessionMutationFn = Apollo.MutationFunction<DeleteSessionMutation, DeleteSessionMutationVariables>;

/**
 * __useDeleteSessionMutation__
 *
 * To run a mutation, you first call `useDeleteSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSessionMutation, { data, loading, error }] = useDeleteSessionMutation({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useDeleteSessionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSessionMutation, DeleteSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSessionMutation, DeleteSessionMutationVariables>(DeleteSessionDocument, options);
      }
export type DeleteSessionMutationHookResult = ReturnType<typeof useDeleteSessionMutation>;
export type DeleteSessionMutationResult = Apollo.MutationResult<DeleteSessionMutation>;
export type DeleteSessionMutationOptions = Apollo.BaseMutationOptions<DeleteSessionMutation, DeleteSessionMutationVariables>;
export const FindSessionDocument = gql`
    query findSession($sessionToken: String!) {
  findSession(sessionToken: $sessionToken) {
    ...session
  }
}
    ${SessionFragmentDoc}`;

/**
 * __useFindSessionQuery__
 *
 * To run a query within a React component, call `useFindSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionQuery({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useFindSessionQuery(baseOptions: Apollo.QueryHookOptions<FindSessionQuery, FindSessionQueryVariables> & ({ variables: FindSessionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionQuery, FindSessionQueryVariables>(FindSessionDocument, options);
      }
export function useFindSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionQuery, FindSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionQuery, FindSessionQueryVariables>(FindSessionDocument, options);
        }
export function useFindSessionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindSessionQuery, FindSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionQuery, FindSessionQueryVariables>(FindSessionDocument, options);
        }
export type FindSessionQueryHookResult = ReturnType<typeof useFindSessionQuery>;
export type FindSessionLazyQueryHookResult = ReturnType<typeof useFindSessionLazyQuery>;
export type FindSessionSuspenseQueryHookResult = ReturnType<typeof useFindSessionSuspenseQuery>;
export type FindSessionQueryResult = Apollo.QueryResult<FindSessionQuery, FindSessionQueryVariables>;
export const CreateSocialAccountDocument = gql`
    mutation createSocialAccount($input: CreateSocialAccountInput!) {
  createSocialAccount(input: $input)
}
    `;
export type CreateSocialAccountMutationFn = Apollo.MutationFunction<CreateSocialAccountMutation, CreateSocialAccountMutationVariables>;

/**
 * __useCreateSocialAccountMutation__
 *
 * To run a mutation, you first call `useCreateSocialAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSocialAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSocialAccountMutation, { data, loading, error }] = useCreateSocialAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSocialAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateSocialAccountMutation, CreateSocialAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSocialAccountMutation, CreateSocialAccountMutationVariables>(CreateSocialAccountDocument, options);
      }
export type CreateSocialAccountMutationHookResult = ReturnType<typeof useCreateSocialAccountMutation>;
export type CreateSocialAccountMutationResult = Apollo.MutationResult<CreateSocialAccountMutation>;
export type CreateSocialAccountMutationOptions = Apollo.BaseMutationOptions<CreateSocialAccountMutation, CreateSocialAccountMutationVariables>;
export const DeleteSocialAccountByProviderDocument = gql`
    mutation deleteSocialAccountByProvider($provider: String!, $socialId: String!) {
  deleteSocialAccountByProvider(provider: $provider, socialId: $socialId)
}
    `;
export type DeleteSocialAccountByProviderMutationFn = Apollo.MutationFunction<DeleteSocialAccountByProviderMutation, DeleteSocialAccountByProviderMutationVariables>;

/**
 * __useDeleteSocialAccountByProviderMutation__
 *
 * To run a mutation, you first call `useDeleteSocialAccountByProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSocialAccountByProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSocialAccountByProviderMutation, { data, loading, error }] = useDeleteSocialAccountByProviderMutation({
 *   variables: {
 *      provider: // value for 'provider'
 *      socialId: // value for 'socialId'
 *   },
 * });
 */
export function useDeleteSocialAccountByProviderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSocialAccountByProviderMutation, DeleteSocialAccountByProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSocialAccountByProviderMutation, DeleteSocialAccountByProviderMutationVariables>(DeleteSocialAccountByProviderDocument, options);
      }
export type DeleteSocialAccountByProviderMutationHookResult = ReturnType<typeof useDeleteSocialAccountByProviderMutation>;
export type DeleteSocialAccountByProviderMutationResult = Apollo.MutationResult<DeleteSocialAccountByProviderMutation>;
export type DeleteSocialAccountByProviderMutationOptions = Apollo.BaseMutationOptions<DeleteSocialAccountByProviderMutation, DeleteSocialAccountByProviderMutationVariables>;
export const FindSwapPreviewsDocument = gql`
    query findSwapPreviews($where: JSON, $orderBy: JSON, $keyword: String, $distinct: Boolean, $cursor: ID, $skip: Int!, $take: Int!) {
  findSwapPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    distinct: $distinct
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...swapPreview
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${SwapPreviewFragmentDoc}`;

/**
 * __useFindSwapPreviewsQuery__
 *
 * To run a query within a React component, call `useFindSwapPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSwapPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSwapPreviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      keyword: // value for 'keyword'
 *      distinct: // value for 'distinct'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindSwapPreviewsQuery(baseOptions: Apollo.QueryHookOptions<FindSwapPreviewsQuery, FindSwapPreviewsQueryVariables> & ({ variables: FindSwapPreviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSwapPreviewsQuery, FindSwapPreviewsQueryVariables>(FindSwapPreviewsDocument, options);
      }
export function useFindSwapPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSwapPreviewsQuery, FindSwapPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSwapPreviewsQuery, FindSwapPreviewsQueryVariables>(FindSwapPreviewsDocument, options);
        }
export function useFindSwapPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindSwapPreviewsQuery, FindSwapPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSwapPreviewsQuery, FindSwapPreviewsQueryVariables>(FindSwapPreviewsDocument, options);
        }
export type FindSwapPreviewsQueryHookResult = ReturnType<typeof useFindSwapPreviewsQuery>;
export type FindSwapPreviewsLazyQueryHookResult = ReturnType<typeof useFindSwapPreviewsLazyQuery>;
export type FindSwapPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindSwapPreviewsSuspenseQuery>;
export type FindSwapPreviewsQueryResult = Apollo.QueryResult<FindSwapPreviewsQuery, FindSwapPreviewsQueryVariables>;
export const FindSwapDocument = gql`
    query findSwap($id: ID, $slug: String) {
  findSwap(id: $id, slug: $slug) {
    ...swap
  }
}
    ${SwapFragmentDoc}`;

/**
 * __useFindSwapQuery__
 *
 * To run a query within a React component, call `useFindSwapQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSwapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSwapQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindSwapQuery(baseOptions?: Apollo.QueryHookOptions<FindSwapQuery, FindSwapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSwapQuery, FindSwapQueryVariables>(FindSwapDocument, options);
      }
export function useFindSwapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSwapQuery, FindSwapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSwapQuery, FindSwapQueryVariables>(FindSwapDocument, options);
        }
export function useFindSwapSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindSwapQuery, FindSwapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSwapQuery, FindSwapQueryVariables>(FindSwapDocument, options);
        }
export type FindSwapQueryHookResult = ReturnType<typeof useFindSwapQuery>;
export type FindSwapLazyQueryHookResult = ReturnType<typeof useFindSwapLazyQuery>;
export type FindSwapSuspenseQueryHookResult = ReturnType<typeof useFindSwapSuspenseQuery>;
export type FindSwapQueryResult = Apollo.QueryResult<FindSwapQuery, FindSwapQueryVariables>;
export const CreateSwapDocument = gql`
    mutation CreateSwap($input: CreateSwapInput!) {
  createSwap(input: $input)
}
    `;
export type CreateSwapMutationFn = Apollo.MutationFunction<CreateSwapMutation, CreateSwapMutationVariables>;

/**
 * __useCreateSwapMutation__
 *
 * To run a mutation, you first call `useCreateSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSwapMutation, { data, loading, error }] = useCreateSwapMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSwapMutation(baseOptions?: Apollo.MutationHookOptions<CreateSwapMutation, CreateSwapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSwapMutation, CreateSwapMutationVariables>(CreateSwapDocument, options);
      }
export type CreateSwapMutationHookResult = ReturnType<typeof useCreateSwapMutation>;
export type CreateSwapMutationResult = Apollo.MutationResult<CreateSwapMutation>;
export type CreateSwapMutationOptions = Apollo.BaseMutationOptions<CreateSwapMutation, CreateSwapMutationVariables>;
export const UpdateSwapDocument = gql`
    mutation UpdateSwap($input: UpdateSwapInput!) {
  updateSwap(input: $input)
}
    `;
export type UpdateSwapMutationFn = Apollo.MutationFunction<UpdateSwapMutation, UpdateSwapMutationVariables>;

/**
 * __useUpdateSwapMutation__
 *
 * To run a mutation, you first call `useUpdateSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSwapMutation, { data, loading, error }] = useUpdateSwapMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSwapMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSwapMutation, UpdateSwapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSwapMutation, UpdateSwapMutationVariables>(UpdateSwapDocument, options);
      }
export type UpdateSwapMutationHookResult = ReturnType<typeof useUpdateSwapMutation>;
export type UpdateSwapMutationResult = Apollo.MutationResult<UpdateSwapMutation>;
export type UpdateSwapMutationOptions = Apollo.BaseMutationOptions<UpdateSwapMutation, UpdateSwapMutationVariables>;
export const BumpSwapDocument = gql`
    mutation BumpSwap($input: BumpSwapInput!) {
  bumpSwap(input: $input)
}
    `;
export type BumpSwapMutationFn = Apollo.MutationFunction<BumpSwapMutation, BumpSwapMutationVariables>;

/**
 * __useBumpSwapMutation__
 *
 * To run a mutation, you first call `useBumpSwapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBumpSwapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bumpSwapMutation, { data, loading, error }] = useBumpSwapMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBumpSwapMutation(baseOptions?: Apollo.MutationHookOptions<BumpSwapMutation, BumpSwapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BumpSwapMutation, BumpSwapMutationVariables>(BumpSwapDocument, options);
      }
export type BumpSwapMutationHookResult = ReturnType<typeof useBumpSwapMutation>;
export type BumpSwapMutationResult = Apollo.MutationResult<BumpSwapMutation>;
export type BumpSwapMutationOptions = Apollo.BaseMutationOptions<BumpSwapMutation, BumpSwapMutationVariables>;
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
export const FindMyUserByIdDocument = gql`
    query findMyUserById($id: ID!) {
  findMyUserById(id: $id) {
    ...myUser
  }
}
    ${MyUserFragmentDoc}`;

/**
 * __useFindMyUserByIdQuery__
 *
 * To run a query within a React component, call `useFindMyUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindMyUserByIdQuery(baseOptions: Apollo.QueryHookOptions<FindMyUserByIdQuery, FindMyUserByIdQueryVariables> & ({ variables: FindMyUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyUserByIdQuery, FindMyUserByIdQueryVariables>(FindMyUserByIdDocument, options);
      }
export function useFindMyUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyUserByIdQuery, FindMyUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyUserByIdQuery, FindMyUserByIdQueryVariables>(FindMyUserByIdDocument, options);
        }
export function useFindMyUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindMyUserByIdQuery, FindMyUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyUserByIdQuery, FindMyUserByIdQueryVariables>(FindMyUserByIdDocument, options);
        }
export type FindMyUserByIdQueryHookResult = ReturnType<typeof useFindMyUserByIdQuery>;
export type FindMyUserByIdLazyQueryHookResult = ReturnType<typeof useFindMyUserByIdLazyQuery>;
export type FindMyUserByIdSuspenseQueryHookResult = ReturnType<typeof useFindMyUserByIdSuspenseQuery>;
export type FindMyUserByIdQueryResult = Apollo.QueryResult<FindMyUserByIdQuery, FindMyUserByIdQueryVariables>;
export const FindUserDocument = gql`
    query findUser($provider: String, $socialId: String, $sessionToken: String, $username: String) {
  findUser(
    provider: $provider
    socialId: $socialId
    sessionToken: $sessionToken
    username: $username
  ) {
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
 *      sessionToken: // value for 'sessionToken'
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
export const FindMyUserByUsernameDocument = gql`
    query findMyUserByUsername($username: ID!) {
  findMyUserByUsername(username: $username) {
    ...myUser
  }
}
    ${MyUserFragmentDoc}`;

/**
 * __useFindMyUserByUsernameQuery__
 *
 * To run a query within a React component, call `useFindMyUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindMyUserByUsernameQuery(baseOptions: Apollo.QueryHookOptions<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables> & ({ variables: FindMyUserByUsernameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables>(FindMyUserByUsernameDocument, options);
      }
export function useFindMyUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables>(FindMyUserByUsernameDocument, options);
        }
export function useFindMyUserByUsernameSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables>(FindMyUserByUsernameDocument, options);
        }
export type FindMyUserByUsernameQueryHookResult = ReturnType<typeof useFindMyUserByUsernameQuery>;
export type FindMyUserByUsernameLazyQueryHookResult = ReturnType<typeof useFindMyUserByUsernameLazyQuery>;
export type FindMyUserByUsernameSuspenseQueryHookResult = ReturnType<typeof useFindMyUserByUsernameSuspenseQuery>;
export type FindMyUserByUsernameQueryResult = Apollo.QueryResult<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input)
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
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
export const DeleteUserDocument = gql`
    mutation deleteUser($id: ID!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;