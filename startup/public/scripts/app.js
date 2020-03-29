'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*function MyView(){
     return <div>
         <p>Hello World</p>
     </div>
     }
 };*/

function funcc(num) {
    return React.createElement(
        'li',
        null,
        num
    );
}

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'doThiss',
        value: function doThiss() {
            return console.log(this.props.title);
        }
    }, {
        key: 'render',
        value: function render() {
            function doThisss() {}
            var func = function func(num) {
                return React.createElement(
                    'p',
                    { key: num },
                    num
                );
            };
            return React.createElement(
                'div',
                null,
                this.props.title.map(func),
                React.createElement(
                    'button',
                    { onClick: doThisss },
                    'Add One'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Footer = function (_React$Component2) {
    _inherits(Footer, _React$Component2);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'doThiss',
        value: function doThiss() {
            return console.log('now');
        }
    }, {
        key: 'render',
        value: function render() {
            /*  let doThis = () =>{
                   return console.log('now')
                }*/
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'learn my brother'
                ),
                React.createElement(
                    'button',
                    { onClick: this.doThiss },
                    'Submit it Now'
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var datas = {
    document: 'A Detailed File',
    title: 'organized',
    act: 'player'
};

var Viw = function (_React$Component3) {
    _inherits(Viw, _React$Component3);

    function Viw() {
        _classCallCheck(this, Viw);

        return _possibleConstructorReturn(this, (Viw.__proto__ || Object.getPrototypeOf(Viw)).apply(this, arguments));
    }

    _createClass(Viw, [{
        key: 'render',
        value: function render() {
            var data = {
                document: 'A Detailed File',
                title: 'organized',
                act: 'player',
                option: [1, 2, 3, 4, 5, 6]
            };
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: data.option }),
                React.createElement(Footer, null)
            );
        }
    }]);

    return Viw;
}(React.Component);

var appRoots = document.getElementById('app2');
var appRoot = document.getElementById('app');

//ReactDOM.render(mytry, appRoots);
ReactDOM.render(React.createElement(Viw, null), appRoot);

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
