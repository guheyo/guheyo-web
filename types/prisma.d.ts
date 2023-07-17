declare module 'prisma' {
  interface Guild {
    id: string
    name: string
    categories?: Category[]
    rank: number
  }

  interface Category {
    id: string
    name: string
    guildId: string
    posts?: Post[]
    rank: number
  }

  interface Post {
    id: string
    user: User
    type: string
    title: string
    subTitle?: string
    price: number
    content: string
    images?: Image[]
    tags?: Tag[]
    createdAt: Date
  }

  interface PostPreview {
    id: string
    user: User
    type: string
    title: string
    subTitle?: string
    price: number
    content: string
    coverImageURL: string
    tags?: Tag[]
    createdAt: Date
  }

  interface Tag {
    id: string
    name: string
    posts?: Post[]
  }

  interface User {
    id: string
    name?: string | null
    username: string
    socialAccounts?: SocialAccount[]
    avatarURL?: string
    bot: boolean
    roles?: Role[]
  }

  interface SocialAccount {
    id: string
    provider: string
    socialId: string
    userId: string
    createdAt: Date
    refreshToken?: string
    accessToken?: string
    expiresAt?: number
    tokenType?: string
    scope?: string
    idToken?: string
    sessionState?: string
  }

  interface Role {
    id: string
    name: string
    rank: number
    hexColor: string
    users?: User[]
  }

  interface Image {
    name: string
    url: string
    userId: string
    postId: string
    height?: number
    width?: number
  }

  interface Session {
    sessionToken: String
    expires: Date
    userId: String
  }

  interface VerificationToken {
    identifier: string
    token: string
    expires: Date
  }

  interface ImageCarouselProps {
    images: Image[] | undefined
    sizes: string
    width: number
    height: number
  }

  interface ImageSliderProps {
    ImageCarouselProps
    fill: boolean
  }
}
