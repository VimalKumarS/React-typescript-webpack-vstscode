webpackHotUpdate(0,{

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(65); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var appConstants_1 = __webpack_require__(225);
	var AppDispatcher_1 = __webpack_require__(229);
	var events_1 = __webpack_require__(233);
	var CHANGE_EVENT = 'change';
	AppDispatcher_1.dispatcher.register(function (payload) {
	    var action = payload.action;
	    switch (action.actionType) {
	        case appConstants_1.appConstants.ADD_ITEM:
	            addItem(action.data);
	            todoStore.emitChange(CHANGE_EVENT);
	            break;
	        case appConstants_1.appConstants.REMOVE_ITEM:
	            removeItem(action.data);
	            todoStore.emitChange(CHANGE_EVENT);
	            break;
	        default:
	    }
	});
	var _store = {
	    list: []
	};
	var addItem = function addItem(item) {
	    _store.list.push(item);
	};
	var removeItem = function removeItem(index) {
	    _store.list.splice(index, 1);
	};
	
	var TodoStoreStatic = function (_events_1$EventEmitte) {
	    _inherits(TodoStoreStatic, _events_1$EventEmitte);
	
	    function TodoStoreStatic() {
	        _classCallCheck(this, TodoStoreStatic);
	
	        return _possibleConstructorReturn(this, (TodoStoreStatic.__proto__ || Object.getPrototypeOf(TodoStoreStatic)).apply(this, arguments));
	    }
	
	    _createClass(TodoStoreStatic, [{
	        key: "addChangeListener",
	        value: function addChangeListener(cb) {
	            this.on(CHANGE_EVENT, cb);
	        }
	    }, {
	        key: "removeChangeListener",
	        value: function removeChangeListener(cb) {
	            this.removeListener(CHANGE_EVENT, cb);
	        }
	    }, {
	        key: "emitChange",
	        value: function emitChange(ce) {
	            this.emit(ce);
	        }
	    }, {
	        key: "getList",
	        value: function getList() {
	            return _store.list;
	        }
	    }]);
	
	    return TodoStoreStatic;
	}(events_1.EventEmitter);
	
	var todoStore = new TodoStoreStatic();
	exports.todoStore = todoStore;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(226); if (makeExportsHot(module, __webpack_require__(65))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "todoStore.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(65); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	var flux_1 = __webpack_require__(230);
	var dispatcher = new flux_1.Dispatcher();
	exports.dispatcher = dispatcher;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(226); if (makeExportsHot(module, __webpack_require__(65))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "AppDispatcher.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(65); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var appConstants_1 = __webpack_require__(225);
	var AppDispatcher_1 = __webpack_require__(229);
	
	var TodoActions = function () {
	    function TodoActions() {
	        _classCallCheck(this, TodoActions);
	    }
	
	    _createClass(TodoActions, [{
	        key: "addItem",
	        value: function addItem(item) {
	            AppDispatcher_1.dispatcher.dispatch({ actionType: appConstants_1.appConstants.ADD_ITEM, data: item });
	        }
	    }, {
	        key: "removeItem",
	        value: function removeItem(index) {
	            AppDispatcher_1.dispatcher.dispatch({ actionType: appConstants_1.appConstants.REMOVE_ITEM, data: index });
	        }
	    }]);
	
	    return TodoActions;
	}();
	
	exports.TodoActions = TodoActions;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(226); if (makeExportsHot(module, __webpack_require__(65))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "todoActions.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=0.31080dc224a2d25a1674.hot-update.js.map