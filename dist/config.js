"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// System deployment mode
var Mode;
(function (Mode) {
    Mode["Production"] = "prod";
    Mode["Staging"] = "stage";
    Mode["Development"] = "dev";
    Mode["Test"] = "test";
})(Mode = exports.Mode || (exports.Mode = {}));
// Config vars which are the same across all environments
const commonConfig = {
    dbName: 'app-main'
};
const prodConfig = Object.assign({ mode: Mode.Production, serverHost: '', serverPort: 0, dbHost: '', dbPort: 0, mongoURL: '' }, commonConfig);
const stageConfig = Object.assign({ mode: Mode.Staging, serverHost: '', serverPort: 0, dbHost: '', dbPort: 0, mongoURL: '' }, commonConfig);
// Local dev enviromnet config (default)
const devConfig = Object.assign({ mode: Mode.Development, serverHost: 'localhost', serverPort: 8090, dbHost: 'localhost', dbPort: 27017, mongoURL: 'mongodb://localhost:27017' }, commonConfig);
const testConfig = Object.assign(Object.assign({ mode: Mode.Test, serverHost: 'localhost', serverPort: 8090, dbHost: 'localhost', dbPort: 27017, mongoURL: 'mongodb://localhost:27017' }, commonConfig), { dbName: 'test-main' });
// Retrieve the configurations for the current mode
function getConfig(config) {
    switch (config) {
        case Mode.Production: return prodConfig;
        case Mode.Staging: return stageConfig;
        case Mode.Development: return devConfig;
        case Mode.Test: return testConfig;
        default: return devConfig;
    }
}
exports.SysConfig = getConfig(process.env.Mode);
exports.signingSecret = 'ShhhhIamSecret';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBQ3pCLElBQVksSUFLWDtBQUxELFdBQVksSUFBSTtJQUNaLDJCQUFtQixDQUFBO0lBQ25CLHlCQUFpQixDQUFBO0lBQ2pCLDJCQUFtQixDQUFBO0lBQ25CLHFCQUFhLENBQUE7QUFDakIsQ0FBQyxFQUxXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQUtmO0FBWUQseURBQXlEO0FBQ3pELE1BQU0sWUFBWSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxVQUFVO0NBQ3JCLENBQUE7QUFFRCxNQUFNLFVBQVUsbUJBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQ3JCLFVBQVUsRUFBRSxFQUFFLEVBQ2QsVUFBVSxFQUFFLENBQUMsRUFDYixNQUFNLEVBQUUsRUFBRSxFQUNWLE1BQU0sRUFBRSxDQUFDLEVBQ1QsUUFBUSxFQUFFLEVBQUUsSUFDVCxZQUFZLENBQ2xCLENBQUE7QUFFRCxNQUFNLFdBQVcsbUJBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ2xCLFVBQVUsRUFBRSxFQUFFLEVBQ2QsVUFBVSxFQUFFLENBQUMsRUFDYixNQUFNLEVBQUUsRUFBRSxFQUNWLE1BQU0sRUFBRSxDQUFDLEVBQ1QsUUFBUSxFQUFFLEVBQUUsSUFDVCxZQUFZLENBQ2xCLENBQUE7QUFFRCx3Q0FBd0M7QUFDeEMsTUFBTSxTQUFTLG1CQUNYLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUN0QixVQUFVLEVBQUUsV0FBVyxFQUN2QixVQUFVLEVBQUUsSUFBSSxFQUNoQixNQUFNLEVBQUUsV0FBVyxFQUNuQixNQUFNLEVBQUUsS0FBSyxFQUNiLFFBQVEsRUFBRSwyQkFBMkIsSUFDbEMsWUFBWSxDQUNsQixDQUFBO0FBRUQsTUFBTSxVQUFVLGlDQUNaLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNmLFVBQVUsRUFBRSxXQUFXLEVBQ3ZCLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLE1BQU0sRUFBRSxXQUFXLEVBQ25CLE1BQU0sRUFBRSxLQUFLLEVBQ2IsUUFBUSxFQUFFLDJCQUEyQixJQUNsQyxZQUFZLEtBQ2YsTUFBTSxFQUFFLFdBQVcsR0FDdEIsQ0FBQTtBQUVELG1EQUFtRDtBQUNuRCxTQUFTLFNBQVMsQ0FBQyxNQUEwQjtJQUN6QyxRQUFPLE1BQU0sRUFBRTtRQUNYLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sV0FBVyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sVUFBVSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDO0tBQzdCO0FBQ0wsQ0FBQztBQUVZLFFBQUEsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLFFBQUEsYUFBYSxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3lzdGVtIGRlcGxveW1lbnQgbW9kZVxuZXhwb3J0IGVudW0gTW9kZSB7XG4gICAgUHJvZHVjdGlvbiA9ICdwcm9kJyxcbiAgICBTdGFnaW5nID0gJ3N0YWdlJyxcbiAgICBEZXZlbG9wbWVudCA9ICdkZXYnLFxuICAgIFRlc3QgPSAndGVzdCdcbn1cblxuaW50ZXJmYWNlIENvbmZpZyB7XG4gICAgcmVhZG9ubHkgbW9kZTogTW9kZSxcbiAgICByZWFkb25seSBzZXJ2ZXJIb3N0OiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgc2VydmVyUG9ydDogbnVtYmVyLFxuICAgIHJlYWRvbmx5IGRiSG9zdDogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGRiUG9ydDogbnVtYmVyLFxuICAgIHJlYWRvbmx5IGRiTmFtZTogc3RyaW5nLFxuICAgIHJlYWRvbmx5IG1vbmdvVVJMOiBzdHJpbmcsXG59XG5cbi8vIENvbmZpZyB2YXJzIHdoaWNoIGFyZSB0aGUgc2FtZSBhY3Jvc3MgYWxsIGVudmlyb25tZW50c1xuY29uc3QgY29tbW9uQ29uZmlnID0ge1xuICAgIGRiTmFtZTogJ2FwcC1tYWluJ1xufVxuXG5jb25zdCBwcm9kQ29uZmlnOiBDb25maWcgPSB7XG4gICAgbW9kZTogTW9kZS5Qcm9kdWN0aW9uLFxuICAgIHNlcnZlckhvc3Q6ICcnLFxuICAgIHNlcnZlclBvcnQ6IDAsXG4gICAgZGJIb3N0OiAnJyxcbiAgICBkYlBvcnQ6IDAsXG4gICAgbW9uZ29VUkw6ICcnLFxuICAgIC4uLmNvbW1vbkNvbmZpZ1xufVxuXG5jb25zdCBzdGFnZUNvbmZpZzogQ29uZmlnID0ge1xuICAgIG1vZGU6IE1vZGUuU3RhZ2luZyxcbiAgICBzZXJ2ZXJIb3N0OiAnJyxcbiAgICBzZXJ2ZXJQb3J0OiAwLFxuICAgIGRiSG9zdDogJycsXG4gICAgZGJQb3J0OiAwLFxuICAgIG1vbmdvVVJMOiAnJyxcbiAgICAuLi5jb21tb25Db25maWdcbn1cblxuLy8gTG9jYWwgZGV2IGVudmlyb21uZXQgY29uZmlnIChkZWZhdWx0KVxuY29uc3QgZGV2Q29uZmlnOiBDb25maWcgPSB7XG4gICAgbW9kZTogTW9kZS5EZXZlbG9wbWVudCxcbiAgICBzZXJ2ZXJIb3N0OiAnbG9jYWxob3N0JyxcbiAgICBzZXJ2ZXJQb3J0OiA4MDkwLFxuICAgIGRiSG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgZGJQb3J0OiAyNzAxNyxcbiAgICBtb25nb1VSTDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcnLFxuICAgIC4uLmNvbW1vbkNvbmZpZ1xufVxuXG5jb25zdCB0ZXN0Q29uZmlnOiBDb25maWcgPSB7XG4gICAgbW9kZTogTW9kZS5UZXN0LFxuICAgIHNlcnZlckhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHNlcnZlclBvcnQ6IDgwOTAsXG4gICAgZGJIb3N0OiAnbG9jYWxob3N0JyxcbiAgICBkYlBvcnQ6IDI3MDE3LFxuICAgIG1vbmdvVVJMOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNycsXG4gICAgLi4uY29tbW9uQ29uZmlnLFxuICAgIGRiTmFtZTogJ3Rlc3QtbWFpbicsXG59XG5cbi8vIFJldHJpZXZlIHRoZSBjb25maWd1cmF0aW9ucyBmb3IgdGhlIGN1cnJlbnQgbW9kZVxuZnVuY3Rpb24gZ2V0Q29uZmlnKGNvbmZpZzogc3RyaW5nIHwgdW5kZWZpbmVkKTogQ29uZmlnIHtcbiAgICBzd2l0Y2goY29uZmlnKSB7XG4gICAgICAgIGNhc2UgTW9kZS5Qcm9kdWN0aW9uOiByZXR1cm4gcHJvZENvbmZpZztcbiAgICAgICAgY2FzZSBNb2RlLlN0YWdpbmc6IHJldHVybiBzdGFnZUNvbmZpZztcbiAgICAgICAgY2FzZSBNb2RlLkRldmVsb3BtZW50OiByZXR1cm4gZGV2Q29uZmlnO1xuICAgICAgICBjYXNlIE1vZGUuVGVzdDogcmV0dXJuIHRlc3RDb25maWc7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBkZXZDb25maWc7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgU3lzQ29uZmlnID0gZ2V0Q29uZmlnKHByb2Nlc3MuZW52Lk1vZGUpO1xuZXhwb3J0IGNvbnN0IHNpZ25pbmdTZWNyZXQgPSAnU2hoaGhJYW1TZWNyZXQnO1xuIl19