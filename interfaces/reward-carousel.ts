export interface RewardCardItem {
    id: number,
    title: string,
    meta: string,
    coins: number,
    image: string,
}

export interface RewardCarouselProps {
    item: RewardCardItem[],
    title?: string,
}