"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CalendarEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CHURCH_CALENDAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CHURCH_CALENDAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ChurchCalendarSDK.test();
        const ent = testsdk.Calendar();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CHURCH_CALENDAR_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'calendar.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "celebrations", "req": false, "short": "List of liturgical celebrations for this date", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "format": "date", "name": "date", "req": false, "short": "The requested date", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "req": false, "short": "Description of the calendar system", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": false, "short": "Human-readable name of the calendar", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "season", "req": false, "short": "Liturgical season", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "season_week", "req": false, "short": "Week number within the liturgical season", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "system", "req": false, "short": "Calendar system identifier", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "weekday", "req": false, "short": "Day of the week", "type": "`$STRING`", "index$": 8 }], "id": { "field": "id", "from": { "calendar": "name" }, "name": "id", "parts": ["calendar", "year", "month", "day"], "sep": "/" }, "name": "calendar", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "en", "kind": "param", "name": "locale", "orig": "locale", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/v0/{locale}/calendars", "json": "{\"operationId\":\"getCalendars\",\"parameters\":[{\"description\":\"Language/locale code (e.g., en, la, cs, it, fr)\",\"example\":\"en\",\"in\":\"path\",\"name\":\"locale\",\"required\":true,\"schema\":{\"pattern\":\"^[a-z]{2}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the calendar system\",\"type\":\"string\"},\"name\":{\"description\":\"Human-readable name of the calendar\",\"type\":\"string\"},\"system\":{\"description\":\"Calendar system identifier\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of available calendars\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Locale not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v0/{locale}/calendars", "segments": [{ "lit": "api" }, { "lit": "v0" }, { "var": "locale" }, { "lit": "calendars" }], "select": { "exist": ["locale"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "default", "kind": "param", "name": "calendar", "orig": "calendar", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 25, "kind": "param", "name": "day", "orig": "day", "reqd": true, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 12, "kind": "param", "name": "month", "orig": "month", "reqd": true, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": 2024, "kind": "param", "name": "year", "orig": "year", "reqd": true, "type": "`$INTEGER`", "index$": 3 }] }, "contract": { "id": "GET /api/v0/en/calendars/{calendar}/{year}/{month}/{day}", "json": "{\"operationId\":\"getCalendarDay\",\"parameters\":[{\"description\":\"Calendar system identifier (e.g., default, general-en, general-la)\",\"example\":\"default\",\"in\":\"path\",\"name\":\"calendar\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Year (4-digit format)\",\"example\":2024,\"in\":\"path\",\"name\":\"year\",\"required\":true,\"schema\":{\"maximum\":2100,\"minimum\":1900,\"type\":\"integer\"}},{\"description\":\"Month (1-12)\",\"example\":12,\"in\":\"path\",\"name\":\"month\",\"required\":true,\"schema\":{\"maximum\":12,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Day of the month (1-31)\",\"example\":25,\"in\":\"path\",\"name\":\"day\",\"required\":true,\"schema\":{\"maximum\":31,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"celebrations\":{\"description\":\"List of liturgical celebrations for this date\",\"items\":{\"properties\":{\"colour\":{\"description\":\"Liturgical color for the celebration\",\"type\":\"string\"},\"rank\":{\"description\":\"Liturgical rank of the celebration\",\"type\":\"string\"},\"rank_num\":{\"description\":\"Numerical rank value\",\"type\":\"number\"},\"title\":{\"description\":\"Title of the celebration\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"date\":{\"description\":\"The requested date\",\"format\":\"date\",\"type\":\"string\"},\"season\":{\"description\":\"Liturgical season\",\"type\":\"string\"},\"season_week\":{\"description\":\"Week number within the liturgical season\",\"type\":\"integer\"},\"weekday\":{\"description\":\"Day of the week\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with calendar data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Invalid request parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Date or calendar not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v0/en/calendars/{calendar}/{year}/{month}/{day}", "segments": [{ "lit": "api" }, { "lit": "v0" }, { "lit": "en" }, { "lit": "calendars" }, { "var": "calendar" }, { "var": "year" }, { "var": "month" }, { "var": "day" }], "select": { "exist": ["calendar", "day", "month", "year"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["calendar"], ["v0"]] }, "key$": "calendar", "name__orig": "calendar", "Name": "Calendar", "name_": "calendar", "name-": "calendar", "NAME": "CALENDAR", "index$": 0 }, { "active": true, "entity": "calendar", "key$": "BasicCalendarFlow", "kind": "basic", "name": "BasicCalendarFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "locale": "locale01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "calendar_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "calendar_ref01", "srcdatavar": "calendar_ref01_data", "suffix": "_dt0" }, "match": { "calendar": "calendar01", "id": "calendar01", "month": "month01", "year": "year01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-calendar_ref01" } }], "index$": 1 }] }, 'Calendar');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let calendar_ref01_data = Object.values(setup.data.existing.calendar)[0];
        // LIST
        const calendar_ref01_ent = client.Calendar();
        const calendar_ref01_match = {};
        calendar_ref01_match['locale'] = setup.idmap['locale01'];
        const calendar_ref01_list = (await calendar_ref01_ent.list(calendar_ref01_match)).map((e) => e.data());
        // LOAD
        const calendar_ref01_match_dt0 = {};
        calendar_ref01_match_dt0.id = calendar_ref01_data.id;
        const calendar_ref01_data_dt0 = (await calendar_ref01_ent.load(calendar_ref01_match_dt0)).data();
        (0, node_assert_1.default)(calendar_ref01_data_dt0.id === calendar_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/calendar/CalendarTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ChurchCalendarSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['calendar01', 'calendar02', 'calendar03', 'calendar01', 'calendar02', 'calendar03', 'v001', 'v002', 'v003'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CHURCH_CALENDAR_TEST_CALENDAR_ENTID': idmap,
        'CHURCH_CALENDAR_TEST_LIVE': 'FALSE',
        'CHURCH_CALENDAR_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CHURCH_CALENDAR_TEST_CALENDAR_ENTID'];
    const live = 'TRUE' === env.CHURCH_CALENDAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CHURCH_CALENDAR_TEST_CALENDAR_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ChurchCalendarSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CHURCH_CALENDAR_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CalendarEntity.test.js.map