function asyncHandler(asyncFunction) {
  return function wrappedAsyncHandler(...args) {
    const out = asyncFunction(...args);
    const nextFunction = args[args.length - 1];
    return Promise.resolve(out).catch(nextFunction);
  };
}
