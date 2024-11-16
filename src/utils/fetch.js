// Determine if the method is GET or HEAD, and exclude the body if so
function createOptions(method) {
    return {
        method: method,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
        }
    }
}

export const request = async (route, method, data = null) => {
    console.log(data);

    const options = createOptions(method)
    // If the method is not GET or HEAD, include the body
    if (method !== 'GET' && method !== 'HEAD' && data !== null) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch('/api' + route, options);
        if (!response.ok) {
            throw response;
        }
        const result = await response.json();
        console.log('Success:', result);
        return result; // Return the data for further use

    } catch (error) {
        console.error(error);
        throw await error.json(); // Rethrow the error for the caller to handle
    }
}

// export const fetchData = async (route, method, data = null, onError, ) => {
//     console.log(data);
//
//     const options = options(method)
//     // If the method is not GET or HEAD, include the body
//     if (method !== 'GET' && method !== 'HEAD' && data !== null) {
//         options.body = JSON.stringify(data);
//     }
//
//     try {
//         const response = await fetch('/api' + route, options);
//
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//
//         const result = await response.json();
//         console.log('Success:', result);
//         return result; // Return the data for further use
//
//     } catch (error) {
//         console.error('Error:', error);
//         throw error; // Rethrow the error for the caller to handle
//     }
// }