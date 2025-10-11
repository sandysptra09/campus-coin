export interface LeaderboardTableItem {
    rank: number,
    name: string,
    email: string,
    major: string,
    coins: number
}

export interface LeaderboardTableProps {
    items: LeaderboardTableItem[],
}