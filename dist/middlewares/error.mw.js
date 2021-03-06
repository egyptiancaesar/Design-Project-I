"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is how you create an express error handling middleware
// https://wanago.io/2018/12/17/typescript-express-error-handling-validation/
exports.errorHandler = (err, req, res, next) => {
    console.log(err, res, req, next);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubXcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJtaWRkbGV3YXJlcy9lcnJvci5tdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDhEQUE4RDtBQUM5RCw2RUFBNkU7QUFDaEUsUUFBQSxZQUFZLEdBQUcsQ0FBQyxHQUFVLEVBQUUsR0FBWSxFQUN4QixHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UsIFJlcXVlc3QsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG4vLyBUaGlzIGlzIGhvdyB5b3UgY3JlYXRlIGFuIGV4cHJlc3MgZXJyb3IgaGFuZGxpbmcgbWlkZGxld2FyZVxuLy8gaHR0cHM6Ly93YW5hZ28uaW8vMjAxOC8xMi8xNy90eXBlc2NyaXB0LWV4cHJlc3MtZXJyb3ItaGFuZGxpbmctdmFsaWRhdGlvbi9cbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyOiBFcnJvciwgcmVxOiBSZXF1ZXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhlcnIsIHJlcywgcmVxLCBuZXh0KVxufTtcbiJdfQ==