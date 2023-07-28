export interface SuccessResponse<Data> {
  statusCode: string
  message: string
  data: Data
}

export interface ErrorResponse {
  statusCode: string
  message: string
  error?: string
}
