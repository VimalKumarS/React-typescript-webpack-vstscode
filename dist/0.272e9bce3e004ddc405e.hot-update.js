webpackHotUpdate(0,{

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(65); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	var _index = __webpack_require__(68);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(74);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(65);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(75);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	    ListContainer: {
	        displayName: "ListContainer"
	    }
	};
	
	var _CDexterJSPracticeReactReduxReactReduxReactReduxNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	    filename: "C:/Dexter/JS-Practice/ReactRedux/ReactRedux/ReactRedux/src/fluxex/component/ListContainer.tsx",
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	var _CDexterJSPracticeReactReduxReactReduxReactReduxNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	    filename: "C:/Dexter/JS-Practice/ReactRedux/ReactRedux/ReactRedux/src/fluxex/component/ListContainer.tsx",
	    components: _components,
	    locals: [],
	    imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _CDexterJSPracticeReactReduxReactReduxReactReduxNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_CDexterJSPracticeReactReduxReactReduxReactReduxNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	    };
	}
	
	var React = __webpack_require__(65);
	var todoStore_1 = __webpack_require__(224);
	var todoActions_1 = __webpack_require__(234);
	var AddItem_1 = __webpack_require__(235);
	var List_1 = __webpack_require__(236);
	
	var ListContainer = _wrapComponent("ListContainer")(function (_React$Component) {
	    _inherits(ListContainer, _React$Component);
	
	    function ListContainer(props) {
	        _classCallCheck(this, ListContainer);
	
	        var _this = _possibleConstructorReturn(this, (ListContainer.__proto__ || Object.getPrototypeOf(ListContainer)).call(this, props));
	
	        _this.state = { list: todoStore_1.todoStore.getList() };
	        _this.todoaction = new todoActions_1.TodoActions();
	        _this.handleAddItem = _this.handleAddItem.bind(_this);
	        _this.handleRemoveItem = _this.handleRemoveItem.bind(_this);
	        return _this;
	    }
	
	    _createClass(ListContainer, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            todoStore_1.todoStore.addChangeListener(this._onChange);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            todoStore_1.todoStore.removeChangeListener(this._onChange);
	        }
	    }, {
	        key: "_onChange",
	        value: function _onChange() {
	            this.setState({
	                list: todoStore_1.todoStore.getList()
	            });
	        }
	    }, {
	        key: "handleAddItem",
	        value: function handleAddItem(newItem) {
	            this.todoaction.addItem(newItem);
	        }
	    }, {
	        key: "handleRemoveItem",
	        value: function handleRemoveItem(index) {
	            this.todoaction.removeItem(index);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement("div", { className: "col-sm-6 col-md-offset-3" }, React.createElement("div", { className: "col-sm-12" }, React.createElement("h3", { className: "text-center" }, " Todo List "), React.createElement(AddItem_1.AddItem, { add: this.handleAddItem }), React.createElement(List_1.List, { items: this.state.list, remove: this.handleRemoveItem })));
	        }
	    }]);
	
	    return ListContainer;
	}(React.Component));
	
	exports.ListContainer = ListContainer;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(226); if (makeExportsHot(module, __webpack_require__(65))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ListContainer.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

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
	    var action = payload.actionType;
	    switch (action) {
	        case appConstants_1.appConstants.ADD_ITEM:
	            addItem(payload.data);
	            todoStore.emitChange(CHANGE_EVENT);
	            break;
	        case appConstants_1.appConstants.REMOVE_ITEM:
	            removeItem(payload.data);
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

/***/ }

})
//# sourceMappingURL=0.272e9bce3e004ddc405e.hot-update.js.map