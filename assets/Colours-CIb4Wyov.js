import{j as o}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as i}from"./index-DSz_1G2r.js";import"./index-CBqU2yxZ.js";import{u as c}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{g as l,a as m,c as d}from"./polished.esm-CW-cxXBJ.js";import{R as h}from"./RedbackUiThemeProvider-CI6FpJXa.js";import{t as u}from"./index-CWVQgxeo.js";import{A as g}from"./Alert-CkOVO3-e.js";import"./Button-CL61a4B0.js";import"./Label-DilwbW6F.js";import"./LinkButton-su_FFISr.js";import"./Table-Be6O95aW.js";import"./TruncatedText-1Xq2JJo_.js";import"./Modal-DNLLfeiS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./smartrack-C9kahsyy.js";import"./Button.style-DXkfDKIy.js";const p=c.div`
	background: ${e=>e.theme.colors.background};
	margin-bottom: ${e=>e.theme.spacing.xl};
`,x=c.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr); 
	grid-gap: ${e=>e.theme.spacing.md};
`,$=c.div`
	grid-column: ${e=>{switch(e.$color){case"background":return"span 12";case"primary":case"secondary":return"span 6";case"subtle":case"light":case"dark":return"span 4";default:return"span 3"}}};
			
	> div {
		background: ${e=>e.theme.colors[e.$color]};
		height: ${e=>{if(e.$color==="primary"||e.$color==="secondary")return"6rem";if(e.$color!=="background")return"4rem"}};
		/* eslint-enable indent */
		border: ${e=>{const r=l(e.theme.colors[e.$color])<.5;return e.theme.colors[e.$color]===e.theme.colors.background&&e.$color!=="background"?`1px solid ${r?m(.3,e.theme.colors[e.$color]):d(.2,e.theme.colors[e.$color])}`:"1px solid transparent"}};
		/* eslint-enable indent */
	}
	
	> span {
		display: block;
		text-align: right;
		font-size: ${e=>e.theme.fontSizes.default};
		padding-top: ${e=>e.theme.spacing.xs};
	}
`,n=()=>{const e=localStorage.getItem("ui-theme"),r=u[e];return o.jsxs(h,{theme:r,children:[o.jsxs(g,{type:"info",children:[o.jsxs("p",{children:["You are currently viewing these docs with Redback's ",o.jsx("strong",{children:e})," theme."]}),o.jsx("p",{children:"You can select a different theme in the toolbar at the top of the page."})]}),o.jsx(p,{"data-testid":"Colour Docs",children:o.jsx(x,{children:Object.entries(r.colors).map(([t,a])=>o.jsxs($,{$color:t,children:[o.jsx("div",{}),o.jsxs("span",{children:[t," ",o.jsx("strong",{children:a})]})]},t))})})]})};try{n.displayName="ColourDemo",n.__docgenInfo={description:"",displayName:"ColourDemo",props:{}}}catch{}function s(e){const r={h1:"h1",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r.h1,{id:"colours",children:"Colours"}),`
`,o.jsx(n,{})]})}function I(e={}){const{wrapper:r}={...i(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(s,{...e})}):s(e)}export{I as default};
