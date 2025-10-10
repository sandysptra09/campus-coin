export interface RewardCardItem {
    id: number,
    title: string,
    meta: string,
    coins: number
}

export interface RewardCarouselProps {
    item: RewardCardItem[],
    title?: string,
}