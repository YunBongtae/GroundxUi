import React from 'react'
import { Global, css } from '@emotion/react';

import SpoqaHanSansThin from './styles/fonts/SpoqaHanSansThin.woff'
import SpoqaHanSansLight from './styles/fonts/SpoqaHanSansLight.woff'
import SpoqaHanSansRegular from './styles/fonts/SpoqaHanSansRegular.woff'
import SpoqaHanSansBold from './styles/fonts/SpoqaHanSansBold.woff'

const GlobalStyle = () => (
  <Global
    styles={css`
    @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 100;
        font-display: swap;
        src: url('/SpoqaHanSansThin.woff') format('woff'),
          url(${SpoqaHanSansThin}) format('woff');
      }
    
      @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 300;
        font-display: swap;
        src: url('/SpoqaHanSansLight.woff') format('woff'),
          url(${SpoqaHanSansLight}) format('woff');
      }
    
      @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 400;
        font-display: swap;
        src: url('/SpoqaHanSansRegular.woff') format('woff'),
          url(${SpoqaHanSansRegular}) format('woff');
      }
    
      @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 700;
        font-display: swap;
        src: url('/SpoqaHanSansBold.woff') format('woff'),
          url(${SpoqaHanSansBold}) format('woff');
      }
    
      * {
        box-sizing: border-box;
        // antd-mobile-v2 사용을 위해 app.js에서 관련 css를 호출하는데 해당 css가 antd-mobile-v2의 nomalize.css를 호출하면서 font-familly가 덮어쓰여짐
        // 이 떄문에 해당 코드가 적용되지 않아 !important를 사용하게 되었음
        // TODO 추후 antd-mobile-v2를 제거하고 해당 css를 제거한 후 !important를 제거해야함.
        font-family: 'Spoqa Han Sans', sans-serif !important;
      }
    
      html,
      body {
        width: 100%;
        height: 100%;
      }
      /* reset */
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
input,
button,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  font-size: 14px;
  line-height: 1;
  color: #323232;
  background-color: #ffffff;
  user-select: none;
}

/* html,
body {
  overflow-x: hidden;
  overflow-y: hidden;
} */

html::-webkit-scrollbar,
body::-webkit-scrollbar {
}

button {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

button,
textarea,
select {
  font-size: 16px;
  box-shadow: none;
  border-radius: 0;
  letter-spacing: -1px;
  outline-style: none;
}

select {
  -webkit-appearance: none;
  appearance: none;
  color: #818181;
}

input {
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
  color: #323232;
  outline-style: none;
}

::-webkit-input-placeholder {
  color: rgba($black200, 0.4);
}

a {
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
  width: 100%;
  height: auto;
}

ul,
ol,
li,
dl,
dt,
dd {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0px;
  word-break: break-all;
  word-wrap: break-word;
  table-layout: fixed;
}

caption,
legend {
  visibility: hidden;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
}
.page {
    padding: 20px;
    .icon {
        display: inline-block;
        margin: 10px;
        text-align: center;
        p {
            margin-top: 5px;
        }
    }
}
.width50 {
    width: 100px;
}
.width360{
    width: 360px;
}
    `}
  />
);
export default GlobalStyle;