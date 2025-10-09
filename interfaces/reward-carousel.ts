export interface RewardCardItem {
    title: string,
    meta: string,
    coins: number
}

export interface RewardCarouselProps {
    item: RewardCardItem[],
    title?: string,
}