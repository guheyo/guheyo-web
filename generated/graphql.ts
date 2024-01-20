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

export type CreateSessionInput = {
  expires: Scalars['DateTime']['input'];
  id: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
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
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type DemandResponse = {
  __typename?: 'DemandResponse';
  brandId?: Maybe<Scalars['String']['output']>;
  businessFunction: Scalars['String']['output'];
  buyer: AuthorResponse;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  guildId: Scalars['String']['output'];
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
  slug?: Maybe<Scalars['String']['output']>;
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
  createSession: Scalars['String']['output'];
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
  deleteSession: Scalars['String']['output'];
  deleteSocialAccount: Scalars['String']['output'];
  deleteSocialAccountByProvider: Scalars['String']['output'];
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
  updateSession: Scalars['String']['output'];
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


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
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
  id: Scalars['ID']['input'];
};


export type MutationDeleteGuildArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['ID']['input'];
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
  slug?: Maybe<Scalars['String']['output']>;
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
  findDemandById?: Maybe<DemandResponse>;
  findDemands: PaginatedDemandsResponse;
  findGuild?: Maybe<GuildResponse>;
  findGuildById?: Maybe<GuildResponse>;
  findGuilds: PaginatedGuildsResponse;
  findMemberByUserAndGuild?: Maybe<MemberWithRolesResponse>;
  findMyUserById?: Maybe<MyUserResponse>;
  findMyUserBySession?: Maybe<MyUserResponse>;
  findMyUserBySocialAccount?: Maybe<MyUserResponse>;
  findMyUserByUsername?: Maybe<MyUserResponse>;
  findOffer: OfferResponse;
  findOfferById: OfferResponse;
  findOffers: PaginatedOffersResponse;
  findRoleById?: Maybe<RoleResponse>;
  findSession?: Maybe<SessionResponse>;
  findSwapById?: Maybe<SwapResponse>;
  findSwaps: PaginatedSwapsResponse;
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


export type QueryFindDemandByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindDemandsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId: Scalars['ID']['input'];
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindGuildArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindGuildByIdArgs = {
  id: Scalars['ID']['input'];
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
  id: Scalars['ID']['input'];
};


export type QueryFindMyUserBySessionArgs = {
  sessionToken: Scalars['String']['input'];
};


export type QueryFindMyUserBySocialAccountArgs = {
  provider: Scalars['String']['input'];
  socialId: Scalars['String']['input'];
};


export type QueryFindMyUserByUsernameArgs = {
  username: Scalars['ID']['input'];
};


export type QueryFindOfferArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindOfferByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindOffersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId: Scalars['ID']['input'];
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindRoleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindSessionArgs = {
  sessionToken: Scalars['String']['input'];
};


export type QueryFindSwapByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindSwapsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  productCategoryId: Scalars['ID']['input'];
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
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
  guildId: Scalars['ID']['output'];
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
  proposer: AuthorResponse;
  slug?: Maybe<Scalars['String']['output']>;
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

export type UpdateSessionInput = {
  expires?: InputMaybe<Scalars['DateTime']['input']>;
  sessionToken: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
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

export type DemandFragment = { __typename?: 'DemandResponse', id: string, createdAt: any, updatedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, buyer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } };

export type FindDemandsQueryVariables = Exact<{
  productCategoryId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindDemandsQuery = { __typename?: 'Query', findDemands: { __typename?: 'PaginatedDemandsResponse', edges: Array<{ __typename?: 'DemandResponseEdge', cursor: string, node: { __typename?: 'DemandResponse', id: string, createdAt: any, updatedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, buyer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindDemandByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindDemandByIdQuery = { __typename?: 'Query', findDemandById?: { __typename?: 'DemandResponse', id: string, createdAt: any, updatedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, buyer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } } | null };

export type GuildFragment = { __typename?: 'GuildResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }>, productCategories: Array<{ __typename?: 'ProductCategoryResponse', id: string, name: string, slug?: string | null, position?: number | null }>, postCategories: Array<{ __typename?: 'PostCategoryResponse', id: string, name: string, slug?: string | null, description?: string | null, position?: number | null }> };

export type FindGuildsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindGuildsQuery = { __typename?: 'Query', findGuilds: { __typename?: 'PaginatedGuildsResponse', edges: Array<{ __typename?: 'GuildResponseEdge', node: { __typename?: 'GuildResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }>, productCategories: Array<{ __typename?: 'ProductCategoryResponse', id: string, name: string, slug?: string | null, position?: number | null }>, postCategories: Array<{ __typename?: 'PostCategoryResponse', id: string, name: string, slug?: string | null, description?: string | null, position?: number | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

export type FindGuildQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindGuildQuery = { __typename?: 'Query', findGuild?: { __typename?: 'GuildResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }>, productCategories: Array<{ __typename?: 'ProductCategoryResponse', id: string, name: string, slug?: string | null, position?: number | null }>, postCategories: Array<{ __typename?: 'PostCategoryResponse', id: string, name: string, slug?: string | null, description?: string | null, position?: number | null }> } | null };

export type OfferFragment = { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, seller: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } };

export type FindOffersQueryVariables = Exact<{
  productCategoryId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindOffersQuery = { __typename?: 'Query', findOffers: { __typename?: 'PaginatedOffersResponse', edges: Array<{ __typename?: 'OfferResponseEdge', cursor: string, node: { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, seller: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindOfferByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindOfferByIdQuery = { __typename?: 'Query', findOfferById: { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, seller: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } } };

export type FindOfferQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindOfferQuery = { __typename?: 'Query', findOffer: { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, name: string, slug?: string | null, description?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, seller: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } } };

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

export type SwapFragment = { __typename?: 'SwapResponse', id: string, createdAt: any, updatedAt: any, slug?: string | null, name0: string, name1: string, description0?: string | null, description1?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, proposer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } };

export type FindSwapsQueryVariables = Exact<{
  productCategoryId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindSwapsQuery = { __typename?: 'Query', findSwaps: { __typename?: 'PaginatedSwapsResponse', edges: Array<{ __typename?: 'SwapResponseEdge', cursor: string, node: { __typename?: 'SwapResponse', id: string, createdAt: any, updatedAt: any, slug?: string | null, name0: string, name1: string, description0?: string | null, description1?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, proposer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindSwapByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindSwapByIdQuery = { __typename?: 'Query', findSwapById?: { __typename?: 'SwapResponse', id: string, createdAt: any, updatedAt: any, slug?: string | null, name0: string, name1: string, description0?: string | null, description1?: string | null, price: number, priceCurrency: string, businessFunction: string, status: string, source: string, guildId: string, productCategoryId: string, brandId?: string | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string }>, proposer: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } } | null };

export type ImageFragment = { __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string, source: string };

export type RoleFragment = { __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string };

export type MemberFragment = { __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> };

export type UserFragment = { __typename?: 'UserResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean };

export type SellerFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> };

export type BuyerFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> };

export type ProposerFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> };

export type MyUserFragment = { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> };

export type FindMyUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindMyUserByIdQuery = { __typename?: 'Query', findMyUserById?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } | null };

export type FindMyUserBySocialAccountQueryVariables = Exact<{
  provider: Scalars['String']['input'];
  socialId: Scalars['String']['input'];
}>;


export type FindMyUserBySocialAccountQuery = { __typename?: 'Query', findMyUserBySocialAccount?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } | null };

export type FindMyUserBySessionQueryVariables = Exact<{
  sessionToken: Scalars['String']['input'];
}>;


export type FindMyUserBySessionQuery = { __typename?: 'Query', findMyUserBySession?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } | null };

export type FindMyUserByUsernameQueryVariables = Exact<{
  username: Scalars['ID']['input'];
}>;


export type FindMyUserByUsernameQuery = { __typename?: 'Query', findMyUserByUsername?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, members: Array<{ __typename?: 'MemberWithRolesResponse', id: string, createdAt: any, userId: string, guildId: string, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, guildId: string }> }> } | null };

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
  height
  width
  position
  type
  refId
  userId
  source
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
  guildId
}
    `;
export const MemberFragmentDoc = gql`
    fragment member on MemberWithRolesResponse {
  id
  createdAt
  userId
  guildId
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
  guildId
  productCategoryId
  buyer {
    ...buyer
  }
  brandId
}
    ${ImageFragmentDoc}
${BuyerFragmentDoc}`;
export const GuildFragmentDoc = gql`
    fragment guild on GuildResponse {
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
    guildId
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
  guildId
  productCategoryId
  seller {
    ...seller
  }
  brandId
}
    ${ImageFragmentDoc}
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
  guildId
  productCategoryId
  proposer {
    ...proposer
  }
  brandId
}
    ${ImageFragmentDoc}
${ProposerFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment user on UserResponse {
  id
  createdAt
  username
  avatarURL
  bot
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
export const FindDemandsDocument = gql`
    query findDemands($productCategoryId: ID!, $cursor: ID, $skip: Int!, $take: Int!) {
  findDemands(
    productCategoryId: $productCategoryId
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...demand
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${DemandFragmentDoc}`;

/**
 * __useFindDemandsQuery__
 *
 * To run a query within a React component, call `useFindDemandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDemandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDemandsQuery({
 *   variables: {
 *      productCategoryId: // value for 'productCategoryId'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindDemandsQuery(baseOptions: Apollo.QueryHookOptions<FindDemandsQuery, FindDemandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDemandsQuery, FindDemandsQueryVariables>(FindDemandsDocument, options);
      }
export function useFindDemandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDemandsQuery, FindDemandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDemandsQuery, FindDemandsQueryVariables>(FindDemandsDocument, options);
        }
export function useFindDemandsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindDemandsQuery, FindDemandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindDemandsQuery, FindDemandsQueryVariables>(FindDemandsDocument, options);
        }
export type FindDemandsQueryHookResult = ReturnType<typeof useFindDemandsQuery>;
export type FindDemandsLazyQueryHookResult = ReturnType<typeof useFindDemandsLazyQuery>;
export type FindDemandsSuspenseQueryHookResult = ReturnType<typeof useFindDemandsSuspenseQuery>;
export type FindDemandsQueryResult = Apollo.QueryResult<FindDemandsQuery, FindDemandsQueryVariables>;
export const FindDemandByIdDocument = gql`
    query findDemandById($id: ID!) {
  findDemandById(id: $id) {
    ...demand
  }
}
    ${DemandFragmentDoc}`;

/**
 * __useFindDemandByIdQuery__
 *
 * To run a query within a React component, call `useFindDemandByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDemandByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDemandByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindDemandByIdQuery(baseOptions: Apollo.QueryHookOptions<FindDemandByIdQuery, FindDemandByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDemandByIdQuery, FindDemandByIdQueryVariables>(FindDemandByIdDocument, options);
      }
export function useFindDemandByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDemandByIdQuery, FindDemandByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDemandByIdQuery, FindDemandByIdQueryVariables>(FindDemandByIdDocument, options);
        }
export function useFindDemandByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindDemandByIdQuery, FindDemandByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindDemandByIdQuery, FindDemandByIdQueryVariables>(FindDemandByIdDocument, options);
        }
export type FindDemandByIdQueryHookResult = ReturnType<typeof useFindDemandByIdQuery>;
export type FindDemandByIdLazyQueryHookResult = ReturnType<typeof useFindDemandByIdLazyQuery>;
export type FindDemandByIdSuspenseQueryHookResult = ReturnType<typeof useFindDemandByIdSuspenseQuery>;
export type FindDemandByIdQueryResult = Apollo.QueryResult<FindDemandByIdQuery, FindDemandByIdQueryVariables>;
export const FindGuildsDocument = gql`
    query FindGuilds($cursor: ID, $skip: Int! = 1, $take: Int!) {
  findGuilds(cursor: $cursor, skip: $skip, take: $take) {
    edges {
      node {
        ...guild
      }
    }
    pageInfo {
      endCursor
    }
  }
}
    ${GuildFragmentDoc}`;

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
export const FindGuildDocument = gql`
    query findGuild($slug: String!) {
  findGuild(slug: $slug) {
    ...guild
  }
}
    ${GuildFragmentDoc}`;

/**
 * __useFindGuildQuery__
 *
 * To run a query within a React component, call `useFindGuildQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGuildQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGuildQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindGuildQuery(baseOptions: Apollo.QueryHookOptions<FindGuildQuery, FindGuildQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGuildQuery, FindGuildQueryVariables>(FindGuildDocument, options);
      }
export function useFindGuildLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGuildQuery, FindGuildQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGuildQuery, FindGuildQueryVariables>(FindGuildDocument, options);
        }
export function useFindGuildSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindGuildQuery, FindGuildQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGuildQuery, FindGuildQueryVariables>(FindGuildDocument, options);
        }
export type FindGuildQueryHookResult = ReturnType<typeof useFindGuildQuery>;
export type FindGuildLazyQueryHookResult = ReturnType<typeof useFindGuildLazyQuery>;
export type FindGuildSuspenseQueryHookResult = ReturnType<typeof useFindGuildSuspenseQuery>;
export type FindGuildQueryResult = Apollo.QueryResult<FindGuildQuery, FindGuildQueryVariables>;
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
        ...offer
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${OfferFragmentDoc}`;

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
export const FindOfferByIdDocument = gql`
    query findOfferById($id: ID!) {
  findOfferById(id: $id) {
    ...offer
  }
}
    ${OfferFragmentDoc}`;

/**
 * __useFindOfferByIdQuery__
 *
 * To run a query within a React component, call `useFindOfferByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOfferByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOfferByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOfferByIdQuery(baseOptions: Apollo.QueryHookOptions<FindOfferByIdQuery, FindOfferByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOfferByIdQuery, FindOfferByIdQueryVariables>(FindOfferByIdDocument, options);
      }
export function useFindOfferByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOfferByIdQuery, FindOfferByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOfferByIdQuery, FindOfferByIdQueryVariables>(FindOfferByIdDocument, options);
        }
export function useFindOfferByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindOfferByIdQuery, FindOfferByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOfferByIdQuery, FindOfferByIdQueryVariables>(FindOfferByIdDocument, options);
        }
export type FindOfferByIdQueryHookResult = ReturnType<typeof useFindOfferByIdQuery>;
export type FindOfferByIdLazyQueryHookResult = ReturnType<typeof useFindOfferByIdLazyQuery>;
export type FindOfferByIdSuspenseQueryHookResult = ReturnType<typeof useFindOfferByIdSuspenseQuery>;
export type FindOfferByIdQueryResult = Apollo.QueryResult<FindOfferByIdQuery, FindOfferByIdQueryVariables>;
export const FindOfferDocument = gql`
    query findOffer($slug: String!) {
  findOffer(slug: $slug) {
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
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindOfferQuery(baseOptions: Apollo.QueryHookOptions<FindOfferQuery, FindOfferQueryVariables>) {
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
export function useFindSessionQuery(baseOptions: Apollo.QueryHookOptions<FindSessionQuery, FindSessionQueryVariables>) {
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
export const FindSwapsDocument = gql`
    query findSwaps($productCategoryId: ID!, $cursor: ID, $skip: Int!, $take: Int!) {
  findSwaps(
    productCategoryId: $productCategoryId
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...swap
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${SwapFragmentDoc}`;

/**
 * __useFindSwapsQuery__
 *
 * To run a query within a React component, call `useFindSwapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSwapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSwapsQuery({
 *   variables: {
 *      productCategoryId: // value for 'productCategoryId'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindSwapsQuery(baseOptions: Apollo.QueryHookOptions<FindSwapsQuery, FindSwapsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSwapsQuery, FindSwapsQueryVariables>(FindSwapsDocument, options);
      }
export function useFindSwapsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSwapsQuery, FindSwapsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSwapsQuery, FindSwapsQueryVariables>(FindSwapsDocument, options);
        }
export function useFindSwapsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindSwapsQuery, FindSwapsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSwapsQuery, FindSwapsQueryVariables>(FindSwapsDocument, options);
        }
export type FindSwapsQueryHookResult = ReturnType<typeof useFindSwapsQuery>;
export type FindSwapsLazyQueryHookResult = ReturnType<typeof useFindSwapsLazyQuery>;
export type FindSwapsSuspenseQueryHookResult = ReturnType<typeof useFindSwapsSuspenseQuery>;
export type FindSwapsQueryResult = Apollo.QueryResult<FindSwapsQuery, FindSwapsQueryVariables>;
export const FindSwapByIdDocument = gql`
    query findSwapById($id: ID!) {
  findSwapById(id: $id) {
    ...swap
  }
}
    ${SwapFragmentDoc}`;

/**
 * __useFindSwapByIdQuery__
 *
 * To run a query within a React component, call `useFindSwapByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSwapByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSwapByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindSwapByIdQuery(baseOptions: Apollo.QueryHookOptions<FindSwapByIdQuery, FindSwapByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSwapByIdQuery, FindSwapByIdQueryVariables>(FindSwapByIdDocument, options);
      }
export function useFindSwapByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSwapByIdQuery, FindSwapByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSwapByIdQuery, FindSwapByIdQueryVariables>(FindSwapByIdDocument, options);
        }
export function useFindSwapByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindSwapByIdQuery, FindSwapByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSwapByIdQuery, FindSwapByIdQueryVariables>(FindSwapByIdDocument, options);
        }
export type FindSwapByIdQueryHookResult = ReturnType<typeof useFindSwapByIdQuery>;
export type FindSwapByIdLazyQueryHookResult = ReturnType<typeof useFindSwapByIdLazyQuery>;
export type FindSwapByIdSuspenseQueryHookResult = ReturnType<typeof useFindSwapByIdSuspenseQuery>;
export type FindSwapByIdQueryResult = Apollo.QueryResult<FindSwapByIdQuery, FindSwapByIdQueryVariables>;
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
    ...myUser
  }
}
    ${MyUserFragmentDoc}`;

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
export const FindMyUserBySessionDocument = gql`
    query findMyUserBySession($sessionToken: String!) {
  findMyUserBySession(sessionToken: $sessionToken) {
    ...myUser
  }
}
    ${MyUserFragmentDoc}`;

/**
 * __useFindMyUserBySessionQuery__
 *
 * To run a query within a React component, call `useFindMyUserBySessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyUserBySessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyUserBySessionQuery({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useFindMyUserBySessionQuery(baseOptions: Apollo.QueryHookOptions<FindMyUserBySessionQuery, FindMyUserBySessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyUserBySessionQuery, FindMyUserBySessionQueryVariables>(FindMyUserBySessionDocument, options);
      }
export function useFindMyUserBySessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyUserBySessionQuery, FindMyUserBySessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyUserBySessionQuery, FindMyUserBySessionQueryVariables>(FindMyUserBySessionDocument, options);
        }
export function useFindMyUserBySessionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindMyUserBySessionQuery, FindMyUserBySessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyUserBySessionQuery, FindMyUserBySessionQueryVariables>(FindMyUserBySessionDocument, options);
        }
export type FindMyUserBySessionQueryHookResult = ReturnType<typeof useFindMyUserBySessionQuery>;
export type FindMyUserBySessionLazyQueryHookResult = ReturnType<typeof useFindMyUserBySessionLazyQuery>;
export type FindMyUserBySessionSuspenseQueryHookResult = ReturnType<typeof useFindMyUserBySessionSuspenseQuery>;
export type FindMyUserBySessionQueryResult = Apollo.QueryResult<FindMyUserBySessionQuery, FindMyUserBySessionQueryVariables>;
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
export function useFindMyUserByUsernameQuery(baseOptions: Apollo.QueryHookOptions<FindMyUserByUsernameQuery, FindMyUserByUsernameQueryVariables>) {
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