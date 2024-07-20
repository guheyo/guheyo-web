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

export type AuctionInteractionItemResponse = BidResponse | CommentWithAuthorResponse;

export type AuctionInteractionItemResponseEdge = {
  __typename?: 'AuctionInteractionItemResponseEdge';
  cursor: Scalars['String']['output'];
  node: AuctionInteractionItemResponse;
};

export type AuctionPreviewResponse = {
  __typename?: 'AuctionPreviewResponse';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currentBidPrice?: Maybe<Scalars['Int']['output']>;
  extendedEndDate: Scalars['DateTime']['output'];
  hammerPrice: Scalars['Int']['output'];
  hasSubmittedReview?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  originalEndDate: Scalars['DateTime']['output'];
  post: PostPreviewWithUserResponse;
  shippingCost: Scalars['Int']['output'];
  shippingType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type AuctionPreviewResponseEdge = {
  __typename?: 'AuctionPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: AuctionPreviewResponse;
};

export type AuctionResponse = {
  __typename?: 'AuctionResponse';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currentBidPrice?: Maybe<Scalars['Int']['output']>;
  extendedEndDate: Scalars['DateTime']['output'];
  hammerPrice: Scalars['Int']['output'];
  hasSubmittedReview?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  originalEndDate: Scalars['DateTime']['output'];
  post: PostResponse;
  shippingCost: Scalars['Int']['output'];
  shippingType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  about?: Maybe<Scalars['String']['output']>;
  avatarURL?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  roles: Array<RoleResponse>;
  socialAccounts: Array<SocialAccountWithoutAuthResponse>;
  username: Scalars['String']['output'];
};

export type BidCountResponse = {
  __typename?: 'BidCountResponse';
  auctionId: Scalars['ID']['output'];
  count: Scalars['Int']['output'];
};

export type BidResponse = {
  __typename?: 'BidResponse';
  auctionId: Scalars['ID']['output'];
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  status: Scalars['String']['output'];
  user: AuthorResponse;
};

export type BidResponseEdge = {
  __typename?: 'BidResponseEdge';
  cursor: Scalars['String']['output'];
  node: BidResponse;
};

export type BumpOfferInput = {
  id: Scalars['ID']['input'];
  newPrice: Scalars['Int']['input'];
  offerId: Scalars['ID']['input'];
};

export type CancelBidInput = {
  auctionId: Scalars['String']['input'];
  bidId: Scalars['String']['input'];
};

export type CancelBidResponse = {
  __typename?: 'CancelBidResponse';
  canceledAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type CancelReactionInput = {
  commentId?: InputMaybe<Scalars['ID']['input']>;
  emojiId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
};

export type CanceledReactionResponse = {
  __typename?: 'CanceledReactionResponse';
  commentId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  postId: Scalars['ID']['output'];
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

export type CommentCountResponse = {
  __typename?: 'CommentCountResponse';
  count: Scalars['Int']['output'];
  postId: Scalars['ID']['output'];
};

export type CommentReportInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  reportId: Scalars['ID']['input'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  postId: Scalars['ID']['output'];
  reactions: Array<ReactionResponse>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentWithAuthorResponse = {
  __typename?: 'CommentWithAuthorResponse';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  parentId?: Maybe<Scalars['ID']['output']>;
  postId: Scalars['ID']['output'];
  reactions: Array<ReactionResponse>;
  updatedAt: Scalars['DateTime']['output'];
  user: AuthorResponse;
};

export type CommentWithAuthorResponseEdge = {
  __typename?: 'CommentWithAuthorResponseEdge';
  cursor: Scalars['String']['output'];
  node: CommentWithAuthorResponse;
};

export type CreateAuctionInput = {
  content: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  extendedEndDate: Scalars['DateTime']['input'];
  id: Scalars['ID']['input'];
  originalEndDate: Scalars['DateTime']['input'];
  post: CreatePostInput;
  shippingCost: Scalars['Int']['input'];
  shippingType: Scalars['String']['input'];
  status?: Scalars['String']['input'];
};

export type CreateCommentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createUserImageInputs: Array<CreateUserImageInput>;
};

export type CreateOfferInput = {
  businessFunction: Scalars['String']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name0?: InputMaybe<Scalars['String']['input']>;
  name1?: InputMaybe<Scalars['String']['input']>;
  post: CreatePostInput;
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
  shippingCost: Scalars['Int']['input'];
  shippingType: Scalars['String']['input'];
  status?: Scalars['String']['input'];
};

export type CreatePostInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateReactionInput = {
  commentId?: InputMaybe<Scalars['ID']['input']>;
  emojiId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
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
};

export type CreateThreadInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  post: CreatePostInput;
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
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserReviewInput = {
  auctionId?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  offerId?: InputMaybe<Scalars['ID']['input']>;
  post: CreatePostInput;
  rating: Scalars['Int']['input'];
  reviewedUserId: Scalars['ID']['input'];
  status?: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type DeleteCommentInput = {
  id: Scalars['ID']['input'];
};

export type DeletedCommentResponse = {
  __typename?: 'DeletedCommentResponse';
  id: Scalars['ID']['output'];
};

export type EmojiResponse = {
  __typename?: 'EmojiResponse';
  groupId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type FindAuctionInteractionItemsOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindAuctionInteractionItemsWhereInput = {
  auctionId?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  view?: InputMaybe<Scalars['String']['input']>;
};

export type FindAuctionPreviewsOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  currentBidPrice?: InputMaybe<Scalars['String']['input']>;
  extendedEndDate?: InputMaybe<Scalars['String']['input']>;
};

export type FindAuctionPreviewsWhereInput = {
  bidderId?: InputMaybe<Scalars['ID']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['JSON']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  pending?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FindBiddersOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindBiddersWhereInput = {
  auctionId: Scalars['ID']['input'];
};

export type FindBidsOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindBidsWhereInput = {
  auctionId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FindCommentsOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindCommentsWhereInput = {
  postId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FindOfferPreviewsOrderByInput = {
  bumpedAt?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
};

export type FindOfferPreviewsWhereInput = {
  bumpedAt?: InputMaybe<Scalars['JSON']['input']>;
  businessFunction?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  pending?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FindReportPreviewsOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindReportPreviewsWhereInput = {
  createdAt?: InputMaybe<Scalars['JSON']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
  reportedUserId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FindThreadPreviewsOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindThreadPreviewsWhereInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  pending?: InputMaybe<Scalars['String']['input']>;
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FindUserReviewPreviewsOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindUserReviewPreviewsWhereInput = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  pending?: InputMaybe<Scalars['String']['input']>;
  reviewedUserId?: InputMaybe<Scalars['ID']['input']>;
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>;
  tagType?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type FindUsersOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type FindUsersWhereInput = {
  userId?: InputMaybe<Scalars['ID']['input']>;
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
  description?: Maybe<Scalars['String']['output']>;
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

export type LastReportResponse = {
  __typename?: 'LastReportResponse';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type LinkSocialProfileInput = {
  provider: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bumpOffer: OfferPreviewResponse;
  cancelBid: Scalars['String']['output'];
  cancelReaction: Scalars['String']['output'];
  commentReport: ReportCommentResponse;
  createAuction: Scalars['String']['output'];
  createComment: Scalars['String']['output'];
  createGroup: Scalars['String']['output'];
  createManyUserImage: Scalars['String']['output'];
  createOffer: Scalars['String']['output'];
  createReaction: Scalars['String']['output'];
  createReport: Scalars['String']['output'];
  createRole: Scalars['String']['output'];
  createSignedUrl: SignedUrlResponse;
  createThread: Scalars['String']['output'];
  createUserImage: Scalars['String']['output'];
  createUserReview: Scalars['String']['output'];
  deleteComment: Scalars['String']['output'];
  deleteOffer: Scalars['String']['output'];
  deleteRole: Scalars['String']['output'];
  deleteThread: Scalars['String']['output'];
  deleteUserImage: Scalars['String']['output'];
  deleteUserReview: Scalars['String']['output'];
  linkSocialProfile: Scalars['String']['output'];
  logout: SocialUserResponse;
  placeBid: Scalars['String']['output'];
  reGenerateTokens: JwtResponse;
  refreshTokens: JwtResponse;
  updateAuction: Scalars['String']['output'];
  updateComment: Scalars['String']['output'];
  updateGroup: Scalars['String']['output'];
  updateOffer: OfferPreviewResponse;
  updateReportComment: ReportCommentResponse;
  updateRole: Scalars['String']['output'];
  updateThread: Scalars['String']['output'];
  updateUser: Scalars['String']['output'];
  updateUserImage: Scalars['String']['output'];
};


export type MutationBumpOfferArgs = {
  input: BumpOfferInput;
};


export type MutationCancelBidArgs = {
  input: CancelBidInput;
};


export type MutationCancelReactionArgs = {
  input: CancelReactionInput;
};


export type MutationCommentReportArgs = {
  input: CommentReportInput;
};


export type MutationCreateAuctionArgs = {
  input: CreateAuctionInput;
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


export type MutationCreateReactionArgs = {
  input: CreateReactionInput;
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


export type MutationCreateThreadArgs = {
  input: CreateThreadInput;
};


export type MutationCreateUserImageArgs = {
  input: CreateUserImageInput;
};


export type MutationCreateUserReviewArgs = {
  input: CreateUserReviewInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteOfferArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteThreadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLinkSocialProfileArgs = {
  input: LinkSocialProfileInput;
};


export type MutationPlaceBidArgs = {
  input: PlaceBidInput;
};


export type MutationUpdateAuctionArgs = {
  input: UpdateAuctionInput;
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


export type MutationUpdateThreadArgs = {
  input: UpdateThreadInput;
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
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roles: Array<RoleResponse>;
  socialAccounts: Array<SocialAccountResponse>;
  username: Scalars['String']['output'];
};

export type OfferPreviewResponse = {
  __typename?: 'OfferPreviewResponse';
  bumpedAt: Scalars['DateTime']['output'];
  businessFunction: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  hasSubmittedReview?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name0?: Maybe<Scalars['String']['output']>;
  name1?: Maybe<Scalars['String']['output']>;
  post: PostPreviewWithUserResponse;
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
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  hasSubmittedReview?: Maybe<Scalars['Boolean']['output']>;
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

export type PaginatedAuctionInteractionItemsResponse = {
  __typename?: 'PaginatedAuctionInteractionItemsResponse';
  edges: Array<AuctionInteractionItemResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedAuctionPreviewsResponse = {
  __typename?: 'PaginatedAuctionPreviewsResponse';
  edges: Array<AuctionPreviewResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedBidsResponse = {
  __typename?: 'PaginatedBidsResponse';
  edges: Array<BidResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedCommentsResponse = {
  __typename?: 'PaginatedCommentsResponse';
  edges: Array<CommentWithAuthorResponseEdge>;
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

export type PaginatedReportPreviewsResponse = {
  __typename?: 'PaginatedReportPreviewsResponse';
  edges: Array<ReportPreviewResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedThreadPreviewsResponse = {
  __typename?: 'PaginatedThreadPreviewsResponse';
  edges: Array<ThreadPreviewResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedUserReviewPreviewsResponse = {
  __typename?: 'PaginatedUserReviewPreviewsResponse';
  edges: Array<UserReviewPreviewResponseEdge>;
  pageInfo: PageInfo;
};

export type PaginatedUsersResponse = {
  __typename?: 'PaginatedUsersResponse';
  edges: Array<UserResponseEdge>;
  pageInfo: PageInfo;
};

export type PlaceBidInput = {
  auctionId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  price: Scalars['Int']['input'];
  priceCurrency: Scalars['String']['input'];
};

export type PostPreviewWithAuthorResponse = {
  __typename?: 'PostPreviewWithAuthorResponse';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  category?: Maybe<CategoryResponse>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  pending?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<TagResponse>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: AuthorResponse;
};

export type PostPreviewWithUserResponse = {
  __typename?: 'PostPreviewWithUserResponse';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  category?: Maybe<CategoryResponse>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  pending?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<TagResponse>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserResponse;
};

export type PostPreviewWithoutUserResponse = {
  __typename?: 'PostPreviewWithoutUserResponse';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  category?: Maybe<CategoryResponse>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  pending?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<TagResponse>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostResponse = {
  __typename?: 'PostResponse';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  category?: Maybe<CategoryResponse>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  group: GroupProfileResponse;
  id: Scalars['ID']['output'];
  images: Array<UserImageResponse>;
  pending?: Maybe<Scalars['String']['output']>;
  reportCount: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<TagResponse>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: AuthorResponse;
};

export type Query = {
  __typename?: 'Query';
  findAuction?: Maybe<AuctionResponse>;
  findAuctionInteractionItems: PaginatedAuctionInteractionItemsResponse;
  findAuctionPreviews: PaginatedAuctionPreviewsResponse;
  findAuthor?: Maybe<AuthorResponse>;
  findBidCount: BidCountResponse;
  findBidders: PaginatedUsersResponse;
  findBids: PaginatedBidsResponse;
  findComment?: Maybe<CommentResponse>;
  findCommentCount: CommentCountResponse;
  findComments: PaginatedCommentsResponse;
  findEmojis: Array<EmojiResponse>;
  findGroup?: Maybe<GroupResponse>;
  findGroupPreviews: Array<GroupPreviewResponse>;
  findGroupProfiles: PaginatedGroupProfilesResponse;
  findGroups: PaginatedGroupsResponse;
  findLastReport: LastReportResponse;
  findMyUser?: Maybe<MyUserResponse>;
  findOffer?: Maybe<OfferResponse>;
  findOfferCount: Scalars['Float']['output'];
  findOfferPreviews: PaginatedOfferPreviewsResponse;
  findPostPreview: PostPreviewWithUserResponse;
  findReactions: Array<ReactionResponse>;
  findReport: ReportResponse;
  findReportComment: ReportCommentResponse;
  findReportPreviews: PaginatedReportPreviewsResponse;
  findRoleById?: Maybe<RoleResponse>;
  findTags: Array<TagResponse>;
  findTerm?: Maybe<TermResponse>;
  findThread?: Maybe<ThreadResponse>;
  findThreadPreviews: PaginatedThreadPreviewsResponse;
  findUser?: Maybe<UserResponse>;
  findUserImageById?: Maybe<UserImageResponse>;
  findUserImagesOfRef: Array<UserImageResponse>;
  findUserReview?: Maybe<UserReviewResponse>;
  findUserReviewPreviews: PaginatedUserReviewPreviewsResponse;
  findUsers: PaginatedUsersResponse;
  findVersion?: Maybe<VersionResponse>;
  findVersionPreview?: Maybe<VersionPreviewResponse>;
};


export type QueryFindAuctionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindAuctionInteractionItemsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindAuctionInteractionItemsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindAuctionInteractionItemsWhereInput>;
};


export type QueryFindAuctionPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindAuctionPreviewsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindAuctionPreviewsWhereInput>;
};


export type QueryFindAuthorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindBidCountArgs = {
  auctionId: Scalars['ID']['input'];
};


export type QueryFindBiddersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindBiddersOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where: FindBiddersWhereInput;
};


export type QueryFindBidsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindBidsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindBidsWhereInput>;
};


export type QueryFindCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFindCommentCountArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryFindCommentsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindCommentsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindCommentsWhereInput>;
};


export type QueryFindEmojisArgs = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
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
  target?: InputMaybe<Scalars['String']['input']>;
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
  orderBy?: InputMaybe<FindOfferPreviewsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindOfferPreviewsWhereInput>;
};


export type QueryFindPostPreviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindReactionsArgs = {
  commentId?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
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
  orderBy?: InputMaybe<FindReportPreviewsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindReportPreviewsWhereInput>;
};


export type QueryFindRoleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindTermArgs = {
  name: Scalars['String']['input'];
};


export type QueryFindThreadArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindThreadPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindThreadPreviewsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindThreadPreviewsWhereInput>;
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


export type QueryFindUserReviewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindUserReviewPreviewsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindUserReviewPreviewsOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindUserReviewPreviewsWhereInput>;
};


export type QueryFindUsersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<FindUsersOrderByInput>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FindUsersWhereInput>;
};


export type QueryFindVersionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindVersionPreviewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReactionResponse = {
  __typename?: 'ReactionResponse';
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  commentId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  emoji: EmojiResponse;
  id: Scalars['ID']['output'];
  postId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type ReportCommentResponse = {
  __typename?: 'ReportCommentResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  reportId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
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
  reportedUser: AuthorResponse;
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
  reportedPost?: Maybe<PostPreviewWithoutUserResponse>;
  reportedPostId?: Maybe<Scalars['ID']['output']>;
  reportedUser: AuthorResponse;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: VersionResponse;
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  groupId?: Maybe<Scalars['ID']['output']>;
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

export type Subscription = {
  __typename?: 'Subscription';
  auctionUpdated: UpdatedAuctionResponse;
  bidCanceled: CancelBidResponse;
  bidPlaced: BidResponse;
  commentCreated: CommentWithAuthorResponse;
  commentDeleted: DeletedCommentResponse;
  commentUpdated: UpdatedCommentResponse;
  reactionCanceled: CanceledReactionResponse;
  reactionCreated: ReactionResponse;
};


export type SubscriptionAuctionUpdatedArgs = {
  auctionId: Scalars['ID']['input'];
};


export type SubscriptionBidCanceledArgs = {
  auctionId: Scalars['ID']['input'];
};


export type SubscriptionBidPlacedArgs = {
  auctionId: Scalars['ID']['input'];
};


export type SubscriptionCommentCreatedArgs = {
  postId: Scalars['ID']['input'];
};


export type SubscriptionCommentDeletedArgs = {
  postId: Scalars['ID']['input'];
};


export type SubscriptionCommentUpdatedArgs = {
  postId: Scalars['ID']['input'];
};


export type SubscriptionReactionCanceledArgs = {
  postId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};


export type SubscriptionReactionCreatedArgs = {
  postId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
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

export type ThreadPreviewResponse = {
  __typename?: 'ThreadPreviewResponse';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  post: PostPreviewWithAuthorResponse;
  updatedAt: Scalars['DateTime']['output'];
};

export type ThreadPreviewResponseEdge = {
  __typename?: 'ThreadPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: ThreadPreviewResponse;
};

export type ThreadResponse = {
  __typename?: 'ThreadResponse';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  post: PostResponse;
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateAuctionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  post: UpdatePostInput;
};

export type UpdateCommentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
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
  content?: InputMaybe<Scalars['String']['input']>;
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
  pending?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
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

export type UpdateThreadInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  post: UpdatePostInput;
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

export type UpdatedAuctionResponse = {
  __typename?: 'UpdatedAuctionResponse';
  extendedEndDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdatedCommentResponse = {
  __typename?: 'UpdatedCommentResponse';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
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

export type UserReviewPreviewResponse = {
  __typename?: 'UserReviewPreviewResponse';
  auctionId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  offerId?: Maybe<Scalars['String']['output']>;
  post: PostPreviewWithAuthorResponse;
  rating: Scalars['Int']['output'];
  reviewedUser: AuthorResponse;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserReviewPreviewResponseEdge = {
  __typename?: 'UserReviewPreviewResponseEdge';
  cursor: Scalars['String']['output'];
  node: UserReviewPreviewResponse;
};

export type UserReviewResponse = {
  __typename?: 'UserReviewResponse';
  auctionId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  offerId?: Maybe<Scalars['String']['output']>;
  post: PostResponse;
  rating: Scalars['Int']['output'];
  reviewedUser: AuthorResponse;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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

export type AuctionFragment = { __typename?: 'AuctionResponse', id: string, createdAt: any, updatedAt: any, originalEndDate: any, extendedEndDate: any, version: number, content?: string | null, currentBidPrice?: number | null, hammerPrice: number, shippingCost: number, shippingType: string, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } };

export type AuctionPreviewFragment = { __typename?: 'AuctionPreviewResponse', id: string, createdAt: any, updatedAt: any, originalEndDate: any, extendedEndDate: any, version: number, content?: string | null, currentBidPrice?: number | null, hammerPrice: number, shippingCost: number, shippingType: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } };

export type UpdatedAuctionResponseFragment = { __typename?: 'UpdatedAuctionResponse', id: string, updatedAt: any, extendedEndDate: any, status: string };

export type FindAuctionPreviewsQueryVariables = Exact<{
  where?: InputMaybe<FindAuctionPreviewsWhereInput>;
  orderBy?: InputMaybe<FindAuctionPreviewsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindAuctionPreviewsQuery = { __typename?: 'Query', findAuctionPreviews: { __typename?: 'PaginatedAuctionPreviewsResponse', edges: Array<{ __typename?: 'AuctionPreviewResponseEdge', cursor: string, node: { __typename?: 'AuctionPreviewResponse', id: string, createdAt: any, updatedAt: any, originalEndDate: any, extendedEndDate: any, version: number, content?: string | null, currentBidPrice?: number | null, hammerPrice: number, shippingCost: number, shippingType: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindAuctionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindAuctionQuery = { __typename?: 'Query', findAuction?: { __typename?: 'AuctionResponse', id: string, createdAt: any, updatedAt: any, originalEndDate: any, extendedEndDate: any, version: number, content?: string | null, currentBidPrice?: number | null, hammerPrice: number, shippingCost: number, shippingType: string, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } } | null };

export type FindAuctionInteractionItemsQueryVariables = Exact<{
  where?: InputMaybe<FindAuctionInteractionItemsWhereInput>;
  orderBy?: InputMaybe<FindAuctionInteractionItemsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindAuctionInteractionItemsQuery = { __typename?: 'Query', findAuctionInteractionItems: { __typename?: 'PaginatedAuctionInteractionItemsResponse', edges: Array<{ __typename?: 'AuctionInteractionItemResponseEdge', cursor: string, node: { __typename: 'BidResponse', id: string, createdAt: any, canceledAt?: any | null, price: number, priceCurrency: string, auctionId: string, status: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } } | { __typename: 'CommentWithAuthorResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content?: string | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, reactions: Array<{ __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } }>, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindBiddersQueryVariables = Exact<{
  where: FindBiddersWhereInput;
  orderBy?: InputMaybe<FindBiddersOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindBiddersQuery = { __typename?: 'Query', findBidders: { __typename?: 'PaginatedUsersResponse', edges: Array<{ __typename?: 'UserResponseEdge', cursor: string, node: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type CreateAuctionMutationVariables = Exact<{
  input: CreateAuctionInput;
}>;


export type CreateAuctionMutation = { __typename?: 'Mutation', createAuction: string };

export type AuctionUpdatedSubscriptionVariables = Exact<{
  auctionId: Scalars['ID']['input'];
}>;


export type AuctionUpdatedSubscription = { __typename?: 'Subscription', auctionUpdated: { __typename?: 'UpdatedAuctionResponse', id: string, updatedAt: any, extendedEndDate: any, status: string } };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: { __typename?: 'JwtResponse', accessToken: string, refreshToken: string } };

export type ReGenerateTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type ReGenerateTokensMutation = { __typename?: 'Mutation', reGenerateTokens: { __typename?: 'JwtResponse', accessToken: string, refreshToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'SocialUserResponse', provider: string, socialId: string } };

export type BidFragment = { __typename?: 'BidResponse', id: string, createdAt: any, canceledAt?: any | null, price: number, priceCurrency: string, auctionId: string, status: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } };

export type BidCountFragment = { __typename?: 'BidCountResponse', auctionId: string, count: number };

export type FindBidsQueryVariables = Exact<{
  where?: InputMaybe<FindBidsWhereInput>;
  orderBy?: InputMaybe<FindBidsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindBidsQuery = { __typename?: 'Query', findBids: { __typename?: 'PaginatedBidsResponse', edges: Array<{ __typename?: 'BidResponseEdge', cursor: string, node: { __typename?: 'BidResponse', id: string, createdAt: any, canceledAt?: any | null, price: number, priceCurrency: string, auctionId: string, status: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindBidCountQueryVariables = Exact<{
  auctionId: Scalars['ID']['input'];
}>;


export type FindBidCountQuery = { __typename?: 'Query', findBidCount: { __typename?: 'BidCountResponse', auctionId: string, count: number } };

export type PlaceBidMutationVariables = Exact<{
  input: PlaceBidInput;
}>;


export type PlaceBidMutation = { __typename?: 'Mutation', placeBid: string };

export type CancelBidMutationVariables = Exact<{
  input: CancelBidInput;
}>;


export type CancelBidMutation = { __typename?: 'Mutation', cancelBid: string };

export type BidPlacedSubscriptionVariables = Exact<{
  auctionId: Scalars['ID']['input'];
}>;


export type BidPlacedSubscription = { __typename?: 'Subscription', bidPlaced: { __typename?: 'BidResponse', id: string, createdAt: any, canceledAt?: any | null, price: number, priceCurrency: string, auctionId: string, status: string, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } } };

export type BidCanceledSubscriptionVariables = Exact<{
  auctionId: Scalars['ID']['input'];
}>;


export type BidCanceledSubscription = { __typename?: 'Subscription', bidCanceled: { __typename?: 'CancelBidResponse', id: string, canceledAt: any } };

export type CategoryFragment = { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null };

export type CommentFragment = { __typename?: 'CommentResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content?: string | null, reactions: Array<{ __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } }> };

export type CommentWithAuthorFragment = { __typename?: 'CommentWithAuthorResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content?: string | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, reactions: Array<{ __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } }>, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> };

export type CommentCountFragment = { __typename?: 'CommentCountResponse', postId: string, count: number };

export type UpdatedCommentResponseFragment = { __typename?: 'UpdatedCommentResponse', id: string, updatedAt: any, content: string };

export type DeletedCommentResponseFragment = { __typename?: 'DeletedCommentResponse', id: string };

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: string };

export type UpdateCommentMutationVariables = Exact<{
  input: UpdateCommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: string };

export type DeleteCommentMutationVariables = Exact<{
  input: DeleteCommentInput;
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: string };

export type FindCommentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FindCommentQuery = { __typename?: 'Query', findComment?: { __typename?: 'CommentResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content?: string | null, reactions: Array<{ __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } }> } | null };

export type FindCommentsQueryVariables = Exact<{
  where?: InputMaybe<FindCommentsWhereInput>;
  orderBy?: InputMaybe<FindCommentsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindCommentsQuery = { __typename?: 'Query', findComments: { __typename?: 'PaginatedCommentsResponse', edges: Array<{ __typename?: 'CommentWithAuthorResponseEdge', cursor: string, node: { __typename?: 'CommentWithAuthorResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content?: string | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, reactions: Array<{ __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } }>, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindCommentCountQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type FindCommentCountQuery = { __typename?: 'Query', findCommentCount: { __typename?: 'CommentCountResponse', postId: string, count: number } };

export type CommentCreatedSubscriptionVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type CommentCreatedSubscription = { __typename?: 'Subscription', commentCreated: { __typename?: 'CommentWithAuthorResponse', id: string, createdAt: any, updatedAt: any, parentId?: string | null, postId: string, content?: string | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, reactions: Array<{ __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } }>, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> } };

export type CommentUpdatedSubscriptionVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type CommentUpdatedSubscription = { __typename?: 'Subscription', commentUpdated: { __typename?: 'UpdatedCommentResponse', id: string, updatedAt: any, content: string } };

export type CommentDeletedSubscriptionVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type CommentDeletedSubscription = { __typename?: 'Subscription', commentDeleted: { __typename?: 'DeletedCommentResponse', id: string } };

export type EmojiFragment = { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null };

export type FindEmojisQueryVariables = Exact<{
  groupId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FindEmojisQuery = { __typename?: 'Query', findEmojis: Array<{ __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null }> };

export type GroupFragment = { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }>, categories: Array<{ __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }> };

export type GroupProfileFragment = { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null };

export type GroupPreviewFragment = { __typename?: 'GroupPreviewResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position: number, sells: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } }>, buys: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } }> };

export type FindGroupsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindGroupsQuery = { __typename?: 'Query', findGroups: { __typename?: 'PaginatedGroupsResponse', edges: Array<{ __typename?: 'GroupResponseEdge', node: { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }>, categories: Array<{ __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } };

export type FindGroupProfilesQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip?: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindGroupProfilesQuery = { __typename?: 'Query', findGroupProfiles: { __typename?: 'PaginatedGroupProfilesResponse', edges: Array<{ __typename?: 'GroupProfileResponseEdge', cursor: string, node: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindGroupQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindGroupQuery = { __typename?: 'Query', findGroup?: { __typename?: 'GroupResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position?: number | null, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }>, categories: Array<{ __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null }> } | null };

export type FindGroupPreviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindGroupPreviewsQuery = { __typename?: 'Query', findGroupPreviews: Array<{ __typename?: 'GroupPreviewResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null, position: number, sells: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } }>, buys: Array<{ __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } }> }> };

export type OfferFragment = { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, totalPrice: number, shippingCost: number, shippingType: string, businessFunction: string, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } };

export type OfferPreviewFragment = { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } };

export type FindOfferPreviewsQueryVariables = Exact<{
  where?: InputMaybe<FindOfferPreviewsWhereInput>;
  orderBy?: InputMaybe<FindOfferPreviewsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindOfferPreviewsQuery = { __typename?: 'Query', findOfferPreviews: { __typename?: 'PaginatedOfferPreviewsResponse', edges: Array<{ __typename?: 'OfferPreviewResponseEdge', cursor: string, node: { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, shippingCost: number, shippingType: string, totalPrice: number, businessFunction: string, status: string, hasSubmittedReview?: boolean | null, post: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindOfferQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindOfferQuery = { __typename?: 'Query', findOffer?: { __typename?: 'OfferResponse', id: string, createdAt: any, updatedAt: any, bumpedAt: any, name0?: string | null, name1?: string | null, content?: string | null, price: number, priceCurrency: string, totalPrice: number, shippingCost: number, shippingType: string, businessFunction: string, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } } | null };

export type CreateOfferMutationVariables = Exact<{
  input: CreateOfferInput;
}>;


export type CreateOfferMutation = { __typename?: 'Mutation', createOffer: string };

export type UpdateOfferMutationVariables = Exact<{
  input: UpdateOfferInput;
}>;


export type UpdateOfferMutation = { __typename?: 'Mutation', updateOffer: { __typename?: 'OfferPreviewResponse', id: string, createdAt: any, updatedAt: any, status: string, name0?: string | null, name1?: string | null, content?: string | null, price: number, shippingCost: number, shippingType: string, totalPrice: number } };

export type DeleteOfferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOfferMutation = { __typename?: 'Mutation', deleteOffer: string };

export type BumpOfferMutationVariables = Exact<{
  input: BumpOfferInput;
}>;


export type BumpOfferMutation = { __typename?: 'Mutation', bumpOffer: { __typename?: 'OfferPreviewResponse', id: string, bumpedAt: any, price: number, shippingCost: number, shippingType: string, totalPrice: number } };

export type PostFragment = { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> };

export type PostPreviewWithoutUserFragment = { __typename?: 'PostPreviewWithoutUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> };

export type PostPreviewWithUserFragment = { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> };

export type PostPreviewWithAuthorFragment = { __typename?: 'PostPreviewWithAuthorResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> };

export type FindPostPreviewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindPostPreviewQuery = { __typename?: 'Query', findPostPreview: { __typename?: 'PostPreviewWithUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } };

export type ReactionFragment = { __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } };

export type CreateReactionMutationVariables = Exact<{
  input: CreateReactionInput;
}>;


export type CreateReactionMutation = { __typename?: 'Mutation', createReaction: string };

export type CancelReactionMutationVariables = Exact<{
  input: CancelReactionInput;
}>;


export type CancelReactionMutation = { __typename?: 'Mutation', cancelReaction: string };

export type FindReactionsQueryVariables = Exact<{
  postId?: InputMaybe<Scalars['ID']['input']>;
  commentId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FindReactionsQuery = { __typename?: 'Query', findReactions: Array<{ __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } }> };

export type ReactionCreatedSubscriptionVariables = Exact<{
  type: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
}>;


export type ReactionCreatedSubscription = { __typename?: 'Subscription', reactionCreated: { __typename?: 'ReactionResponse', id: string, createdAt: any, updatedAt: any, canceledAt?: any | null, userId: string, postId: string, commentId?: string | null, emoji: { __typename?: 'EmojiResponse', id: string, name: string, url?: string | null, position: number, groupId?: string | null } } };

export type ReactionCanceledSubscriptionVariables = Exact<{
  type: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
}>;


export type ReactionCanceledSubscription = { __typename?: 'Subscription', reactionCanceled: { __typename?: 'CanceledReactionResponse', id: string, postId: string, commentId?: string | null } };

export type LastReportFragment = { __typename?: 'LastReportResponse', id: string, createdAt: any };

export type ReportPreviewFragment = { __typename?: 'ReportPreviewResponse', id: string, createdAt: any, updatedAt: any, type: string, reportedPostId?: string | null, reportedCommentId?: string | null, groupId: string, status: string, reason: string, description?: string | null, reportedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } };

export type ReportFragment = { __typename?: 'ReportResponse', id: string, createdAt: any, updatedAt: any, type: string, reportedPostId?: string | null, reportedCommentId?: string | null, groupId: string, status: string, reason: string, description?: string | null, reportedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, reportedPost?: { __typename?: 'PostPreviewWithoutUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } | null, comments: Array<{ __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, userId: string }>, version: { __typename?: 'VersionResponse', id: string, createdAt: any, schemaName: string, tableName: string, op: string, refId: string, values: any, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> } };

export type ReportCommentFragment = { __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, userId: string };

export type CreateReportMutationVariables = Exact<{
  input: CreateReportInput;
}>;


export type CreateReportMutation = { __typename?: 'Mutation', createReport: string };

export type FindReportPreviewsQueryVariables = Exact<{
  where?: InputMaybe<FindReportPreviewsWhereInput>;
  orderBy?: InputMaybe<FindReportPreviewsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindReportPreviewsQuery = { __typename?: 'Query', findReportPreviews: { __typename?: 'PaginatedReportPreviewsResponse', edges: Array<{ __typename?: 'ReportPreviewResponseEdge', cursor: string, node: { __typename?: 'ReportPreviewResponse', id: string, createdAt: any, updatedAt: any, type: string, reportedPostId?: string | null, reportedCommentId?: string | null, groupId: string, status: string, reason: string, description?: string | null, reportedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindLastReportQueryVariables = Exact<{ [key: string]: never; }>;


export type FindLastReportQuery = { __typename?: 'Query', findLastReport: { __typename?: 'LastReportResponse', id: string, createdAt: any } };

export type FindReportQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindReportQuery = { __typename?: 'Query', findReport: { __typename?: 'ReportResponse', id: string, createdAt: any, updatedAt: any, type: string, reportedPostId?: string | null, reportedCommentId?: string | null, groupId: string, status: string, reason: string, description?: string | null, reportedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, reportedPost?: { __typename?: 'PostPreviewWithoutUserResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } | null, comments: Array<{ __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, userId: string }>, version: { __typename?: 'VersionResponse', id: string, createdAt: any, schemaName: string, tableName: string, op: string, refId: string, values: any, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }> } } };

export type FindReportCommentQueryVariables = Exact<{
  reportId: Scalars['ID']['input'];
}>;


export type FindReportCommentQuery = { __typename?: 'Query', findReportComment: { __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, userId: string } };

export type CommentReportMutationVariables = Exact<{
  input: CommentReportInput;
}>;


export type CommentReportMutation = { __typename?: 'Mutation', commentReport: { __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, userId: string } };

export type UpdateReportCommentMutationVariables = Exact<{
  input: UpdateReportCommentInput;
}>;


export type UpdateReportCommentMutation = { __typename?: 'Mutation', updateReportComment: { __typename?: 'ReportCommentResponse', id: string, createdAt: any, updatedAt: any, reportId: string, content: string, userId: string } };

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

export type ThreadFragment = { __typename?: 'ThreadResponse', id: string, createdAt: any, updatedAt: any, content?: string | null, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } };

export type ThreadPreviewFragment = { __typename?: 'ThreadPreviewResponse', id: string, createdAt: any, updatedAt: any, content?: string | null, post: { __typename?: 'PostPreviewWithAuthorResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } };

export type FindThreadPreviewsQueryVariables = Exact<{
  where?: InputMaybe<FindThreadPreviewsWhereInput>;
  orderBy?: InputMaybe<FindThreadPreviewsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindThreadPreviewsQuery = { __typename?: 'Query', findThreadPreviews: { __typename?: 'PaginatedThreadPreviewsResponse', edges: Array<{ __typename?: 'ThreadPreviewResponseEdge', cursor: string, node: { __typename?: 'ThreadPreviewResponse', id: string, createdAt: any, updatedAt: any, content?: string | null, post: { __typename?: 'PostPreviewWithAuthorResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindThreadQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindThreadQuery = { __typename?: 'Query', findThread?: { __typename?: 'ThreadResponse', id: string, createdAt: any, updatedAt: any, content?: string | null, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> } } | null };

export type CreateThreadMutationVariables = Exact<{
  input: CreateThreadInput;
}>;


export type CreateThreadMutation = { __typename?: 'Mutation', createThread: string };

export type DeleteThreadMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteThreadMutation = { __typename?: 'Mutation', deleteThread: string };

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

export type UserReviewPreviewFragment = { __typename?: 'UserReviewPreviewResponse', id: string, createdAt: any, updatedAt: any, type: string, offerId?: string | null, auctionId?: string | null, content?: string | null, rating: number, status: string, post: { __typename?: 'PostPreviewWithAuthorResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> }, reviewedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } };

export type UserReviewFragment = { __typename?: 'UserReviewResponse', id: string, createdAt: any, updatedAt: any, type: string, offerId?: string | null, auctionId?: string | null, content?: string | null, rating: number, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> }, reviewedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } };

export type FindUserReviewPreviewsQueryVariables = Exact<{
  where?: InputMaybe<FindUserReviewPreviewsWhereInput>;
  orderBy?: InputMaybe<FindUserReviewPreviewsOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindUserReviewPreviewsQuery = { __typename?: 'Query', findUserReviewPreviews: { __typename?: 'PaginatedUserReviewPreviewsResponse', edges: Array<{ __typename?: 'UserReviewPreviewResponseEdge', cursor: string, node: { __typename?: 'UserReviewPreviewResponse', id: string, createdAt: any, updatedAt: any, type: string, offerId?: string | null, auctionId?: string | null, content?: string | null, rating: number, status: string, post: { __typename?: 'PostPreviewWithAuthorResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, commentCount?: number | null, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> }, reviewedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FindUserReviewQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindUserReviewQuery = { __typename?: 'Query', findUserReview?: { __typename?: 'UserReviewResponse', id: string, createdAt: any, updatedAt: any, type: string, offerId?: string | null, auctionId?: string | null, content?: string | null, rating: number, status: string, post: { __typename?: 'PostResponse', id: string, createdAt: any, updatedAt: any, archivedAt?: any | null, pending?: string | null, type: string, title: string, slug?: string | null, thumbnail?: string | null, reportCount: number, commentCount?: number | null, images: Array<{ __typename?: 'UserImageResponse', id: string, createdAt: any, updatedAt: any, name: string, url: string, contentType?: string | null, description?: string | null, size?: number | null, height?: number | null, width?: number | null, position: number, type: string, refId: string, userId: string }>, group: { __typename?: 'GroupProfileResponse', id: string, name: string, slug?: string | null, description?: string | null, icon?: string | null }, category?: { __typename?: 'CategoryResponse', id: string, type: string, name: string, slug?: string | null, position?: number | null } | null, user: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> }, tags: Array<{ __typename?: 'TagResponse', id: string, type: string, name: string, description?: string | null, position: number }> }, reviewedUser: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } } | null };

export type CreateUserReviewMutationVariables = Exact<{
  input: CreateUserReviewInput;
}>;


export type CreateUserReviewMutation = { __typename?: 'Mutation', createUserReview: string };

export type DeleteUserReviewMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserReviewMutation = { __typename?: 'Mutation', deleteUserReview: string };

export type RoleFragment = { __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null };

export type UserFragment = { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean };

export type AuthorFragment = { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> };

export type MyUserFragment = { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, about?: string | null, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> };

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


export type FindAuthorQuery = { __typename?: 'Query', findAuthor?: { __typename?: 'AuthorResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountWithoutAuthResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } | null };

export type FindMyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyUserQuery = { __typename?: 'Query', findMyUser?: { __typename?: 'MyUserResponse', id: string, createdAt: any, username: string, about?: string | null, name?: string | null, phoneNumber?: string | null, avatarURL?: string | null, bot: boolean, socialAccounts: Array<{ __typename?: 'SocialAccountResponse', id: string, createdAt: any, provider: string, socialId: string, userId: string, refreshToken?: string | null, accessToken?: string | null, expiresAt?: number | null, tokenType?: string | null, scope?: string | null, idToken?: string | null, sessionState?: string | null }>, roles: Array<{ __typename?: 'RoleResponse', id: string, name: string, position?: number | null, hexColor: string, groupId?: string | null }> } | null };

export type FindUsersQueryVariables = Exact<{
  where?: InputMaybe<FindUsersWhereInput>;
  orderBy?: InputMaybe<FindUsersOrderByInput>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type FindUsersQuery = { __typename?: 'Query', findUsers: { __typename?: 'PaginatedUsersResponse', edges: Array<{ __typename?: 'UserResponseEdge', cursor: string, node: { __typename?: 'UserResponse', id: string, createdAt: any, username: string, about?: string | null, avatarURL?: string | null, bot: boolean } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

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
  description
  icon
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
  roles {
    ...role
  }
}
    ${SocialAccountWithoutAuthFragmentDoc}
${RoleFragmentDoc}`;
export const TagFragmentDoc = gql`
    fragment tag on TagResponse {
  id
  type
  name
  description
  position
}
    `;
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
  thumbnail
  reportCount
  images {
    ...image
  }
  group {
    ...groupProfile
  }
  category {
    ...category
  }
  user {
    ...author
  }
  tags {
    ...tag
  }
  commentCount
}
    ${ImageFragmentDoc}
${GroupProfileFragmentDoc}
${CategoryFragmentDoc}
${AuthorFragmentDoc}
${TagFragmentDoc}`;
export const AuctionFragmentDoc = gql`
    fragment auction on AuctionResponse {
  post {
    ...post
  }
  id
  createdAt
  updatedAt
  originalEndDate
  extendedEndDate
  version
  content
  currentBidPrice
  hammerPrice
  shippingCost
  shippingType
  status
}
    ${PostFragmentDoc}`;
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
export const PostPreviewWithUserFragmentDoc = gql`
    fragment postPreviewWithUser on PostPreviewWithUserResponse {
  id
  createdAt
  updatedAt
  archivedAt
  pending
  type
  title
  slug
  thumbnail
  category {
    ...category
  }
  group {
    ...groupProfile
  }
  user {
    ...user
  }
  tags {
    ...tag
  }
  commentCount
}
    ${CategoryFragmentDoc}
${GroupProfileFragmentDoc}
${UserFragmentDoc}
${TagFragmentDoc}`;
export const AuctionPreviewFragmentDoc = gql`
    fragment auctionPreview on AuctionPreviewResponse {
  post {
    ...postPreviewWithUser
  }
  id
  createdAt
  updatedAt
  originalEndDate
  extendedEndDate
  version
  content
  currentBidPrice
  hammerPrice
  shippingCost
  shippingType
  status
  hasSubmittedReview
}
    ${PostPreviewWithUserFragmentDoc}`;
export const UpdatedAuctionResponseFragmentDoc = gql`
    fragment updatedAuctionResponse on UpdatedAuctionResponse {
  id
  updatedAt
  extendedEndDate
  status
}
    `;
export const BidFragmentDoc = gql`
    fragment bid on BidResponse {
  id
  createdAt
  canceledAt
  price
  priceCurrency
  auctionId
  user {
    ...author
  }
  status
}
    ${AuthorFragmentDoc}`;
export const BidCountFragmentDoc = gql`
    fragment bidCount on BidCountResponse {
  auctionId
  count
}
    `;
export const EmojiFragmentDoc = gql`
    fragment emoji on EmojiResponse {
  id
  name
  url
  position
  groupId
}
    `;
export const ReactionFragmentDoc = gql`
    fragment reaction on ReactionResponse {
  id
  createdAt
  updatedAt
  canceledAt
  emoji {
    ...emoji
  }
  userId
  postId
  commentId
}
    ${EmojiFragmentDoc}`;
export const CommentFragmentDoc = gql`
    fragment comment on CommentResponse {
  id
  createdAt
  updatedAt
  parentId
  postId
  content
  reactions {
    ...reaction
  }
}
    ${ReactionFragmentDoc}`;
export const CommentWithAuthorFragmentDoc = gql`
    fragment commentWithAuthor on CommentWithAuthorResponse {
  id
  createdAt
  updatedAt
  parentId
  postId
  content
  user {
    ...author
  }
  reactions {
    ...reaction
  }
  images {
    ...image
  }
}
    ${AuthorFragmentDoc}
${ReactionFragmentDoc}
${ImageFragmentDoc}`;
export const CommentCountFragmentDoc = gql`
    fragment commentCount on CommentCountResponse {
  postId
  count
}
    `;
export const UpdatedCommentResponseFragmentDoc = gql`
    fragment updatedCommentResponse on UpdatedCommentResponse {
  id
  updatedAt
  content
}
    `;
export const DeletedCommentResponseFragmentDoc = gql`
    fragment deletedCommentResponse on DeletedCommentResponse {
  id
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
export const OfferPreviewFragmentDoc = gql`
    fragment offerPreview on OfferPreviewResponse {
  post {
    ...postPreviewWithUser
  }
  id
  createdAt
  updatedAt
  bumpedAt
  name0
  name1
  content
  price
  priceCurrency
  shippingCost
  shippingType
  totalPrice
  businessFunction
  status
  hasSubmittedReview
}
    ${PostPreviewWithUserFragmentDoc}`;
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
  content
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
export const LastReportFragmentDoc = gql`
    fragment lastReport on LastReportResponse {
  id
  createdAt
}
    `;
export const ReportPreviewFragmentDoc = gql`
    fragment reportPreview on ReportPreviewResponse {
  id
  createdAt
  updatedAt
  type
  reportedUser {
    ...author
  }
  reportedPostId
  reportedCommentId
  groupId
  status
  reason
  description
}
    ${AuthorFragmentDoc}`;
export const PostPreviewWithoutUserFragmentDoc = gql`
    fragment postPreviewWithoutUser on PostPreviewWithoutUserResponse {
  id
  createdAt
  updatedAt
  archivedAt
  pending
  type
  title
  slug
  thumbnail
  category {
    ...category
  }
  group {
    ...groupProfile
  }
  tags {
    ...tag
  }
  commentCount
}
    ${CategoryFragmentDoc}
${GroupProfileFragmentDoc}
${TagFragmentDoc}`;
export const ReportCommentFragmentDoc = gql`
    fragment reportComment on ReportCommentResponse {
  id
  createdAt
  updatedAt
  reportId
  content
  userId
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
export const ReportFragmentDoc = gql`
    fragment report on ReportResponse {
  id
  createdAt
  updatedAt
  type
  reportedUser {
    ...author
  }
  reportedPostId
  reportedPost {
    ...postPreviewWithoutUser
  }
  reportedCommentId
  groupId
  status
  reason
  description
  comments {
    ...reportComment
  }
  version {
    ...version
  }
}
    ${AuthorFragmentDoc}
${PostPreviewWithoutUserFragmentDoc}
${ReportCommentFragmentDoc}
${VersionFragmentDoc}`;
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
export const ThreadFragmentDoc = gql`
    fragment thread on ThreadResponse {
  post {
    ...post
  }
  id
  createdAt
  updatedAt
  content
}
    ${PostFragmentDoc}`;
export const PostPreviewWithAuthorFragmentDoc = gql`
    fragment postPreviewWithAuthor on PostPreviewWithAuthorResponse {
  id
  createdAt
  updatedAt
  archivedAt
  pending
  type
  title
  slug
  thumbnail
  category {
    ...category
  }
  group {
    ...groupProfile
  }
  user {
    ...author
  }
  tags {
    ...tag
  }
  commentCount
}
    ${CategoryFragmentDoc}
${GroupProfileFragmentDoc}
${AuthorFragmentDoc}
${TagFragmentDoc}`;
export const ThreadPreviewFragmentDoc = gql`
    fragment threadPreview on ThreadPreviewResponse {
  post {
    ...postPreviewWithAuthor
  }
  id
  createdAt
  updatedAt
  content
}
    ${PostPreviewWithAuthorFragmentDoc}`;
export const UserReviewPreviewFragmentDoc = gql`
    fragment userReviewPreview on UserReviewPreviewResponse {
  post {
    ...postPreviewWithAuthor
  }
  id
  createdAt
  updatedAt
  type
  reviewedUser {
    ...author
  }
  offerId
  auctionId
  content
  rating
  status
}
    ${PostPreviewWithAuthorFragmentDoc}
${AuthorFragmentDoc}`;
export const UserReviewFragmentDoc = gql`
    fragment userReview on UserReviewResponse {
  post {
    ...post
  }
  id
  createdAt
  updatedAt
  type
  reviewedUser {
    ...author
  }
  offerId
  auctionId
  content
  rating
  status
}
    ${PostFragmentDoc}
${AuthorFragmentDoc}`;
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
  roles {
    ...role
  }
}
    ${SocialAccountFragmentDoc}
${RoleFragmentDoc}`;
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
export const FindAuctionPreviewsDocument = gql`
    query FindAuctionPreviews($where: FindAuctionPreviewsWhereInput, $orderBy: FindAuctionPreviewsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findAuctionPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...auctionPreview
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${AuctionPreviewFragmentDoc}`;

/**
 * __useFindAuctionPreviewsQuery__
 *
 * To run a query within a React component, call `useFindAuctionPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAuctionPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAuctionPreviewsQuery({
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
export function useFindAuctionPreviewsQuery(baseOptions: Apollo.QueryHookOptions<FindAuctionPreviewsQuery, FindAuctionPreviewsQueryVariables> & ({ variables: FindAuctionPreviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAuctionPreviewsQuery, FindAuctionPreviewsQueryVariables>(FindAuctionPreviewsDocument, options);
      }
export function useFindAuctionPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAuctionPreviewsQuery, FindAuctionPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAuctionPreviewsQuery, FindAuctionPreviewsQueryVariables>(FindAuctionPreviewsDocument, options);
        }
export function useFindAuctionPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAuctionPreviewsQuery, FindAuctionPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAuctionPreviewsQuery, FindAuctionPreviewsQueryVariables>(FindAuctionPreviewsDocument, options);
        }
export type FindAuctionPreviewsQueryHookResult = ReturnType<typeof useFindAuctionPreviewsQuery>;
export type FindAuctionPreviewsLazyQueryHookResult = ReturnType<typeof useFindAuctionPreviewsLazyQuery>;
export type FindAuctionPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindAuctionPreviewsSuspenseQuery>;
export type FindAuctionPreviewsQueryResult = Apollo.QueryResult<FindAuctionPreviewsQuery, FindAuctionPreviewsQueryVariables>;
export function refetchFindAuctionPreviewsQuery(variables: FindAuctionPreviewsQueryVariables) {
      return { query: FindAuctionPreviewsDocument, variables: variables }
    }
export const FindAuctionDocument = gql`
    query FindAuction($id: ID, $slug: String) {
  findAuction(id: $id, slug: $slug) {
    ...auction
  }
}
    ${AuctionFragmentDoc}`;

/**
 * __useFindAuctionQuery__
 *
 * To run a query within a React component, call `useFindAuctionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAuctionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAuctionQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindAuctionQuery(baseOptions?: Apollo.QueryHookOptions<FindAuctionQuery, FindAuctionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAuctionQuery, FindAuctionQueryVariables>(FindAuctionDocument, options);
      }
export function useFindAuctionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAuctionQuery, FindAuctionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAuctionQuery, FindAuctionQueryVariables>(FindAuctionDocument, options);
        }
export function useFindAuctionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAuctionQuery, FindAuctionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAuctionQuery, FindAuctionQueryVariables>(FindAuctionDocument, options);
        }
export type FindAuctionQueryHookResult = ReturnType<typeof useFindAuctionQuery>;
export type FindAuctionLazyQueryHookResult = ReturnType<typeof useFindAuctionLazyQuery>;
export type FindAuctionSuspenseQueryHookResult = ReturnType<typeof useFindAuctionSuspenseQuery>;
export type FindAuctionQueryResult = Apollo.QueryResult<FindAuctionQuery, FindAuctionQueryVariables>;
export function refetchFindAuctionQuery(variables?: FindAuctionQueryVariables) {
      return { query: FindAuctionDocument, variables: variables }
    }
export const FindAuctionInteractionItemsDocument = gql`
    query FindAuctionInteractionItems($where: FindAuctionInteractionItemsWhereInput, $orderBy: FindAuctionInteractionItemsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findAuctionInteractionItems(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        __typename
        ... on BidResponse {
          ...bid
        }
        ... on CommentWithAuthorResponse {
          ...commentWithAuthor
        }
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${BidFragmentDoc}
${CommentWithAuthorFragmentDoc}`;

/**
 * __useFindAuctionInteractionItemsQuery__
 *
 * To run a query within a React component, call `useFindAuctionInteractionItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAuctionInteractionItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAuctionInteractionItemsQuery({
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
export function useFindAuctionInteractionItemsQuery(baseOptions: Apollo.QueryHookOptions<FindAuctionInteractionItemsQuery, FindAuctionInteractionItemsQueryVariables> & ({ variables: FindAuctionInteractionItemsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAuctionInteractionItemsQuery, FindAuctionInteractionItemsQueryVariables>(FindAuctionInteractionItemsDocument, options);
      }
export function useFindAuctionInteractionItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAuctionInteractionItemsQuery, FindAuctionInteractionItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAuctionInteractionItemsQuery, FindAuctionInteractionItemsQueryVariables>(FindAuctionInteractionItemsDocument, options);
        }
export function useFindAuctionInteractionItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAuctionInteractionItemsQuery, FindAuctionInteractionItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAuctionInteractionItemsQuery, FindAuctionInteractionItemsQueryVariables>(FindAuctionInteractionItemsDocument, options);
        }
export type FindAuctionInteractionItemsQueryHookResult = ReturnType<typeof useFindAuctionInteractionItemsQuery>;
export type FindAuctionInteractionItemsLazyQueryHookResult = ReturnType<typeof useFindAuctionInteractionItemsLazyQuery>;
export type FindAuctionInteractionItemsSuspenseQueryHookResult = ReturnType<typeof useFindAuctionInteractionItemsSuspenseQuery>;
export type FindAuctionInteractionItemsQueryResult = Apollo.QueryResult<FindAuctionInteractionItemsQuery, FindAuctionInteractionItemsQueryVariables>;
export function refetchFindAuctionInteractionItemsQuery(variables: FindAuctionInteractionItemsQueryVariables) {
      return { query: FindAuctionInteractionItemsDocument, variables: variables }
    }
export const FindBiddersDocument = gql`
    query FindBidders($where: FindBiddersWhereInput!, $orderBy: FindBiddersOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findBidders(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...user
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindBiddersQuery__
 *
 * To run a query within a React component, call `useFindBiddersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBiddersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBiddersQuery({
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
export function useFindBiddersQuery(baseOptions: Apollo.QueryHookOptions<FindBiddersQuery, FindBiddersQueryVariables> & ({ variables: FindBiddersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBiddersQuery, FindBiddersQueryVariables>(FindBiddersDocument, options);
      }
export function useFindBiddersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBiddersQuery, FindBiddersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBiddersQuery, FindBiddersQueryVariables>(FindBiddersDocument, options);
        }
export function useFindBiddersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindBiddersQuery, FindBiddersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindBiddersQuery, FindBiddersQueryVariables>(FindBiddersDocument, options);
        }
export type FindBiddersQueryHookResult = ReturnType<typeof useFindBiddersQuery>;
export type FindBiddersLazyQueryHookResult = ReturnType<typeof useFindBiddersLazyQuery>;
export type FindBiddersSuspenseQueryHookResult = ReturnType<typeof useFindBiddersSuspenseQuery>;
export type FindBiddersQueryResult = Apollo.QueryResult<FindBiddersQuery, FindBiddersQueryVariables>;
export function refetchFindBiddersQuery(variables: FindBiddersQueryVariables) {
      return { query: FindBiddersDocument, variables: variables }
    }
export const CreateAuctionDocument = gql`
    mutation CreateAuction($input: CreateAuctionInput!) {
  createAuction(input: $input)
}
    `;
export type CreateAuctionMutationFn = Apollo.MutationFunction<CreateAuctionMutation, CreateAuctionMutationVariables>;

/**
 * __useCreateAuctionMutation__
 *
 * To run a mutation, you first call `useCreateAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuctionMutation, { data, loading, error }] = useCreateAuctionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAuctionMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuctionMutation, CreateAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuctionMutation, CreateAuctionMutationVariables>(CreateAuctionDocument, options);
      }
export type CreateAuctionMutationHookResult = ReturnType<typeof useCreateAuctionMutation>;
export type CreateAuctionMutationResult = Apollo.MutationResult<CreateAuctionMutation>;
export type CreateAuctionMutationOptions = Apollo.BaseMutationOptions<CreateAuctionMutation, CreateAuctionMutationVariables>;
export const AuctionUpdatedDocument = gql`
    subscription AuctionUpdated($auctionId: ID!) {
  auctionUpdated(auctionId: $auctionId) {
    ...updatedAuctionResponse
  }
}
    ${UpdatedAuctionResponseFragmentDoc}`;

/**
 * __useAuctionUpdatedSubscription__
 *
 * To run a query within a React component, call `useAuctionUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAuctionUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuctionUpdatedSubscription({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *   },
 * });
 */
export function useAuctionUpdatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<AuctionUpdatedSubscription, AuctionUpdatedSubscriptionVariables> & ({ variables: AuctionUpdatedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AuctionUpdatedSubscription, AuctionUpdatedSubscriptionVariables>(AuctionUpdatedDocument, options);
      }
export type AuctionUpdatedSubscriptionHookResult = ReturnType<typeof useAuctionUpdatedSubscription>;
export type AuctionUpdatedSubscriptionResult = Apollo.SubscriptionResult<AuctionUpdatedSubscription>;
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
export const FindBidsDocument = gql`
    query FindBids($where: FindBidsWhereInput, $orderBy: FindBidsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findBids(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...bid
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${BidFragmentDoc}`;

/**
 * __useFindBidsQuery__
 *
 * To run a query within a React component, call `useFindBidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBidsQuery({
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
export function useFindBidsQuery(baseOptions: Apollo.QueryHookOptions<FindBidsQuery, FindBidsQueryVariables> & ({ variables: FindBidsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBidsQuery, FindBidsQueryVariables>(FindBidsDocument, options);
      }
export function useFindBidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBidsQuery, FindBidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBidsQuery, FindBidsQueryVariables>(FindBidsDocument, options);
        }
export function useFindBidsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindBidsQuery, FindBidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindBidsQuery, FindBidsQueryVariables>(FindBidsDocument, options);
        }
export type FindBidsQueryHookResult = ReturnType<typeof useFindBidsQuery>;
export type FindBidsLazyQueryHookResult = ReturnType<typeof useFindBidsLazyQuery>;
export type FindBidsSuspenseQueryHookResult = ReturnType<typeof useFindBidsSuspenseQuery>;
export type FindBidsQueryResult = Apollo.QueryResult<FindBidsQuery, FindBidsQueryVariables>;
export function refetchFindBidsQuery(variables: FindBidsQueryVariables) {
      return { query: FindBidsDocument, variables: variables }
    }
export const FindBidCountDocument = gql`
    query FindBidCount($auctionId: ID!) {
  findBidCount(auctionId: $auctionId) {
    ...bidCount
  }
}
    ${BidCountFragmentDoc}`;

/**
 * __useFindBidCountQuery__
 *
 * To run a query within a React component, call `useFindBidCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBidCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBidCountQuery({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *   },
 * });
 */
export function useFindBidCountQuery(baseOptions: Apollo.QueryHookOptions<FindBidCountQuery, FindBidCountQueryVariables> & ({ variables: FindBidCountQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBidCountQuery, FindBidCountQueryVariables>(FindBidCountDocument, options);
      }
export function useFindBidCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBidCountQuery, FindBidCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBidCountQuery, FindBidCountQueryVariables>(FindBidCountDocument, options);
        }
export function useFindBidCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindBidCountQuery, FindBidCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindBidCountQuery, FindBidCountQueryVariables>(FindBidCountDocument, options);
        }
export type FindBidCountQueryHookResult = ReturnType<typeof useFindBidCountQuery>;
export type FindBidCountLazyQueryHookResult = ReturnType<typeof useFindBidCountLazyQuery>;
export type FindBidCountSuspenseQueryHookResult = ReturnType<typeof useFindBidCountSuspenseQuery>;
export type FindBidCountQueryResult = Apollo.QueryResult<FindBidCountQuery, FindBidCountQueryVariables>;
export function refetchFindBidCountQuery(variables: FindBidCountQueryVariables) {
      return { query: FindBidCountDocument, variables: variables }
    }
export const PlaceBidDocument = gql`
    mutation PlaceBid($input: PlaceBidInput!) {
  placeBid(input: $input)
}
    `;
export type PlaceBidMutationFn = Apollo.MutationFunction<PlaceBidMutation, PlaceBidMutationVariables>;

/**
 * __usePlaceBidMutation__
 *
 * To run a mutation, you first call `usePlaceBidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceBidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeBidMutation, { data, loading, error }] = usePlaceBidMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlaceBidMutation(baseOptions?: Apollo.MutationHookOptions<PlaceBidMutation, PlaceBidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceBidMutation, PlaceBidMutationVariables>(PlaceBidDocument, options);
      }
export type PlaceBidMutationHookResult = ReturnType<typeof usePlaceBidMutation>;
export type PlaceBidMutationResult = Apollo.MutationResult<PlaceBidMutation>;
export type PlaceBidMutationOptions = Apollo.BaseMutationOptions<PlaceBidMutation, PlaceBidMutationVariables>;
export const CancelBidDocument = gql`
    mutation CancelBid($input: CancelBidInput!) {
  cancelBid(input: $input)
}
    `;
export type CancelBidMutationFn = Apollo.MutationFunction<CancelBidMutation, CancelBidMutationVariables>;

/**
 * __useCancelBidMutation__
 *
 * To run a mutation, you first call `useCancelBidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelBidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelBidMutation, { data, loading, error }] = useCancelBidMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelBidMutation(baseOptions?: Apollo.MutationHookOptions<CancelBidMutation, CancelBidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelBidMutation, CancelBidMutationVariables>(CancelBidDocument, options);
      }
export type CancelBidMutationHookResult = ReturnType<typeof useCancelBidMutation>;
export type CancelBidMutationResult = Apollo.MutationResult<CancelBidMutation>;
export type CancelBidMutationOptions = Apollo.BaseMutationOptions<CancelBidMutation, CancelBidMutationVariables>;
export const BidPlacedDocument = gql`
    subscription BidPlaced($auctionId: ID!) {
  bidPlaced(auctionId: $auctionId) {
    ...bid
  }
}
    ${BidFragmentDoc}`;

/**
 * __useBidPlacedSubscription__
 *
 * To run a query within a React component, call `useBidPlacedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBidPlacedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBidPlacedSubscription({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *   },
 * });
 */
export function useBidPlacedSubscription(baseOptions: Apollo.SubscriptionHookOptions<BidPlacedSubscription, BidPlacedSubscriptionVariables> & ({ variables: BidPlacedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BidPlacedSubscription, BidPlacedSubscriptionVariables>(BidPlacedDocument, options);
      }
export type BidPlacedSubscriptionHookResult = ReturnType<typeof useBidPlacedSubscription>;
export type BidPlacedSubscriptionResult = Apollo.SubscriptionResult<BidPlacedSubscription>;
export const BidCanceledDocument = gql`
    subscription BidCanceled($auctionId: ID!) {
  bidCanceled(auctionId: $auctionId) {
    id
    canceledAt
  }
}
    `;

/**
 * __useBidCanceledSubscription__
 *
 * To run a query within a React component, call `useBidCanceledSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBidCanceledSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBidCanceledSubscription({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *   },
 * });
 */
export function useBidCanceledSubscription(baseOptions: Apollo.SubscriptionHookOptions<BidCanceledSubscription, BidCanceledSubscriptionVariables> & ({ variables: BidCanceledSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BidCanceledSubscription, BidCanceledSubscriptionVariables>(BidCanceledDocument, options);
      }
export type BidCanceledSubscriptionHookResult = ReturnType<typeof useBidCanceledSubscription>;
export type BidCanceledSubscriptionResult = Apollo.SubscriptionResult<BidCanceledSubscription>;
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
  updateComment(input: $input)
}
    `;
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
export const DeleteCommentDocument = gql`
    mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
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
export function refetchFindCommentQuery(variables?: FindCommentQueryVariables) {
      return { query: FindCommentDocument, variables: variables }
    }
export const FindCommentsDocument = gql`
    query FindComments($where: FindCommentsWhereInput, $orderBy: FindCommentsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findComments(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...commentWithAuthor
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${CommentWithAuthorFragmentDoc}`;

/**
 * __useFindCommentsQuery__
 *
 * To run a query within a React component, call `useFindCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCommentsQuery({
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
export function useFindCommentsQuery(baseOptions: Apollo.QueryHookOptions<FindCommentsQuery, FindCommentsQueryVariables> & ({ variables: FindCommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCommentsQuery, FindCommentsQueryVariables>(FindCommentsDocument, options);
      }
export function useFindCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCommentsQuery, FindCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCommentsQuery, FindCommentsQueryVariables>(FindCommentsDocument, options);
        }
export function useFindCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCommentsQuery, FindCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCommentsQuery, FindCommentsQueryVariables>(FindCommentsDocument, options);
        }
export type FindCommentsQueryHookResult = ReturnType<typeof useFindCommentsQuery>;
export type FindCommentsLazyQueryHookResult = ReturnType<typeof useFindCommentsLazyQuery>;
export type FindCommentsSuspenseQueryHookResult = ReturnType<typeof useFindCommentsSuspenseQuery>;
export type FindCommentsQueryResult = Apollo.QueryResult<FindCommentsQuery, FindCommentsQueryVariables>;
export function refetchFindCommentsQuery(variables: FindCommentsQueryVariables) {
      return { query: FindCommentsDocument, variables: variables }
    }
export const FindCommentCountDocument = gql`
    query FindCommentCount($postId: ID!) {
  findCommentCount(postId: $postId) {
    ...commentCount
  }
}
    ${CommentCountFragmentDoc}`;

/**
 * __useFindCommentCountQuery__
 *
 * To run a query within a React component, call `useFindCommentCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCommentCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCommentCountQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useFindCommentCountQuery(baseOptions: Apollo.QueryHookOptions<FindCommentCountQuery, FindCommentCountQueryVariables> & ({ variables: FindCommentCountQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCommentCountQuery, FindCommentCountQueryVariables>(FindCommentCountDocument, options);
      }
export function useFindCommentCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCommentCountQuery, FindCommentCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCommentCountQuery, FindCommentCountQueryVariables>(FindCommentCountDocument, options);
        }
export function useFindCommentCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCommentCountQuery, FindCommentCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCommentCountQuery, FindCommentCountQueryVariables>(FindCommentCountDocument, options);
        }
export type FindCommentCountQueryHookResult = ReturnType<typeof useFindCommentCountQuery>;
export type FindCommentCountLazyQueryHookResult = ReturnType<typeof useFindCommentCountLazyQuery>;
export type FindCommentCountSuspenseQueryHookResult = ReturnType<typeof useFindCommentCountSuspenseQuery>;
export type FindCommentCountQueryResult = Apollo.QueryResult<FindCommentCountQuery, FindCommentCountQueryVariables>;
export function refetchFindCommentCountQuery(variables: FindCommentCountQueryVariables) {
      return { query: FindCommentCountDocument, variables: variables }
    }
export const CommentCreatedDocument = gql`
    subscription CommentCreated($postId: ID!) {
  commentCreated(postId: $postId) {
    ...commentWithAuthor
  }
}
    ${CommentWithAuthorFragmentDoc}`;

/**
 * __useCommentCreatedSubscription__
 *
 * To run a query within a React component, call `useCommentCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCommentCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentCreatedSubscription({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<CommentCreatedSubscription, CommentCreatedSubscriptionVariables> & ({ variables: CommentCreatedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CommentCreatedSubscription, CommentCreatedSubscriptionVariables>(CommentCreatedDocument, options);
      }
export type CommentCreatedSubscriptionHookResult = ReturnType<typeof useCommentCreatedSubscription>;
export type CommentCreatedSubscriptionResult = Apollo.SubscriptionResult<CommentCreatedSubscription>;
export const CommentUpdatedDocument = gql`
    subscription CommentUpdated($postId: ID!) {
  commentUpdated(postId: $postId) {
    ...updatedCommentResponse
  }
}
    ${UpdatedCommentResponseFragmentDoc}`;

/**
 * __useCommentUpdatedSubscription__
 *
 * To run a query within a React component, call `useCommentUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCommentUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentUpdatedSubscription({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentUpdatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<CommentUpdatedSubscription, CommentUpdatedSubscriptionVariables> & ({ variables: CommentUpdatedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CommentUpdatedSubscription, CommentUpdatedSubscriptionVariables>(CommentUpdatedDocument, options);
      }
export type CommentUpdatedSubscriptionHookResult = ReturnType<typeof useCommentUpdatedSubscription>;
export type CommentUpdatedSubscriptionResult = Apollo.SubscriptionResult<CommentUpdatedSubscription>;
export const CommentDeletedDocument = gql`
    subscription CommentDeleted($postId: ID!) {
  commentDeleted(postId: $postId) {
    ...deletedCommentResponse
  }
}
    ${DeletedCommentResponseFragmentDoc}`;

/**
 * __useCommentDeletedSubscription__
 *
 * To run a query within a React component, call `useCommentDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCommentDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentDeletedSubscription({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentDeletedSubscription(baseOptions: Apollo.SubscriptionHookOptions<CommentDeletedSubscription, CommentDeletedSubscriptionVariables> & ({ variables: CommentDeletedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CommentDeletedSubscription, CommentDeletedSubscriptionVariables>(CommentDeletedDocument, options);
      }
export type CommentDeletedSubscriptionHookResult = ReturnType<typeof useCommentDeletedSubscription>;
export type CommentDeletedSubscriptionResult = Apollo.SubscriptionResult<CommentDeletedSubscription>;
export const FindEmojisDocument = gql`
    query FindEmojis($groupId: ID) {
  findEmojis(groupId: $groupId) {
    ...emoji
  }
}
    ${EmojiFragmentDoc}`;

/**
 * __useFindEmojisQuery__
 *
 * To run a query within a React component, call `useFindEmojisQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindEmojisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindEmojisQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useFindEmojisQuery(baseOptions?: Apollo.QueryHookOptions<FindEmojisQuery, FindEmojisQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindEmojisQuery, FindEmojisQueryVariables>(FindEmojisDocument, options);
      }
export function useFindEmojisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindEmojisQuery, FindEmojisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindEmojisQuery, FindEmojisQueryVariables>(FindEmojisDocument, options);
        }
export function useFindEmojisSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindEmojisQuery, FindEmojisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindEmojisQuery, FindEmojisQueryVariables>(FindEmojisDocument, options);
        }
export type FindEmojisQueryHookResult = ReturnType<typeof useFindEmojisQuery>;
export type FindEmojisLazyQueryHookResult = ReturnType<typeof useFindEmojisLazyQuery>;
export type FindEmojisSuspenseQueryHookResult = ReturnType<typeof useFindEmojisSuspenseQuery>;
export type FindEmojisQueryResult = Apollo.QueryResult<FindEmojisQuery, FindEmojisQueryVariables>;
export function refetchFindEmojisQuery(variables?: FindEmojisQueryVariables) {
      return { query: FindEmojisDocument, variables: variables }
    }
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
export function refetchFindGroupsQuery(variables: FindGroupsQueryVariables) {
      return { query: FindGroupsDocument, variables: variables }
    }
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
export function refetchFindGroupProfilesQuery(variables: FindGroupProfilesQueryVariables) {
      return { query: FindGroupProfilesDocument, variables: variables }
    }
export const FindGroupDocument = gql`
    query FindGroup($id: ID, $slug: String) {
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
export function refetchFindGroupQuery(variables?: FindGroupQueryVariables) {
      return { query: FindGroupDocument, variables: variables }
    }
export const FindGroupPreviewsDocument = gql`
    query FindGroupPreviews {
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
export function refetchFindGroupPreviewsQuery(variables?: FindGroupPreviewsQueryVariables) {
      return { query: FindGroupPreviewsDocument, variables: variables }
    }
export const FindOfferPreviewsDocument = gql`
    query FindOfferPreviews($where: FindOfferPreviewsWhereInput, $orderBy: FindOfferPreviewsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
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
export function refetchFindOfferPreviewsQuery(variables: FindOfferPreviewsQueryVariables) {
      return { query: FindOfferPreviewsDocument, variables: variables }
    }
export const FindOfferDocument = gql`
    query FindOffer($id: ID, $slug: String) {
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
export function refetchFindOfferQuery(variables?: FindOfferQueryVariables) {
      return { query: FindOfferDocument, variables: variables }
    }
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
    content
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
    query FindPostPreview($id: ID!) {
  findPostPreview(id: $id) {
    ...postPreviewWithUser
  }
}
    ${PostPreviewWithUserFragmentDoc}`;

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
export function refetchFindPostPreviewQuery(variables: FindPostPreviewQueryVariables) {
      return { query: FindPostPreviewDocument, variables: variables }
    }
export const CreateReactionDocument = gql`
    mutation CreateReaction($input: CreateReactionInput!) {
  createReaction(input: $input)
}
    `;
export type CreateReactionMutationFn = Apollo.MutationFunction<CreateReactionMutation, CreateReactionMutationVariables>;

/**
 * __useCreateReactionMutation__
 *
 * To run a mutation, you first call `useCreateReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReactionMutation, { data, loading, error }] = useCreateReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateReactionMutation, CreateReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReactionMutation, CreateReactionMutationVariables>(CreateReactionDocument, options);
      }
export type CreateReactionMutationHookResult = ReturnType<typeof useCreateReactionMutation>;
export type CreateReactionMutationResult = Apollo.MutationResult<CreateReactionMutation>;
export type CreateReactionMutationOptions = Apollo.BaseMutationOptions<CreateReactionMutation, CreateReactionMutationVariables>;
export const CancelReactionDocument = gql`
    mutation CancelReaction($input: CancelReactionInput!) {
  cancelReaction(input: $input)
}
    `;
export type CancelReactionMutationFn = Apollo.MutationFunction<CancelReactionMutation, CancelReactionMutationVariables>;

/**
 * __useCancelReactionMutation__
 *
 * To run a mutation, you first call `useCancelReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelReactionMutation, { data, loading, error }] = useCancelReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelReactionMutation(baseOptions?: Apollo.MutationHookOptions<CancelReactionMutation, CancelReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelReactionMutation, CancelReactionMutationVariables>(CancelReactionDocument, options);
      }
export type CancelReactionMutationHookResult = ReturnType<typeof useCancelReactionMutation>;
export type CancelReactionMutationResult = Apollo.MutationResult<CancelReactionMutation>;
export type CancelReactionMutationOptions = Apollo.BaseMutationOptions<CancelReactionMutation, CancelReactionMutationVariables>;
export const FindReactionsDocument = gql`
    query FindReactions($postId: ID, $commentId: ID) {
  findReactions(postId: $postId, commentId: $commentId) {
    ...reaction
  }
}
    ${ReactionFragmentDoc}`;

/**
 * __useFindReactionsQuery__
 *
 * To run a query within a React component, call `useFindReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindReactionsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useFindReactionsQuery(baseOptions?: Apollo.QueryHookOptions<FindReactionsQuery, FindReactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindReactionsQuery, FindReactionsQueryVariables>(FindReactionsDocument, options);
      }
export function useFindReactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindReactionsQuery, FindReactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindReactionsQuery, FindReactionsQueryVariables>(FindReactionsDocument, options);
        }
export function useFindReactionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindReactionsQuery, FindReactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindReactionsQuery, FindReactionsQueryVariables>(FindReactionsDocument, options);
        }
export type FindReactionsQueryHookResult = ReturnType<typeof useFindReactionsQuery>;
export type FindReactionsLazyQueryHookResult = ReturnType<typeof useFindReactionsLazyQuery>;
export type FindReactionsSuspenseQueryHookResult = ReturnType<typeof useFindReactionsSuspenseQuery>;
export type FindReactionsQueryResult = Apollo.QueryResult<FindReactionsQuery, FindReactionsQueryVariables>;
export function refetchFindReactionsQuery(variables?: FindReactionsQueryVariables) {
      return { query: FindReactionsDocument, variables: variables }
    }
export const ReactionCreatedDocument = gql`
    subscription ReactionCreated($type: String!, $postId: ID!) {
  reactionCreated(type: $type, postId: $postId) {
    ...reaction
  }
}
    ${ReactionFragmentDoc}`;

/**
 * __useReactionCreatedSubscription__
 *
 * To run a query within a React component, call `useReactionCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useReactionCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReactionCreatedSubscription({
 *   variables: {
 *      type: // value for 'type'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useReactionCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<ReactionCreatedSubscription, ReactionCreatedSubscriptionVariables> & ({ variables: ReactionCreatedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ReactionCreatedSubscription, ReactionCreatedSubscriptionVariables>(ReactionCreatedDocument, options);
      }
export type ReactionCreatedSubscriptionHookResult = ReturnType<typeof useReactionCreatedSubscription>;
export type ReactionCreatedSubscriptionResult = Apollo.SubscriptionResult<ReactionCreatedSubscription>;
export const ReactionCanceledDocument = gql`
    subscription ReactionCanceled($type: String!, $postId: ID!) {
  reactionCanceled(type: $type, postId: $postId) {
    id
    postId
    commentId
  }
}
    `;

/**
 * __useReactionCanceledSubscription__
 *
 * To run a query within a React component, call `useReactionCanceledSubscription` and pass it any options that fit your needs.
 * When your component renders, `useReactionCanceledSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReactionCanceledSubscription({
 *   variables: {
 *      type: // value for 'type'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useReactionCanceledSubscription(baseOptions: Apollo.SubscriptionHookOptions<ReactionCanceledSubscription, ReactionCanceledSubscriptionVariables> & ({ variables: ReactionCanceledSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ReactionCanceledSubscription, ReactionCanceledSubscriptionVariables>(ReactionCanceledDocument, options);
      }
export type ReactionCanceledSubscriptionHookResult = ReturnType<typeof useReactionCanceledSubscription>;
export type ReactionCanceledSubscriptionResult = Apollo.SubscriptionResult<ReactionCanceledSubscription>;
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
    query FindReportPreviews($where: FindReportPreviewsWhereInput, $orderBy: FindReportPreviewsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
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
export function refetchFindReportPreviewsQuery(variables: FindReportPreviewsQueryVariables) {
      return { query: FindReportPreviewsDocument, variables: variables }
    }
export const FindLastReportDocument = gql`
    query FindLastReport {
  findLastReport {
    ...lastReport
  }
}
    ${LastReportFragmentDoc}`;

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
export function refetchFindLastReportQuery(variables?: FindLastReportQueryVariables) {
      return { query: FindLastReportDocument, variables: variables }
    }
export const FindReportDocument = gql`
    query FindReport($id: ID!) {
  findReport(id: $id) {
    ...report
  }
}
    ${ReportFragmentDoc}`;

/**
 * __useFindReportQuery__
 *
 * To run a query within a React component, call `useFindReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindReportQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindReportQuery(baseOptions: Apollo.QueryHookOptions<FindReportQuery, FindReportQueryVariables> & ({ variables: FindReportQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindReportQuery, FindReportQueryVariables>(FindReportDocument, options);
      }
export function useFindReportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindReportQuery, FindReportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindReportQuery, FindReportQueryVariables>(FindReportDocument, options);
        }
export function useFindReportSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindReportQuery, FindReportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindReportQuery, FindReportQueryVariables>(FindReportDocument, options);
        }
export type FindReportQueryHookResult = ReturnType<typeof useFindReportQuery>;
export type FindReportLazyQueryHookResult = ReturnType<typeof useFindReportLazyQuery>;
export type FindReportSuspenseQueryHookResult = ReturnType<typeof useFindReportSuspenseQuery>;
export type FindReportQueryResult = Apollo.QueryResult<FindReportQuery, FindReportQueryVariables>;
export function refetchFindReportQuery(variables: FindReportQueryVariables) {
      return { query: FindReportDocument, variables: variables }
    }
export const FindReportCommentDocument = gql`
    query FindReportComment($reportId: ID!) {
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
export function refetchFindReportCommentQuery(variables: FindReportCommentQueryVariables) {
      return { query: FindReportCommentDocument, variables: variables }
    }
export const CommentReportDocument = gql`
    mutation CommentReport($input: CommentReportInput!) {
  commentReport(input: $input) {
    ...reportComment
  }
}
    ${ReportCommentFragmentDoc}`;
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
  updateReportComment(input: $input) {
    ...reportComment
  }
}
    ${ReportCommentFragmentDoc}`;
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
    query FindTags {
  findTags {
    ...tag
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
export function refetchFindTagsQuery(variables?: FindTagsQueryVariables) {
      return { query: FindTagsDocument, variables: variables }
    }
export const FindTermDocument = gql`
    query FindTerm($name: String!) {
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
export function refetchFindTermQuery(variables: FindTermQueryVariables) {
      return { query: FindTermDocument, variables: variables }
    }
export const FindThreadPreviewsDocument = gql`
    query FindThreadPreviews($where: FindThreadPreviewsWhereInput, $orderBy: FindThreadPreviewsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findThreadPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...threadPreview
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${ThreadPreviewFragmentDoc}`;

/**
 * __useFindThreadPreviewsQuery__
 *
 * To run a query within a React component, call `useFindThreadPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindThreadPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindThreadPreviewsQuery({
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
export function useFindThreadPreviewsQuery(baseOptions: Apollo.QueryHookOptions<FindThreadPreviewsQuery, FindThreadPreviewsQueryVariables> & ({ variables: FindThreadPreviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindThreadPreviewsQuery, FindThreadPreviewsQueryVariables>(FindThreadPreviewsDocument, options);
      }
export function useFindThreadPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindThreadPreviewsQuery, FindThreadPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindThreadPreviewsQuery, FindThreadPreviewsQueryVariables>(FindThreadPreviewsDocument, options);
        }
export function useFindThreadPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindThreadPreviewsQuery, FindThreadPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindThreadPreviewsQuery, FindThreadPreviewsQueryVariables>(FindThreadPreviewsDocument, options);
        }
export type FindThreadPreviewsQueryHookResult = ReturnType<typeof useFindThreadPreviewsQuery>;
export type FindThreadPreviewsLazyQueryHookResult = ReturnType<typeof useFindThreadPreviewsLazyQuery>;
export type FindThreadPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindThreadPreviewsSuspenseQuery>;
export type FindThreadPreviewsQueryResult = Apollo.QueryResult<FindThreadPreviewsQuery, FindThreadPreviewsQueryVariables>;
export function refetchFindThreadPreviewsQuery(variables: FindThreadPreviewsQueryVariables) {
      return { query: FindThreadPreviewsDocument, variables: variables }
    }
export const FindThreadDocument = gql`
    query FindThread($id: ID, $slug: String) {
  findThread(id: $id, slug: $slug) {
    ...thread
  }
}
    ${ThreadFragmentDoc}`;

/**
 * __useFindThreadQuery__
 *
 * To run a query within a React component, call `useFindThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindThreadQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindThreadQuery(baseOptions?: Apollo.QueryHookOptions<FindThreadQuery, FindThreadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindThreadQuery, FindThreadQueryVariables>(FindThreadDocument, options);
      }
export function useFindThreadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindThreadQuery, FindThreadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindThreadQuery, FindThreadQueryVariables>(FindThreadDocument, options);
        }
export function useFindThreadSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindThreadQuery, FindThreadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindThreadQuery, FindThreadQueryVariables>(FindThreadDocument, options);
        }
export type FindThreadQueryHookResult = ReturnType<typeof useFindThreadQuery>;
export type FindThreadLazyQueryHookResult = ReturnType<typeof useFindThreadLazyQuery>;
export type FindThreadSuspenseQueryHookResult = ReturnType<typeof useFindThreadSuspenseQuery>;
export type FindThreadQueryResult = Apollo.QueryResult<FindThreadQuery, FindThreadQueryVariables>;
export function refetchFindThreadQuery(variables?: FindThreadQueryVariables) {
      return { query: FindThreadDocument, variables: variables }
    }
export const CreateThreadDocument = gql`
    mutation CreateThread($input: CreateThreadInput!) {
  createThread(input: $input)
}
    `;
export type CreateThreadMutationFn = Apollo.MutationFunction<CreateThreadMutation, CreateThreadMutationVariables>;

/**
 * __useCreateThreadMutation__
 *
 * To run a mutation, you first call `useCreateThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadMutation, { data, loading, error }] = useCreateThreadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateThreadMutation(baseOptions?: Apollo.MutationHookOptions<CreateThreadMutation, CreateThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThreadMutation, CreateThreadMutationVariables>(CreateThreadDocument, options);
      }
export type CreateThreadMutationHookResult = ReturnType<typeof useCreateThreadMutation>;
export type CreateThreadMutationResult = Apollo.MutationResult<CreateThreadMutation>;
export type CreateThreadMutationOptions = Apollo.BaseMutationOptions<CreateThreadMutation, CreateThreadMutationVariables>;
export const DeleteThreadDocument = gql`
    mutation DeleteThread($id: ID!) {
  deleteThread(id: $id)
}
    `;
export type DeleteThreadMutationFn = Apollo.MutationFunction<DeleteThreadMutation, DeleteThreadMutationVariables>;

/**
 * __useDeleteThreadMutation__
 *
 * To run a mutation, you first call `useDeleteThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThreadMutation, { data, loading, error }] = useDeleteThreadMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteThreadMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThreadMutation, DeleteThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThreadMutation, DeleteThreadMutationVariables>(DeleteThreadDocument, options);
      }
export type DeleteThreadMutationHookResult = ReturnType<typeof useDeleteThreadMutation>;
export type DeleteThreadMutationResult = Apollo.MutationResult<DeleteThreadMutation>;
export type DeleteThreadMutationOptions = Apollo.BaseMutationOptions<DeleteThreadMutation, DeleteThreadMutationVariables>;
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
export const FindUserReviewPreviewsDocument = gql`
    query FindUserReviewPreviews($where: FindUserReviewPreviewsWhereInput, $orderBy: FindUserReviewPreviewsOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findUserReviewPreviews(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...userReviewPreview
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${UserReviewPreviewFragmentDoc}`;

/**
 * __useFindUserReviewPreviewsQuery__
 *
 * To run a query within a React component, call `useFindUserReviewPreviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserReviewPreviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserReviewPreviewsQuery({
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
export function useFindUserReviewPreviewsQuery(baseOptions: Apollo.QueryHookOptions<FindUserReviewPreviewsQuery, FindUserReviewPreviewsQueryVariables> & ({ variables: FindUserReviewPreviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserReviewPreviewsQuery, FindUserReviewPreviewsQueryVariables>(FindUserReviewPreviewsDocument, options);
      }
export function useFindUserReviewPreviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserReviewPreviewsQuery, FindUserReviewPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserReviewPreviewsQuery, FindUserReviewPreviewsQueryVariables>(FindUserReviewPreviewsDocument, options);
        }
export function useFindUserReviewPreviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserReviewPreviewsQuery, FindUserReviewPreviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserReviewPreviewsQuery, FindUserReviewPreviewsQueryVariables>(FindUserReviewPreviewsDocument, options);
        }
export type FindUserReviewPreviewsQueryHookResult = ReturnType<typeof useFindUserReviewPreviewsQuery>;
export type FindUserReviewPreviewsLazyQueryHookResult = ReturnType<typeof useFindUserReviewPreviewsLazyQuery>;
export type FindUserReviewPreviewsSuspenseQueryHookResult = ReturnType<typeof useFindUserReviewPreviewsSuspenseQuery>;
export type FindUserReviewPreviewsQueryResult = Apollo.QueryResult<FindUserReviewPreviewsQuery, FindUserReviewPreviewsQueryVariables>;
export function refetchFindUserReviewPreviewsQuery(variables: FindUserReviewPreviewsQueryVariables) {
      return { query: FindUserReviewPreviewsDocument, variables: variables }
    }
export const FindUserReviewDocument = gql`
    query FindUserReview($id: ID, $slug: String) {
  findUserReview(id: $id, slug: $slug) {
    ...userReview
  }
}
    ${UserReviewFragmentDoc}`;

/**
 * __useFindUserReviewQuery__
 *
 * To run a query within a React component, call `useFindUserReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindUserReviewQuery(baseOptions?: Apollo.QueryHookOptions<FindUserReviewQuery, FindUserReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserReviewQuery, FindUserReviewQueryVariables>(FindUserReviewDocument, options);
      }
export function useFindUserReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserReviewQuery, FindUserReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserReviewQuery, FindUserReviewQueryVariables>(FindUserReviewDocument, options);
        }
export function useFindUserReviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserReviewQuery, FindUserReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserReviewQuery, FindUserReviewQueryVariables>(FindUserReviewDocument, options);
        }
export type FindUserReviewQueryHookResult = ReturnType<typeof useFindUserReviewQuery>;
export type FindUserReviewLazyQueryHookResult = ReturnType<typeof useFindUserReviewLazyQuery>;
export type FindUserReviewSuspenseQueryHookResult = ReturnType<typeof useFindUserReviewSuspenseQuery>;
export type FindUserReviewQueryResult = Apollo.QueryResult<FindUserReviewQuery, FindUserReviewQueryVariables>;
export function refetchFindUserReviewQuery(variables?: FindUserReviewQueryVariables) {
      return { query: FindUserReviewDocument, variables: variables }
    }
export const CreateUserReviewDocument = gql`
    mutation CreateUserReview($input: CreateUserReviewInput!) {
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
export const DeleteUserReviewDocument = gql`
    mutation DeleteUserReview($id: ID!) {
  deleteUserReview(id: $id)
}
    `;
export type DeleteUserReviewMutationFn = Apollo.MutationFunction<DeleteUserReviewMutation, DeleteUserReviewMutationVariables>;

/**
 * __useDeleteUserReviewMutation__
 *
 * To run a mutation, you first call `useDeleteUserReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserReviewMutation, { data, loading, error }] = useDeleteUserReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserReviewMutation, DeleteUserReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserReviewMutation, DeleteUserReviewMutationVariables>(DeleteUserReviewDocument, options);
      }
export type DeleteUserReviewMutationHookResult = ReturnType<typeof useDeleteUserReviewMutation>;
export type DeleteUserReviewMutationResult = Apollo.MutationResult<DeleteUserReviewMutation>;
export type DeleteUserReviewMutationOptions = Apollo.BaseMutationOptions<DeleteUserReviewMutation, DeleteUserReviewMutationVariables>;
export const FindUserDocument = gql`
    query FindUser($provider: String, $socialId: String, $username: String) {
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
export function refetchFindUserQuery(variables?: FindUserQueryVariables) {
      return { query: FindUserDocument, variables: variables }
    }
export const FindAuthorDocument = gql`
    query FindAuthor($id: ID, $username: String) {
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
export function refetchFindAuthorQuery(variables?: FindAuthorQueryVariables) {
      return { query: FindAuthorDocument, variables: variables }
    }
export const FindMyUserDocument = gql`
    query FindMyUser {
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
export function refetchFindMyUserQuery(variables?: FindMyUserQueryVariables) {
      return { query: FindMyUserDocument, variables: variables }
    }
export const FindUsersDocument = gql`
    query FindUsers($where: FindUsersWhereInput, $orderBy: FindUsersOrderByInput, $keyword: String, $cursor: ID, $skip: Int!, $take: Int!) {
  findUsers(
    where: $where
    orderBy: $orderBy
    keyword: $keyword
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    edges {
      node {
        ...user
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindUsersQuery__
 *
 * To run a query within a React component, call `useFindUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersQuery({
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
export function useFindUsersQuery(baseOptions: Apollo.QueryHookOptions<FindUsersQuery, FindUsersQueryVariables> & ({ variables: FindUsersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, options);
      }
export function useFindUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, options);
        }
export function useFindUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, options);
        }
export type FindUsersQueryHookResult = ReturnType<typeof useFindUsersQuery>;
export type FindUsersLazyQueryHookResult = ReturnType<typeof useFindUsersLazyQuery>;
export type FindUsersSuspenseQueryHookResult = ReturnType<typeof useFindUsersSuspenseQuery>;
export type FindUsersQueryResult = Apollo.QueryResult<FindUsersQuery, FindUsersQueryVariables>;
export function refetchFindUsersQuery(variables: FindUsersQueryVariables) {
      return { query: FindUsersDocument, variables: variables }
    }
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
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
    mutation LinkSocialProfile($input: LinkSocialProfileInput!) {
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
    query FindVersionPreview($id: ID, $refId: ID) {
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
export function refetchFindVersionPreviewQuery(variables?: FindVersionPreviewQueryVariables) {
      return { query: FindVersionPreviewDocument, variables: variables }
    }
export const FindVersionDocument = gql`
    query FindVersion($id: ID!) {
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
export function refetchFindVersionQuery(variables: FindVersionQueryVariables) {
      return { query: FindVersionDocument, variables: variables }
    }