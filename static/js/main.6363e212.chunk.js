(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__VPBD0",ImageGalleryItem_Image:"ImageGalleryItem_ImageGalleryItem_Image__21CFG"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__33Ypd",Modal:"Modal_Modal__3ihEg"}},23:function(e,t,a){e.exports={App:"App_App__16ZpL"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1hnjP"}},25:function(e,t,a){e.exports={Button:"Button_Button__HOrbw"}},27:function(e,t,a){e.exports={Spinner:"Loader_Spinner__3OrXC"}},32:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),l=(a(32),a(14)),s=a(4),i=a(5),u=a(7),m=a(6),h=a(8),g=a.n(h),p=a(0),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({query:a})},e.handleSubmit=function(t){var a=e.props.onSubmit,n=e.state.query;t.preventDefault(),a(n),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(p.jsx)("header",{className:g.a.Searchbar,children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.SearchForm,children:[Object(p.jsx)("button",{type:"submit",className:g.a.SearchForm_Button,children:Object(p.jsx)("span",{className:g.a.SearchForm_Button_Label,children:"Search"})}),Object(p.jsx)("input",{onChange:this.handleChange,value:e,className:g.a.SearchForm_Input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),b=a(11),j=a.n(b);j.a.defaults.baseURL="https://pixabay.com/api/";var f=function(e){var t=e.query,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n;return j.a.get("?q=".concat(a,"&page=").concat(r,"&key=").concat("18623551-685e1819373a3e2d77873e072","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},y=a(23),_=a.n(y),v=a(24),O=a.n(v),S=a(12),I=a.n(S),x=function(e){var t=e.webformatURL,a=e.toggleModal,n=e.largeImageURL;return Object(p.jsx)("li",{onClick:function(){return a(n)},className:I.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:t,alt:"",className:I.a.ImageGalleryItem_Image})})},w=function(e){var t=e.imgs,a=e.toggleModal;return Object(p.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(p.jsx)(x,{webformatURL:n,largeImageURL:r,toggleModal:a},t)}))})},L=a(25),C=a.n(L),M=function(e){var t=e.fetchImgs;return Object(p.jsx)("button",{className:C.a.Button,type:"button",onClick:t,children:"Load more"})},k=a(26),q=a.n(k),F=(a(72),a(27)),G=a.n(F),B=function(){return Object(p.jsx)(q.a,{className:G.a.Spinner,type:"BallTriangle",color:"#3f51b5",height:80,width:80})},N=a(13),U=a.n(N),R=document.querySelector("#modal-root"),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClose=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImg;return Object(o.createPortal)(Object(p.jsx)("div",{onClick:this.handleOverlayClose,className:U.a.Overlay,children:Object(p.jsx)("div",{className:U.a.Modal,children:Object(p.jsx)("img",{src:e,alt:""})})}),R)}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgs:[],query:"",page:1,isLoading:!1,error:null,openModal:!1,largeImageURL:""},e.onChangeQuery=function(t){e.setState({query:t,page:1,imgs:[],error:null})},e.fetchImgs=function(){var t=e.state,a=t.query,n=t.page,r={query:a,page:n};e.setState({isLoading:!0}),f(r).then((function(t){e.setState((function(e){return{imgs:[].concat(Object(l.a)(e.imgs),Object(l.a)(t)),page:e.page+1}})),n>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(t){e.setState((function(e){return{openModal:!e.openModal,largeImageURL:t}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImgs()}},{key:"render",value:function(){var e=this.state,t=e.imgs,a=e.isLoading,n=e.error,r=e.openModal,o=e.largeImageURL,c=t.length>0&&!a;return Object(p.jsxs)("div",{className:_.a.App,children:[r&&Object(p.jsx)(A,{onClose:this.toggleModal,largeImg:o}),Object(p.jsx)(d,{onSubmit:this.onChangeQuery}),Object(p.jsx)(w,{imgs:t,toggleModal:this.toggleModal}),c&&Object(p.jsx)(M,{fetchImgs:this.fetchImgs}),a&&Object(p.jsx)(B,{}),n&&Object(p.jsx)("h1",{children:"Something went wrong...Try again!"})]})}}]),a}(n.Component);a(73);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3YYEG",SearchForm:"Searchbar_SearchForm__1hX1-",SearchForm_Button:"Searchbar_SearchForm_Button__3npms",SearchForm_Button_Label:"Searchbar_SearchForm_Button_Label__806cZ",SearchForm_Input:"Searchbar_SearchForm_Input__34sEA"}}},[[74,1,2]]]);
//# sourceMappingURL=main.6363e212.chunk.js.map