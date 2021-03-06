"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get(/([A-Za-z0-9]|\-){36}/, (req, res, next) => {
    console.log(req.params, res.status, next.name);
});
exports.UserController = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL3YxL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFnRTtBQUNoRSxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBTyxFQUFFO0lBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVuRCxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsY0FBYyxHQUFHLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciwgTmV4dEZ1bmN0aW9ufSBmcm9tICdleHByZXNzJztcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KC8oW0EtWmEtejAtOV18XFwtKXszNn0vLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBhbnkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcS5wYXJhbXMsIHJlcy5zdGF0dXMsIG5leHQubmFtZSk7XG5cbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRyb2xsZXIgPSByb3V0ZXI7Il19