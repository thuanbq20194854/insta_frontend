export interface TRefreshTokenResponse {
  access_token: string
  refresh_token: string
}

export interface TUser {
  id?: number
  name?: string
  email?: string
  phone?: string
  user_name?: string
  avatar?: string
  website?: string
  bio?: string
  gender?: null
  status?: number
  is_private?: number
  status_activity?: number
  status_story?: number
  is_tick?: number
  status_notification?: null
  created_at?: string
  updated_at?: string
  count_following?: number
  view_all_story?: number
  is_following?: number
}
