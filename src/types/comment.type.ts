// export interface CommentList {

// }

export type TComment = {
  id: string
  avatar: string
  user_name: string
  comment_content: string
  time: string
  like: number
  replies?: TComment[]
}
