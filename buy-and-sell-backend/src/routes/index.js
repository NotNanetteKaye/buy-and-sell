import { addViewToListingRoute } from './addViewToListing';
import { createNewListingRoute } from './createNewListing';
import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListing';
import { getUserListingsRoute } from './getUserListing';
import { updateListingRoute } from './updateListing';

export default [
    addViewToListingRoute,
    createNewListingRoute,
    updateListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
];