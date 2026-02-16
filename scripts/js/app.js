(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
        "question": "What was the topic of his recent science class?",
        "tag": "science"
    },
    {
        "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
        "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
        "tag": "parent_teacher_conference"
    },
    {
        "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
        "question": "How does the nursery school support kids’ transitions into school?",
        "tag": "orientation"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.Data = exports.urlData = void 0;
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEvent = exports.ButtonEvent = exports.ClickEvent = exports.BaseTrackerEvent = void 0;
exports.objectToTrackerEvent = objectToTrackerEvent;
exports.isTrackerEvent = isTrackerEvent;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
(0, console_wrapper_1.log)("event loaded.", 2 /* DebugLevelEnum.BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = (0, funcs_1.now)();
}
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = (0, funcs_1.now)();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: false,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* ActionEnum.CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* ActionEnum.CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* ActionEnum.HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;

},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReceiver = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
(0, console_wrapper_1.log)("receiver loaded.", 2 /* DebugLevelEnum.BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if ((0, event_1.isTrackerEvent)(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;

},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBanner = void 0;
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)("banner loaded.", 2 /* DebugLevelEnum.BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});

},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
(0, console_wrapper_1.log)("document loaded.", 2 /* DebugLevelEnum.BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <".concat(id, ">."));
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        (0, console_wrapper_1.error)(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;

},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
(0, console_wrapper_1.log)('element loaded.', 2 /* DebugLevelEnum.BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};

},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoc = exports.ModeEnum = exports.AppEnum = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
(0, console_wrapper_1.log)('html loc loaded.', 2 /* DebugLevelEnum.BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum || (exports.AppEnum = AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum || (exports.ModeEnum = ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;

},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)('modal loaded.', 2 /* DebugLevelEnum.BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: ".concat(Math.round(window.pageXOffset), "px; top: ").concat(Math.round(window.pageYOffset), "px;"));
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});

},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroll = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
(0, console_wrapper_1.log)('scroll loaded.', 2 /* DebugLevelEnum.BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            (0, console_wrapper_1.error)(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: false,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = (0, funcs_1.now)();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        var _this = this;
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(function () { return _this.scroll(); });
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if (!('requestAnimationFrame' in window)) {
            window.scroll(0, Number(this.endPos));
            // (window as Window).scroll({ top: this.endPos, left: 0, behavior: 'auto' });
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;

},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitForm = void 0;
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)('submit form loaded.', 2 /* DebugLevelEnum.BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, queryString, urlParams, textArea;
            return __generator(this, function (_a) {
                event.preventDefault();
                allowed = allowSubmission.allow();
                if (allowed === null) {
                    qp = new URL(window.location.href).searchParams;
                    data_1.data.urlData.raw = window.location.href;
                    data_1.data.urlData.assignmentID = qp.get('assignmentId');
                    data_1.data.urlData.hitID = qp.get('hitId');
                    data_1.data.urlData.workerID = qp.get('workerId');
                    data_1.data.urlData.submitTo =
                        qp.get('turkSubmitTo') + '/mturk/externalSubmit';
                    if (data_1.data.urlData.assignmentID !== null) {
                        document_1.D.id('assignment-id').value =
                            data_1.data.urlData.assignmentID;
                    }
                    if (data_1.data.urlData.hitID !== null) {
                        document_1.D.id('hit-id').value =
                            data_1.data.urlData.hitID;
                    }
                    queryString = window.location.search;
                    urlParams = new URLSearchParams(queryString);
                    data_1.data.data.task = urlParams.get("tag");
                    textArea = document.getElementById("text-area");
                    if (textArea) {
                        data_1.data.data.response = textArea.value;
                    }
                    console.log("\n\nDATA FOR TASK: " + data_1.data.data.task + "\n");
                    console.log(JSON.stringify(data_1.data));
                    alert("Open console to see user data. Please record into a text document.");
                    // (Elements.submitForm as HTMLFormElement).action = data.urlData
                    //     .submitTo as string;
                    // allowSubmission.preSubmit();
                    // const resp = await fetch(gate, {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         'x-api-key': k,
                    //     },
                    //     body: JSON.stringify({
                    //         sandbox: params.sandbox,
                    //         wustl_key: params.wustl_key,
                    //         project: params.project,
                    //         iteration: params.iteration,
                    //         tag: params.tag,
                    //         assignmentID: data.urlData.assignmentID,
                    //         hitID: data.urlData.hitID,
                    //         workerID: data.urlData.workerID,
                    //         log: data.serialize(),
                    //     }),
                    // }); // TODO: verify this actually works
                    // console.log(resp.status);
                    // console.log(await resp.json());
                    // if (resp.status !== 200) {
                    //     alert(
                    //         'You made a bad request with your submission. The server thinks that you made this error: ' +
                    //             (await resp.json()).error
                    //     );
                    //     return;
                    // }
                    // SubmitForm.elem.removeEventListener(
                    //     'submit',
                    //     SubmitForm.submitFunc
                    // );
                    // SubmitForm.elem.submit();
                }
                else {
                    alert(allowed);
                }
                return [2 /*return*/];
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;

},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerElements = void 0;
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;

},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;

},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
(0, console_wrapper_1.log)('router loaded.', 2 /* DebugLevelEnum.BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* RouterMode.ON */ ||
            config.mode === 2 /* RouterMode.STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* RouterMode.STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return (0, console_wrapper_1.error)(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent('newPageLoad'));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            (0, console_wrapper_1.error)(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return (0, console_wrapper_1.error)(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent('newPageLoad'));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent('newPageLoad'));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp('#');
    Router.EMPTY = new RegExp('^$');
    Router.AT_SYMBOL = new RegExp('@');
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) {
        return event.preventDefault();
    };
    Router.pathPrefix = '';
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === 'pdf') {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, 'click', function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;

},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
(0, console_wrapper_1.log)('tracker loaded.', 2 /* DebugLevelEnum.BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spreadArray([], __read(inds), false));
            sub = sub.substring(0, ind) + '...';
        }
        console.log(scen);
        console.log('loaded scen');
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        (0, console_wrapper_1.setDebugLevel)(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!(0, event_1.isTrackerEvent)(evData)) {
                    (0, event_1.objectToTrackerEvent)(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;

},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = error;
exports.errorHO = errorHO;
exports.setDebugLevel = setDebugLevel;
exports.log = log;
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* DebugLevelEnum.BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
var debugLevel = 2 /* DebugLevelEnum.BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}

},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = noop;
exports.now = now;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("funcs loaded.", 2 /* DebugLevelEnum.BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
function now() {
    return new Date().getTime();
}

},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoader = void 0;
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
(0, console_wrapper_1.log)('html loader loaded.', 2 /* DebugLevelEnum.BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        (0, console_wrapper_1.log)('regsiter post load function', 3 /* DebugLevelEnum.DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                (0, console_wrapper_1.log)('begin load', 3 /* DebugLevelEnum.DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                (0, console_wrapper_1.log)('end load', 3 /* DebugLevelEnum.DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                (0, console_wrapper_1.log)('begin request', 3 /* DebugLevelEnum.DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        (0, console_wrapper_1.log)('resolve request', 3 /* DebugLevelEnum.DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        (0, console_wrapper_1.log)('Flattening', 3 /* DebugLevelEnum.DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;

},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("id generator loaded", 2 /* DebugLevelEnum.BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: false,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;

},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReady = isReady;
exports.waitUntilReady = waitUntilReady;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("ready loaded", 2 /* DebugLevelEnum.BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    (0, console_wrapper_1.log)("document is ready", 3 /* DebugLevelEnum.DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}

},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenarios = void 0;
// tslint:disable-next-line: no-var-requires
// export const scenarios: Scenario[] = require('./../../../../scenarios/scenarios.json');
var scenarios_json_1 = __importDefault(require("./../../../../scenarios/scenarios.json"));
exports.scenarios = scenarios_json_1.default;
window.scenarios = scenarios_json_1.default;

},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;

},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = doSomething;
function doSomething() {
    console.log("Put some code in here!");
}

},{}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
exports.setupAll = setupAll;
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
var scrolltoid_1 = require("./scrolltoid");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    (0, do_something_1.doSomething)();
    // This is used to scroll to a staff member when a link to staff.html is clicked
    (0, scrolltoid_1.scrollToID)();
}
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });

},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./scrolltoid":29,"./slideshow":30}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsToCache = void 0;
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
    // Put more items in the array below here.
];

},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\r\n  <div class=\"container\">\r\n    <div class=\"footer-widgets\">\r\n      <aside class=\"widget site-contact\">\r\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\r\n        <p>6926 Forest Park Parkway</p>\r\n        <p>St. Louis, MO 63130</p>\r\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\r\n        <p>\r\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\r\n        </p>\r\n      </aside>\r\n\r\n      <div class=\"widget-wrapper\">\r\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\r\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\r\n          <div class=\"textwidget\">\r\n            <p>\r\n              Classes meet Mon. through Fri.<br>\r\n              Morning: 9-11:45 a.m.<br>\r\n              Afternoon: 12:30-3:15 p.m.<br>\r\n              Full day: 9 a.m.-3:15 p.m.\r\n            </p>\r\n          </div>\r\n        </aside>\r\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\r\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\r\n          <div class=\"textwidget\">\r\n            <p>\r\n              Experience the innovative approach and dynamic teaching\r\n              environment of the Washington University Nursery School.\r\n            </p>\r\n            <a href=\"files/apply.html\">Register Now</a>\r\n          </div>\r\n        </aside>\r\n      </div>\r\n    </div>\r\n    <div class=\"site-info\">\r\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\r\n    </div>\r\n  </div>\r\n</footer>";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"321\" height=\"28\" viewBox=\"0 0 321 28\" class=\"washu-logo\"\r\n    aria-labelledby=\"title\">\r\n    <title id=\"title\">Washington University in St. Louis</title>\r\n    <path fill=\"#FFF\"\r\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\">\r\n    </path>\r\n    <path fill=\"#007360\"\r\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\">\r\n    </path>\r\n    <path fill=\"#E1C4AC\"\r\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\">\r\n    </path>\r\n    <path fill=\"#A51417\"\r\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\">\r\n    </path>\r\n    <path fill=\"#E1C4AC\"\r\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\">\r\n    </path>\r\n    <path fill=\"#007360\"\r\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\">\r\n    </path>\r\n    <path fill=\"#E1C4AC\"\r\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\">\r\n    </path>\r\n    <path fill=\"#E1C4AC\"\r\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\">\r\n    </path>\r\n    <path fill=\"#007360\"\r\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\">\r\n    </path>\r\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\r\n      <path\r\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\">\r\n      </path>\r\n      <path\r\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\">\r\n      </path>\r\n      <path\r\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\">\r\n      </path>\r\n    </g>\r\n  </svg>\r\n</div>\r\n<header role=\"banner\">\r\n  <div class=\"container\">\r\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\r\n  </div>\r\n  <div id=\"main-menu-container\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar\">\r\n        <a id=\"about\" href=\"files/about.html\">About</a>\r\n        <a id=\"staff\" href=\"files/staff.html\">Staff</a>\r\n        <!-- <div class=\"dropdown\">\r\n          <button class=\"dropbtn\">\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a id=\"parent-handbook\" href=\"files/parent_handbook.html\">Parent Handbook</a>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"dropdown\">\r\n          <button class=\"dropbtn\">\r\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms\r\n            </a>\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\">Curriculum Overview</a>\r\n            <!-- <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears</a>\r\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears</a>\r\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs</a>\r\n            <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears</a>\r\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears</a> -->\r\n            <!-- <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks</a> -->\r\n            <!-- <a id=\"enrichment-program\" href=\"files/enrichment_programs.html\">Enrichment Program</a> -->\r\n          </div>\r\n        </div>\r\n        <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\r\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\r\n        <div class=\"dropdown\">\r\n          <button class=\"dropbtn\">\r\n            <a id=\"admissions-enrollment\" href=\"files/apply.html\">Admissions &amp; Enrollment</a>\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a id=\"apply\" href=\"files/apply.html\">Apply</a>\r\n            <a id=\"forms\" href=\"files/forms.html\">Accepted Students</a>\r\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"dropdown\">\r\n          <button class=\"dropbtn\">\r\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a id=\"nursery-school-merchandise\" href=\"files/nursery_school_merchandise.html\">Nursery School\r\n              Merchandise</a>\r\n            <a id=\"parent-association\" href=\"files/parent_association.html\">Parent Association</a>\r\n          </div>\r\n        </div>\r\n        <a id=\"parent-resources\" href=\"files/parent_resources.html\">Parent Resources</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToID = scrollToID;
function scrollToID() {
    // Scroll to a specific staff member
    var id = localStorage.getItem("scrollToID");
    if (id != null) {
        localStorage.removeItem("scrollToID");
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ block: "start", inline: "nearest" });
        }
    }
    // Make links with staff-redirect class remember what staff member to redirect to
    var links = document.querySelectorAll("a.staff-redirect");
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            var targetId = link.dataset.scrollto;
            if (!targetId) {
                return;
            }
            localStorage.setItem("scrollToID", targetId);
        });
    });
}

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slideshow = void 0;
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;

},{"./../core/dom/document":6}],31:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, ready_1.waitUntilReady)()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert('This HIT is broken and cannot be completed at this time.');
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: 'information-foraging',
                    bucketName: 'cse-256-log',
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id('text-area');
                                console.log(textArea.value);
                                if (textArea.value === '') {
                                    return 'You must fill out the text box to turn this HIT in.';
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return 'There was an error fill out the form and try again.';
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id('text-area').value;
                            return;
                        },
                    },
                    debugLevel: 1 /* DebugLevelEnum.NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* RouterMode.STANDARD_ALLOWANCES */,
                                                module: "A" /* RouterModule.A */,
                                            },
                                            { mode: 0 /* RouterMode.OFF */, module: "FORM" /* RouterModule.FORM */ },
                                            {
                                                mode: 2 /* RouterMode.STANDARD_ALLOWANCES */,
                                                module: "IMG" /* RouterModule.IMG */,
                                            },
                                        ], 'files/');
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* ActionEnum.CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* ActionEnum.CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, 'keypress', function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* ActionEnum.BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener('scroll', function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* ActionEnum.SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* ActionEnum.HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* ActionEnum.BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* ActionEnum.CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* ActionEnum.SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load('files/index.html')];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();

},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,31])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3Njcm9sbHRvaWQudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFaEQsUUFBQSxPQUFPLEdBQWlCO0lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMs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QUU7Z0RBQ3JDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRTtvREFDbEMsS0FBSyxHQUFHLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFDekMsQ0FBQztnREFDQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dEQUN2QixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dEQUN2QixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dEQUM3QixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dEQUM3QixpQkFBTyxDQUFDLG9CQUFvQixrQ0FBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0Q0FDekQsQ0FBQzt3Q0FDTCxDQUFDLENBQUMsQ0FBQzt3Q0FDSCwyQkFBMkI7d0NBQzNCLGlCQUFPLENBQUMsYUFBYSxvQ0FBb0IsQ0FBQzt3Q0FDMUMsaUJBQU8sQ0FBQyxhQUFhLGtDQUFtQixDQUFDO3dDQUN6QyxpQkFBTyxDQUFDLGFBQWEsZ0NBQWtCLENBQUM7d0NBQ3hDLGlCQUFPLENBQUMsYUFBYSxrQ0FBbUIsQ0FBQzt3Q0FDekMsa0JBQWtCO3dDQUNsQixxQkFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUE7O3dDQURyQyxrQkFBa0I7d0NBQ2xCLFNBQXFDLENBQUM7Ozs7O3FCQUN6QztpQkFDSixDQUFDLENBQUM7Ozs7S0FDTixDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz1bXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCBjb25zaWRlcmluZyBzZW5kaW5nIHlvdXIgY2hpbGQgdG8gV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3XigJl2ZSBsZWFybmVkIHRoYXQgdGhlIGN1cnJpY3VsdW0gaXMgcGxheS1iYXNlZCBhbmQgeW91IHdhbnQgdG8ga25vdyBob3cgbGVhcm5pbmcgaXMgaW5jb3Jwb3JhdGVkIGludG8gYSBwbGF5LWJhc2VkIGNvbnRleHQuIFlvdSBoYXZlIHNvbWUgaWRlYXMgYWJvdXQgaG93IGxhbmd1YWdlIGxlYXJuaW5nIG1pZ2h0IGhhcHBlbiwgYnV0IGFyZSBsZXNzIHN1cmUgYWJvdXQgbWF0aC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmluZCBzb21lIGV4YW1wbGVzIG9mIGhvdyBtYXRoIGxlYXJuaW5nIGlzIGluY29ycG9yYXRlZCBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJtYXRoXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciA0IHllYXIgb2xkLiBCb3RoIHlvdSBhbmQgeW91ciBzcG91c2Ugd29yaywgc28geW91IG5lZWQgdG8gZnVsbHkgdW5kZXJzdGFuZCB3aGF0IHNjaGVkdWxpbmcgY29uc3RyYWludHMgZWFjaCBvcHRpb24gaW52b2x2ZXMuIE9uZSBvZiB5b3VyIHNjaG9vbHMgb2YgaW50ZXJlc3QgaXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hlbiBkb2VzIHNjaG9vbCBzdGFydCBhbmQgZW5kIGVhY2ggZGF5PyBXaGF0IGlzIHRoZSBsb25nZXN0IHBlcmlvZCBvZiB0aW1lIHRoYXQgeW91ciBjaGlsZCBjYW4gYmUgdGhlcmU/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJzY2hvb2xfZGF5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciAzLjUgeWVhciBvbGQuIFlvdeKAmXZlIGJlZW4gdG9sZCB0aGF0IG9uZSBvZiB0aGUgaGFsbG1hcmtzIG9mIGEgZ29vZCBwcm9ncmFtIGlzIHRlYWNoZXJzIHdobyBoYXZlIGJlZW4gdGhlcmUgZm9yIGEgbG9uZyB0aW1lLiBZb3Ugd2FudCB5b3VyIGNoaWxkIHRvIGF0dGVuZCBpbiB0aGUgbW9ybmluZ3Mgb25seS5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hpY2ggdGVhY2hlcnMgd291bGQgeW91ciBjaGlsZCBoYXZlIGFuZCBob3cgbG9uZyBoYXZlIHRoZXkgYmVlbiBhdCB0aGUgc2Nob29sP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwidGVhY2hlcl90ZW51cmVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIHN0YXJ0aW5nIHRvIGxvb2sgYXQgc3VtbWVyIGNhbXAgb3B0aW9ucyBhbmQgaGF2ZSBoZWFyZCBnb29kIHRoaW5ncyBhYm91dCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgZm9yIHlvdW5nIGNoaWxkcmVuLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSB0aGUgZGFpbHkgY2FtcCBob3Vycz8gQXJlIHRoZXJlIGFueSBleHRlbmRlZCBkYXkgb3Bwb3J0dW5pdGllcz9cIixcclxuICAgICAgICBcInRhZ1wiOiBcInN1bW1lcl9jYW1wXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciBzcGlyaXRlZCAzIHllYXIgb2xkIGFuZCB3YW50IHRvIHVuZGVyc3RhbmQgdGhlaXIgYXBwcm9hY2ggdG8gZGlzY2lwbGluZS5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvIHRlYWNoZXJzIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBhcHByb2FjaCBkaXNjaXBsaW5lP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwiZGlzY2lwbGluZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdXIgZGF1Z2h0ZXIgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3MgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBTaGUgY2FtZSBob21lIHRoaXMgd2VlayBzaW5naW5nIGEgc29uZyBpbiBTcGFuaXNoIGFib3V0IHNoYXBlcywgYnV0IHlvdSBhcmUgcHJldHR5IHN1cmUgdGhhdCBzaGUgaGFzIHNvbWUgb2YgdGhlIHdvcmRzIHdyb25nLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSB0aGUgY29ycmVjdCBseXJpY3M/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJzcGFuaXNoX3NvbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJJdCBpcyBtaWQtRGVjZW1iZXIgYW5kIHlvdSBhcmUgdGhpbmtpbmcgYWJvdXQgdGhpbmdzIHRvIGRvIG92ZXIgeW91ciBkYXVnaHRlcidzIHVwY29taW5nIHNjaG9vbCBicmVhay4gU2hlIGlzIDMgeWVhcnMgb2xkIGFuZCBhdHRlbmRzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgYW5kIGlzIGluIHRoZSBUZWRkeSBCZWFyIGNsYXNzcm9vbS4gWW91IGFyZSBwbGFubmluZyBhIHRyaXAgdG8gdGhlIGxpYnJhcnkgYW5kIHdhbnQgdG8gY2hlY2sgb3V0IHNvbWUgYm9va3MgdGhhdCBjb25uZWN0IHdpdGggc29tZXRoaW5nIHNoZSBpcyBkb2luZyBpbiBzY2hvb2wuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHNvbWUgcG90ZW50aWFsIGJvb2sgdG9waWNzIHRoYXQgcmVsYXRlIHRvIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIG9uIGluIGhlciBjbGFzc3Jvb20gdGhpcyB3ZWVrP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwiYm9va3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3Ugd2FudCB0byBhY2NlcHQgdGhlIG9mZmVyIG9mIGFkbWlzc2lvbi5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmlndXJlIG91dCB3aGF0IHlvdSBuZWVkIHRvIGRvIGF0IHRoaXMgdGltZSB0byBmaW5hbGl6ZSB5b3VyIGNoaWxk4oCZcyBwbGFjZSBhdCB0aGUgc2Nob29sLlwiLFxyXG4gICAgICAgIFwidGFnXCI6IFwiYWRtaXNzaW9uXzJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3UgbmVlZCB0byBwYXkgb25lIG1vbnRoIG9mIHR1aXRpb24gYXMgYSBkZXBvc2l0LlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIG91dCBob3cgbXVjaCBvbmUgbW9udGggb2YgdHVpdGlvbiBpcyBhbmQgd2hldGhlciBvciBub3QgaXQgaXMgcG9zc2libGUgdG8gcGF5IG9ubGluZS5cIixcclxuICAgICAgICBcInRhZ1wiOiBcImRlcG9zaXRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIG1vdmluZyB0byBTdC4gTG91aXMgZnJvbSBCZWlqaW5nIGFuZCBsb29raW5nIGZvciBhIFByZS1LIHByb2dyYW0gZm9yIHlvdXIgZGF1Z2h0ZXIsIGFnZSA1LiBTaGUgaXMgdmVyeSBjbG9zZSB0byBoZXIgZnJpZW5kcyBhbmQgeW91IGFyZSB3b3JyaWVkIHRoYXQgdGhlIG1vdmUgbWlnaHQgYmUgaGFyZCBvbiBoZXIuIFNoZSBtYXkgbmVlZCBzb21lIGV4dHJhIHN1cHBvcnQgZnJvbSBoZXIgbmV3IHRlYWNoZXJzIGxlYXJuaW5nIEVuZ2xpc2gsIGFkYXB0aW5nIHRvIEFtZXJpY2FuIGN1bHR1cmUsIGFuZCBtYWtpbmcgbmV3IGZyaWVuZHMuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgc3RhZmYgYXBwcm9hY2ggcHJvdmlkaW5nIGV4dHJhIGhlbHAgdG8gc3R1ZGVudHMgd2hvIG5lZWQgaXQ/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJoZWxwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBsb29raW5nIGF0IE51cnNlcnkgU2Nob29scyBmb3IgeW91ciBzb29uIHRvIGJlIDMgeWVhciBvbGQuIEhlIGhhcyBuZXZlciBiZWVuIGluIHNjaG9vbCBvciBkYXljYXJlIGJlZm9yZSBhbmQgeW91IGFyZSBzb21ld2hhdCB3b3JyaWVkIGFib3V0IHRoZSB0cmFuc2l0aW9uLiBZb3UnZCBsaWtlIHRvIGVuc3VyZSB0aGF0IHlvdSdsbCBiZSBhYmxlIHRvIGhhdmUgc3Ryb25nIGNvbW11bmljYXRpb25hdCBoaXMgbmV3IHNjaG9vbC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBoYW5kbGUgY29tbXVuaWNhdGluZyB3aXRoIHBhcmVudHM/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJjb21tdW5pY2F0aW9uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiSXTigJlzIG1pZC1EZWNlbWJlciBhbmQgeW91ciBzb24sIGFnZSA0LCBjYW1lIGhvbWUgYWxsIGV4Y2l0ZWQgYWJvdXQgc2NpZW5jZSBjbGFzcy4gVGhleSBsZWFybmVkIGEgbmV3IHdvcmQsIGJ1dCBoZSBjYW7igJl0IGFjdHVhbGx5IHJlbWVtYmVyIHRoZSB3b3JkIHRoZXkgbGVhcm5lZCBhYm91dC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCB3YXMgdGhlIHRvcGljIG9mIGhpcyByZWNlbnQgc2NpZW5jZSBjbGFzcz9cIixcclxuICAgICAgICBcInRhZ1wiOiBcInNjaWVuY2VcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIHNlbGVjdGluZyBhIHByZS1zY2hvb2wsIGJ1dCB3YW50IHRvIGJlIHN1cmUgdGhhdCB5b3VyIGRhdWdodGVyIHdpbGwgYmUgcmVhZHkgZm9yIGtpbmRlcmdhcnRlbiB3aGVuIGl04oCZcyB0aW1lLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgbnVyc2VyeSBzY2hvb2wgYXNzZXNzIGNoaWxkcmVu4oCZcyBrbm93bGVkZ2UsIHN1cHBvcnQgdGhlaXIgZ3Jvd3RoLCBhbmQgc2hhcmUgdGhlIHJlc3VsdHMgd2l0aCBwYXJlbnRzP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwicGFyZW50X3RlYWNoZXJfY29uZmVyZW5jZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBoYXZlIHJlY2VudGx5IGFjY2VwdGVkIGEgcG9zaXRpb24gZm9yIHlvdXIgY2hpbGQgZm9yIHRoZSBjb21pbmcgc2Nob29sIHllYXIgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gVXAgdG8gdGhpcyBwb2ludCwgeW91ciBjaGlsZCBoYXMgYmVlbiBhdCBob21lIGFuZCB5b3UgYXJlIHNvbWV3aGF0IHdvcnJpZWQgYWJvdXQgdGhlIHRyYW5zaXRpb24uXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBudXJzZXJ5IHNjaG9vbCBzdXBwb3J0IGtpZHPigJkgdHJhbnNpdGlvbnMgaW50byBzY2hvb2w/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJvcmllbnRhdGlvblwiXHJcbiAgICB9XHJcbl1cclxuIiwiaW1wb3J0IHsgVHJhY2tlckV2ZW50IH0gZnJvbSAnLi9ldmVudCc7XHJcbmNvbnNvbGUubG9nKCdkYXRhIGxvYWRlZC4nKTtcclxuZXhwb3J0IGludGVyZmFjZSBNdHVya1VSTERhdGEge1xyXG4gICAgcmF3OiBzdHJpbmc7XHJcbiAgICBhc3NpZ25tZW50SUQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBoaXRJRDogc3RyaW5nIHwgbnVsbDtcclxuICAgIHdvcmtlcklEOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgc3VibWl0VG86IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcclxuXHJcbmV4cG9ydCBjb25zdCB1cmxEYXRhOiBNdHVya1VSTERhdGEgPSB7XHJcbiAgICByYXc6IHVybFBhcmFtcy50b1N0cmluZygpLFxyXG4gICAgYXNzaWdubWVudElEOiB1cmxQYXJhbXMuZ2V0KCdhc3NpZ25tZW50SWQnKSxcclxuICAgIGhpdElEOiB1cmxQYXJhbXMuZ2V0KCdoaXRJZCcpLFxyXG4gICAgd29ya2VySUQ6IHVybFBhcmFtcy5nZXQoJ3dvcmtlcklkJyksXHJcbiAgICBzdWJtaXRUbzogdXJsUGFyYW1zLmdldCgndHVya1N1Ym1pdFRvJyksXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YSB7XHJcbiAgICBwdWJsaWMgbG9nczogeyBbZXZlbnRUeXBlOiBzdHJpbmddOiBUcmFja2VyRXZlbnRbXSB9ID0ge307XHJcbiAgICBwdWJsaWMgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgcHVibGljIGVycm9yczogYW55W10gPSBbXTtcclxuICAgIHB1YmxpYyB1cmxEYXRhOiBNdHVya1VSTERhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmF3TXR1cmtVUkxEYXRhOiBNdHVya1VSTERhdGEpIHtcclxuICAgICAgICB0aGlzLnVybERhdGEgPSByYXdNdHVya1VSTERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGEgPSBuZXcgRGF0YSh1cmxEYXRhKTtcclxuXHJcbk9iamVjdC5hc3NpZ24od2luZG93LCB7IGRhdGEgfSk7XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XHJcbmltcG9ydCB7IG5vdyB9IGZyb20gXCIuLi91dGlscy9mdW5jc1wiO1xyXG5sb2coXCJldmVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuZXhwb3J0IGNvbnN0IGVudW0gQWN0aW9uRW51bSB7XHJcbiAgQ0xJQ0sgPSBcImNsaWNrXCIsXHJcbiAgQlVUVE9OID0gXCJidXR0b25cIixcclxuICBTQ1JPTEwgPSBcInNjcm9sbFwiLFxyXG4gIEhJU1RPUlkgPSBcImhpc3RvcnlcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyRXZlbnQge1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIHRpbWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvVHJhY2tlckV2ZW50KG9iajogYW55LCBhY3Rpb246IHN0cmluZykge1xyXG4gIG9iai5hY3Rpb24gPSBhY3Rpb247XHJcbiAgb2JqLnRpbWUgPSBub3coKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhY2tlckV2ZW50KG9iajogYW55KTogb2JqIGlzIFRyYWNrZXJFdmVudCB7XHJcbiAgcmV0dXJuIG9iai5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBvYmoudGltZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVRyYWNrZXJFdmVudDxUPiBpbXBsZW1lbnRzIFRyYWNrZXJFdmVudCB7XHJcbiAgcHVibGljIGN1c3RFdjogQ3VzdG9tRXZlbnQ7XHJcbiAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyB0aW1lOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoYWN0aW9uOiBzdHJpbmcsIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8VD4gfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuY3VzdEV2ID0gbmV3IEN1c3RvbUV2ZW50KGFjdGlvbiwgZXZlbnRJbml0RGljdCk7XHJcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgIHRoaXMudGltZSA9IG5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkZXRhaWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXN0RXYuZGV0YWlsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbiAgaWQ6IHN0cmluZztcclxufT4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIGV2ZW50SW5pdERpY3Q/OlxyXG4gICAgICB8IEN1c3RvbUV2ZW50SW5pdDx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpZDogc3RyaW5nIH0+XHJcbiAgICAgIHwgdW5kZWZpbmVkXHJcbiAgKSB7XHJcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcclxuICAgIHRoaXMuZGV0YWlsLnggPSB4O1xyXG4gICAgdGhpcy5kZXRhaWwueSA9IHk7XHJcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xyXG4gIH1cclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXHJcbiAgKSB7XHJcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcclxuICAgIHRoaXMuZGV0YWlsLmtleSA9IGtleTtcclxuICAgIHRoaXMuZGV0YWlsLmlkID0gaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXHJcbmV4cG9ydCBjbGFzcyBIaXN0b3J5RXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcclxuICB1cmw6IHN0cmluZztcclxuICBleHRyYT86IGFueTtcclxufT4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBleHRyYT86IGFueSxcclxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyB1cmw6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxyXG4gICkge1xyXG4gICAgc3VwZXIoQWN0aW9uRW51bS5ISVNUT1JZLCBldmVudEluaXREaWN0KTtcclxuICAgIHRoaXMuZGV0YWlsLnVybCA9IHVybDtcclxuICAgIHRoaXMuZGV0YWlsLmV4dHJhID0gZXh0cmE7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XHJcbmltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBUcmFja2VyRXZlbnQgfSBmcm9tIFwiLi9ldmVudFwiO1xyXG5sb2coXCJyZWNlaXZlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuZXhwb3J0IGNsYXNzIEV2ZW50UmVjZWl2ZXIge1xyXG4gIHByaXZhdGUgbWFwID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkPigpO1xyXG4gIHByaXZhdGUgZW1pdHRlciA9IG5ldyBFdmVudFRhcmdldCgpO1xyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGNhbGxiYWNrPzogKGV2ZW50OiBUcmFja2VyRXZlbnQpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB0cmFja0V2ID0gKChldmVudCBhcyB1bmtub3duKSBhcyBDdXN0b21FdmVudClcclxuICAgICAgICAuZGV0YWlsIGFzIFRyYWNrZXJFdmVudDtcclxuICAgICAgaWYgKGlzVHJhY2tlckV2ZW50KHRyYWNrRXYpICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sodHJhY2tFdik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMubWFwLnNldChldmVudFR5cGUsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkb0V2ZW50KGV2ZW50OiBUcmFja2VyRXZlbnQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5tYXAuZ2V0KFwiXCIgKyBldmVudC5hY3Rpb24pO1xyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gXCIuLy4uL3JvdXRlci9oaXN0b3J5XCI7XHJcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xyXG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmxvZyhcImJhbm5lciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuZXhwb3J0IGNsYXNzIFRvcEJhbm5lciB7XHJcbiAgcHVibGljIHN0YXRpYyBzaG93KCkge1xyXG4gICAgVG9wQmFubmVyLnNob3dpbmcgPSB0cnVlO1xyXG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIHRydWUpO1xyXG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgZmFsc2UpO1xyXG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XHJcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IGZhbHNlO1xyXG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgdHJ1ZSk7XHJcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgZmFsc2UpO1xyXG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkb0Rpc3BsYXlDaGFuZ2UoKSB7XHJcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA/IFRvcEJhbm5lci5oaWRlKCkgOiBUb3BCYW5uZXIuc2hvdygpO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xyXG4gICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRkQXJyb3csIFwiY2xpY2tcIiwgVG9wQmFubmVyLmRvRGlzcGxheUNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBzaG93aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuRC5hZGRFdmVudExpc3RlbmVyKFwibXR1cmstdG9wLWJhbm5lci1iYWNrXCIsIFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XHJcbiAgICBSb3V0ZXIubG9hZFdpdGhQYXRoUHJlZml4KEhpc3RvcnkuYmFja3dhcmQoKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KFwiVGhlcmUgaXMgbm8gcGFnZSBoaXN0b3J5IHRvIGdvIGJhY2sgZm9yIGF0IHRoaXMgdGltZSFcIik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tIFwiLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcclxubG9nKFwiZG9jdW1lbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBjbGFzcyBEIHtcclxuICBwdWJsaWMgc3RhdGljIGRvYzogRG9jdW1lbnQgPSBkb2N1bWVudDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBlbGVtKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpOiBFbGVtZW50IHtcclxuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByZXR1cm4gRC5pZChlbGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBlbGVtIGFzIEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoZWxlbTogRWxlbWVudCB8IHN0cmluZywgc2hvdzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgZWxlbSA9IEQuZWxlbShlbGVtKTtcclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpO1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpZChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IEQuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCB3YXMgbm90IGZvdW5kLCBpZDogPCR7aWR9Pi5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGNsYXooY2xhejogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gRC5kb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGF6KTtcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyB0YWcodGFnOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcclxuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGltYWdlKGlkOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBlcnJvcigoKSA9PiBELmlkKGlkKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJsKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgbGlzdGVuZXI6IChlOiBFdmVudCkgPT4gYW55XHJcbiAgKSB7XHJcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xyXG4gICAgY29uc3Qgd3JhcHBlckZ1bmMgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsaXN0ZW5lcihlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgKGVsZW0gYXMgRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB3cmFwcGVyRnVuYyk7XHJcbiAgICByZXR1cm4gd3JhcHBlckZ1bmM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGVhY2goZWxlbTogRWxlbWVudCB8IHN0cmluZywgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnkpIHtcclxuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFwcGx5KGNoaWxkcmVuW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZWFjaFJlY3VyKFxyXG4gICAgZWxlbTogRWxlbWVudCB8IHN0cmluZyxcclxuICAgIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55XHJcbiAgKSB7XHJcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtLmNoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICBhcHBseShjaGlsZCk7XHJcbiAgICAgIEQuZWFjaFJlY3VyKGNoaWxkLCBhcHBseSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZTxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcclxuICAgIHRhZ05hbWU6IEssXHJcbiAgICBvcHRpb25zPzogRWxlbWVudENyZWF0aW9uT3B0aW9uc1xyXG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XHJcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcclxubG9nKCdlbGVtZW50IGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbi8qKlxyXG4gKiBUaGVzZSBhcmUgZWxlbWVudHMgdGhhdCBhcmUgaW4gZXZlcnkgc2luZ2xlIHByb2plY3QuIEV2ZW4gaWYgdGhleSBhcmUgbm90IHVzZWQgdGhleSBzaG91bGRcclxuICogYmUgcGxhY2UgaW4gdGhlIHByb2plY3QgYW5kIGRpc3BsYXkgc2hvdWxkIGJlIHNldCB0byBub25lLiBUaGlzIHNpbXBsaWZpZXMgY29uZmlndXJhdGlvblxyXG4gKiBhbmQgc29tZSBjb21tb24gZnVuY3Rpb25zIGFuZCBhbGxvd3MgbGVzcyBudWxsIGNoZWNrcyB0byBiZSBwZXJmb3JtZWQgb3ZlcmFsbC4gSWYgdGhlXHJcbiAqIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgYXQgcnVuIHRpbWUgYW4gZW1wdHkgZGl2IHdpdGggdGhhdCBpZCBpcyBjcmVhdGVkIGFuZCBpdHMgZGlzcGxheVxyXG4gKiBpcyBzZXQgdG8gbm9uZSB0aGVuIGFwcGVuZGVkIHRvIHRoZSBib2R5LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBdHRlbXB0cyB0byBnZXQgYW4gZWxlbWVudCwgaWYgdW5zdWNjZXNzZnVsLCBjcmVhdGVzIGRpdiB3aXRoIGlkIGFuZCBhcHBlbmRzIHRvIGJvZHkuXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgZWxlbWVudCB0byByZXRyaWV2ZS5cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VFbGVtSWZOb3RFeGlzdChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgbGV0IGVsZW07XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGVsZW0gPSBELmlkKGlkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGVsZW0gPSBELmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgICAgZWxlbS5pZCA9IGlkO1xyXG4gICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tbW9ubHkgYWNjZXNzZWQgZWxlbWVudHMsIGFsbG93cyBmb3IgY2xlYXJlciBkb20gbWFuaXAgb24gdGhlc2UgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRWxlbWVudHMgPSB7XHJcbiAgICBkb2N1bWVudDogRC5kb2MuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgd3JhcHBlcjogbWFrZUVsZW1JZk5vdEV4aXN0KCd3cmFwcGVyJyksXHJcbiAgICBodG1sTG9jOiBtYWtlRWxlbUlmTm90RXhpc3QoJ2h0bWwtbG9jJyksXHJcbiAgICBpbm5lckJvZHk6IG1ha2VFbGVtSWZOb3RFeGlzdCgnaW5uZXItYm9keScpLFxyXG4gICAgZGREb3duOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWJ1dHRvbicpLFxyXG4gICAgZGRVcDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWNvbGxhcHNlLWJ1dHRvbicpLFxyXG4gICAgZGRDb250ZW50OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQnKSxcclxuICAgIGJhY2tCdXR0b246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1iYWNrJyksXHJcbiAgICBkZEFycm93OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItYXJyb3cnKSxcclxuICAgIG10VG9wQmFubmVyVGV4dDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLXRleHQnKSxcclxuICAgIG10U2NlbmFyaW9Db250ZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ3NjZW5hcmlvX2NvbnRleHQnKSxcclxuICAgIG10U2NlbmFyaW9RdWVzdGlvbjogbWFrZUVsZW1JZk5vdEV4aXN0KCdzY2VuYXJpb19xdWVzdGlvbicpLFxyXG4gICAgbG9nRmlsZUlucHV0OiBtYWtlRWxlbUlmTm90RXhpc3QoXHJcbiAgICAgICAgJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQtbG9nLWZpbGUtaW5wdXQnXHJcbiAgICApLFxyXG4gICAgc3VibWl0Rm9ybTogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay1zdWJtaXQtZm9ybScpLFxyXG4gICAgbW9kYWw6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbW9kYWwnKSxcclxufTtcclxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9kb20vZWxlbWVudHMnO1xyXG5sb2coJ2h0bWwgbG9jIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBlbnVtIEFwcEVudW0ge1xyXG4gICAgSU5GT1JNQVRJT05fRk9SQUdJTkcgPSAnaW5mb3JtYXRpb24tZm9yYWdpbmcnLFxyXG4gICAgQ09HTklUSVZFX0xPQUQgPSAnY29nbml0aXZlLWxvYWQnLFxyXG4gICAgR0VOREVSX01BRyA9ICdnZW5kZXItbWFnJyxcclxuICAgIEVSUk9SID0gJ2Vycm9yJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTW9kZUVudW0ge1xyXG4gICAgUkVBTCA9ICdyZWFsJyxcclxuICAgIFNBTkRCT1ggPSAnc2FuZGJveCcsXHJcbiAgICBURVNUID0gJ3Rlc3QnLFxyXG4gICAgRVJST1IgPSAnZXJyb3InLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSFRNTExvYyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5odG1sTG9jO1xyXG4gICAgcHVibGljIHN0YXRpYyBhcHA6IEFwcEVudW07XHJcbiAgICBwdWJsaWMgc3RhdGljIG1vZGU6IE1vZGVFbnVtO1xyXG4gICAgcHVibGljIHN0YXRpYyBzY2VuYXJpbzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XHJcbiAgICAgICAgSFRNTExvYy5hcHAgPSAoSFRNTExvYy5lbGVtLmRhdGFzZXQuYXBwIGFzIEFwcEVudW0pIHx8IEFwcEVudW0uRVJST1I7XHJcbiAgICAgICAgSFRNTExvYy5tb2RlID1cclxuICAgICAgICAgICAgKEhUTUxMb2MuZWxlbS5kYXRhc2V0Lm1vZGUgYXMgTW9kZUVudW0pIHx8IE1vZGVFbnVtLkVSUk9SO1xyXG4gICAgICAgIEhUTUxMb2Muc2NlbmFyaW8gPSBIVE1MTG9jLmVsZW0uZGF0YXNldC5zY2VuYXJpbyB8fCAnZXJyb3InO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XHJcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuL2VsZW1lbnRzJztcclxubG9nKCdtb2RhbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5leHBvcnQgY2xhc3MgTW9kYWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMubW9kYWw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXNwbGF5KHNyYzogc3RyaW5nKSB7XHJcbiAgICAgICAgTW9kYWwuZWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICdzdHlsZScsXHJcbiAgICAgICAgICAgIGBsZWZ0OiAke01hdGgucm91bmQod2luZG93LnBhZ2VYT2Zmc2V0KX1weDsgdG9wOiAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgICAgICAgICAgKX1weDtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBNb2RhbC5lbGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdoaWRlLW1vZGFsJywgJ3Nob3ctbW9kYWwnKTtcclxuICAgICAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9IHNyYztcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xyXG4gICAgICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ3Nob3ctbW9kYWwnLCAnaGlkZS1tb2RhbCcpO1xyXG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ELmFkZEV2ZW50TGlzdGVuZXIoTW9kYWwuZWxlbSwgJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIE1vZGFsLmhpZGUoKTtcclxufSk7XHJcbkQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xyXG4gICAgRC5hZGRFdmVudExpc3RlbmVyKG5vZGUsICdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XHJcbmltcG9ydCB7IG5vb3AsIG5vdyB9IGZyb20gJy4vLi4vdXRpbHMvZnVuY3MnO1xyXG5sb2coJ3Njcm9sbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG4vKipcclxuICogTGluZWFyIGltcGxlbWVudGF0aW9uIG9mIHNjcm9sbGluZy5cclxuICogRm9sbG93cyB0aGUgc2luZ2xldG9uIHBhdHRlcm4sIGNhbGwgZG8gdG8gc3RhcnQgYSBzY3JvbGwgb3BlcmF0aW9uLlxyXG4gKlxyXG4gKiBJZiBhIHNjcm9sbCBpcyBjYWxsZWQgd2hlbiBhbm90aGVyIHNjcm9sbCBoYXMgYWxyZWFkeSBiZWd1biBhblxyXG4gKiBlcnJvciB3aWxsIGJlIHRocm93biwgYnV0IHRoZSBmaXJzdCBzY3JvbGwgd2lsbCBjb250aW51ZSB1bnRpbCBjb21wbGV0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjcm9sbCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNURVBfSU5fTVMgPSAxNztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGxiYWNrKFxyXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxyXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgPSAyMDAsXHJcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueSA9IG5vb3BcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmIChTY3JvbGwucnVubmluZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc3Qgb2xkQ29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgICAgICBjb21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZXJyb3Iob2xkQ29tcGxldGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgY29tcGxldGUpLmF0dGVtcHRTY3JvbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByb21pc2UoZW5kUG9zOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAyMDApIHtcclxuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZTogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgIHJlamVjdDogKGFyZzA6IGFueSkgPT4gdm9pZFxyXG4gICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuUmVzb2x2ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBydW5SZXNvbHZlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dGVtcHRTY3JvbGwoKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbmV3IFNjcm9sbCgwLCAwLCBub29wKTtcclxuICAgIHByaXZhdGUgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZW5kUG9zOiBudW1iZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyLFxyXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAoLi4uYXJnczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzY3JvbGwnKSk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlKGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaXNSdW5uaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBTY3JvbGwucnVubmluZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZShcclxuICAgICAgICBlbmRQb3M6IG51bWJlcixcclxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcclxuICAgICk6IFNjcm9sbCB7XHJcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNTY3JvbGxBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY3VyVGltZSA9IG5vdygpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICh0aGlzLmR1cmF0aW9uIC0gY3VyVGltZSkgLyBTY3JvbGwuU1RFUF9JTl9NU1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY3VyUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuZW5kUG9zIC0gY3VyUG9zKSAvIHN0ZXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjcm9sbCgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuY2FsY1Njcm9sbEFtb3VudCgpKTtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSB0aGlzLmVuZFBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuc2Nyb2xsKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGVtcHRTY3JvbGwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCEoJ3JlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuc2Nyb2xsKDAsIE51bWJlcih0aGlzLmVuZFBvcykpO1xyXG4gICAgICAgICAgICAvLyAod2luZG93IGFzIFdpbmRvdykuc2Nyb2xsKHsgdG9wOiB0aGlzLmVuZFBvcywgbGVmdDogMCwgYmVoYXZpb3I6ICdhdXRvJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3MnO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcclxuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcclxuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi8uLi91dGlscy9xX3BhcmFtcyc7XHJcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuL2VsZW1lbnRzJztcclxubG9nKCdzdWJtaXQgZm9ybSBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5leHBvcnQgaW50ZXJmYWNlIEFsbG93U3VibWlzc2lvbiB7XHJcbiAgICBhbGxvdygpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJlU3VibWl0KC4uLmFyZ3M6IGFueSk6IGFueTtcclxufVxyXG5cclxuY29uc3QgayA9ICdOY0YyV1JrVWJmNXR6ajRiSXZJOTgxRnFtUzZwTWxPODNnMmo3dTVSJztcclxuY29uc3QgZ2F0ZSA9ICdodHRwczovLzJ5a29wcTFvaGEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUFJPRC9sb2dzJztcclxuXHJcbmNvbnN0IEFsbG93U3VibWlzc2lvbkRlZmF1bHQ6IEFsbG93U3VibWlzc2lvbiA9IHtcclxuICAgIGFsbG93OiAoKSA9PiBudWxsLFxyXG4gICAgcHJlU3VibWl0OiBub29wLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1Ym1pdEZvcm0ge1xyXG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMuc3VibWl0Rm9ybSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFsbG93U3VibWl0RGVmYXVsdCA9IHsgYWxsb3c6ICgpID0+IHRydWUsIHByZVN1Ym1pdDogbm9vcCB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoXHJcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb24gPSBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0XHJcbiAgICApIHtcclxuICAgICAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmMgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgYWxsb3dlZCA9IGFsbG93U3VibWlzc2lvbi5hbGxvdygpO1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXAgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEucmF3ID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEID0gcXAuZ2V0KCdhc3NpZ25tZW50SWQnKTtcclxuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRCA9IHFwLmdldCgnaGl0SWQnKTtcclxuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS53b3JrZXJJRCA9IHFwLmdldCgnd29ya2VySWQnKTtcclxuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5zdWJtaXRUbyA9XHJcbiAgICAgICAgICAgICAgICAgICAgcXAuZ2V0KCd0dXJrU3VibWl0VG8nKSArICcvbXR1cmsvZXh0ZXJuYWxTdWJtaXQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnYXNzaWdubWVudC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybERhdGEuaGl0SUQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnaGl0LWlkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEudGFzayA9IHVybFBhcmFtcy5nZXQoXCJ0YWdcIilcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGF0YS5yZXNwb25zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1hcmVhXCIpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhLmRhdGEucmVzcG9uc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtYXJlYVwiKSEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1hcmVhXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSB0ZXh0QXJlYS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcblxcbkRBVEEgRk9SIFRBU0s6IFwiICsgZGF0YS5kYXRhLnRhc2sgKyBcIlxcblwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICBhbGVydChcIk9wZW4gY29uc29sZSB0byBzZWUgdXNlciBkYXRhLiBQbGVhc2UgcmVjb3JkIGludG8gYSB0ZXh0IGRvY3VtZW50LlwiKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIChFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkuYWN0aW9uID0gZGF0YS51cmxEYXRhXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnN1Ym1pdFRvIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIC8vIGFsbG93U3VibWlzc2lvbi5wcmVTdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChnYXRlLCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAneC1hcGkta2V5JzogayxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2FuZGJveDogcGFyYW1zLnNhbmRib3gsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHd1c3RsX2tleTogcGFyYW1zLnd1c3RsX2tleSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdDogcGFyYW1zLnByb2plY3QsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZXJhdGlvbjogcGFyYW1zLml0ZXJhdGlvbixcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFnOiBwYXJhbXMudGFnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhc3NpZ25tZW50SUQ6IGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhpdElEOiBkYXRhLnVybERhdGEuaGl0SUQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdvcmtlcklEOiBkYXRhLnVybERhdGEud29ya2VySUQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxvZzogZGF0YS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAgICAgICAgIC8vIH0pOyAvLyBUT0RPOiB2ZXJpZnkgdGhpcyBhY3R1YWxseSB3b3Jrc1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXdhaXQgcmVzcC5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ1lvdSBtYWRlIGEgYmFkIHJlcXVlc3Qgd2l0aCB5b3VyIHN1Ym1pc3Npb24uIFRoZSBzZXJ2ZXIgdGhpbmtzIHRoYXQgeW91IG1hZGUgdGhpcyBlcnJvcjogJyArXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAoYXdhaXQgcmVzcC5qc29uKCkpLmVycm9yXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBTdWJtaXRGb3JtLmVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIC8vICAgICAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmNcclxuICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgICAvLyBTdWJtaXRGb3JtLmVsZW0uc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChhbGxvd2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgU3VibWl0Rm9ybS5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VibWl0RnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55O1xyXG59XHJcbiIsImltcG9ydCB7IFRvcEJhbm5lciB9IGZyb20gXCIuL2Jhbm5lclwiO1xyXG5pbXBvcnQgeyBIVE1MTG9jIH0gZnJvbSBcIi4vaHRtbF9sb2NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFja2VyRWxlbWVudHMge1xyXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBUcmFja2VyRWxlbWVudHMoKSB7XHJcbiAgICAvLyBzZXR1cCBkb20gZWxlbWVudHNcclxuICAgIFRvcEJhbm5lci5zZXR1cCgpO1xyXG4gICAgSFRNTExvYy5zZXR1cCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnLi8uLi90cmFja2VyL3RyYWNrZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5RW50cnkge1xyXG4gICAgaGFzUHJldlVSTDogYm9vbGVhbjtcclxuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeTtcclxuICAgIGN1cnJVUkw6IHN0cmluZztcclxuICAgIGV4dHJhPzogYW55O1xyXG4gICAgbmV4dEVudHJpZXM6IEhpc3RvcnlFbnRyeVtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdIaXN0b3J5RW50cnkoXHJcbiAgICBjdXJyVVJMOiBzdHJpbmcsXHJcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuLFxyXG4gICAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5LFxyXG4gICAgZXh0cmE/OiBhbnlcclxuKTogSGlzdG9yeUVudHJ5IHtcclxuICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoJ2hpc3RvcnknKSh7IHVybDogY3VyclVSTCwgZXh0cmEgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGN1cnJVUkwsXHJcbiAgICAgICAgaGFzUHJldlVSTCxcclxuICAgICAgICBwcmV2RW50cnksXHJcbiAgICAgICAgZXh0cmEsXHJcbiAgICAgICAgbmV4dEVudHJpZXM6IFtdLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhpc3Rvcnkge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3J3YXJkKHVybDogc3RyaW5nLCBleHRyYT86IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIHRydWUsIEhpc3RvcnkuY3Vycmhpc3RvcnksIGV4dHJhKTtcclxuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5Lm5leHRFbnRyaWVzLnB1c2goaGlzdEVudCk7XHJcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IGhpc3RFbnQ7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbkJhY2t3YXJkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkuaGFzUHJldlVSTCAmJlxyXG4gICAgICAgICAgICAhSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnk/LmV4dHJhPy53cmFwcGVyXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJhY2t3YXJkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ28gYmFjayBhbnkgZnVydGhlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHByZXZFbnRyeSA9IEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5IGFzIEhpc3RvcnlFbnRyeTtcclxuICAgICAgICBjb25zdCBuZXh0VVJMID0gcHJldkVudHJ5LmN1cnJVUkw7XHJcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeShcclxuICAgICAgICAgICAgbmV4dFVSTCxcclxuICAgICAgICAgICAgcHJldkVudHJ5Lmhhc1ByZXZVUkwsXHJcbiAgICAgICAgICAgIHByZXZFbnRyeS5wcmV2RW50cnksXHJcbiAgICAgICAgICAgIHsgYmFjazogdHJ1ZSB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcclxuICAgICAgICByZXR1cm4gbmV4dFVSTDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKHVybDogc3RyaW5nLCBleHRyYT86IGFueSkge1xyXG4gICAgICAgIEhpc3RvcnkuZmlyc3RIaXN0b3J5ID0gbmV3SGlzdG9yeUVudHJ5KHVybCwgZmFsc2UsIHVuZGVmaW5lZCwgZXh0cmEpO1xyXG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBIaXN0b3J5LmZpcnN0SGlzdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBmaXJzdEhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcclxuICAgIHByaXZhdGUgc3RhdGljIGN1cnJoaXN0b3J5OiBIaXN0b3J5RW50cnk7XHJcbn1cclxuXHJcbih3aW5kb3cgYXMgYW55KS5oID0gSGlzdG9yeTtcclxuIiwiaW1wb3J0IHsgRCB9IGZyb20gJy4uL2RvbS9kb2N1bWVudCc7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9kb20vbW9kYWwnO1xyXG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XHJcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi91dGlscy9odG1sX2xvYWRlcic7XHJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xyXG5sb2coJ3JvdXRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5leHBvcnQgY29uc3QgZW51bSBSb3V0ZXJNb2RlIHtcclxuICAgIE9GRixcclxuICAgIE9OLFxyXG4gICAgU1RBTkRBUkRfQUxMT1dBTkNFUyxcclxufVxyXG5cclxuLy8gVE9ETzogTmVlZCB0byBpbXByb3ZlIHRoaXMgdG8gdGFrZSBpbiBhIGZ1bmN0aW9uIGZvciB0aGUgYWxsb3dhbmNlIG9yIHJlZHVjZSBhYnN0cmFjdG5lc3Mgb3ZlcmFsbC5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZHVsZSB7XHJcbiAgICBBID0gJ0EnLFxyXG4gICAgSU1HID0gJ0lNRycsXHJcbiAgICBGT1JNID0gJ0ZPUk0nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlckNvbmZpZyB7XHJcbiAgICBtb2R1bGU6IFJvdXRlck1vZHVsZTtcclxuICAgIG1vZGU6IFJvdXRlck1vZGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGdWxsUm91dGVyQ29uZmlnIGV4dGVuZHMgUm91dGVyQ29uZmlnIHtcclxuICAgIHNldHVwKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCk6IGFueTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdE9uKGVsZW06IEVsZW1lbnQsIGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGVsZW0udGFnTmFtZSA9PT0gY29uZmlnLm1vZHVsZSAmJlxyXG4gICAgICAgIChjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5PTiB8fFxyXG4gICAgICAgICAgICBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTKVxyXG4gICAgKTtcclxufVxyXG5mdW5jdGlvbiB0ZXN0QWxsb3dhbmNlKGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhBU0hfVEFHUyA9IG5ldyBSZWdFeHAoJyMnKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSBuZXcgUmVnRXhwKCdeJCcpO1xyXG4gICAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0wgPSBuZXcgUmVnRXhwKCdAJyk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBIQVNIX1RBR19SRVNQT05ERVIgPSBub29wO1xyXG4gICAgcHVibGljIHN0YXRpYyBFTVBUWV9SRVNQT05ERVIgPSAoZXZlbnQ6IEV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0xfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGF0aFByZWZpeCA9ICcnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlKGNvbmZpZ3M6IFJvdXRlckNvbmZpZ1tdLCBwYXRoUHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIuY29uZmlncy5zZXQoY29uZmlnLm1vZHVsZSwgUm91dGVyLnVwZ3JhZGVDb25maWcoY29uZmlnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnBhdGhQcmVmaXggPSBwYXRoUHJlZml4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xyXG4gICAgICAgIEQuZWFjaFJlY3VyKGVsZW0sIChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIFJvdXRlci5jb25maWdzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVzdE9uKG5vZGUsIGNvbmZpZykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2V0dXAoY29uZmlnLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU1RBTkRBUkRfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yKCgpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gdGFyZ2V0LmhyZWY7XHJcbiAgICAgICAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgT05fQ09NUExFVEVfU0xMKHBvc3Q6IChlOiBNb3VzZUV2ZW50KSA9PiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXJyb3IoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSk7XHJcbiAgICAgICAgICAgICAgICBwb3N0KGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSU1BR0VfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yKCgpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRk9STV9PRkZfTElTVEVORVIoZTogRXZlbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgJ0FsbCBmb3JtcyBleGNlcHQgZm9yIHRoZSBvbmUgaW4gdGhlIHRvcCBoZWFkZXIgYXJlIGluYWN0aXZlLidcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFsbG93YW5jZXNPbigpIHtcclxuICAgICAgICBSb3V0ZXIucmVnaXN0ZXJBbGxvd2FuY2UoXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5FTVBUWSwgZnVuYzogUm91dGVyLkVNUFRZX1JFU1BPTkRFUiB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuSEFTSF9UQUdTLCBmdW5jOiBSb3V0ZXIuSEFTSF9UQUdfUkVTUE9OREVSIH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5BVF9TWU1CT0wsIGZ1bmM6IFJvdXRlci5BVF9TWU1CT0xfUkVTUE9OREVSIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09mZigpIHtcclxuICAgICAgICBSb3V0ZXIudW5yZWdpc3RlckFsbG93YW5jZShcclxuICAgICAgICAgICAgUm91dGVyLkVNUFRZLFxyXG4gICAgICAgICAgICBSb3V0ZXIuSEFTSF9UQUdTLFxyXG4gICAgICAgICAgICBSb3V0ZXIuQVRfU1lNQk9MXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJBbGxvd2FuY2UoXHJcbiAgICAgICAgLi4ucmVnZXhzOiBBcnJheTx7IHJlZ2V4OiBSZWdFeHA7IGZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueSB9PlxyXG4gICAgKSB7XHJcbiAgICAgICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PlxyXG4gICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuc2V0KHJlZ2V4LnJlZ2V4LCByZWdleC5mdW5jKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJBbGxvd2FuY2UoLi4ucmVnZXhzOiBSZWdFeHBbXSkge1xyXG4gICAgICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT4gUm91dGVyLmxpbmtBbGxvd2FuY2VzLmRlbGV0ZShyZWdleCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjbGVhckFsbG93YW5jZXMoKSB7XHJcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcclxuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcclxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkV2l0aFBhdGhQcmVmaXgocGFnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gSFRNTExvYWRlci5sb2FkVVJMKFxyXG4gICAgICAgICAgICBSb3V0ZXIucGF0aFByZWZpeCArIHBhZ2UsXHJcbiAgICAgICAgICAgIEVsZW1lbnRzLmh0bWxMb2NcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBTZXR1cEZ1bmN0aW9ucyA9IHtcclxuICAgICAgICBBOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFOb2RlID0gZWxlbSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gYU5vZGUuaHJlZjtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSByZWdleC50ZXN0KGhyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiAhdGVzdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYuc3Vic3RyKGhyZWYubGVuZ3RoIC0gMykgPT09ICdwZGYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kYWwuZGlzcGxheShocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBJTUc6IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1nTm9kZSA9IGVsZW0gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoaW1nTm9kZS5zcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiB0ZXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIEZPUk06IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybU5vZGUgPSBlbGVtIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoZm9ybU5vZGUuc3JjKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnc3VibWl0JywgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNvbmZpZ3MgPSBuZXcgTWFwPFJvdXRlck1vZHVsZSwgRnVsbFJvdXRlckNvbmZpZz4oKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rQWxsb3dhbmNlczogTWFwPFJlZ0V4cCwgKGV2ZW50OiBFdmVudCkgPT4gYW55PiA9IG5ldyBNYXA8XHJcbiAgICAgICAgUmVnRXhwLFxyXG4gICAgICAgIChldmVudDogRXZlbnQpID0+IGFueVxyXG4gICAgPigpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHBhdGhSZWdleCA9IC9cXC8oW1xcd10rLmh0bWwpLztcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB1cGdyYWRlQ29uZmlnKGNvbmZpZzogUm91dGVyQ29uZmlnKTogRnVsbFJvdXRlckNvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9kdWxlOiBjb25maWcubW9kdWxlLFxyXG4gICAgICAgICAgICBtb2RlOiBjb25maWcubW9kZSxcclxuICAgICAgICAgICAgc2V0dXA6IFJvdXRlci5TZXR1cEZ1bmN0aW9uc1tjb25maWcubW9kdWxlXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UGF0aE5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IFJvdXRlci5wYXRoUmVnZXguZXhlYyh1cmwpO1xyXG4gICAgICAgIHJldHVybiByZXQgPT09IG51bGwgPyB1cmwgOiByZXQubGVuZ3RoID4gMSA/IHJldFsxXSA6IHVybDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgb2JqZWN0VG9UcmFja2VyRXZlbnQgfSBmcm9tICcuLi9kYXRhLWxvZy9ldmVudCc7XHJcbmltcG9ydCB7IEV2ZW50UmVjZWl2ZXIgfSBmcm9tICcuLi9kYXRhLWxvZy9yZWNlaXZlcic7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgVHJhY2tlckVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL3RyYWNrZXJfZWxlbXMnO1xyXG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nLCBzZXREZWJ1Z0xldmVsIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcclxuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi91dGlscy9zY2VuYXJpb3MnO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcclxuaW1wb3J0IHsgQWxsb3dTdWJtaXNzaW9uLCBTdWJtaXRGb3JtIH0gZnJvbSAnLi8uLi9kb20vc3VibWl0X2Zvcm0nO1xyXG5cclxubG9nKCd0cmFja2VyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrZXJDb25maWd1cmF0aW9uIHtcclxuICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uO1xyXG4gICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW07XHJcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XHJcbiAgICBrZXlQcmVmaXg6IHN0cmluZztcclxuICAgIHNldHVwKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFja2VyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGFzdFBvcyA9IHsgeDogMCwgeTogMCwgdGltZTogMCB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNjZW5hcmlvKHNjZW46IFNjZW5hcmlvKSB7XHJcbiAgICAgICAgbGV0IHN1YiA9IHNjZW4uY29udGV4dDtcclxuICAgICAgICBpZiAoc3ViLmxlbmd0aCA+IDUwKSB7XHJcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgNTApO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRzID0gW1xyXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcgJyksXHJcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJy4nKSxcclxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignLCcpLFxyXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCc/JyksXHJcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyEnKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgaW5kID0gTWF0aC5tYXgoLi4uaW5kcyk7XHJcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgaW5kKSArICcuLi4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhzY2VuKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIHNjZW4nKTtcclxuICAgICAgICBFbGVtZW50cy5tdFRvcEJhbm5lclRleHQuaW5uZXJUZXh0ID0gc3ViO1xyXG4gICAgICAgIEVsZW1lbnRzLm10U2NlbmFyaW9Db250ZXh0LmlubmVyVGV4dCA9IHNjZW4uY29udGV4dDtcclxuICAgICAgICBFbGVtZW50cy5tdFNjZW5hcmlvUXVlc3Rpb24uaW5uZXJUZXh0ID0gc2Nlbi5xdWVzdGlvbjtcclxuICAgICAgICBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzayA9IHNjZW4udGFnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnQoY29uZmlnOiBUcmFja2VyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHNldERlYnVnTGV2ZWwoY29uZmlnLmRlYnVnTGV2ZWwpO1xyXG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VyIHNwZWNpZmljIGVsZW1lbnRzXHJcbiAgICAgICAgVHJhY2tlckVsZW1lbnRzLnNldHVwVHJhY2tlckVsZW1lbnRzKCk7XHJcbiAgICAgICAgU3VibWl0Rm9ybS5zZXR1cChjb25maWcuYWxsb3dTdWJtaXNzaW9uKTtcclxuICAgICAgICBkYXRhLmRhdGEudGFzayA9IEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrO1xyXG4gICAgICAgIGNvbmZpZy5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFdmVudChldmVudFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdID0gW107XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlci5yZWdpc3RlcihldmVudFR5cGUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmxvZ3NbZXZlbnRUeXBlXS5wdXNoKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gKGV2RGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZEYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1RyYWNrZXJFdmVudChldkRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VG9UcmFja2VyRXZlbnQoZXZEYXRhLCBldmVudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlci5kb0V2ZW50KGV2RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXR0YWNoRGF0YShrZXk6IHN0cmluZywgYXR0cmlidXRlOiBhbnkpIHtcclxuICAgICAgICBkYXRhLmRhdGFba2V5XSA9IGF0dHJpYnV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCBjb21wdXRlOiAodmFsOiBhbnkpID0+IGFueSkge1xyXG4gICAgICAgIGRhdGEuZGF0YVtuYW1lXSA9IGNvbXB1dGUoZGF0YS5kYXRhW25hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWNlaXZlciA9IG5ldyBFdmVudFJlY2VpdmVyKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLy4uL2RhdGEtbG9nL2RhdGFcIjtcclxubG9nKFwiY29uc29sZSB3cmFwcGVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXJyb3I8VD4oXHJcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxyXG4pOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcclxuICByZXR1cm4gZXJyb3JITyhmdW5jKSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JITzxUPihcclxuICBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBUXHJcbik6ICguLi5hcmdzOiBhbnkpID0+IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xyXG4gIHJldHVybiBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gZnVuYyhhcmdzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRhdGEuZXJyb3JzLnB1c2goZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBEZWJ1Z0xldmVsRW51bSB7XHJcbiAgTk9ORSA9IDEsXHJcbiAgQkFTSUMgPSAyLFxyXG4gIERFVEFJTEVEID0gMyxcclxufVxyXG5cclxubGV0IGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtID0gRGVidWdMZXZlbEVudW0uQkFTSUM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWdMZXZlbChsZXZlbDogRGVidWdMZXZlbEVudW0pIHtcclxuICBkZWJ1Z0xldmVsID0gbGV2ZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nLCBpbXBvcnRhbmNlOiBEZWJ1Z0xldmVsRW51bSkge1xyXG4gIGlmIChkZWJ1Z0xldmVsID49IGltcG9ydGFuY2UpIHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XHJcbmxvZyhcImZ1bmNzIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XHJcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpOiBudW1iZXIge1xyXG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBEIH0gZnJvbSAnLi4vZG9tL2RvY3VtZW50JztcclxuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vY29uc29sZV93cmFwcGVyJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vZnVuY3MnO1xyXG5sb2coJ2h0bWwgbG9hZGVyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGUge1xyXG4gICAgW25hbWU6IHN0cmluZ106IEVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhUTUxMb2FkZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBDQUNIRTogQ2FjaGUgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpbmlzaCgpIHtcclxuICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0ZpbmlzaGVkKCkge1xyXG4gICAgICAgIHJldHVybiBIVE1MTG9hZGVyLmZpbmlzaGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FjaGVIVE1MKG5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKEhUTUxMb2FkZXIuZmluaXNoZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBjYWNoZSBuZXcgSFRNTCBlbnRpdGllcyBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZC4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRzbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RzLWxvYWQnKTtcclxuICAgICAgICB0c2wuZGF0YXNldC5uYW1lID0gbmFtZTtcclxuICAgICAgICB0c2wuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB0aGlzLkNBQ0hFW25hbWVdID0gdHNsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJQb3N0TG9hZEZ1bmMoZnVuYzogKCkgPT4gYW55KSB7XHJcbiAgICAgICAgbG9nKCdyZWdzaXRlciBwb3N0IGxvYWQgZnVuY3Rpb24nLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XHJcbiAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMgPSBmdW5jO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChodG1sOiBzdHJpbmcsIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbG9nKCdiZWdpbiBsb2FkJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IEQuZWxlbShlbGVtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWcgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChmcmFnLCAnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLmxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFwcGVuZENoaWxkKGZyYWcpO1xyXG4gICAgICAgICAgICAgICAgbG9nKCdlbmQgbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcclxuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIucG9zdExvYWRGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkVVJMKHVybDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIEhUTUxMb2FkZXIubG9hZChhd2FpdCBIVE1MTG9hZGVyLmdldEhUTUwodXJsKSwgZWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRIVE1MKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsb2coJ2JlZ2luIHJlcXVlc3QnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZygncmVzb2x2ZSByZXF1ZXN0JywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb3N0TG9hZEZ1bmM6ICgpID0+IGFueSA9IG5vb3A7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KFxyXG4gICAgICAgIGZyYWc6IERvY3VtZW50RnJhZ21lbnQsXHJcbiAgICAgICAgdGFnTmFtZTogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBmcmFnLnF1ZXJ5U2VsZWN0b3JBbGwodGFnTmFtZSkuZm9yRWFjaCgodGFnKSA9PiBmcmFnLnJlbW92ZUNoaWxkKHRhZykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGZsYXR0ZW5UU0xvYWRUYWdzKCkge1xyXG4gICAgICAgIGxvZygnRmxhdHRlbmluZycsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcclxuICAgICAgICBjb25zdCBzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoSFRNTExvYWRlci5DQUNIRSkuZm9yRWFjaChcclxuICAgICAgICAgICAgKG5hbWUpID0+XHJcbiAgICAgICAgICAgICAgICAoSFRNTExvYWRlci5DQUNIRVtuYW1lXSA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhcclxuICAgICAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSkgYXMgRWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBzLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICkgYXMgRWxlbWVudClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG11bHRpcGxlVGFicyhuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXQgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICByZXQgKz0gJ1xcdCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmxhdHRlblRTTG9hZFRhZyhcclxuICAgICAgICBlbGVtOiBFbGVtZW50LFxyXG4gICAgICAgIGZsYXR0ZW5lZDogU2V0PHN0cmluZz4sXHJcbiAgICAgICAgY291bnQ6IG51bWJlclxyXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSBIVE1MTG9hZGVyLm11bHRpcGxlVGFicyhjb3VudCk7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdDaGVjayB0aGUgY29uc29sZSwgYW4gZXJyb3IgaGFzIG9jY3VycmVkLicpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnSXQgc2VlbXMgbGlrZSB5b3UgbWlnaHQgaGF2ZSBpbmZpbml0ZWx5IHJlY3Vyc2l2ZWx5IG5lc3RlZCB0YWdzLicgK1xyXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGFyZSBhbGwgb2YgdGhlIHRhZ3MgdGhhdCBoYXZlIGJlZW4gZmxhdHRlbmVkIHNvIGZhcjogJyArXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmVkICtcclxuICAgICAgICAgICAgICAgICAgICAnXFxuSGVyZSBpcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBlbGVtZW50OiAnICtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICBpZiAobmFtZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKTtcclxuICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZsYXR0ZW5lZC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XHJcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhlLCBmbGF0dGVuZWQsIGNvdW50ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZS5yZXBsYWNlV2l0aChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBmbGF0dGVuZWQuYWRkKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldENhY2hlZENvbnRlbnQoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV07XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkQWxsQ2FjaGVkRWxlbWVudHMoZnJhZzogRG9jdW1lbnRGcmFnbWVudCkge1xyXG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCgndHMtbG9hZCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5yZXBsYWNlV2l0aChjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vZG9tL2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcclxubG9nKFwiaWQgZ2VuZXJhdG9yIGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBjbGFzcyBJREdlbmVyYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyByZXNldCgpIHtcclxuICAgIElER2VuZXJhdG9yLmlkQ291bnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbmV4dCgpIHtcclxuICAgIElER2VuZXJhdG9yLmlkQ291bnQgKz0gMTtcclxuICAgIHJldHVybiBJREdlbmVyYXRvci5wcmVmaXggKyBJREdlbmVyYXRvci5pZENvdW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhcHBseUlEKGVsZW06IEVsZW1lbnQpIHtcclxuICAgIGVsZW0uaWQgPSBlbGVtLmlkID8gZWxlbS5pZCA6IElER2VuZXJhdG9yLm5leHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnNpdmVseSBhZGRzIGlkcyB0byBhbGwgZWxlbWVudHMgdGhhdCBhcmUgYmVsb3cgdGhlIGdpdmVuXHJcbiAgICogZWxlbWVudCBpbiB0aGUgaGVpcmFyY2h5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW0gLSB0aGUgZWxlbWVudCB0byBzdGFydCBhcHBseWluZyBpZHMgdG8gaXRzIGNoaWxkcmVuLlxyXG4gICAqICAgICAgICAgICAgICAgICAgV2lsbCBub3QgYXBwbHkgYW4gaWQgdG8gdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlSZWN1cihlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XHJcbiAgICBELmVhY2hSZWN1cihlbGVtLCB0aGlzLmFwcGx5SUQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoZXMgaWRzIHRvIGFsbCBodG1sIGVsZW1lbnRzIGluIHRoZSB0YXJnZXQgbG9jYXRpb24gaW4gdGhlIERPTSB0aGF0IGRvIG5vdCBoYXZlIGlkcy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGF0dGFjaElkc1RvQWxsRWxlbWVudHMoKSB7XHJcbiAgICBJREdlbmVyYXRvci5hcHBseVJlY3VyKEVsZW1lbnRzLmh0bWxMb2MpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaWRDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcHJlZml4ID0gXCJhdXRvX2dlbl9pZF91bnFfXCI7XHJcbn1cclxuIiwiY29uc3QgcVBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcclxuZXhwb3J0IGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIHd1c3RsX2tleTogJycsXHJcbiAgICBzYW5kYm94OiBmYWxzZSxcclxuICAgIHByb2plY3Q6ICcnLFxyXG4gICAgaXRlcmF0aW9uOiAwLFxyXG4gICAgdGFnOiAnJyxcclxufTtcclxudHJ5IHtcclxuICAgIHFQYXJhbXMuZm9yRWFjaChjb25zb2xlLmxvZyk7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgWyd3dXN0bF9rZXknLCAnc2FuZGJveCcsICdwcm9qZWN0JywgJ2l0ZXJhdGlvbicsICd0YWcnXS5ldmVyeSgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXk6ICcgKyBxUGFyYW1zLmhhcyhrZXkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHFQYXJhbXMuaGFzKGtleSk7XHJcbiAgICAgICAgfSlcclxuICAgICkge1xyXG4gICAgICAgIHBhcmFtcy53dXN0bF9rZXkgPSBxUGFyYW1zLmdldCgnd3VzdGxfa2V5JykgYXMgc3RyaW5nO1xyXG4gICAgICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoJ3NhbmRib3gnKSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIHBhcmFtcy5wcm9qZWN0ID0gcVBhcmFtcy5nZXQoJ3Byb2plY3QnKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgcGFyYW1zLml0ZXJhdGlvbiA9IHBhcnNlSW50KHFQYXJhbXMuZ2V0KCdpdGVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKTtcclxuICAgICAgICBwYXJhbXMudGFnID0gcVBhcmFtcy5nZXQoJ3RhZycpIGFzIHN0cmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21pc3NpbmcgcXVlcnkgcGFyYW1zJyk7XHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICdUaGlzIEhJVCBpcyBtaXNzaW5nIG5lY2Nlc3NhcnkgbWV0YWRhdGEsIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoZSk7XHJcbiAgICBhbGVydChcclxuICAgICAgICAnVGhpcyBISVQgaXMgYnJva2VuLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLidcclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5cclxubG9nKFwicmVhZHkgbG9hZGVkXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuXHJcbmxldCByZWFkeSA9IGZhbHNlO1xyXG5cclxubGV0IHJlc29sdmVGdW5jOiAodmFsOiBib29sZWFuKSA9PiBhbnk7XHJcbmxldCByZWplY3RGdW5jO1xyXG5jb25zdCByZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbDogYm9vbGVhbikgPT4gYW55LCByZWplY3QpID0+IHtcclxuICByZXNvbHZlRnVuYyA9IHJlc29sdmU7XHJcbiAgcmVqZWN0RnVuYyA9IHJlamVjdDtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbG9nKFwiZG9jdW1lbnQgaXMgcmVhZHlcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xyXG4gIHJlYWR5ID0gdHJ1ZTtcclxuICByZXNvbHZlRnVuYyh0cnVlKTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuICByZXR1cm4gcmVhZHk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIHJldHVybiByZWFkeSA/IFByb21pc2UucmVzb2x2ZSh0cnVlKSA6IHJlYWR5UHJvbWlzZTtcclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFNjZW5hcmlvIHtcclxuICAgIGNvbnRleHQ6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby12YXItcmVxdWlyZXNcclxuLy8gZXhwb3J0IGNvbnN0IHNjZW5hcmlvczogU2NlbmFyaW9bXSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vLi4vc2NlbmFyaW9zL3NjZW5hcmlvcy5qc29uJyk7XHJcbmltcG9ydCBzY2VuYXJpb3MgZnJvbSAnLi8uLi8uLi8uLi8uLi9zY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24nO1xyXG5leHBvcnQgeyBzY2VuYXJpb3MgfTtcclxuKHdpbmRvdyBhcyBhbnkpLnNjZW5hcmlvcyA9IHNjZW5hcmlvcztcclxuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uIHtcclxuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xyXG4gICAgQWNjb3JkaW9uLmRpc2NhcmRBbGwoKTtcclxuICAgIGNvbnN0IGFjY29yZGlvbnMgPSBELmNsYXooXCJhY2NvcmRpb25cIik7XHJcbiAgICBmb3IgKGxldCBhY2NJbmRleCA9IDA7IGFjY0luZGV4IDwgYWNjb3JkaW9ucy5sZW5ndGg7ICsrYWNjSW5kZXgpIHtcclxuICAgICAgY29uc3QgZWxlbSA9IGFjY29yZGlvbnMuaXRlbShhY2NJbmRleCk7XHJcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBBY2NvcmRpb24uYWNjb3JkaW9ucy5wdXNoKG5ldyBBY2NvcmRpb24oZWxlbSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xyXG4gICAgQWNjb3JkaW9uLmFjY29yZGlvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFjY29yZGlvbnM6IEFjY29yZGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3V0ZXI6IEVsZW1lbnQpIHtcclxuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihvdXRlciwgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwiYWN0aXZlXCIgY2xhc3MsXHJcbiAgICAgICAgICAgICAgICB0byBoaWdobGlnaHQgdGhlIGJ1dHRvbiB0aGF0IGNvbnRyb2xzIHRoZSBwYW5lbCAqL1xyXG4gICAgICB0aGlzLm91dGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xyXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMub3V0ZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAocGFuZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSB7XHJcbiAgY29uc29sZS5sb2coXCJQdXQgc29tZSBjb2RlIGluIGhlcmUhXCIpO1xyXG59XHJcbiIsImltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xyXG5pbXBvcnQgeyBkb1NvbWV0aGluZyB9IGZyb20gJy4vZG8tc29tZXRoaW5nJztcclxuaW1wb3J0IHsgSFRNTENvbnRlbnQsIGl0ZW1zVG9DYWNoZSB9IGZyb20gJy4vaHRtbC1pbXBvcnRzJztcclxuaW1wb3J0IHsgU2xpZGVzaG93IH0gZnJvbSAnLi9zbGlkZXNob3cnO1xyXG5pbXBvcnQgeyBzY3JvbGxUb0lEIH0gZnJvbSAnLi9zY3JvbGx0b2lkJztcclxuXHJcbi8vIFB1dCBhbGwgZnVuY3Rpb24gY2FsbHMgdGhhdCBuZWVkIHRvIGJlIG1hZGUgb24gZXZlcnkgcGFnZSBsb2FkIGluc2lkZSB0aGUgc2V0dXBBbGwgZnVuY3Rpb24gYm9keS5cclxuZXhwb3J0IGZ1bmN0aW9uIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKSB7XHJcbiAgICAvLyBUT0RPOiBQdXQgYWxsIG9wZXJhdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBoYXBwZW4gb24gZXZlciBwYWdlIGxvYWQgaW4gdGhpcyBmdW5jdGlvbi5cclxuICAgIC8vIEZvciBleGFtcGxlIHlvdSBjb3VsZCB3cml0ZTogU3RpY2t5LnNldHVwKClcclxuICAgIGRvU29tZXRoaW5nKCk7XHJcbiAgICAvLyBUaGlzIGlzIHVzZWQgdG8gc2Nyb2xsIHRvIGEgc3RhZmYgbWVtYmVyIHdoZW4gYSBsaW5rIHRvIHN0YWZmLmh0bWwgaXMgY2xpY2tlZFxyXG4gICAgc2Nyb2xsVG9JRCgpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBBbGwoKSB7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocjogYW55KSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xyXG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGluZycpO1xyXG4gICAgU2xpZGVzaG93LnNldHVwQWxsKCk7XHJcbiAgICBBY2NvcmRpb24uc2V0dXBBbGwoKTtcclxuICAgIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKTtcclxuICAgIGNvbnNvbGUubG9nKCdyZWxvYWRlZCcpO1xyXG59XHJcblxyXG5pdGVtc1RvQ2FjaGUuZm9yRWFjaCgoaXRlbTogSFRNTENvbnRlbnQpID0+IHtcclxuICAgIEhUTUxMb2FkZXIuY2FjaGVIVE1MKGl0ZW0ubmFtZSwgaXRlbS5jb250ZW50KTtcclxufSk7XHJcbih3aW5kb3cgYXMgYW55KS5IVE1MTG9hZGVyID0gSFRNTExvYWRlcjtcclxuXHJcbmNvbnNvbGUubG9nKCdkeW5hbWljLWRvbSBsb2FkZWQnKTtcclxuLy8gRG8gbm90IHRvdWNoIHRoaXMgbGluZSwgbmVlZGVkIHRvIHJlaW5pdGlhbGl6ZSBjb2RlIGluIHRoZSBkeW5hbWljLWRvbS50cyBzZXR1cEFsbCBmdW5jdGlvblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV3UGFnZUxvYWQnLCAoKSA9PiBzZXR1cEFsbCgpKTtcclxuIiwiZGVjbGFyZSBmdW5jdGlvbiByZXF1aXJlKGlkOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vLyBUaGlzIGRlZmluZXMgdGhlIGRhdGEgdGhhdCBuZWVkcyB0byBiZSBwYXNzZWQgdG8gdGhlIEhUTUxMb2FkZXIgdG8gY2FjaGUgeW91ciBodG1sIGNvbnRlbnQuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSFRNTENvbnRlbnQge1xyXG4gICAgbmFtZTogc3RyaW5nOyAvLyBUaGUgbmFtZSB0aGF0IHlvdSB3aWxsIHVzZSB0byByZWZlcmVuY2UgdGhlIGNvbnRlbnQgaW4geW91ciBodG1sIHBhZ2VzLlxyXG4gICAgY29udGVudDogc3RyaW5nOyAvLyBUaGUgYWN0dWFsIGh0bWwgc3RyaW5nIHRoYXQgd2lsbCBiZSBwdWxsZWQgZnJvbSB0aGUgc291cmNlIGZpbGUgdGhhdCB5b3Ugc3BlY2lmeS5cclxufVxyXG5cclxuLy8gQW4gSFRNTENvbnRlbnQgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhlIGZvbGxvd2luZzpcclxuLy8ge1xyXG4vLyAgICAgbmFtZTogJ2Zvb3RlcicsXHJcbi8vICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcclxuLy8gfVxyXG5cclxuLy8gVGhlbiB5b3UgY2FuIHJlZmVyZW5jZSB0aGF0IGNvbnRlbnQgaW4geW91ciBodG1sIHVzaW5nIHRoZSBmb2xsb3dpbmcgdGFnIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgbmFtZSBhdHRyaWJ1dGUuXHJcbi8vIDx0cy1sb2FkIGRhdGEtbmFtZT1cImhlYWRlclwiPjwvdHMtbG9hZD5cclxuXHJcbi8vIFlvdSBjYW4gc3BlY2lmeSBhcyBtYW55IGFzIHlvdSB3YW50IGluc2lkZSBvZiB0aGUgYXJyYXkgYW5kIHRoZXkgd2lsbCBhbGwgYmUgYnVuZGxlZCB1cCB3aXRoIHlvdXIgd2Vic2l0ZS5cclxuLy8gTWFrZSBzdXJlIHRvIG1ha2UgYSBjb3JyZXNwb25kaW5nIGh0bWwgZmlsZSBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciBmb3IgZWFjaCBlbGVtZW50IHlvdSBzcGVjaWZ5LlxyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zVG9DYWNoZSA9IFtcclxuICAgIC8vIEZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgaW5zaWRlIGFueSBvZiB0aGUgaHRtbCBmaWxlcyBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciB0byBzdWl0IHlvdXIgbmVlZHMuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2hlYWRlcicsXHJcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2hlYWRlci5odG1sJyksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmb290ZXInLFxyXG4gICAgICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9mb290ZXIuaHRtbCcpLFxyXG4gICAgfSxcclxuICAgIC8vIFB1dCBtb3JlIGl0ZW1zIGluIHRoZSBhcnJheSBiZWxvdyBoZXJlLlxyXG5dO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvb3RlciBpZD1cXFwiY29sb3Bob25cXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiIHJvbGU9XFxcImNvbnRlbnRpbmZvXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci13aWRnZXRzXFxcIj5cXHJcXG4gICAgICA8YXNpZGUgY2xhc3M9XFxcIndpZGdldCBzaXRlLWNvbnRhY3RcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5OdXJzZXJ5IFNjaG9vbDwvaDI+XFxyXFxuICAgICAgICA8cD42OTI2IEZvcmVzdCBQYXJrIFBhcmt3YXk8L3A+XFxyXFxuICAgICAgICA8cD5TdC4gTG91aXMsIE1PIDYzMTMwPC9wPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XFxcInBob25lXFxcIj4zMTQtOTM1LTY2ODkgPHNwYW4+fDwvc3Bhbj4gRmF4OiAzMTQtOTM1LTcyNDk8L3A+XFxyXFxuICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvbWFpbHRvOm51cnNlcnlAd3VzdGwuZWR1XFxcIj5udXJzZXJ5QHd1c3RsLmVkdTwvYT5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICA8L2FzaWRlPlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC13cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC00XFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXHJcXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5Ib3VycyBvZiBPcGVyYXRpb248L2gyPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXHJcXG4gICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgIENsYXNzZXMgbWVldCBNb24uIHRocm91Z2ggRnJpLjxicj5cXHJcXG4gICAgICAgICAgICAgIE1vcm5pbmc6IDktMTE6NDUgYS5tLjxicj5cXHJcXG4gICAgICAgICAgICAgIEFmdGVybm9vbjogMTI6MzAtMzoxNSBwLm0uPGJyPlxcclxcbiAgICAgICAgICAgICAgRnVsbCBkYXk6IDkgYS5tLi0zOjE1IHAubS5cXHJcXG4gICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hc2lkZT5cXHJcXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC0zXFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXHJcXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5BcHBseSBmb3IgdGhlIE51cnNlcnkgU2Nob29sPC9oMj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxyXFxuICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICBFeHBlcmllbmNlIHRoZSBpbm5vdmF0aXZlIGFwcHJvYWNoIGFuZCBkeW5hbWljIHRlYWNoaW5nXFxyXFxuICAgICAgICAgICAgICBlbnZpcm9ubWVudCBvZiB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlxcclxcbiAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5SZWdpc3RlciBOb3c8L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hc2lkZT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtaW5mb1xcXCI+XFxyXFxuICAgICAgPHAgY2xhc3M9XFxcImZvb3Rlci1jb3B5cmlnaHRcXFwiPsKpMjAxOSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZm9vdGVyPlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInd1c3RsLWJyYW5kaW5nXFxcIj5cXHJcXG4gIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMzIxXFxcIiBoZWlnaHQ9XFxcIjI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzIxIDI4XFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nb1xcXCJcXHJcXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ0aXRsZVxcXCI+XFxyXFxuICAgIDx0aXRsZSBpZD1cXFwidGl0bGVcXFwiPldhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3RpdGxlPlxcclxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRkZGXFxcIlxcclxcbiAgICAgIGQ9XFxcIk0xMC40NiAxLjc2Yy0uMDkgMC00LjQxLjA0LTEwLjQ2LTEuMjFWMThjMCAuMjcuMDEuNDcuMDEuNDd2LjAyYy4wNC44MS4yOCAxLjQ1Ljc3IDIgLjMyLjM0Ljc2LjcgMS4zOCAxLjA1LjE3LjEuMzUuMTguNTUuMjguMTUuMDcuMzEuMTQuNDcuMi4xNC4wNi41NS4yNC42OS4yOWw2LjU5IDIuNSA2LjU5LTIuNWMuMTUtLjA1LjU2LS4yNC42OS0uMjkuMTYtLjA3LjMyLS4xNC40Ny0uMi4xOS0uMS4zOC0uMTguNTUtLjI4LjYyLS4zNSAxLjA2LS43IDEuMzgtMS4wNS40OC0uNTUuNzMtMS4xOS43Ny0ydi0uMDJzMC0uMTkuMDEtLjQ3Vi41NUMxNC44NiAxLjggMTAuNTUgMS43NiAxMC40NiAxLjc2elxcXCI+XFxyXFxuICAgIDwvcGF0aD5cXHJcXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXHJcXG4gICAgICBkPVxcXCJNMTAuNDYgMi44Yy0uMDkgMC00LjAzLjA0LTkuNTYtMS4xdjE1Ljk1YzAgLjI1LjAxLjQzLjAxLjQ0di4wMmMuMDQuNzQuMjUgMS4zMy43IDEuODMuMjkuMzEuNy42NCAxLjI2Ljk1LjE1LjA5LjMyLjE3LjUuMjYuMTQuMDcuMjguMTMuNDQuMTkuMTIuMDUuNS4yMi42My4yN2w2LjAzIDIuMjkgNi4wMy0yLjI5Yy4xMy0uMDUuNTEtLjIyLjYzLS4yNy4xNS0uMDYuMy0uMTMuNDQtLjE5LjE4LS4wOS4zNS0uMTcuNS0uMjYuNTYtLjMxLjk3LS42NCAxLjI2LS45NS40NC0uNS42Ni0xLjA5LjctMS44M3YtLjAyczAtLjE4LjAxLS40NFYxLjdjLTUuNTUgMS4xNC05LjUgMS4xLTkuNTggMS4xelxcXCI+XFxyXFxuICAgIDwvcGF0aD5cXHJcXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXHJcXG4gICAgICBkPVxcXCJNMTAuNDYgMy43NWMtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2NC4wOGM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlYyLjczYy01LjA2IDEuMDUtOC42NiAxLjAyLTguNzQgMS4wMnpcXFwiPlxcclxcbiAgICA8L3BhdGg+XFxyXFxuICAgIDxwYXRoIGZpbGw9XFxcIiNBNTE0MTdcXFwiXFxyXFxuICAgICAgZD1cXFwiTTEwLjQ2IDcuODNjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjkuMDVjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWNi44MmMtNS4wNiAxLjA0LTguNjYgMS4wMS04Ljc0IDEuMDF6XFxcIj5cXHJcXG4gICAgPC9wYXRoPlxcclxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcclxcbiAgICAgIGQ9XFxcIk0xLjcyIDE3LjcyYy4wMy42OS4yMyAxLjIzLjY0IDEuNjguMjYuMjguNjQuNTggMS4xNS44Ny4xNS4wOC4yOS4xNS40Ni4yMy4xMy4wNi4yNi4xMi40LjE3LjExLjA1LjQ2LjIuNTguMjRMMTAuNDYgMjNsNS41MS0yLjA5Yy4xMi0uMDQuNDYtLjIuNTgtLjI0LjE0LS4wNi4yNy0uMTIuNC0uMTcuMTYtLjA4LjMyLS4xNS40Ni0uMjMuNTEtLjI5Ljg4LS41OCAxLjE1LS44Ny40MS0uNDYuNi0xIC42NC0xLjY4di0uMDJzMC0uMTYuMDEtLjR2LTEuNDRjLTUuMDUgMS4wNS04LjY3IDEuMDItOC43NCAxLjAycy0zLjY4LjA0LTguNzQtMS4wMnYxLjQ1Yy0uMDIuMjUtLjAxLjQxLS4wMS40MXpcXFwiPlxcclxcbiAgICA8L3BhdGg+XFxyXFxuICAgIDxwYXRoIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxyXFxuICAgICAgZD1cXFwiTTQuOCAzLjY5bC40MSAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDUtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0xMS4zMSAwbC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0tNS42NS40OGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA2Ljc1LjM5LTEuMjQtMS4wNC0uNzcgMS4zLS4wMS40MS0xLjIyek0xMC40NiAxNy4yMWwtLjQ2LjQ1djEuMjJsLjIzLjY1djEuMDloLjQ1di0xLjA5bC4yMy0uNjV2LTEuMjJsLS40NS0uNDV6bS4yMiA0LjQxdi0uNjVoLS40NXYuNjVsLS4yMy40Mi40Ni41Ni40Ni0uNTYtLjI0LS40MnptLjMzLS42NXYuNWwuMjkuMzEuNTEtLjQxdi0uNDFoLS44em0uNTQtMi4wNGwtLjU0LjZ2MS4wOWguNDR2LS42NWwuNDMtLjQ2LjU1LjM2LjM1LS4zNnYtLjU4aC0xLjIzem0tMS42NCAyLjA0di41bC0uMjkuMzEtLjUyLS40MXYtLjQxaC44MXptLS41NS0yLjA0bC41NC42djEuMDloLS40M3YtLjY1bC0uNDMtLjQ2LS41NS4zNi0uMzUtLjM2di0uNThoMS4yMnpcXFwiPlxcclxcbiAgICA8L3BhdGg+XFxyXFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxyXFxuICAgICAgZD1cXFwiTTE0LjYyIDkuMjd2NS4xOWgtMy40OWwtLjI1LjIxLS40My4zNy0uNDMtLjM3LS4yNS0uMjFINi4yOVY5LjI3bC0uNzQuNTR2NS4zOGg0LjEybC4zNy4zMS40My4zOC40My0uMzguMzctLjMxaDQuMTJWOS44MWwtLjc3LS41NHpcXFwiPlxcclxcbiAgICA8L3BhdGg+XFxyXFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxyXFxuICAgICAgZD1cXFwiTTExLjAyIDguODNsLS4xNC4xMS0uNDMuMzgtLjQzLS4zOC0uMTItLjExSDcuMDN2NC44OWgyLjg4bC4yLjE3LjM1LjMxLjM2LS4zMS4xOS0uMTdoMi44OFY4LjgzaC0yLjg3ek0xNi4xMSAxMC4zNXYzLjMxYy45NS0uMTQgMS45OC0uMzEgMy4wOC0uNTRWOS44MWE1MC41IDUwLjUgMCAwIDEtMy4wOC41NHptLTExLjMxIDBjLS45NS0uMTQtMS45OC0uMzEtMy4wOC0uNTR2My4zMWMxLjEuMjMgMi4xNC40MSAzLjA4LjU0di0zLjMxelxcXCI+XFxyXFxuICAgIDwvcGF0aD5cXHJcXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXHJcXG4gICAgICBkPVxcXCJNMTYuMTEgMTYuNzZsLS4zMS4zMnYuODZsLjE1LjQ2di43N2guMzF2LS43N2wuMTYtLjQ2di0uODZsLS4zMS0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNS4zLjMxLjQuMzItLjQtLjE3LS4zMXptLjIzLS40NXYuMzVsLjIuMjIuMzYtLjI4di0uMjloLS41NnptLjM4LTEuNDNsLS4zOC40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM4LjI1LjI0LS4yNXYtLjQxaC0uODV6bS0xLjE0IDEuNDN2LjM1bC0uMjEuMjItLjM1LS4yOHYtLjI5aC41NnptLS4zOS0xLjQzbC4zOS40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM5LjI1LS4yNC0uMjV2LS40MWguODV6TTQuOCAxNi43NmwtLjMyLjMydi44NmwuMTYuNDZ2Ljc3aC4zMXYtLjc3bC4xNS0uNDZ2LS44NmwtLjMtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTYuMy4zMi40LjMxLS40LS4xNi0uMzF6bS4yMi0uNDV2LjM1bC4yMS4yMi4zNS0uMjh2LS4yOWgtLjU2em0uMzktMS40M2wtLjM5LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzkuMjUuMjQtLjI1di0uNDFoLS44NXpNNC40MiAxOS40di4zNWwtLjIuMjItLjM2LS4yOHYtLjI5aC41NnptLS4zOC0xLjQzbC4zOC40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM4LjI1LS4yNC0uMjV2LS40MWguODV6XFxcIj5cXHJcXG4gICAgPC9wYXRoPlxcclxcbiAgICA8ZyBmaWxsPVxcXCIjRkZGXFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nby10ZXh0XFxcIj5cXHJcXG4gICAgICA8cGF0aFxcclxcbiAgICAgICAgZD1cXFwiTTIzMi40NyA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3ptMTMuODIgMTIuMDN2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA2IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAxLjk5IDEuNjh2Ny42NGMwIDEuNDMtLjcgMS41NS0xLjIxIDEuNjgtLjAzIDAtLjA2LS4wMS0uMSAwLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI5IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMSAwIDEuMTUtLjEzIDIuNTMtLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZWMTMuMWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ1LS40NC0uNjgtLjUtMS45Ny4zLTEuOTUtMi4wNHpNNDguOTEgMi40Yy4zNy0uMDUuNTUtLjE5LjU1LS4xOSAwLS4yNC0uMDUtLjMtLjM5LS4zLS42NSAwLTEuMDUuMTEtMS42OS4xMS0uNzEgMC0xLjI1LS4wOC0xLjg1LS4wOC0uMzQgMC0uMzEuMTEtLjMxLjMgMCAuMjEuNjUuMDggMS4wMi44OS4yMS40NC4xMyAxLjM2LS4wOCAxLjlsLTUuMDEgMTMuNzQtMi4xNC02LjEtLjgzLTIuMjNzLS4xMy4wNi40Ni0xLjc5bDEuMTctMy41MmMuNTctMS43MyAxLjE0LTIuNjQgMS44OC0yLjY1LjkyLS4wMi45Mi0uNTcuMjEtLjU3cy0xLjEzLjA2LTEuNzUuMDZjLS42NSAwLS45OS0uMDYtMS42OS0uMDYtLjI2IDAtLjU1LjA4LS41Mi4zLjAzLjIxLjQyLjE0LjcxLjMuNDcuMjQuNzggMS4yNS40NSAyLjNsLTEuMzggNC40Mi0xLjU4LTQuMTNjLS4zMS0uNzgtLjczLTIuNTIuMDMtMi42Ny43My0uMTUuNjMtLjUyLjE4LS41Mi0uODYgMC0xLjMyLjExLTIuMTUuMTEtLjkxIDAtMS41OS0uMTEtMi40NS0uMTEtLjE4IDAtLjUyLjAzLS40Mi4zOC4wNS4yMS40OS4xNC43Ni4zIDEuMDUuNjggMS4yNSAxLjU1IDEuNjIgMi41MmwyLjMgNi40OGMuNDIgMS4xNi40NS43NC4xMSAxLjczbC0yIDUuNS00Ljk1LTE0LjExYy0uMzktMS4wNi0uNi0xLjc5LjI2LTIuMi4zNy0uMTkuNDctLjIyLjUyLS4zLjA1LS4wNy4xLS4zMi0uNDUtLjMtLjg5LjAzLTEuNDMuMTEtMi4zMi4xMS0uOTQgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMjkgMC0uMzQuMTQtLjM0LjM1IDAgLjMzLjcxLjExIDEuMzEuODEuMzQuMzguOTkgMS42NiAxLjE0IDIuMTJMMzIuOCAyMi4zYy4xMS4yNS4xNC43Ni40OC43Ni4yNyAwIC4zMy0uNTcuNDItLjc5bDMuMTMtOC41OSAzLjA1IDguMTZjLjEzLjMzLjMxIDEuMjIuNjMgMS4yMi4yNiAwIC4zNi0uNDMuNDktLjgzbDUuOS0xNi44N2MuNS0xLjM2IDEuMDctMi43OSAyLjAxLTIuOTZ6bTY1LjQ2IDYuNzFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS45Ni41MiAzLjUxIDEuNDIgNC42My0uMzEuMjEtLjkyLjctMi4xNS43LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTEuMmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjUxLS4zNS0zLjUxLS4zNiAwLS4zLjEtLjYzIDEuMTctLjQ0IDEuNDQtMS43OSAyLjIzLTIuNjMgMi42OC0uMzguMDktLjgxLjEyLTEuMjkuMDEtLjc0LS4xNi0xLjYtMS4wNi0zLjgzLTEuMDYtMi4zOCAwLTQuNDYgMS45NS00LjQ2IDQuNTUgMCAxLjQuNjIgMi43NiAxLjcxIDMuNDgtLjIuMTItMS41MyAxLjI0LTEuMzcgMi41NiAwIDAtLjAzIDEuMzcgMS4wNSAxLjgyLS4zMy4xNC0uNjcuMzYtLjk2LjYzLS43LS4yNi0xLjcyLS4wNi0xLjcyLTEuOTFWMTUuMWMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjczLjk5LTIuOTEgMS41NS0uMTMuMDMtLjQzLjEtLjQ0LjM0IDAgLjY1IDEuNzUtLjcxIDEuNzYgMS42OHY3LjY0YzAgMS42NS0xLjMxIDEuNjUtMS41NCAxLjY3LS4xIDAtLjE5IDAtLjMxLjAxLS41NS0uMDUtMS41MS0uMy0xLjUxLTEuMzRWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuNzgtLjg2IDIuMDEtMS40MyAyLjAzLS42OS0uMDktMS4yMi0uMzctMS4yMi0xLjQxdi01LjE0YzAtMi42NS0xLjAxLTYuMDctNC4zMy02LjA3LTEuNDcgMC0yLjc1LjgxLTMuNzMgMS45MlYyLjQxYzAtLjMxLS4xNS0uNDgtLjMxLS40OS0uNC0uMDMtMS4wNyAxLjE5LTIuOTYgMS42My0uMTMuMDMtLjYyLjA3LS42Mi4yNSAwIC42NSAxLjk3LS4zMSAxLjk5IDEuNjlWMjAuNmMwIDEuNTEtMS4zIDEuMzEtMS41MyAxLjc5LS4wNC4yMS4wOC4zMS4yNi4zMS40MiAwIDEuNTUtLjEyIDIuMzUtLjEyczIuMS4xMiAyLjY0LjEyYy4zMSAwIC40NC0uMDYuNDQtLjQ0LS4yNy0uNTItMi4yOC4yOC0yLjI4LTIuMzd2LTYuNWMwLTEuNTcgMS44Ny0yLjc4IDMuMDMtMi43OC45MSAwIDMuMTQuNzEgMy4xNCA0LjUzdjUuNjRjMCAxLjExLTEuMTggMS4yMy0xLjI3IDEuNTcgMCAuMjQuMTUuMzQuNDIuMzQuMjggMCAxLjExLS4xMiAyLjEyLS4xMi41NiAwIDEuMDcuMDMgMS41LjA2LjIzLjA1LjU3LjA1Ljk5LjA1LjI4IDAgMS0uMTEgMS44Mi0uMTFzMS40OC4wNyAxLjk5LjExYy4xLjAxLjIuMDEuMy4wMS4wNCAwIC4wOC4wMS4xMi4wMWguMDFjLjMyLjAxLjYxIDAgLjc0IDAgLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMwIDItLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjLjkzIDAgMS41My4wNyAxLjkxLjEtLjI5LjQyLS40OC45LS41MSAxLjQtLjE0IDIuNTEgMi45MyAzLjQxIDUuNTEgMy4zNyA1LjEyLS4wNyA2LjU3LTMuNjIgNS41MS01LjUxLTEuMDktMS45NS0zLjQ0LTEuODctNS42OC0xLjg2LTQuMi4wMi0zLjQxLTIuNTktMS42OS0yLjQ5LjQuMDIuMi4xNCAxLjU3LjE0IDIuNDMgMCA0Ljc2LTEuNjYgNC43LTQuMzgtLjAxLS4yMy4wNS0xLjAzLS41My0yLjE0IDEuMTQuMDEuNjkgMCAyLjQxIDBsLS4wMSA3LjYzYzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuNzQgMCAzLjAxLTEuMTUgMy4yNC0xLjY4IDEuMDMgMS4xIDIuNDYgMS42OCA0LjEyIDEuNjggMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4IDAtNS44LTMuNjUtNi45Ni01LjYxLTYuOTZ6TTk1LjYyIDIxLjcyYy4yMS0uMDEuMjcuMDggMi42NC4xNyAyLjQ1LjA2IDMuMzMuNzcgMy40OSAxLjQuMjYgMS4xMi0uNTMgMy41Mi00LjA1IDMuMjktMi4yMi0uMTUtMi44Ny0xLjItMy4wMy0xLjQ0LS44NC0xLjE2LS4xNi0zLjM1Ljk1LTMuNDJ6bTIuMDEtNC41N2MtMi4wOCAwLTIuNzgtMi0yLjc4LTMuOTEgMC0xLjk2LjU5LTMuNTggMi42Ny0zLjU4IDIuMTEgMCAyLjk1IDIuMTYgMi45NSA0LjA3LjAxIDEuOTMtLjg3IDMuNDItMi44NCAzLjQyem0xNi45OSA0LjgxYy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxelxcXCI+XFxyXFxuICAgICAgPC9wYXRoPlxcclxcbiAgICAgIDxwYXRoXFxyXFxuICAgICAgICBkPVxcXCJNMTMxLjExIDIwLjE5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NC0uNDQtLjY1LS40OS0xLjk0LjMxLTEuOTItMi4wM3pNNzcuNDEgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNi4wMi4zNS43NyAxLjU3IDEuMDcgMS41N3ptLTE3LjMgNi45NmMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNCAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NyA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAuNTEtLjAxLjk4LS4wMSAxLjM4LS4wNy4zNi0uMi43LS41NC43Mi0xLjI0LjA4LS45NC0xLjktLjk0LTIuOTV2LTYuNDNjLS4wNi0xLjk3LTEuNTQtMy4yNS0zLjgtMy4yNS0zLjA5IDAtNS4zMSAzLjgxLTQuMjUgNSAuMjUuMjggMS4yNi0uOCAxLjMyLS44NnMuMDgtLjEzLjA4LS4xM2MtLjAxLTEuMy45Ny0yLjk1IDIuMzctMy4wOSAxLjYtLjE1IDIuNCAxLjA0IDIuNCAyLjY1djIuMDljLTYuMDYgMS4yMS02LjkzIDMuMjItNi45MyA0Ljg3IDAgMi4yMSAxLjU1IDMuMiAzLjIzIDMuMiAxLjQ1IDAgMi44OC0uNjkgMy45Ni0xLjguMzQgMS4wMyAxLjAxIDEuNjUgMi4wMiAxLjYyLjM1LS4wMS40MS4wOSAxLjQ2LS4zNy4zNy0uMS4zNS0uMDkuNzctLjAxLjU2LjE5IDEuMzIuNTcgMi42Ni41NyAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjUtLjQzLTIuNDEtMi4zOS0zLjYzem0tOC40MyA0LjMyYzAgMS42NS0xLjY4IDIuNTItMi42IDIuNTItMS4zOCAwLTIuMzMtLjg5LTIuMzMtMi42NiAwLTIuNzMgMy4yOC0zLjIzIDQuOTQtMy42Ny0uMDEtLjAxLS4wMSAzLjgxLS4wMSAzLjgxem0yMTkuOTkuMTljLS4zMSAwLTEuMDcgMS4yOS0xLjA3IDEuNjMgMCAuMzQuNzcgMS42IDEuMDcgMS42LjMzIDAgMS4wNy0xLjIzIDEuMDctMS42cy0uNzMtMS42My0xLjA3LTEuNjN6bTMzLjcxIDEuMTJWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS41OC4yMy0xLjI5LjIzLS4xMyAwLS43OS0uMTItLjc2LjI1LjA0LjM3IDEuNTcuMTUgMS41OCAxLjIzdjcuODNjLS4xMiAxLjM3LTEuMjcgMi44OC0yLjY2IDIuODgtLjMyIDAtMi4zOS0uMjItMi4zNy0zLjY1VjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNjEuMjItMS4zMi4xOS0uMzgtLjAyLS43OS0uMDctLjczLjI5LjA2LjMyIDEuNTkgMCAxLjU5IDEuMjN2Ny41MWMwIDIuNzQgMS42MSA0LjMyIDMuNTYgNC4zMiAxLjMgMCAyLjQ5LS4yOCAzLjI0LTEuOGguMDV2MS4zMmMwIC4xMy4wMy40OC4yMi40OC4zNyAwIC41Ni0uMy44My0uNC4yOS0uMDcuMzctLjMzIDEuMjgtLjQyLjM5LS4wNC44Mi0uMjQuODItLjUtLjExLS41My0xLjQuMDYtMS40LS43OHpNMjkwLjA5IDkuMTFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS43My40MiAzLjE1IDEuMTMgNC4yMy0uNzkuNTctMi4yMyAxLjEtNC45NiAxLjEtMi4xMyAwLTEuOTMtLjc0LTEuOTMtMi41NVY0LjU3YzAtMi42NiAxLjk5LTEuODkgMi4wMy0yLjM3LjAzLS4zNC0uMjgtLjI2LS42MS0uMjYtLjM4IDAtMS4wNy4xNS0yLjUyLjE1LTEuMjUgMC0yLjM0LS4xMi0yLjg4LS4xMi0uMzMgMC0uNjMuMS0uNTIuMzUuMjUuNTcgMi4xNC4wNSAyLjE0IDEuNjV2MTUuMWMwIDEuNDQuMjEgMi4zNi0uNDUgMi43My0uODEuNDktMS43Ni41MS0xLjY4LjgzLjA1LjE5LjQ1LjIuNjguMiAxLjAyIDAgMi40Mi0uMTMgMy40NC0uMTUgMS45NC0uMDYgMy44Ni4xMyA1Ljc5LjEzIDEuMTIgMCAxLjQtLjIyIDIuMjItMS4zMy4wMS0uMDIuMDItLjAzLjA0LS4wNSAxLjAxLjk0IDIuMzQgMS40NCAzLjg3IDEuNDQgMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4LjAxLTUuODItMy42NS02Ljk4LTUuNjItNi45OHptLjI2IDEyLjg1Yy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxem0tMzIuMDMtMTAuNDljLS43NS0uMzctMS44NS0xLjA0LTIuMzktMS4zNi0yLjM3LTEuMzctMy4zLTIuMjYtMy4zNy0zLjUyLS4xMi0yLjIxIDIuMDQtMy41MiAzLjU4LTMuMzUgMS45NiAwIDMuNTcgMS4xOSA0LjI0IDMuNzMuMDcuMjcuMzEuODkuNTYuODkuMjIgMCAuMjYtLjIuMjQtLjQ1bC0uMzMtNC4wMmMtLjAyLS4zMy0uMTQtLjQyLS4yNy0uNDItLjIyIDAtLjM2LjMzLS41Ni4zMy0uMzEgMC0xLjEtMS4xMS0zLjgtMS4wOS0uMTgtLjAxLS40My4wMi0uNDMuMDItMi42My0uMDUtNS4xIDEuNy01LjAyIDUuNC4wNyAzLjM3IDMuODUgNS4zIDUuODkgNi41OSAxLjUxLjkgMy4wOSAyLjM0IDMuMDQgMy45NS0uMDggMi40Ny0xLjYzIDQuMDgtMy41OCAzLjk0LTQuNTktLjA4LTMuOTYtNi4xMy00Ljc4LTYuMTMtLjU2IDAtLjQ1IDEuNTItLjQ2IDIuMzIgMCAxLjkyLS4wOCAzLjQ5LjE0IDMuNzcuMDcuMDkuMjkuMDUuNzQuMDUuOSAwIDIgMS4wNSA0LjY1IDEuMDUgMi45NS4wNSA1LjM4LTIuNjkgNS4zOC02LjI1LS4wMS0yLjE5LS42Mi0zLjU4LTMuNDctNS40NXptNTEuNjktMy4zMWMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTMxMi42NCAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXptNS45OC02Ljg4Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjExLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMS0uMTMgMC0uMjguMDEtLjI4LjAxLTEuODEtLjAzLTMuNSAxLjExLTMuNDQgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTItLjAxIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTctLjAxLTEuNDgtLjQzLTIuMzktMi4zOS0zLjZ6bS00OC43MyA1LjY2Yy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMnYtOC44MmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjMuNzUuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zNCAzLjI4LTEuOC4wMy0uMjUgMC0uMjgtLjE1LS4yNnptLTgxLjMyLTEuMDljLS41NyAwLTEuNDIgMS42Mi0zLjY2IDEuNjItMS41OCAwLTQuMTctMS41My00LjE3LTYuNjZoNi45Yy42IDAgLjg4LjAzLjg4LS41MiAwLTEuMjUtMS40LTQuOTUtNC41OS00Ljk1LTMuMjQgMC01LjA4IDMuMzMtNS4wOCA3LjMxIDAgMi4wNSAxLjM1IDYuMzggNS4yNCA2LjM4IDIuMzMgMCA0LjU5LTIuMjQgNC41OS0yLjk1LS4wMS0uMTEtLjAxLS4yMy0uMTEtLjIzem0tNS4wOC05LjgxYzEuNDIgMCAyLjg4IDEuNTYgMi44OCAzLjMgMCAuNDYtLjE1LjYyLS41Mi42MmgtNS4xMWMwLTEuNzEgMS4xMy0zLjkyIDIuNzUtMy45MnptLTMxLjctNy4zM2MuMS0uMTYtLjI1LS4yNC0uMzctLjI0LS40MiAwLTEuMzcuMTEtMS44LjExLS44OSAwLTEuNjQtLjA5LTIuNTMtLjA5LS4wNyAwLS40Ni4wNS0uNDYuMTgtLjAxLjYzIDIuMTMtLjExIDIuMTMgMi42djEwLjU3YzAgMy4xMy0uOTkgNi40MS01LjI5IDYuNDEtMy4wOSAwLTQuNzYtMS45NC00Ljc2LTYuMTdWNC40MWMwLTEuOTEgMS40OS0xLjQ5IDEuNTItMS45Mi4wMy0uNDEtMS4zMy0uMTYtMS40My0uMTYtLjcxIDAtMS4yMS4wOC0xLjk1LjA4LS42MiAwLTEuMzctLjEtMS45Ny0uMS0uMTIgMC0uNTMtLjAyLS42MS4xNS0uMjMuNTYgMS45MS4yNiAxLjkxIDEuODN2MTAuOTJjMCA0LjA4IDEuMTQgOC4wOCA3LjE3IDcuOTcgNy4xNC0uMTIgNy4wMS02LjU0IDcuMDEtNy44M1Y1LjEyYy4wMS0yLjQzIDEuMi0yLjIgMS40My0yLjU3em0yOC4xOSA3LjI0Yy4xNy0uMi4yMi0uNTMtLjU3LS40Ni0uNDUgMC0uNzcuMDgtMS4yMi4wOC0uNTcgMC0uNjgtLjAyLTEuMjItLjA0LS42OC0uMDItLjg2LjA1LS44Mi4yNS4xMi42IDEuNTUuMDEgMS4zNiAxLjgtLjE2IDEuNS0uNjUgMi43OS0xLjE0IDQuMDdsLTEuNzMgNC42Mi0yLjU0LTcuN2MtLjMxLS45Ni0uNDUtMS40Ny0uNDUtMS41NyAwLS45NiAxLjE2LS43NSAxLjQyLTEuMTQuMTYtLjI2LS4xNy0uNC0uNTQtLjQtLjMxIDAtLjY3LjExLTEuNjMuMTMtLjc5LjAyLTEuMzYuMDItMS43LS4wNS0uODktLjE2LS44Mi4zMy0uNTEuNDhzLjQ2LjAxLjkxIDEuMzZsMy45MSAxMS4wNmMuMDguMjIuMTguNzcuNTIuNzcuMzkgMCAuMzktLjM5Ljg4LTEuNjkgMCAwIDMuNzUtMTAuNDggNC0xMC44Ni41MS0uNzQuODktLjUgMS4wNy0uNzF6bTE0LjQ3LS41Yy0xLjA3IDAtMS44IDEuMjgtMi4zMyAyLjE2aC0uMDVWOS41M2MwLS4zLS4xNS0uNDgtLjMtLjQ4LS40MSAwLS43Mi44MS0yLjg3IDEuMzMtLjEzLjAzLS40OC4xLS40OC4yOCAwIC42NCAxLjgyLS4xOSAxLjgyIDEuOTN2OC4wN2MwIDEuMjUtMS4yOSAxLjEyLTEuMjkgMS43NyAwIC4xOC4wOC4yNy4yOC4yNy4xNyAwIC42My0uMTIgMi4zMi0uMTIgMS40MSAwIDIuMDIuMTIgMi4zNy4xMi4yOCAwIC40MS0uMDYuNDEtLjM0IDAtLjk4LTIuMjUuNDgtMi4yNS0yLjM0di02Ljg4YzAtLjQuNi0xLjggMS42NC0xLjguOTEgMCAxLjAyLjcgMS41LjcuMyAwIC45MS0uOTEuOTEtMS4zOC0uMDEtLjU4LTEuMTYtMS4zNy0xLjY4LTEuMzd6bTMyLjU1LjFjLS4yNyAwLS45Ni4wNC0xLjU5LjA0LS43NiAwLTEuMTMtLjA5LTEuNDUtLjA5LS40OCAwLS45NiAwLS44Ny4zMi4xLjM2IDEuNzMuMjMgMS43MyAyLjAxIDAgLjIzIDAgLjUyLS4zMyAxLjcxbC0yLjA4IDYuNjMtMi45LTguMTVzLS4xNC0uMjYtLjE0LS43OWMwLTEuMzIgMS41NC0xLjE3IDEuNi0xLjQxLjA1LS4xOS0uMjEtLjQtLjYyLS40aC0zLjYzYy0uMDIgMC0uMDMuMDEtLjA1LjAxaC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjIuNzYuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zMyAzLjI4LTEuOCAwLS4yNy0uMDQtLjI5LS4xOC0uMjctLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTAuN3MyLjUtLjAxIDMuMjEtLjAxYy4wNC4wNi4wOC4xMy4xLjE5bDIuOTkgOC40NWMuMjQuNjkuMzkuOTIuNjggMi4xNC4xOS43OS4xMiAxLjUxLjEyIDEuNTEtLjI5IDEuMjctMS4wNyAxLjk5LTIuMjYgNC4zNC0uMTIuMjIgMS43MS0uMDIgMS44MS0uMDUuMTUtLjA1LjEzLS4wOS4zMS0uNDJsMS4zMi0zLjkzIDMuNjktMTEuMzRjLjU0LTEuOTggMS4zOS0xLjYyIDEuNTMtMS44OS4xMi0uMTMgMC0uMy0uMzMtLjN6XFxcIj5cXHJcXG4gICAgICA8L3BhdGg+XFxyXFxuICAgICAgPHBhdGhcXHJcXG4gICAgICAgIGQ9XFxcIk0yMjIuMjIgMjIuNzZsLS4wNy4xOVYyM2wuMDctLjI0em0tMTQuNzQtMTQuNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTIxMC4xMSAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXpNMTY2LjUyIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc3IDEuNTcgMS4wNyAxLjU3ek0xNjkuMTcgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNGgtLjE3Yy0uNTQtLjEtMS4wNi0uMzItMS4wNS0xLjc5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4wNCAwIC4wOS0uMDEuMTMtLjAxLjExIDAgLjIxLjAxLjM0LjAxLjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zNC4wMi43NS0uNzguMDgtLjY3em0zMi43Mi02Ljg5Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42Mi0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjQ3LS40Mi0yLjM4LTIuMzgtMy42elxcXCI+XFxyXFxuICAgICAgPC9wYXRoPlxcclxcbiAgICA8L2c+XFxyXFxuICA8L3N2Zz5cXHJcXG48L2Rpdj5cXHJcXG48aGVhZGVyIHJvbGU9XFxcImJhbm5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8YSBjbGFzcz1cXFwic2l0ZS10aXRsZVxcXCIgaHJlZj1cXFwiZmlsZXMvaW5kZXguaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2w8L2E+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgaWQ9XFxcIm1haW4tbWVudS1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhclxcXCI+XFxyXFxuICAgICAgICA8YSBpZD1cXFwiYWJvdXRcXFwiIGhyZWY9XFxcImZpbGVzL2Fib3V0Lmh0bWxcXFwiPkFib3V0PC9hPlxcclxcbiAgICAgICAgPGEgaWQ9XFxcInN0YWZmXFxcIiBocmVmPVxcXCJmaWxlcy9zdGFmZi5odG1sXFxcIj5TdGFmZjwvYT5cXHJcXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtaGFuZGJvb2tcXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9oYW5kYm9vay5odG1sXFxcIj5QYXJlbnQgSGFuZGJvb2s8L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+IC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiY2xhc3Nyb29tc1xcXCIgaHJlZj1cXFwiZmlsZXMvY2xhc3Nyb29tcy5odG1sXFxcIj5DbGFzc3Jvb21zXFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcImN1cnJpY3VsdW0tb3ZlcnZpZXdcXFwiIGhyZWY9XFxcImZpbGVzL2N1cnJpY3VsdW1fb3ZlcnZpZXcuaHRtbFxcXCI+Q3VycmljdWx1bSBPdmVydmlldzwvYT5cXHJcXG4gICAgICAgICAgICA8IS0tIDxhIGlkPVxcXCJ0ZWRkeS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvdGVkZHlfYmVhcnMuaHRtbFxcXCI+VGVkZHkgQmVhcnM8L2E+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhbmRhLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9wYW5kYV9iZWFycy5odG1sXFxcIj5QYW5kYSBCZWFyczwvYT5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmVhci1jdWJzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX2N1YnMuaHRtbFxcXCI+QmVhciBDdWJzPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiaWctYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL2JpZ19iZWFycy5odG1sXFxcIj5CaWcgQmVhcnM8L2E+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInN1bi1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvc3VuX2JlYXJzLmh0bWxcXFwiPlN1biBCZWFyczwvYT4gLS0+XFxyXFxuICAgICAgICAgICAgPCEtLSA8YSBpZD1cXFwiYmVhci10cmFja3NcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfdHJhY2tzLmh0bWxcXFwiPkJlYXIgVHJhY2tzPC9hPiAtLT5cXHJcXG4gICAgICAgICAgICA8IS0tIDxhIGlkPVxcXCJlbnJpY2htZW50LXByb2dyYW1cXFwiIGhyZWY9XFxcImZpbGVzL2VucmljaG1lbnRfcHJvZ3JhbXMuaHRtbFxcXCI+RW5yaWNobWVudCBQcm9ncmFtPC9hPiAtLT5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxhIGlkPVxcXCJjYWxlbmRhclxcXCIgaHJlZj1cXFwiZmlsZXMvY2FsZW5kYXIuaHRtbFxcXCI+Q2FsZW5kYXI8L2E+XFxyXFxuICAgICAgICA8YSBpZD1cXFwic3VtbWVyLWNhbXBcXFwiIGhyZWY9XFxcImZpbGVzL3N1bW1lcl9jYW1wLmh0bWxcXFwiPlN1bW1lciBDYW1wPC9hPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiYWRtaXNzaW9ucy1lbnJvbGxtZW50XFxcIiBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5BZG1pc3Npb25zICZhbXA7IEVucm9sbG1lbnQ8L2E+XFxyXFxuICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiYXBwbHlcXFwiIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPkFwcGx5PC9hPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJmb3Jtc1xcXCIgaHJlZj1cXFwiZmlsZXMvZm9ybXMuaHRtbFxcXCI+QWNjZXB0ZWQgU3R1ZGVudHM8L2E+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInR1aXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3R1aXRpb24uaHRtbFxcXCI+VHVpdGlvbjwvYT5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcImdldC1pbnZvbHZlZFxcXCIgaHJlZj1cXFwiZmlsZXMvZ2V0X2ludm9sdmVkLmh0bWxcXFwiPkdldCBJbnZvbHZlZDwvYT5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJudXJzZXJ5LXNjaG9vbC1tZXJjaGFuZGlzZVxcXCIgaHJlZj1cXFwiZmlsZXMvbnVyc2VyeV9zY2hvb2xfbWVyY2hhbmRpc2UuaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2xcXHJcXG4gICAgICAgICAgICAgIE1lcmNoYW5kaXNlPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtYXNzb2NpYXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9hc3NvY2lhdGlvbi5odG1sXFxcIj5QYXJlbnQgQXNzb2NpYXRpb248L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YSBpZD1cXFwicGFyZW50LXJlc291cmNlc1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X3Jlc291cmNlcy5odG1sXFxcIj5QYXJlbnQgUmVzb3VyY2VzPC9hPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvaGVhZGVyPlwiO1xuIiwiaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJy4uL2NvcmUvcm91dGVyL2hpc3RvcnknO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jb3JlL3JvdXRlci9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvSUQoKSB7XHJcbiAgICAvLyBTY3JvbGwgdG8gYSBzcGVjaWZpYyBzdGFmZiBtZW1iZXJcclxuICAgIGxldCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Nyb2xsVG9JRFwiKTtcclxuICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzY3JvbGxUb0lEXCIpO1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiBcInN0YXJ0XCIsIGlubGluZTogXCJuZWFyZXN0XCJ9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE1ha2UgbGlua3Mgd2l0aCBzdGFmZi1yZWRpcmVjdCBjbGFzcyByZW1lbWJlciB3aGF0IHN0YWZmIG1lbWJlciB0byByZWRpcmVjdCB0b1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImEuc3RhZmYtcmVkaXJlY3RcIik7XHJcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gbGluay5kYXRhc2V0LnNjcm9sbHRvO1xyXG4gICAgICAgIGlmICghdGFyZ2V0SWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjcm9sbFRvSURcIiwgdGFyZ2V0SWQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxufSIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9kb2N1bWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNsaWRlc2hvdyB7XHJcbiAgcHVibGljIHN0YXRpYyBzZXR1cEFsbCgpIHtcclxuICAgIFNsaWRlc2hvdy5kaXNjYXJkQWxsKCk7XHJcbiAgICBjb25zdCBzbGlkZXNob3dzID0gRC5jbGF6KFwic2xpZGVzaG93XCIpO1xyXG4gICAgZm9yIChsZXQgc3NJbmRleCA9IDA7IHNzSW5kZXggPCBzbGlkZXNob3dzLmxlbmd0aDsgKytzc0luZGV4KSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSBzbGlkZXNob3dzLml0ZW0oc3NJbmRleCk7XHJcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBTbGlkZXNob3cuc2xpZGVzaG93cy5wdXNoKG5ldyBTbGlkZXNob3coZWxlbSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xyXG4gICAgU2xpZGVzaG93LnNsaWRlc2hvd3MgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHNsaWRlc2hvd3M6IFNsaWRlc2hvd1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgc2xpZGVJbmRleCA9IDA7XHJcbiAgcHJpdmF0ZSBzbGlkZUNvdW50ID0gMDtcclxuICBwcml2YXRlIHNsaWRlczogRWxlbWVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBkb3RzOiBFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xyXG4gICAgRC5lYWNoUmVjdXIodGhpcy5vdXRlciwgKGVsZW0pID0+IHtcclxuICAgICAgY29uc3QgY0xpc3QgPSBlbGVtLmNsYXNzTGlzdDtcclxuICAgICAgaWYgKGNMaXN0LmNvbnRhaW5zKFwicHJldi1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5taW51c1NsaWRlKDEpKTtcclxuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcIm5leHQtc2xpZGVzaG93LWJ1dHRvblwiKSkge1xyXG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMucGx1c1NsaWRlKDEpKTtcclxuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1lbnRyeVwiKSkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVzLnB1c2goZWxlbSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZG90XCIpKSB7XHJcbiAgICAgICAgdGhpcy5kb3RzLnB1c2goZWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgRC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZG90c1tpXSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dTbGlkZShpKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNsaWRlQ291bnQgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XHJcbiAgICB0aGlzLnNob3dTbGlkZSh0aGlzLnNsaWRlSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsdXNTbGlkZShuOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggKz0gbikpO1xyXG4gIH1cclxuICBwdWJsaWMgbWludXNTbGlkZShuOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggLT0gbikpO1xyXG4gIH1cclxuICBwdWJsaWMgc2hvd1NsaWRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2xpZGVJbmRleCA9IGluZGV4ICUgdGhpcy5zbGlkZUNvdW50O1xyXG4gICAgdGhpcy5zbGlkZUluZGV4ID0gTWF0aC5tYXgodGhpcy5zbGlkZUluZGV4LCAtMSAqIHRoaXMuc2xpZGVJbmRleCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICh0aGlzLnNsaWRlc1tpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5kb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICAodGhpcy5zbGlkZXNbdGhpcy5zbGlkZUluZGV4XSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHRoaXMuZG90c1t0aGlzLnNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL2NvcmUvdXRpbHMvcV9wYXJhbXMnO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2RhdGEnO1xyXG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2V2ZW50JztcclxuaW1wb3J0IHsgRCB9IGZyb20gJy4vLi4vY29yZS9kb20vZG9jdW1lbnQnO1xyXG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vLi4vY29yZS9kb20vZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tICcuLy4uL2NvcmUvZG9tL3Njcm9sbCc7XHJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICcuLy4uL2NvcmUvcm91dGVyL2hpc3RvcnknO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJy4vLi4vY29yZS9yb3V0ZXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJy4vLi4vY29yZS90cmFja2VyL3RyYWNrZXInO1xyXG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSB9IGZyb20gJy4vLi4vY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXInO1xyXG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcclxuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yJztcclxuaW1wb3J0IHsgd2FpdFVudGlsUmVhZHkgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvcmVhZHknO1xyXG5pbXBvcnQgeyBzY2VuYXJpb3MsIFNjZW5hcmlvIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL3NjZW5hcmlvcyc7XHJcblxyXG5jb25zdCBzZXR1cCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XHJcbiAgICBjb25zdCBzY2VuYXJpbyA9IHNjZW5hcmlvcy5maW5kKChzY2VuKSA9PiBzY2VuLnRhZyA9PT0gcGFyYW1zLnRhZyk7XHJcbiAgICBpZiAoIXBhcmFtcy5zYW5kYm94KSB7XHJcbiAgICAgICAgaWYgKHNjZW5hcmlvID09PSBudWxsIHx8IHNjZW5hcmlvID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVHJhY2tlci5sb2FkU2NlbmFyaW8oc2NlbmFyaW8gYXMgU2NlbmFyaW8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFRyYWNrZXIuc3RhcnQoe1xyXG4gICAgICAgIGtleVByZWZpeDogJ2luZm9ybWF0aW9uLWZvcmFnaW5nJyxcclxuICAgICAgICBidWNrZXROYW1lOiAnY3NlLTI1Ni1sb2cnLFxyXG4gICAgICAgIGFsbG93U3VibWlzc2lvbjoge1xyXG4gICAgICAgICAgICBhbGxvdygpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBELmlkKCd0ZXh0LWFyZWEnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEFyZWEudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnWW91IG11c3QgZmlsbCBvdXQgdGhlIHRleHQgYm94IHRvIHR1cm4gdGhpcyBISVQgaW4uJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RoZXJlIHdhcyBhbiBlcnJvciBmaWxsIG91dCB0aGUgZm9ybSBhbmQgdHJ5IGFnYWluLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZVN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5yZXNwb25zZSA9IChELmlkKFxyXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWFyZWEnXHJcbiAgICAgICAgICAgICAgICApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtLk5PTkUsXHJcblxyXG4gICAgICAgIGFzeW5jIHNldHVwKCkge1xyXG4gICAgICAgICAgICAvLyBjb25maWd1cmUgcm91dGVyXHJcbiAgICAgICAgICAgIFJvdXRlci5kZWZhdWx0QWxsb3dhbmNlc09uKCk7XHJcbiAgICAgICAgICAgIFJvdXRlci5jb25maWd1cmUoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLkEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG1vZGU6IFJvdXRlck1vZGUuT0ZGLCBtb2R1bGU6IFJvdXRlck1vZHVsZS5GT1JNIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLklNRyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICdmaWxlcy8nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIEhpc3Rvcnkuc2V0dXAod2luZG93LmxvY2F0aW9uLmhyZWYsIHsgd3JhcHBlcjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgLy8gY29uZmlndXJlIGh0bWwgbG9hZGVyIHBvc3Qgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgIEhUTUxMb2FkZXIuZmluaXNoKCk7XHJcbiAgICAgICAgICAgIEhUTUxMb2FkZXIucmVnaXN0ZXJQb3N0TG9hZEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgSURHZW5lcmF0b3IucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIElER2VuZXJhdG9yLmF0dGFjaElkc1RvQWxsRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5zZXR1cChFbGVtZW50cy5odG1sTG9jKTtcclxuICAgICAgICAgICAgICAgIFNjcm9sbC5wcm9taXNlKDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uZmlndXJlIGxpc3RlbmVycyBvbiBodG1sIGxvY1xyXG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuaHRtbExvYywgQWN0aW9uRW51bS5DTElDSywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gZSBhcyBNb3VzZUV2ZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGV2LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogZXYuY2xpZW50WSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLkNMSUNLKShvYmopO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRvY3VtZW50LCAna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXYgPSBlIGFzIEtleWJvYXJkRXZlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBldi5rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IChldi5zcmNFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQlVUVE9OKShvYmopO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gU1BFQ0lBTCBDQVNFOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgZG9lcyBub3QgYmVoYXZlIHRoZSBzYW1lIHdheSBhcyBkb2N1bWVudCBzbyB0aGUgYmVsb3cgZnVuY3Rpb24gbXVzdCBiZWhhdmUgZGlmZmVyZW50bHkgdGhhbiB0aGUgbGlzdGVuZXJzIGFib3ZlLlxyXG4gICAgICAgICAgICBjb25zdCBzRWxlbSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgYXMgRWxlbWVudDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gc0VsZW0uc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc0VsZW0uc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueCAtIGR4KSA+IDEwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy55IC0gZHkpID4gMTAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHRpbWUgLSBUcmFja2VyLmxhc3RQb3MudGltZSA+IDEwMClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy54ID0gZHg7XHJcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnkgPSBkeTtcclxuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MudGltZSA9IGR0aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHsgeDogZHgsIHk6IGR5IH07XHJcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLlNDUk9MTCkob2JqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VkIGV2ZW50c1xyXG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5ISVNUT1JZKTtcclxuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQlVUVE9OKTtcclxuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQ0xJQ0spO1xyXG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5TQ1JPTEwpO1xyXG4gICAgICAgICAgICAvLyBsb2FkIGZpcnN0IHBhZ2VcclxuICAgICAgICAgICAgYXdhaXQgUm91dGVyLmxvYWQoJ2ZpbGVzL2luZGV4Lmh0bWwnKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5zZXR1cCgpO1xyXG4iXX0=
