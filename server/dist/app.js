"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const agentRoute_1 = __importDefault(require("./routes/agentRoute"));
// const dotEnv = dotenv.config();
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const superadmin_1 = __importDefault(require("./routes/superadmin"));
const properties_1 = __importDefault(require("./routes/properties"));
const users_1 = __importDefault(require("./routes/users"));
const connectDB = require("./database/database");
connectDB();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use('/', index_1.default);
app.use('/superadmin', superadmin_1.default);
app.use('/agents', agentRoute_1.default);
app.use('/properties', properties_1.default);
app.use('/users', users_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, "../client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, "../client", "build", "index.html"));
    });
}
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.log(err);
    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err,
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map