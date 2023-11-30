export interface Article {
    id: number
    author_id: number
    author: {
        id: number
        email: string
        username: string
    }
    title: string
    views: number
    createdAt: string
    tags: ArticleTag[]
    type: ArticleType[]
    blocks: ArticleBlock[]
}

enum ArticleTag {
    javascript = 'javascript',
    es2022 = 'es2022',
    ecmascript_2022 = 'ecmascript_2022',
}

enum ArticleType {
    IT = 'IT',
    JavaScript = 'JavaScript'
}

export type ArticleBlock = ArticleTitleBlock | ArticleTextBlock | ArticleImageBlock | ArticleQuoteBlock | ArticleCodeBlock | ArticleListBlock

enum ArticleBlockType {
    TITLE = 'title',
    TEXT = 'text',
    IMAGE = 'image',
    QUOTE = 'quote',
    CODE = 'code',
    LIST = 'list',
}

enum ArticleTitleType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
}

interface ArticleBlockBase {
    type: ArticleBlockType
}

export interface ArticleTitleBlock extends ArticleBlockBase {
    type: ArticleBlockType.TITLE
    size: ArticleTitleType
    title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    html: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    subtitle: string
}

export interface ArticleQuoteBlock extends ArticleBlockBase {
    type: ArticleBlockType.QUOTE
    html: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    language: string
    code: string
}

export interface ArticleListBlock extends ArticleBlockBase {
    type: ArticleBlockType.LIST
    list: string[]
}
