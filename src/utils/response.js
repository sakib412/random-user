export const errorResponse = (message = "Something went worng, Please try again.") => {
    const data = { message }
    return {
        is_success: false, data: data
    }
}

export const successResponse = (data = {}) => {
    return { is_success: true, data }
}
