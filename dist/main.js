/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Example from \"./scripts/example\";\nconst width = 800;\nconst height = 600;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Hello World!\");\n  const canvas = document.getElementById(\"game-canvas\");\n  window.canvas = canvas;\n  canvas.width = width;\n  canvas.height = height;\n  canvas.style.border = \"2px solid black\";\n  const ctx = canvas.getContext(\"2d\");\n\n  // background image\n  const bg = new Image();\n  bg.onload = () => {\n    ctx.drawImage(bg, 0, 0, width, height);\n  };\n  bg.src = \"src/assets/bg_1.png\";\n  window.bg = bg;\n\n  // character sprite sheet\n  const cat = new Image();\n  const cat_dim = 32;\n  const cat_size = cat_dim * 1.5;\n  // cat.src = \"src/assets/cat_sheet.png\";\n  cat.src = \"src/assets/cat.png\";\n  cat.onload = () => {\n    ctx.drawImage(cat, 0, 0, cat_dim, cat_dim, 0, 500, cat_size, cat_size);\n  };\n});\n\n/*\nSome questions:\n    do we have to check img.onload()? is there a different way? probs not tbh\n    check to see if requestanimationframe is okay -> it should be since it's under canvas\n\nREMINDER:\n    ANIMATION IS NOT THE PRIORITY!!!\n    GET OTHER STUFF DONE FIRSTTT!!!\n\nSome immediate to-do's\n    - separate logic for character into it's own class\n    - can also separate background's logic into it's own class\n    - feel free to do this AFTER it starts working\n\nA little less immediate to-do's\n    - make some damn platforms\n    - just pick whatever, even if it's ugly, for now\n    - you can hardcode the positions + they don't move\n    - probably the same for the collectable items\n\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJ3aWR0aCIsImhlaWdodCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsInN0eWxlIiwiYm9yZGVyIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJnIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzcmMiLCJjYXQiLCJjYXRfZGltIiwiY2F0X3NpemUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmNvbnN0IHdpZHRoID0gODAwO1xuY29uc3QgaGVpZ2h0ID0gNjAwO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICB3aW5kb3cuY2FudmFzID0gY2FudmFzO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2FudmFzLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIGJhY2tncm91bmQgaW1hZ2VcbiAgICBjb25zdCBiZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJnLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShiZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbiAgICBiZy5zcmMgPSBcInNyYy9hc3NldHMvYmdfMS5wbmdcIjtcbiAgICB3aW5kb3cuYmcgPSBiZztcblxuXG4gICAgLy8gY2hhcmFjdGVyIHNwcml0ZSBzaGVldFxuICAgIGNvbnN0IGNhdCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGNhdF9kaW0gPSAzMjtcbiAgICBjb25zdCBjYXRfc2l6ZSA9IGNhdF9kaW0gKiAxLjU7XG4gICAgLy8gY2F0LnNyYyA9IFwic3JjL2Fzc2V0cy9jYXRfc2hlZXQucG5nXCI7XG4gICAgY2F0LnNyYyA9IFwic3JjL2Fzc2V0cy9jYXQucG5nXCI7XG5cbiAgICBjYXQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGNhdCwgMCwgMCwgY2F0X2RpbSwgY2F0X2RpbSwgMCwgNTAwLCBjYXRfc2l6ZSwgY2F0X3NpemUpO1xuICAgIH07XG5cblxufSk7XG5cblxuLypcblNvbWUgcXVlc3Rpb25zOlxuICAgIGRvIHdlIGhhdmUgdG8gY2hlY2sgaW1nLm9ubG9hZCgpPyBpcyB0aGVyZSBhIGRpZmZlcmVudCB3YXk/IHByb2JzIG5vdCB0YmhcbiAgICBjaGVjayB0byBzZWUgaWYgcmVxdWVzdGFuaW1hdGlvbmZyYW1lIGlzIG9rYXkgLT4gaXQgc2hvdWxkIGJlIHNpbmNlIGl0J3MgdW5kZXIgY2FudmFzXG5cblJFTUlOREVSOlxuICAgIEFOSU1BVElPTiBJUyBOT1QgVEhFIFBSSU9SSVRZISEhXG4gICAgR0VUIE9USEVSIFNUVUZGIERPTkUgRklSU1RUVCEhIVxuXG5Tb21lIGltbWVkaWF0ZSB0by1kbydzXG4gICAgLSBzZXBhcmF0ZSBsb2dpYyBmb3IgY2hhcmFjdGVyIGludG8gaXQncyBvd24gY2xhc3NcbiAgICAtIGNhbiBhbHNvIHNlcGFyYXRlIGJhY2tncm91bmQncyBsb2dpYyBpbnRvIGl0J3Mgb3duIGNsYXNzXG4gICAgLSBmZWVsIGZyZWUgdG8gZG8gdGhpcyBBRlRFUiBpdCBzdGFydHMgd29ya2luZ1xuXG5BIGxpdHRsZSBsZXNzIGltbWVkaWF0ZSB0by1kbydzXG4gICAgLSBtYWtlIHNvbWUgZGFtbiBwbGF0Zm9ybXNcbiAgICAtIGp1c3QgcGljayB3aGF0ZXZlciwgZXZlbiBpZiBpdCdzIHVnbHksIGZvciBub3dcbiAgICAtIHlvdSBjYW4gaGFyZGNvZGUgdGhlIHBvc2l0aW9ucyArIHRoZXkgZG9uJ3QgbW92ZVxuICAgIC0gcHJvYmFibHkgdGhlIHNhbWUgZm9yIHRoZSBjb2xsZWN0YWJsZSBpdGVtc1xuXG4qLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLLEdBQUcsR0FBRztBQUNqQixNQUFNQyxNQUFNLEdBQUcsR0FBRztBQUVsQkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDM0IsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDckRDLE1BQU0sQ0FBQ0YsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCQSxNQUFNLENBQUNOLEtBQUssR0FBR0EsS0FBSztFQUNwQk0sTUFBTSxDQUFDTCxNQUFNLEdBQUdBLE1BQU07RUFDdEJLLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxNQUFNLEdBQUcsaUJBQWlCO0VBQ3ZDLE1BQU1DLEdBQUcsR0FBR0wsTUFBTSxDQUFDTSxVQUFVLENBQUMsSUFBSSxDQUFDOztFQUVuQztFQUNBLE1BQU1DLEVBQUUsR0FBRyxJQUFJQyxLQUFLLEVBQUU7RUFDdEJELEVBQUUsQ0FBQ0UsTUFBTSxHQUFHLE1BQU07SUFDZEosR0FBRyxDQUFDSyxTQUFTLENBQUNILEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFYixLQUFLLEVBQUVDLE1BQU0sQ0FBQztFQUMxQyxDQUFDO0VBQ0RZLEVBQUUsQ0FBQ0ksR0FBRyxHQUFHLHFCQUFxQjtFQUM5QlQsTUFBTSxDQUFDSyxFQUFFLEdBQUdBLEVBQUU7O0VBR2Q7RUFDQSxNQUFNSyxHQUFHLEdBQUcsSUFBSUosS0FBSyxFQUFFO0VBQ3ZCLE1BQU1LLE9BQU8sR0FBRyxFQUFFO0VBQ2xCLE1BQU1DLFFBQVEsR0FBR0QsT0FBTyxHQUFHLEdBQUc7RUFDOUI7RUFDQUQsR0FBRyxDQUFDRCxHQUFHLEdBQUcsb0JBQW9CO0VBRTlCQyxHQUFHLENBQUNILE1BQU0sR0FBRyxNQUFNO0lBQ2ZKLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRUMsT0FBTyxFQUFFQSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRUMsUUFBUSxFQUFFQSxRQUFRLENBQUM7RUFDMUUsQ0FBQztBQUdMLENBQUMsQ0FBQzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;