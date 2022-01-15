import { createSelector } from 'reselect'

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParams => createSelector(
    [selectCollections],
    (collections) => (collections ? collections[collectionUrlParams] : null)
)

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)