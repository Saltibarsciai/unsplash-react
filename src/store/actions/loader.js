export const startLoader = (progressId) => ({
    type: 'START_ASYNC_ACTION',
    progressId,
});

export const stopLoader = (progressId) => ({
    type: 'STOP_ASYNC_ACTION',
    progressId,
});