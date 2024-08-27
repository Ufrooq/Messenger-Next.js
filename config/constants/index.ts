export enum DB_COLLECTIONS {
    USER = 'users',
    MESSAGES = 'messages',
    REQUESTS = 'requests',
    FRIENDS = 'friends'
}

export enum FriendRequestStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    CANCELED = 'canceled',
    BLOCKED = 'blocked',
    REMOVED = 'removed',
    EXPIRED = 'expired',
    SEEN = 'seen',
}
