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
  guildId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  seller: UserResponse;
  sellerId: Scalars['ID']['output'];
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
  bidder: UserResponse;
  canceledAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type CancelBidInput = {
  auctionId: Scalars['String']['input'];
  bidderId: Scalars['String']['input'];
};

export type ConnectRolesInput = {
  id: Scalars['ID']['input'];
  roleIds: Array<Scalars['ID']['input']>;
};

export type CreateAuctionInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  endedAt: Scalars['DateTime']['input'];
  guildId: Scalars['ID']['input'];
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
  buyerId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  guildId: Scalars['ID']['input'];
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
  guildId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
  modelName: Scalars['String']['input'];
};

export type CreateGuildInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateManyUserImageInput = {
  data: Array<CreateUserImageInput>;
};

export type CreateMemberInput = {
  guildId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateOfferInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction: Scalars['String']['input'];
  description: Scalars['String']['input'];
  guildId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  productCategoryId: Scalars['String']['input'];
  sellerId: Scalars['String']['input'];
  source: Scalars['String']['input'];
  status?: Scalars['String']['input'];
};

export type CreateRoleInput = {
  guildId: Scalars['ID']['input'];
  hexColor?: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
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
  description0: Scalars['String']['input'];
  description1: Scalars['String']['input'];
  guildId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name0: Scalars['String']['input'];
  name1: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  productCategoryId: Scalars['String']['input'];
  proposerId: Scalars['String']['input'];
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
  source: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserInput = {
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type DemandResponse = {
  __typename?: 'DemandResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  businessFunction: Scalars['String']['output'];
  buyer: UserResponse;
  buyerId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  guildId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DemandResponseEdge = {
  __typename?: 'DemandResponseEdge';
  cursor: Scalars['String']['output'];
  node: DemandResponse;
};

export type DisconnectRolesInput = {
  id: Scalars['ID']['input'];
  roleIds: Array<Scalars['ID']['input']>;
};

export type GuildResponse = {
  __typename?: 'GuildResponse';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  postCategories: Array<PostCategoryResponse>;
  productCategories: Array<ProductCategoryResponse>;
  roles: Array<RoleResponse>;
};

export type GuildResponseEdge = {
  __typename?: 'GuildResponseEdge';
  cursor: Scalars['String']['output'];
  node: GuildResponse;
};

export type MemberWithRolesResponse = {
  __typename?: 'MemberWithRolesResponse';
  createdAt: Scalars['DateTime']['output'];
  guildId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  roles: Array<RoleResponse>;
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBid: Scalars['String']['output'];
  cancelBid: Scalars['String']['output'];
  connectRoles: Scalars['String']['output'];
  createAuction: Scalars['String']['output'];
  createDemand: Scalars['String']['output'];
  createDiscordMessage: Scalars['String']['output'];
  createGuild: Scalars['String']['output'];
  createManyUserImage: Scalars['String']['output'];
  createMember: Scalars['String']['output'];
  createOffer: Scalars['String']['output'];
  createRole: Scalars['String']['output'];
  createSocialAccount: Scalars['String']['output'];
  createSwap: Scalars['String']['output'];
  createUser: Scalars['String']['output'];
  createUserImage: Scalars['String']['output'];
  deleteAuction: Scalars['String']['output'];
  deleteDemand: Scalars['String']['output'];
  deleteGuild: Scalars['String']['output'];
  deleteMember: Scalars['String']['output'];
  deleteOffer: Scalars['String']['output'];
  deleteRole: Scalars['String']['output'];
  deleteSocialAccount: Scalars['String']['output'];
  deleteSwap: Scalars['String']['output'];
  deleteUser: Scalars['String']['output'];
  deleteUserImage: Scalars['String']['output'];
  disconnectRoles: Scalars['String']['output'];
  updateAuction: Scalars['String']['output'];
  updateDemand: Scalars['String']['output'];
  updateGuild: Scalars['String']['output'];
  updateMember: Scalars['String']['output'];
  updateOffer: Scalars['String']['output'];
  updateRole: Scalars['String']['output'];
  updateSocialAccount: Scalars['String']['output'];
  updateSwap: Scalars['String']['output'];
  updateUser: Scalars['String']['output'];
  updateUserImage: Scalars['String']['output'];
};


export type MutationAddBidArgs = {
  input: AddBidInput;
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


export type MutationCreateGuildArgs = {
  input: CreateGuildInput;
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
  id: Scalars['String']['input'];
};


export type MutationDeleteDemandArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGuildArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSocialAccountArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSwapArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserImageArgs = {
  id: Scalars['String']['input'];
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


export type MutationUpdateGuildArgs = {
  input: UpdateGuildInput;
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
  socialAccounts: Array<SocialAccountResponse>;
  username: Scalars['String']['output'];
};

export type OfferResponse = {
  __typename?: 'OfferResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  guildId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  seller: AuthorResponse;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OfferResponseEdge = {
  __typename?: 'OfferResponseEdge';
  cursor: Scalars['String']['output'];
  node: OfferResponse;
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

export type PaginatedDemandsResponse = {
  __typename?: 'PaginatedDemandsResponse';
  edges: Array<DemandResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedGuildsResponse = {
  __typename?: 'PaginatedGuildsResponse';
  edges: Array<GuildResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedOffersResponse = {
  __typename?: 'PaginatedOffersResponse';
  edges: Array<OfferResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedSwapsResponse = {
  __typename?: 'PaginatedSwapsResponse';
  edges: Array<SwapResponseEdge>;
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
};

export type ProductCategoryResponse = {
  __typename?: 'ProductCategoryResponse';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  findAuctionById?: Maybe<AuctionResponse>;
  findAuctions: PaginatedAuctionsResponse;
  findDemandById?: Maybe<DemandResponse>;
  findDemands: PaginatedDemandsResponse;
  findGuildById?: Maybe<GuildResponse>;
  findGuildByName?: Maybe<GuildResponse>;
  findGuilds: PaginatedGuildsResponse;
  findMemberByUserAndGuild?: Maybe<MemberWithRolesResponse>;
  findMyUserById?: Maybe<MyUserResponse>;
  findMyUserBySocialAccount?: Maybe<MyUserResponse>;
  findOfferById: OfferResponse;
  findOffers: PaginatedOffersResponse;
  findRoleById?: Maybe<RoleResponse>;
  findSwapById?: Maybe<SwapResponse>;
  findSwaps: PaginatedSwapsResponse;
  findUserImageById?: Maybe<UserImageResponse>;
  findUserImagesOfRef: Array<UserImageResponse>;
  findUsers: PaginatedUsersResponse;
  getSocialAccountsByUserId: Scalars['String']['output'];
};


export type QueryFindAuctionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindAuctionsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindDemandByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindDemandsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId: Scalars['ID']['input'];
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindGuildByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindGuildByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryFindGuildsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindMemberByUserAndGuildArgs = {
  guildId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryFindMyUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindMyUserBySocialAccountArgs = {
  provider: Scalars['String']['input'];
  socialId: Scalars['String']['input'];
};


export type QueryFindOfferByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOffersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId: Scalars['ID']['input'];
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindRoleByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindSwapByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindSwapsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId: Scalars['ID']['input'];
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindUserImageByIdArgs = {
  id: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  guildId: Scalars['ID']['output'];
  hexColor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
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

export type SwapResponse = {
  __typename?: 'SwapResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  businessFunction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description0?: Maybe<Scalars['String']['output']>;
  description1?: Maybe<Scalars['String']['output']>;
  guildId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  name0: Scalars['String']['output'];
  name1: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  productCategoryId: Scalars['String']['output'];
  proposer: UserResponse;
  proposerId: Scalars['ID']['output'];
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SwapResponseEdge = {
  __typename?: 'SwapResponseEdge';
  cursor: Scalars['String']['output'];
  node: SwapResponse;
};

export type UpdateAuctionInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDemandInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
};

export type UpdateGuildInput = {
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
  brandId?: InputMaybe<Scalars['String']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
};

export type UpdateRoleInput = {
  hexColor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSocialAccountInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  idToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sessionState?: InputMaybe<Scalars['String']['input']>;
  tokenType?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
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
  source: Scalars['String']['input'];
};

export type UpdateUserImageInput = {
  id: Scalars['ID']['input'];
  position: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
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

export type FindGuildsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindGuildsQuery = { __typename?: 'Query', findGuilds: { __typename?: 'PaginatedGuildsResponse', edges: Array<{ __typename?: 'GuildResponseEdge', node: { __typename?: 'GuildResponse', id: string, name: string, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }>, productCategories: Array<{ __typename?: 'ProductCategoryResponse', id: string, name: string, position?: number | null }>, postCategories: Array<{ __typename?: 'PostCategoryResponse', id: string, name: string, description?: string | null, position?: number | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

export type FindOffersQueryVariables = Exact<{
  productCategoryId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindOffersQuery = { __typename?: 'Query', findOffers: { __typename?: 'PaginatedOffersResponse', edges: Array<{ __typename?: 'OfferResponseEdge', cursor: string, node: { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, name: string, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, seller: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }>, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindMyUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindMyUserByIdQuery = { __typename?: 'Query', findMyUserById?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } | null };

export type FindMyUserBySocialAccountQueryVariables = Exact<{
  provider: Scalars['String']['input'];
  socialId: Scalars['String']['input'];
}>;


export type FindMyUserBySocialAccountQuery = { __typename?: 'Query', findMyUserBySocialAccount?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: string };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: string };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: string };


export const FindGuildsDocument = gql`
    query FindGuilds($cursor: ID, $skip: Int! = 1, $take: Int!) {
  findGuilds(cursor: $cursor, skip: $skip, take: $take) {
    edges {
      node {
        id
        name
        description
        icon
        position
        roles {
          id
          name
          position
          hexColor
          guildId
        }
        productCategories {
          id
          name
          position
        }
        postCategories {
          id
          name
          description
          position
        }
      }
    }
    pageInfo {
      endCursor
    }
  }
}
    `;

/**
 * __useFindGuildsQuery__
 *
 * To run a query within a React component, call `useFindGuildsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGuildsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGuildsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindGuildsQuery(baseOptions: Apollo.QueryHookOptions<FindGuildsQuery, FindGuildsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGuildsQuery, FindGuildsQueryVariables>(FindGuildsDocument, options);
      }
export function useFindGuildsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGuildsQuery, FindGuildsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGuildsQuery, FindGuildsQueryVariables>(FindGuildsDocument, options);
        }
export function useFindGuildsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindGuildsQuery, FindGuildsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGuildsQuery, FindGuildsQueryVariables>(FindGuildsDocument, options);
        }
export type FindGuildsQueryHookResult = ReturnType<typeof useFindGuildsQuery>;
export type FindGuildsLazyQueryHookResult = ReturnType<typeof useFindGuildsLazyQuery>;
export type FindGuildsSuspenseQueryHookResult = ReturnType<typeof useFindGuildsSuspenseQuery>;
export type FindGuildsQueryResult = Apollo.QueryResult<FindGuildsQuery, FindGuildsQueryVariables>;
export const FindOffersDocument = gql`
    query findOffers($productCategoryId: ID!, $cursor: ID, $skip: Int!, $take: Int!) {
  findOffers(
    productCategoryId: $productCategoryId
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        id
        createdAt
        updatedAt
        name
        description
        price
        priceCurrency
        businessFunction
        status
        source
        images {
          id
          createdAt
          updatedAt
          name
          url
          contentType
          description
          height
          width
          position
          type
          refId
          userId
          source
        }
        guildId
        productCategoryId
        seller {
          id
          createdAt
          username
          avatarURL
          bot
          members {
            id
            createdAt
            userId
            guildId
            roles {
              id
              name
              position
              hexColor
              guildId
            }
          }
          socialAccounts {
            id
            createdAt
            provider
            socialId
            userId
          }
        }
        brandId
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useFindOffersQuery__
 *
 * To run a query within a React component, call `useFindOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOffersQuery({
 *   variables: {
 *      productCategoryId: // value for 'productCategoryId'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindOffersQuery(baseOptions: Apollo.QueryHookOptions<FindOffersQuery, FindOffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOffersQuery, FindOffersQueryVariables>(FindOffersDocument, options);
      }
export function useFindOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOffersQuery, FindOffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOffersQuery, FindOffersQueryVariables>(FindOffersDocument, options);
        }
export function useFindOffersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindOffersQuery, FindOffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOffersQuery, FindOffersQueryVariables>(FindOffersDocument, options);
        }
export type FindOffersQueryHookResult = ReturnType<typeof useFindOffersQuery>;
export type FindOffersLazyQueryHookResult = ReturnType<typeof useFindOffersLazyQuery>;
export type FindOffersSuspenseQueryHookResult = ReturnType<typeof useFindOffersSuspenseQuery>;
export type FindOffersQueryResult = Apollo.QueryResult<FindOffersQuery, FindOffersQueryVariables>;
export const FindMyUserByIdDocument = gql`
    query findMyUserById($id: String!) {
  findMyUserById(id: $id) {
    id
    createdAt
    username
    avatarURL
    bot
    socialAccounts {
      refreshToken
      accessToken
      expiresAt
      tokenType
      scope
      idToken
      sessionState
    }
    members {
      id
      createdAt
      userId
      guildId
      roles {
        id
        name
        position
        hexColor
        guildId
      }
    }
  }
}
    `;

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
export function useFindMyUserByIdQuery(baseOptions: Apollo.QueryHookOptions<FindMyUserByIdQuery, FindMyUserByIdQueryVariables>) {
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
export const FindMyUserBySocialAccountDocument = gql`
    query findMyUserBySocialAccount($provider: String!, $socialId: String!) {
  findMyUserBySocialAccount(provider: $provider, socialId: $socialId) {
    id
    createdAt
    username
    avatarURL
    bot
    socialAccounts {
      refreshToken
      accessToken
      expiresAt
      tokenType
      scope
      idToken
      sessionState
    }
    members {
      id
      createdAt
      userId
      guildId
      roles {
        id
        name
        position
        hexColor
        guildId
      }
    }
  }
}
    `;

/**
 * __useFindMyUserBySocialAccountQuery__
 *
 * To run a query within a React component, call `useFindMyUserBySocialAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyUserBySocialAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyUserBySocialAccountQuery({
 *   variables: {
 *      provider: // value for 'provider'
 *      socialId: // value for 'socialId'
 *   },
 * });
 */
export function useFindMyUserBySocialAccountQuery(baseOptions: Apollo.QueryHookOptions<FindMyUserBySocialAccountQuery, FindMyUserBySocialAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyUserBySocialAccountQuery, FindMyUserBySocialAccountQueryVariables>(FindMyUserBySocialAccountDocument, options);
      }
export function useFindMyUserBySocialAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyUserBySocialAccountQuery, FindMyUserBySocialAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyUserBySocialAccountQuery, FindMyUserBySocialAccountQueryVariables>(FindMyUserBySocialAccountDocument, options);
        }
export function useFindMyUserBySocialAccountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindMyUserBySocialAccountQuery, FindMyUserBySocialAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyUserBySocialAccountQuery, FindMyUserBySocialAccountQueryVariables>(FindMyUserBySocialAccountDocument, options);
        }
export type FindMyUserBySocialAccountQueryHookResult = ReturnType<typeof useFindMyUserBySocialAccountQuery>;
export type FindMyUserBySocialAccountLazyQueryHookResult = ReturnType<typeof useFindMyUserBySocialAccountLazyQuery>;
export type FindMyUserBySocialAccountSuspenseQueryHookResult = ReturnType<typeof useFindMyUserBySocialAccountSuspenseQuery>;
export type FindMyUserBySocialAccountQueryResult = Apollo.QueryResult<FindMyUserBySocialAccountQuery, FindMyUserBySocialAccountQueryVariables>;
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
    mutation deleteUser($id: String!) {
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