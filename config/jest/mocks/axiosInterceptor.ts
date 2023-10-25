const axiosInterceptor = {
    create: jest.fn(() => ({
        get: jest.fn(),
        interceptors: {
            request: { use: jest.fn(), eject: jest.fn() },
            response: { use: jest.fn(), eject: jest.fn() }
        }
    })),
    post: jest.fn(() => ({
        mockReturnValue: jest.fn()
    }))
}

export default axiosInterceptor
