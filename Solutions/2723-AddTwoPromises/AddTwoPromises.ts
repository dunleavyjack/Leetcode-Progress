async function addTwoPromises(
    promise1: Promise<number>,
    promise2: Promise<number>
): Promise<number> {
    const [promise1Response, promise2Response] = await Promise.all([
        promise1,
        promise2,
    ]);
    return promise1Response + promise2Response;
}
