import {request} from "@/utils/fetch.js";

export const getUserEmail = async () => {
    const response = await request("/auth/session", 'GET')
    if (response.authorized) {
        return response.email; // Set the reactive value
    } else {
        return null;
    }
};