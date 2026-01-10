export interface SessionProps{
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress?: string | null | undefined
    userAgent?: string | null | undefined
    userId: string
    impersonatedBy?: string | null,
    id: string
}

export interface SessionListProps{
    sessions: SessionProps[]
}