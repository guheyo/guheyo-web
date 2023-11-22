/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
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
  members?: Maybe<Array<MemberWithRolesResponse>>;
  socialAccounts?: Maybe<Array<SocialAccountResponse>>;
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
  seller: UserWithMembersResponse;
  sellerId: Scalars['ID']['output'];
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
  socialId: Scalars['ID']['input'];
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

export type UserWithMembersResponse = {
  __typename?: 'UserWithMembersResponse';
  avatarURL?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  members?: Maybe<Array<MemberWithRolesResponse>>;
  username: Scalars['String']['output'];
};
