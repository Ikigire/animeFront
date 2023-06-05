export interface Anime {
    AnimeID: number,
    Name: string,
    Japanese_name: string,
    Episodes: number,
    Release_season: string,
    Tags: string,
    Rating: number,
    Release_year: number
    Viewed?: boolean,
    Studio?: string,
    Type?: string
    StudioId?: number,
    TypeId?: number
}

export interface Studio {
    StudioId: number,
    Name: string
}

export interface Type {
    TypeId: number,
    Type: string
}