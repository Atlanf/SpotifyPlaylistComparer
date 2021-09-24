export interface ICurrentUserPlaylistsPreview {
    playlists: IPage<IPlaylistInfoPreview>[]
}

export interface IPlaylistInfoPreview {

}

export interface IPage<T> {
    items: T[],
    limit: number,
    offset: number,
    next: string,
    previous: string,
    total: number
}