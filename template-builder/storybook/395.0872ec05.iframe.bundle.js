"use strict";(self.webpackChunk_luctc_template_builder=self.webpackChunk_luctc_template_builder||[]).push([[395],{"./src/components/TemplateBuilder/TemplateBuilder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>TemplateBuilder_TemplateBuilder});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),react=__webpack_require__("./node_modules/react/index.js"),react_beautiful_dnd_esm=__webpack_require__("./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),tabs=__webpack_require__("./node_modules/antd/es/tabs/index.js");const breakpoints_tablet=768,desktop=`@media screen and (min-width: ${breakpoints_tablet}px)`;var iconBlock=__webpack_require__("./src/components/atoms/iconBlock/index.tsx"),columnBlock=__webpack_require__("./src/components/atoms/columnBlock/index.tsx");const StyledScrollBars="\n  > [data-rbd-droppable-id='all-rows'] {\n    min-height: 100%;\n  }\n\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n",Container=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;

  height: 100%;
  // background-color: #eee;

  font-family: 'Open Sans', sans-serif;
`,StyledContent=styled_components_browser_esm.ZP.div`
  transition: all 0.15s;
  padding: 0;
  width: 100%; // Todo with mobile and desktop mode
  min-height: 100%;

  > [data-rbd-droppable-id='all-rows'] {
    min-height: 90vh;
  }

  ${props=>{const computed=props.$bodyContentComputedStyle;return`${computed.messageWidth?`\n    .setting_messageWidth {\n      width: ${computed.messageWidth} !important;\n    }`:""}${"left"===computed.align?".setting_contentAlign { margin-left: 0; }":""}${`\n      a {\n        color: ${computed.linkColor}\n      }\n    `}${computed.messageBackgroundColor?`\n    .setting_messageBgColor {\n      background-color: ${computed.messageBackgroundColor};\n    }`:""}`}}
`,StyledContentWrap=styled_components_browser_esm.ZP.div`
  display: flex;
  flex: 1 1;
  overflow-y: overlay;
  padding: 20px 20px 20px 20px;
  max-height: 100%;
  align-items: flex-start;
  border-right: 1px solid #ccc;

  ${StyledScrollBars}
`,StyledWrapAllRows=styled_components_browser_esm.ZP.div`
  width: 100%;
`,StyledSidebar=styled_components_browser_esm.ZP.div`
  width: 20px;
  display: flex;
  height: 100%;
  text-align: left;
  background: #f9f9f9;
  color: #8f9699;
  transition: all 0.15s;
  position: relative;

  .sidebar-hide {
    top: 10px;
    left: -16px;
    z-index: 1;
    position: absolute;
    opacity: 0;
    transition: all 0.15s;
  }

  &[data-show='false'] {
    & > .ant-tabs {
      opacity: 0;
    }
    .sidebar-hide {
      opacity: 1;
    }
    &:hover {
      width: 30px;
    }
  }

  &[data-show='true'] {
    width: 411px;
    .sidebar-hide > svg {
      transform: rotateY(180deg);
    }
    &:hover {
      .sidebar-hide {
        opacity: 1;
      }
    }
  }
`,StyledTabs=(0,styled_components_browser_esm.ZP)(tabs.Z)`
  width: 100%;

  &.ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;

    &::before {
      content: none;
    }
    .ant-tabs-tab {
      width: 33.333%;
      background: #d6d9dc;
      justify-content: center;
      border-radius: 0;
      border-color: #c7c7c7;
      padding: 13px 16px 12px;
      font-size: 13px;
      text-transform: uppercase;

      & + .ant-tabs-tab {
        margin-left: 0;
      }
      &.ant-tabs-tab-active {
        background: #f9f9f9;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;

        .ant-tabs-tab-btn {
          color: #516167;
        }
      }
    }

    .ant-tabs-nav-list {
      width: 100%;
    }
  }

  .ant-tabs-content {
    height: 100%;
    max-height: 100%;
  }

  ${desktop} {
    .ant-tabs-nav-operations {
      display: none !important;
    }
  }
`,StyledTabContent=styled_components_browser_esm.ZP.div`
  padding: 16px;
  max-height: 100%;
  overflow: overlay;
  height: 100%;

  ${StyledScrollBars}

  &[data-if='false'] {
    display: none;
  }
`,StyledTabContentSetting=styled_components_browser_esm.ZP.div`
  padding-top: 16px;
  max-height: 100%;
  overflow: overlay;
  height: 100%;

  ${StyledScrollBars}

  &[data-if='false'] {
    display: none;
  }
`,StyledIconBlock=(0,styled_components_browser_esm.ZP)(iconBlock.Z)`
  flex: 1;
`,StyledColumnBlock=(0,styled_components_browser_esm.ZP)(columnBlock.Z)`
  margin-bottom: 15px;
  background-color: #fff;
`,StyledListModule=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  > div {
    width: calc(33.33% - 11px);

    // To void layout glitch. Override the transform value of react-beautiful-dnd
    transform: none !important;
  }

  .hide {
    display: none;
  }
`,StyledListColPlaceholder=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;

  > div {
    // To void layout glitch. Override the transform value of react-beautiful-dnd
    transform: none !important;
  }
`;var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modal=__webpack_require__("./node_modules/antd/es/modal/index.js"),ExclamationCircleOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js"),useBuilderContext=__webpack_require__("./src/components/TemplateBuilder/useBuilderContext.ts"),utils=__webpack_require__("./src/components/TemplateBuilder/utils/index.ts"),Icon=__webpack_require__("./src/components/atoms/icons/Icon.tsx");const StyledColWrapper=styled_components_browser_esm.ZP.div`
  border: 2px solid transparent;
  flex-grow: 1;

  &.hhg-col-1 {
    width: 8.3333333%;
  }
  &.hhg-col-2 {
    width: 16.6666666%;
  }
  &.hhg-col-3 {
    width: 25%;
  }
  &.hhg-col-4 {
    width: 33.33333333%;
  }
  &.hhg-col-5 {
    width: 41.66666667%;
  }
  &.hhg-col-6 {
    width: 50%;
  }
  &.hhg-col-7 {
    width: 58.33333333%;
  }
  &.hhg-col-8 {
    width: 66.6666666%;
  }
  &.hhg-col-9 {
    width: 66.6666666%;
  }
  &.hhg-col-10 {
    width: 83.33333333%;
  }
  &.hhg-col-11 {
    width: 91.66666667%;
  }
  &.hhg-col-12 {
    width: 100%;
  }

  .hide {
    display: none;
  }
`,StyledModuleList=styled_components_browser_esm.ZP.div`
  position: relative;
  height: 100%;

  &::after {
    content: '';
    opacity: 0;
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    outline: 2px solid #2d87f3;
    outline-offset: -1px;
    z-index: 2;
    pointer-events: none;
    transition: all 0.15s;
  }
  &[data-dragging-over='true']::after {
    opacity: 1;
    background-color: rgba(45, 135, 243, 0.15);
  }
`,StyledText=styled_components_browser_esm.ZP.p`
  font-size: 12px;
  margin: 5px 0 0 0;
  color: ${props=>props.theme.colors.primaryBase};
  text-align: center;
  white-space: nowrap;
  max-width: 100%;
  padding: 0 5px;
  text-overflow: ellipsis;
  overflow: hidden;
`,StyledColModuleEmpty=styled_components_browser_esm.ZP.div`
  height: 100%;
  width: 100%;
  min-height: 75px;
  color: ${props=>props.theme.colors.primaryBase};
  outline: 1px dashed ${props=>props.theme.colors.primaryBase};
  background: rgb(45 135 243 / 20%);
  outline-offset: -1px;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  lex-direction: column;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
`;function ColModuleEmpty({columnId}){return react.createElement(StyledColModuleEmpty,null,react.createElement(Icon.Z,{name:"UpCircleSolid"}),react.createElement(StyledText,null,"Drop content blocks here"))}try{ColModuleEmpty.displayName="ColModuleEmpty",ColModuleEmpty.__docgenInfo={description:"",displayName:"ColModuleEmpty",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!1,type:{name:"string"}},columnId:{defaultValue:null,description:"",name:"columnId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/colStructure/ColModuleEmpty.tsx#ColModuleEmpty"]={docgenInfo:ColModuleEmpty.__docgenInfo,name:"ColModuleEmpty",path:"src/components/TemplateBuilder/colStructure/ColModuleEmpty.tsx#ColModuleEmpty"})}catch(__react_docgen_typescript_loader_error){}var message=__webpack_require__("./node_modules/antd/es/message/index.js");const index_styled_Container=styled_components_browser_esm.ZP.div`
  position: relative;
  transition: all 0.15s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;
    outline: 2px solid transparent;
    outline-offset: -2px;
    z-index: 1;
    transition: all 0.15s;
  }

  &.module--hovered,
  &.module--selected {
    &::before {
      outline-color: ${props=>props.theme.colors.primaryBase};
    }

    .tcl-drag-column-start &,
    .tcl-drag-control-start & {
      outline-color: transparent !important;
    }
  }
`,StyledModuleMove=styled_components_browser_esm.ZP.div`
  position: absolute;
  color: #fff;
  background-color: ${props=>props.theme.colors.primaryBase};
  right: -16px;
  top: calc(50% - 16px);
  border-radius: 20px;
  pointer-events: none;
  transition: all 0.15s;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  z-index: -1;
  opacity: 0;
  pointer-events: none;

  &.show {
    opacity: 1;
    z-index: 15;
    pointer-events: auto;

    .tcl-drag-column-start &,
    .tcl-drag-control-start & {
      z-index: -1;
      opacity: 0;
      pointer-events: none;
    }
  }
`,StyledListActions=styled_components_browser_esm.ZP.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  position: absolute;
  bottom: -40px;
  right: -2px;
  background-color: ${props=>props.theme.colors.primaryBase};
  box-shadow: 0 2px 6px rgb(0 0 0 / 30%);
  z-index: 7;

  > li {
    width: 35px;
    height: 30px;
    border-right: 1px solid rgb(255 255 255 / 30%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }
  }

  svg {
    color: #fff;
    display: block;
  }
`,StyledName=styled_components_browser_esm.ZP.span`
  display: block;
  position: absolute;
  bottom: 0;
  right: -1px;
  transform: translateY(100%);
  background-color: #2d87f3;
  font-size: 12px;
  color: #fff;
  padding: 0 5px;
  z-index: 1;
  text-transform: capitalize;
`;var types=__webpack_require__("./src/components/TemplateBuilder/modules/types.ts"),title=__webpack_require__("./src/components/editors/title/index.tsx"),paragraph=__webpack_require__("./src/components/editors/paragraph/index.tsx"),list=__webpack_require__("./src/components/editors/list/index.tsx"),editors_button=__webpack_require__("./src/components/editors/button/index.tsx");const Editors={Title:title.Z,Paragraph:paragraph.Z,List:list.Z,Button:editors_button.Z},StyledWrap=styled_components_browser_esm.ZP.div`
  font-size: 0;

  > div {
    ${props=>"center"===props.$computed.align?"margin: 0 auto;":"right"===props.$computed.align?"margin-left: auto;":""}
  }
`;function Divider({moduleBlockStyle,moduleStyle,computedStyle}){const moduleBlockStyleJsx=(0,utils.qq)(moduleBlockStyle),moduleStyleJsx=(0,utils.qq)(moduleStyle);return react.createElement(StyledWrap,{style:moduleBlockStyleJsx,className:"module-divider",$computed:computedStyle},react.createElement("div",{style:moduleStyleJsx}))}try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{moduleBlockStyle:{defaultValue:null,description:"",name:"moduleBlockStyle",required:!0,type:{name:"Record<string, string>"}},moduleStyle:{defaultValue:null,description:"",name:"moduleStyle",required:!0,type:{name:"Record<string, string>"}},computedStyle:{defaultValue:null,description:"",name:"computedStyle",required:!0,type:{name:"Record<string, string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/modules/Divider/index.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/TemplateBuilder/modules/Divider/index.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}const Spacer_StyledWrap=styled_components_browser_esm.ZP.div`
  font-size: 0;
`;function Spacer({moduleBlockStyle,moduleStyle,computedStyle}){const styleJsx=(0,utils.qq)(moduleStyle),moduleBlockStyleJsx=(0,utils.qq)(moduleBlockStyle);return react.createElement("div",{style:moduleBlockStyleJsx},react.createElement(Spacer_StyledWrap,{style:styleJsx,className:"module-spacer"}))}try{Spacer.displayName="Spacer",Spacer.__docgenInfo={description:"",displayName:"Spacer",props:{moduleBlockStyle:{defaultValue:null,description:"",name:"moduleBlockStyle",required:!0,type:{name:"Record<string, string>"}},moduleStyle:{defaultValue:null,description:"",name:"moduleStyle",required:!0,type:{name:"Record<string, string>"}},computedStyle:{defaultValue:null,description:"",name:"computedStyle",required:!0,type:{name:"Record<string, string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/modules/Spacer/index.tsx#Spacer"]={docgenInfo:Spacer.__docgenInfo,name:"Spacer",path:"src/components/TemplateBuilder/modules/Spacer/index.tsx#Spacer"})}catch(__react_docgen_typescript_loader_error){}const Image_StyledWrap=styled_components_browser_esm.ZP.div`
  font-size: 0;

  a,
  img {
    max-width: 100%;
    display: block;

    &.autowidth {
      width: auto;
    }

    &.right {
      margin-left: auto;
    }
    &.center {
      margin-left: auto;
      margin-right: auto;
    }
  }

  a img {
    width: 100%;
  }
`,StyledPlaceholder=styled_components_browser_esm.ZP.div`
  background: #f3f3f3;
  outline: 1px dashed #979797;
  outline-offset: -2px;
  display: inline-block;
  color: #979894;
  padding: 25px 0;
  text-align: center;
  width: 100%;

  p {
    font-size: 12px;
    margin: 5px 0 0 0;
  }
`;function Image({moduleBlockStyle,moduleStyle,computedStyle,imageInfo}){const styleJsx=(0,utils.qq)(moduleStyle),moduleBlockStyleJsx=(0,utils.qq)(moduleBlockStyle),[showPlaceholder,setShowPlaceholder]=(0,react.useState)(!1);(0,react.useEffect)((()=>{const src=imageInfo.src;if(src){const image=document.createElement("img");image.onload=()=>{setShowPlaceholder(!1)},image.onerror=()=>{setShowPlaceholder(!0)},image.src=src}else setShowPlaceholder(!0)}),[imageInfo.src]);return react.createElement("div",{style:moduleBlockStyleJsx},react.createElement(Image_StyledWrap,{style:styleJsx},showPlaceholder?react.createElement(StyledPlaceholder,null,react.createElement(Icon.Z,{name:"ImagePlaceholder"}),react.createElement("p",null,"Add an image from an Url")):imageInfo.href?react.createElement("a",{onClick:evt=>evt.preventDefault(),target:"_blank",rel:"noreferrer",href:imageInfo.href,style:{width:computedStyle.width},className:computedStyle.class},react.createElement("img",{src:imageInfo.src,alt:imageInfo.alt})):react.createElement("img",{src:imageInfo.src,alt:imageInfo.alt,width:computedStyle.width,className:computedStyle.class})))}try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{moduleBlockStyle:{defaultValue:null,description:"",name:"moduleBlockStyle",required:!0,type:{name:"Record<string, string>"}},moduleStyle:{defaultValue:null,description:"",name:"moduleStyle",required:!0,type:{name:"Record<string, string>"}},computedStyle:{defaultValue:null,description:"",name:"computedStyle",required:!0,type:{name:"Record<string, string>"}},imageInfo:{defaultValue:null,description:"",name:"imageInfo",required:!0,type:{name:"Record<string, string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/modules/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/components/TemplateBuilder/modules/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}function Footer({moduleBlockStyle,moduleStyle,computedStyle}){const moduleBlockStyleJsx=(0,utils.qq)(moduleBlockStyle),moduleStyleJsx=(0,utils.qq)(moduleStyle);return react.createElement("div",{style:moduleBlockStyleJsx},react.createElement("div",{style:moduleStyleJsx},react.createElement(FooterVN,null)))}function FooterVN(){return react.createElement("div",null,react.createElement("table",{className:"text_block",width:"100%",cellPadding:0,cellSpacing:0,role:"presentation",style:{wordBreak:"break-word"}},react.createElement("tbody",null,react.createElement("tr",null,react.createElement("td",{style:{paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px"}},react.createElement("div",{style:{fontFamily:"Arial,sans-serif"}},react.createElement("div",{className:"txtTinyMce-wrapper",style:{fontSize:"12px",fontFamily:'"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif',color:"#b8b8c0",lineHeight:"1.5"}},react.createElement("p",{style:{margin:0,fontSize:"14px",textAlign:"center"}}," "),react.createElement("p",{style:{margin:0,fontSize:"14px",textAlign:"center"}},react.createElement("span",{style:{color:"#ffffff"}},"- THEO DÕI CHÚNG TÔI -")))))))),react.createElement("table",{className:"social_block",width:"100%",cellPadding:10,cellSpacing:0,role:"presentation"},react.createElement("tbody",null,react.createElement("tr",null,react.createElement("td",null,react.createElement("table",{className:"social-table",width:"217.72859025032938px",cellPadding:0,cellSpacing:0,role:"presentation",align:"center"},react.createElement("tbody",null,react.createElement("tr",null,react.createElement("td",{style:{padding:"0 2px 0 2px"}},react.createElement("a",{href:"https://www.facebook.com/hellobacsi/",rel:"noreferrer",target:"_blank"},react.createElement("img",{src:"https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/facebook@2x.png",width:32,height:32,alt:"Facebook",title:"Facebook",style:{display:"block",height:"auto",border:0}}))),react.createElement("td",{style:{padding:"0 2px 0 2px"}},react.createElement("a",{href:"https://www.instagram.com/hellobacsi/",rel:"noreferrer",target:"_blank"},react.createElement("img",{src:"https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/instagram@2x.png",width:32,height:32,alt:"Instagram",title:"Instagram",style:{display:"block",height:"auto",border:0}}))),react.createElement("td",{style:{padding:"0 2px 0 2px"}},react.createElement("a",{href:"https://oa.zalo.me/hellobacsi",rel:"noreferrer",target:"_blank"},react.createElement("img",{src:"https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/7b14587db5894a80b2d43078fc6fa0a6/editor_images/6a4f31bb-7e32-4922-ac32-a5786126d98b.jpeg",width:"33.72859025032938",height:32,alt:"Zalo",title:"Zalo",style:{display:"block",height:"auto",border:0}}))),react.createElement("td",{style:{padding:"0 2px 0 2px"}},react.createElement("a",{href:"https://www.tiktok.com/@hellobacsi",rel:"noreferrer",target:"_blank"},react.createElement("img",{src:"https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/tiktok@2x.png",width:32,height:32,alt:"TikTok",title:"TikTok",style:{display:"block",height:"auto",border:0}}))),react.createElement("td",{style:{padding:"0 2px 0 2px"}},react.createElement("a",{href:"https://www.youtube.com/c/Hellobacsi_HHG",rel:"noreferrer",target:"_blank"},react.createElement("img",{src:"https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/youtube@2x.png",width:32,height:32,alt:"YouTube",title:"YouTube",style:{display:"block",height:"auto",border:0}}))),react.createElement("td",{style:{padding:"0 2px 0 2px"}},react.createElement("a",{href:"https://www.linkedin.com/company/hello-health-group/",rel:"noreferrer",target:"_blank"},react.createElement("img",{src:"https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/linkedin@2x.png",width:32,height:32,alt:"LinkedIn",title:"LinkedIn",style:{display:"block",height:"auto",border:0}})))))))))),react.createElement("table",{className:"text_block",width:"100%",cellPadding:10,cellSpacing:0,role:"presentation",style:{wordBreak:"break-word"}},react.createElement("tbody",null,react.createElement("tr",null,react.createElement("td",null,react.createElement("div",{style:{fontFamily:"sans-serif"}},react.createElement("div",{className:"txtTinyMce-wrapper",style:{fontSize:"12px",color:"#555",lineHeight:"1.2",fontFamily:"Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}},react.createElement("p",{style:{margin:0,textAlign:"center",fontSize:"14px"}},react.createElement("span",{style:{fontSize:"14px",color:"#ffffff"}},react.createElement("em",null,"Copyright © 2022 Hello Health Group, All rights reserved.")),react.createElement("br",null),react.createElement("span",{style:{fontSize:"14px",color:"#ffffff"}},"Bạn nhận được email này từ việc đăng ký Hello Bacsi newsletter")),react.createElement("p",{style:{margin:0,textAlign:"center",fontSize:"14px"}},react.createElement("span",{style:{fontSize:"14px",color:"#ffffff"}},react.createElement("a",{href:"{{unsubscribeUrl}}",target:"_blank",rel:"noopener",style:{color:"#ffffff",textDecoration:"underline"}},"Bấm vào đây để Ngừng Đăng Ký"),"  "),react.createElement("br",null),react.createElement("br",null),react.createElement("span",{style:{fontSize:"14px",color:"#ffffff"}},react.createElement("strong",null,"Mọi thông tin xin vui lòng liên hệ:")),react.createElement("br",null),react.createElement("span",{style:{fontSize:"14px",color:"#ffffff"}},"Hello Health Group"),react.createElement("br",null),react.createElement("span",{style:{fontSize:"14px",color:"#ffffff"}},"Tầng 5, Sonatus Building, 15 Lê Thánh Tôn, Phường Bến Nghé, Quận 1")),react.createElement("p",{style:{margin:0,textAlign:"center",fontSize:"14px"}},react.createElement("span",{style:{fontSize:"14px",color:"#ffffff"}},"TP. Hồ Chí Minh, Việt Nam")))))))))}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{moduleBlockStyle:{defaultValue:null,description:"",name:"moduleBlockStyle",required:!0,type:{name:"Record<string, string>"}},moduleStyle:{defaultValue:null,description:"",name:"moduleStyle",required:!0,type:{name:"Record<string, string>"}},computedStyle:{defaultValue:null,description:"",name:"computedStyle",required:!0,type:{name:"Record<string, string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/modules/Footer/index.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/TemplateBuilder/modules/Footer/index.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}const _={get(data,key){try{return data[key]}catch(err){return""}}},leadParser={version2:{getBlocksData(campaignShow){const extra=campaignShow.extra_fields,{currentLayout}=extra,listBlockAdded=JSON.parse(extra.listBlockAdded),actionBlocks=JSON.parse(extra.actionBlocks);return{extra,currentLayout,listBlockAdded,actionBlocks,textBlocks:JSON.parse(extra.textBlocks),imageBlocks:extra.imageBlocks?JSON.parse(extra.imageBlocks):{},popupID:"lead-modal-"+Date.now(),LightBoxAImage:campaignShow.image?`<img draggable="false" class="lead-modal__image lead-modal-image-cover" src="${campaignShow.image}" alt="" >`:"",LightBoxBDesktopImage:campaignShow.image_desktop?`<img draggable="false" class="le-only-desktop lead-modal__image lead-modal-image-cover" style="height: 100%; object-fit: cover;" src="${campaignShow.image_desktop}" alt="" >`:"",LightBoxBMobileImage:campaignShow.image?`<img draggable="false" class="le-only-mobile lead-modal__image lead-modal-image-cover" src="${campaignShow.image}" alt="" >`:"",popUpTermURL:actionBlocks.submitBlock.data.url,popUpTermAgreeText:actionBlocks.submitBlock.data.text,popUpTermText:actionBlocks.submitBlock.data.text2,popUpSubmitText:actionBlocks.submitBlock.data.value,blockCount:{TextBlock:0,NumberBlock:0,EmailBlock:0,PhoneBlock:0,DateBlock:0,CheckboxBlock:0,RadioBlock:0}}},getListFieldAdded({listBlockAdded,blockCount,VARS}){let listFieldAddedHTML="";return listBlockAdded.forEach((b=>{if("TitleBlock"===b.name&&(listFieldAddedHTML+=`<h2 class="lead-modal__title ${"le-text-align-"+_.get(b.data,"align")} ${VARS.LEAD_CLASS}">${b.data.value}</h2>`),"SubtitleBlock"===b.name&&(listFieldAddedHTML+=`\n            <p class="lead-modal__description ${"le-text-align-"+_.get(b.data,"align")} ${VARS.LEAD_CLASS}">${b.data.value}</p>\n          `),"TextBlock"===b.name&&(listFieldAddedHTML+=`\n            <div>\n              <div class="lead-modal__form-control-wrapper form-control-wrapper--icon-left">\n                <input required data-key="${b.data.value}" name="${"text"+(blockCount.TextBlock>1?blockCount.TextBlock:"")}" spellcheck="false" type="text"\n                      placeholder="${b.data.placeholder}" class="lead-modal__form-control width-100%">\n                <img class="lead-modal__form-control-icon" src="${VARS.LEAD_API}admin/img/builder/text.svg">\n              </div>\n            </div>\n          `,blockCount.TextBlock+=1),"NumberBlock"===b.name&&(listFieldAddedHTML+=`\n            <div>\n              <div class="lead-modal__form-control-wrapper form-control-wrapper--icon-left">\n                <input required data-key="${b.data.value}" name="${"number"+(blockCount.NumberBlock?blockCount.NumberBlock:"")}"  spellcheck="false" type="number" min="0"\n                      placeholder="${b.data.placeholder}" class="lead-modal__form-control width-100%">\n                <img class="lead-modal__form-control-icon" src="${VARS.LEAD_API}admin/img/builder/number.svg">\n              </div>\n            </div>\n          `,blockCount.NumberBlock+=1),"EmailBlock"===b.name&&(listFieldAddedHTML+=`\n            <div>\n              <div class="lead-modal__form-control-wrapper form-control-wrapper--icon-left">\n                <input required data-key="${b.data.value}" name="${"email"+(blockCount.EmailBlock?blockCount.EmailBlock:"")}" spellcheck="false" type="email"\n                      placeholder="${b.data.placeholder}" class="lead-modal__form-control width-100%">\n                <img class="lead-modal__form-control-icon" src="${VARS.LEAD_API}admin/img/builder/email.svg">\n              </div>\n            </div>\n          `,blockCount.EmailBlock+=1),"PhoneBlock"===b.name&&(listFieldAddedHTML+=`\n            <div>\n              <div class="lead-modal__form-control-wrapper form-control-wrapper--icon-left">\n                <input required data-key="${b.data.value}" name="${"tel"+(blockCount.PhoneBlock?blockCount.PhoneBlock:"")}" spellcheck="false" type="tel"\n                      placeholder="${b.data.placeholder}" class="lead-modal__form-control width-100%">\n                <img class="lead-modal__form-control-icon" src="${VARS.LEAD_API}admin/img/builder/tel.svg">\n              </div>\n            </div>\n          `,blockCount.PhoneBlock+=1),"DateBlock"===b.name&&(listFieldAddedHTML+=`\n            <div>\n              <div class="lead-modal__form-control-wrapper form-control-wrapper--icon-left">\n                <input required type="date" data-key="${b.data.value}" name="${"date"+(blockCount.DateBlock?blockCount.DateBlock:"")}"  placeholder="${b.data.placeholder}" class="dateclass placeholderclass lead-modal__form-control width-100%" />\n                <img class="lead-modal__form-control-icon" src="${VARS.LEAD_API}admin/img/builder/date.svg">\n              </div>\n            </div>\n          `,blockCount.DateBlock+=1),"LinkButtonBlock"===b.name&&(listFieldAddedHTML+=`\n            <div>\n              <a target="${b.data.newtab?"blank":"parrent"}" href="${b.data.url}" style="text-decoration: none;">\n                <button type="button" class="lead-modal__btn js-modal__close js-popup-other-submit ${VARS.LEAD_CLASS}"> ${b.data.value} </button>\n              </a>\n            </div>\n          `),"CheckboxBlock"===b.name){const{listQuestion,isSendMailChimp=!1}=b.data;console.log("listQuestion",listQuestion);let checkboxHTML="";listQuestion.forEach((l=>{checkboxHTML+=`\n            <label class="lead-checkbox-container">\n              <input data-key="${b.data.value}" name="${"checkbox"+(blockCount.CheckboxBlock?blockCount.CheckboxBlock:"")+"[]"}" value="${l.value}" type="checkbox">\n              <span class="lead-checkbox-checkmark"></span>\n              ${l.placeholder}\n            </label>\n            `})),listFieldAddedHTML+=`\n          <div style="margin: 5px 0;">\n            <div class="le-checkbox-title">${b.data.placeholder}</div>\n            <div class="mailchimp-${b.data.value}" data-mailchimp="${isSendMailChimp}"></div>\n            ${checkboxHTML}\n          </div>\n          `,blockCount.CheckboxBlock+=1}if("RadioBlock"===b.name){const{listQuestion}=b.data;let radioHTML="";listQuestion.forEach((l=>{radioHTML+=`\n        <label class="lead-radio-container">\n          <input data-key="${b.data.value}" name="${"radio"+(blockCount.RadioBlock?blockCount.RadioBlock:"")}" value="${l.value}" type="radio">\n          <span class="lead-radio-checkmark"></span>\n          ${l.placeholder}\n        </label>\n        `})),listFieldAddedHTML+=`\n      <div style="margin: 5px 0;">\n        <div class="le-checkbox-title">${b.data.placeholder}</div>\n        ${radioHTML}\n      </div>\n      `,blockCount.RadioBlock+=1}if("DropdownBlock"===b.name){const{listQuestion}=b.data;let dropdownHTML="";listQuestion.forEach((l=>{dropdownHTML+=`\n        <option  value="${l.value}" >\n          ${l.placeholder}\n        </option>\n        `})),listFieldAddedHTML+=`\n      <div style="margin: 5px 0;">\n        <div class="le-checkbox-title">${b.data.placeholder}</div>\n        <div class="le-newbuilder-select-wrapper">\n          <select class="le-newbuilder-select" data-key="${b.data.value}" name="${"dropdown"+(blockCount.DropdownBlock?blockCount.DropdownBlock:"")}">\n          ${dropdownHTML}\n          </select>\n        </div>\n      </div>\n      `,blockCount.DropdownBlock+=1}})),listFieldAddedHTML},addCustomStyleForOverlay(campaignShow){const styleSheet=document.createElement("style");styleSheet.id="le-custom-slyte",styleSheet.textContent=`\n        .le-newbuilder-overlay {\n          background: url(${campaignShow.image_overlay_mobile}) ;\n          background-repeat: no-repeat;\n          background-size: cover;\n        }\n        @media screen and (min-width:768px) {\n          .le-newbuilder-overlay {\n            background: url(${campaignShow.image_overlay_desktop}) ;\n            background-repeat: no-repeat;\n            background-size: cover;\n          }\n        }\n      `,document.body.appendChild(styleSheet,"beforeend")},genSubmitBlock:({LEAD_CLASS,popUpTermURL,popUpTermAgreeText,popUpTermText,popUpSubmitText})=>`\n        <div class="lead-modal__checkbox-wrapper ${LEAD_CLASS}">\n          <div class="lead-modal__checkbox">\n            <input id="lead-term-checkbox" class="lead-modal__checkbox__input ${LEAD_CLASS}" type="checkbox" aria-label="Checkbox label" checked>\n            <div class="lead-modal__checkbox__control" aria-hidden="true" ></div>\n          </div>\n          <label for="checkbox" class="lead-modal__checkbox__label">\n            ${popUpTermAgreeText} <span style="font-weight: bold;"><a target="blank" href="${popUpTermURL||"https://hellobacsi.com/chinh-sach"}" rel="noopener noreferrer" style="text-decoration: none;">${popUpTermText}</a></span>\n          </label>\n        </div>\n        <button id="lead-submit" type="submit" class="lead-modal__btn ${LEAD_CLASS}"> ${popUpSubmitText}</button>\n      `,getContentPopupLightbox:({currentLayout,LightBoxAImage,LightBoxBDesktopImage,LightBoxBMobileImage,popupID,textBlocks,titleText,submitHTML,VARS,listFieldAddedHTML})=>`\n        <div class="lead-modal__content le-newbuilder-${currentLayout}">\n        <header class="lead-modal__header">\n          ${["LightBoxA","InlineA","Sidebar","Slider"].includes(currentLayout)?LightBoxAImage:`\n            ${LightBoxBDesktopImage}\n            ${LightBoxBMobileImage}\n          `}\n        </header>\n\n        <div class="lead-modal__body le-newbuilder-overlay">\n          <form class="lead-modal__form ${popupID}">\n            <div style="margin-bottom: 20px;">\n              <h2 class="lead-modal__title ${"le-text-align-"+_.get(textBlocks.titleBlock.data,"align")} ${VARS.LEAD_CLASS}">${titleText}</h2>\n              <p class="lead-modal__description ${"le-text-align-"+_.get(textBlocks.titleBlock.data,"align")} ${VARS.LEAD_CLASS}">${textBlocks.subtitleBlock.data.value}</p>\n            </div>\n\n            <div style="">${listFieldAddedHTML}</div>\n\n            ${submitHTML}\n          </form>\n        </div>\n      </div>\n      `},version1:{}},LeadForm_StyledWrap=styled_components_browser_esm.ZP.div`
  ${"\n  .lead-modal {\n    font-family: 'Open sans', sans-serif !important;\n    position: fixed;\n    z-index: 99999;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    opacity: 1;\n    visibility: visible;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n    padding: 10px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    white-space: normal !important;\n  }\n\n  .lead-modal__wrapper {\n    position: relative;\n    width: 100%;\n    max-width: 450px;\n    background-color: #fff;\n    border-radius: 6px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .lead-modal__content {\n    width: inherit;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .lead-modal__header {\n    padding: 0px 0px;\n  }\n\n  .lead-modal__image {\n    display: block;\n    margin: 0 auto;\n    border: none !important;\n    box-shadow: none !important;\n  }\n  .lead-modal-image-logo {\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n\n  .lead-modal-image-cover {\n    width: 100% !important;\n    padding: 0 0px;\n    border-top-left-radius: 4px;\n    border: none !important;\n    box-shadow: none !important;\n    margin: 0 !important;\n  }\n\n  .lead-modal__image + .lead-modal__image {\n    /* margin-top: 10px; */\n    /* border-radius: 4px; */\n  }\n\n  .lead-modal__body {\n    font-family: 'Open sans', sans-serif !important;\n    padding: 15px 15px 25px 15px;\n  }\n\n  .lead-modal__title {\n    font-family: 'Open sans', sans-serif !important;\n    font-size: 20px !important;\n    font-weight: bold !important;\n    font-stretch: normal !important;\n    font-style: normal !important;\n    line-height: 1.3 !important;\n    letter-spacing: -0.4px !important;\n    color: #2a4975 !important;\n    box-shadow: none !important;\n    padding-bottom: 0 !important;\n  }\n\n  .lead-modal__title.pink {\n    color: #2661ad !important;\n  }\n\n  .lead-modal__description {\n    font-family: 'Open sans', sans-serif !important;\n    font-size: 13px !important;\n    font-weight: normal !important;\n    font-stretch: normal !important;\n    font-style: normal !important;\n    line-height: 1.62 !important;\n    letter-spacing: 0.14px !important;\n    color: #2c87f3 !important;\n    margin-top: 10px !important;\n  }\n\n  .lead-modal__description.pink {\n    color: #3e3f58 !important;\n  }\n\n  .lead-modal__form-control-wrapper {\n    margin-top: 10px;\n    margin-left: 0px !important;\n    position: relative;\n  }\n\n  .lead-modal__form-control {\n    box-shadow: none !important;\n    height: 40px !important;\n    width: 100%;\n    padding-left: calc(15px + 1.5em + 15px) !important;\n    background-color: #fff !important;\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n    padding-right: 15px !important;\n    border: solid 1px #dddddd !important;\n    color: #2a4975 !important;\n    line-height: 1.7em !important;\n    border-radius: 0 !important;\n    font-family: 'Open Sans', sans-serif !important;\n    background-image: linear-gradient(transparent, transparent) !important;\n    margin-left: 0px !important;\n    font-size: 14px !important;\n    line-height: 14px !important;\n  }\n\n  .lead-modal__form-control:focus {\n    border-color: var(--color-primary);\n    box-shadow: 0px 0px 0px 3px rgba(44, 135, 243, 0.1);\n    outline: none;\n  }\n\n  .lead-modal__form-control::-webkit-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #b5b5b5;\n  }\n\n  .lead-modal__form-control::-moz-placeholder {\n    color: #b5b5b5;\n  }\n\n  .lead-modal__form-control:-ms-input-placeholder {\n    color: #b5b5b5;\n  }\n\n  .lead-modal__form-control::-ms-input-placeholder {\n    color: #b5b5b5;\n  }\n\n  .lead-modal__form-control::placeholder {\n    color: #b5b5b5;\n  }\n\n  img.lead-modal__form-control-icon {\n    display: inline-block !important;\n    color: #b5b5b5 !important;\n    fill: #b5b5b5 !important;\n    line-height: 1 !important;\n    flex-shrink: 0 !important;\n    max-width: initial !important;\n    display: block !important;\n    position: absolute !important;\n    pointer-events: none !important;\n    left: 15px !important;\n    top: 10px !important;\n    height: 20px !important;\n    width: 20px !important;\n    border: none !important;\n    margin: 0 !important;\n  }\n\n  .lead-modal__checkbox-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    margin-top: 15px;\n  }\n\n  .lead-modal__checkbox-wrapper a {\n    color: #2c87f3 !important;\n    text-decoration: none !important;\n  }\n\n  .lead-modal__checkbox-wrapper a:visited {\n    color: #2c87f3 !important;\n  }\n\n  .lead-modal__checkbox-wrapper.pink a,\n  .lead-modal__checkbox-wrapper.pink a:visited {\n    color: #e55c8a !important;\n  }\n\n  .lead-modal__checkbox {\n    position: relative;\n    z-index: 1;\n    display: inline-block;\n    font-size: 20px;\n  }\n\n  .lead-modal__checkbox__input {\n    position: relative;\n    margin: 0 !important;\n    padding: 0;\n    opacity: 0;\n    height: 1em !important;\n    width: 1em !important;\n    display: block;\n    z-index: 1;\n    font-size: 1em !important;\n  }\n\n  .lead-modal__checkbox__control {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    pointer-events: none;\n    transition: transform 0.2s;\n    color: #dddddd;\n  }\n\n  .lead-modal__checkbox__control::before,\n  .lead-modal__checkbox__control::after {\n    content: '';\n    position: absolute;\n  }\n\n  .lead-modal__checkbox__control::before {\n    width: 120%;\n    height: 120%;\n    background-color: currentColor;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0;\n    border-radius: 50%;\n    will-change: transform;\n    transition: transform 0.2s;\n  }\n\n  .lead-modal__checkbox__control::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    border-radius: 6px;\n    -webkit-box-shadow: inset 0 0 0 1px #dddddd;\n    box-shadow: inset 0 0 0 1px #dddddd;\n  }\n\n  .lead-modal__checkbox__control:focus::after {\n    box-shadow: inset 0 0 0 1px #2c87f3;\n  }\n\n  .lead-modal__checkbox__input:checked ~ .lead-modal__checkbox__control::after,\n  .lead-modal__checkbox__input:indeterminate ~ .lead-modal__checkbox__control::after {\n    background-color: currentColor;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 18px;\n    box-shadow: none;\n  }\n\n  .lead-modal__checkbox__input:checked ~ .lead-modal__checkbox__control {\n    color: #2c87f3;\n  }\n\n  .lead-modal__checkbox__input:checked ~ .lead-modal__checkbox__control::after {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpolyline points='2.5 8 6.5 12 13.5 3' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3C/svg%3E\");\n  }\n\n  .lead-modal__checkbox__input:indeterminate ~ .lead-modal__checkbox__control {\n    color: var(--custom-checkbox-color-disabled);\n  }\n\n  .lead-modal__checkbox__input:indeterminate ~ .lead-modal__checkbox__control::after {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cline x1='2' y1='8' x2='14' y2='8' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E\");\n  }\n\n  .lead-modal__checkbox__input:active ~ .lead-modal__checkbox__control {\n    transform: scale(0.9);\n  }\n\n  .lead-modal__checkbox__input:checked:active ~ .lead-modal__checkbox__control,\n  .lead-modal__checkbox__input:indeterminate:active ~ .lead-modal__checkbox__control {\n    transform: scale(1);\n  }\n\n  .lead-modal__checkbox__input:focus ~ .lead-modal__checkbox__control::before {\n    opacity: 0.2;\n    transform: translate(-50%, -50%) scale(1);\n  }\n\n  .lead-modal__checkbox__input.pink ~ .lead-modal__checkbox__control::after {\n    border-radius: 50% !important;\n  }\n\n  .lead-modal__checkbox__input.pink:checked ~ .lead-modal__checkbox__control {\n    color: #2661ad;\n  }\n\n  .lead-modal__checkbox__input.pink:checked ~ .lead-modal__checkbox__control::after,\n  .lead-modal__checkbox__input.pink:indeterminate ~ .lead-modal__checkbox__control::after {\n    background-size: 12px;\n  }\n\n  .lead-modal__checkbox__label {\n    /* font-family: OpenSans; */\n    font-size: 13px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.14px;\n    color: #969696;\n    margin-left: 10px;\n    margin-bottom: 0 !important;\n  }\n\n  .lead-modal__btn {\n    display: block;\n    width: 100%;\n    border: none;\n    color: #fff;\n    padding: 12px 10px;\n    font-weight: 700;\n    text-align: center;\n    margin-top: 15px;\n    border-radius: 4px;\n    background-color: #2699fb;\n    transition: all 0.2s ease-in-out;\n    text-shadow: none !important;\n    box-shadow: none !important;\n    font-family: 'Open sans', sans-serif !important;\n    font-size: 14px;\n    cursor: pointer !important;\n  }\n\n  .lead-modal__btn:hover,\n  .lead-modal__btn:active {\n    background-color: #337eff;\n  }\n\n  .lead-modal__btn.pink {\n    background-color: #e55c8a;\n  }\n\n  .lead-modal__btn.pink:hover {\n    background-color: #b4466a;\n  }\n\n  .lead-modal__close-btn {\n    position: absolute;\n    padding-top: 5px;\n    top: -15px;\n    right: -10px;\n    width: 35px;\n    height: 35px;\n    box-shadow: -2px 4px 4px 0 rgba(191, 191, 191, 0.44) !important;\n    text-shadow: none !important;\n    background-color: #005cfd;\n    border-radius: 50%;\n    line-height: inherit;\n    appearance: none;\n    border: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s ease-in-out;\n    outline: none;\n    z-index: 1;\n    padding: 5px 13px !important;\n    cursor: pointer !important;\n  }\n\n  .lead-modal__close-btn:hover,\n  .lead-modal__close-btn:active {\n    background-color: #337eff;\n  }\n\n  .lead-modal__close-icon {\n    display: inline-block;\n    color: #fff;\n    fill: #fff;\n    height: 1em;\n    width: 1em;\n    line-height: 1;\n    flex-shrink: 0;\n    max-width: initial;\n    transition: 0.3s all ease;\n  }\n\n  .lead-modal__close-btn.pink {\n    background-color: #fff;\n  }\n\n  .lead-modal__close-btn.pink .lead-modal__close-icon {\n    color: #000;\n  }\n\n  .lead-modal__close-btn.pink:hover .lead-modal__close-icon {\n    color: #e55c8a;\n    transition: 0.3s all ease;\n  }\n\n  .lead-modal__thank-you {\n    padding: 0 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: inherit;\n    text-align: center;\n    min-height: 400px;\n  }\n\n  .lead-modal__thank-you h1 {\n    margin-top: 10px;\n    font-size: 32px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: -0.23px;\n    color: #1b3250;\n  }\n\n  .lead-modal__thank-you p {\n    margin-top: 5px;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: -0.11px;\n    color: #1b3250;\n  }\n  .lead-modal__thank-you img {\n    max-width: 100% !important;\n    border: none !important;\n    width: auto !important;\n    margin: 0 auto !important;\n  }\n\n  .lead-modal__thank-you.hidden {\n    display: none;\n  }\n  /* lead-modal : end */\n\n  .modal__container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1000000000000;\n    pointer-events: none;\n    overflow-y: scroll;\n  }\n\n  .modal__content {\n    position: relative;\n    width: 80vw;\n    margin: auto 0;\n  }\n\n  /* Make clicks pass-through */\n  #nprogress {\n    pointer-events: none;\n  }\n\n  #nprogress .bar {\n    background: #223bdd;\n\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 2px;\n  }\n\n  /* Fancy blur effect */\n  #nprogress .peg {\n    display: block;\n    position: absolute;\n    right: 0px;\n    width: 100px;\n    height: 100%;\n    box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n    opacity: 1;\n    transform: rotate(3deg) translate(0px, -4px);\n  }\n\n  /* Remove these to get rid of the spinner */\n  #nprogress .spinner {\n    display: block;\n    position: fixed;\n    z-index: 1031;\n    top: 15px;\n    right: 15px;\n  }\n\n  #nprogress .spinner-icon {\n    width: 18px;\n    height: 18px;\n    box-sizing: border-box;\n\n    border: solid 2px transparent;\n    border-top-color: #29d;\n    border-left-color: #29d;\n    border-radius: 50%;\n\n    -webkit-animation: nprogress-spinner 400ms linear infinite;\n    animation: nprogress-spinner 400ms linear infinite;\n  }\n\n  .nprogress-custom-parent {\n    overflow: hidden;\n    position: relative;\n  }\n\n  .nprogress-custom-parent #nprogress .spinner,\n  .nprogress-custom-parent #nprogress .bar {\n    position: absolute;\n  }\n\n  @-webkit-keyframes nprogress-spinner {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes nprogress-spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  .lead-modal__btn:disabled {\n    background: #d5d5d5 !important;\n  }\n\n  .dateclass {\n    width: 100%;\n  }\n\n  .dateclass.placeholderclass::before {\n    width: 100%;\n    content: attr(placeholder);\n    color: #b8b8b8;\n  }\n\n  .dateclass.placeholderclass:hover::before {\n    width: 0%;\n    content: '';\n  }\n\n  /* Change Autocomplete styles in Chrome*/\n  .lead-modal input:-webkit-autofill,\n  .lead-modal input:-webkit-autofill:hover,\n  .lead-modal input:-webkit-autofill:focus,\n  .lead-modal textarea:-webkit-autofill,\n  .lead-modal textarea:-webkit-autofill:hover,\n  .lead-modal textarea:-webkit-autofill:focus,\n  .lead-modal select:-webkit-autofill,\n  .lead-modal select:-webkit-autofill:hover,\n  .lead-modal select:-webkit-autofill:focus {\n    -webkit-box-shadow: 0 0 0 1000px white inset !important;\n    -webkit-text-fill-color: #2a4975;\n  }\n\n  .lead-modal label.error {\n    font-size: 13px;\n    color: #fa140f;\n    margin-bottom: 0;\n    margin-left: 0px !important;\n    line-height: 1.65 !important;\n    width: 100%;\n    display: block;\n  }\n\n  .le-text-align-center {\n    text-align: center !important;\n  }\n  .le-text-align-left {\n    text-align: left !important;\n  }\n  .le-text-align-right {\n    text-align: right !important;\n  }\n\n  .le-only-desktop {\n    display: none !important;\n  }\n  .le-only-mobile {\n    display: block !important;\n  }\n\n  .le-only-desktop a {\n    text-decoration: none !important;\n  }\n\n  .le-only-mobile a {\n    text-decoration: none !important;\n  }\n\n  @media screen and (min-width: 992px) {\n    .le-newbuilder-LightBoxB,\n    .le-newbuilder-InlineB {\n      display: flex !important;\n    }\n\n    .le-newbuilder-LightBoxB .lead-modal__header,\n    .le-newbuilder-InlineB .lead-modal__header {\n      max-width: 50%;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    .le-only-desktop {\n      display: block !important;\n    }\n\n    .le-only-mobile {\n      display: none !important;\n    }\n\n    .le-newbuilder-LightBoxB .lead-modal__body,\n    .le-newbuilder-InlineB .lead-modal__body {\n      flex: 1;\n    }\n\n    .le-newbuilder-wrap-LightBoxB {\n      max-width: 720px !important;\n    }\n    .le-newbuilder-wrap-InlineB {\n      max-width: 100% !important;\n    }\n    .le-newbuilder-LightBoxB .le-only-desktop.lead-modal-image-cover {\n      max-width: 400px !important;\n    }\n  }\n\n  .lead-modal__title {\n    margin: 7px 0 !important;\n  }\n\n  .lead-modal__description {\n    margin: 0;\n  }\n\n  .lead-modal-image-cover,\n  .lead-modal__wrapper {\n    border-radius: 0px !important;\n  }\n\n  .lead-modal__form {\n    margin: 0;\n    display: block !important;\n  }\n\n  .lead-modal__image + .lead-modal__image {\n    margin-top: 0px;\n  }\n\n  .lead-modal__thank-you {\n    width: 100%;\n  }\n\n  /* Skins */\n  .le-skin-a-desktop {\n    position: fixed;\n    z-index: 99999;\n    top: 0;\n    left: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n  }\n\n  .le-skin-b-desktop {\n  }\n\n  .le-join-now {\n  }\n\n  .le-joinbow-btn {\n    background: #2c87f3;\n    color: #ffffff;\n    font-size: 16px;\n    text-align: center;\n    outline: none !important;\n    box-shadow: none !important;\n    padding: 12px 30px;\n    border: none !important;\n    border: 1px solid transparent !important;\n    cursor: pointer !important;\n  }\n  .le-joinbow-btn:hover {\n    border: 1px solid white !important;\n  }\n\n  .le-joinbow-btn-mobile {\n    background: #2c87f3;\n    color: #ffffff;\n    font-size: 14px;\n    text-align: center;\n    outline: none !important;\n    box-shadow: none !important;\n    padding: 12px 30px;\n    border: none !important;\n  }\n\n  .le-newbuilder-close-svg {\n    border-radius: 50%;\n    width: 35px;\n    height: 35px;\n    background: #005cfd;\n    cursor: pointer !important;\n  }\n  .le-mobile-btn {\n    width: 24px;\n    height: 24px;\n  }\n\n  .le-newbuilder-close-button {\n    padding: 0;\n    background: transparent;\n    box-shadow: none;\n    border: none;\n    width: auto !important;\n    cursor: pointer !important;\n  }\n  .le-abs-top-right {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n  }\n\n  .le-abs-outer-top-right {\n    position: absolute;\n    right: 0px;\n    top: -45px;\n  }\n\n  /* Skin floating */\n  .le-floating-desktop {\n    position: fixed;\n    bottom: 40px;\n    left: 25px;\n    z-index: 9999;\n  }\n\n  .le-floating-desktop-wrap {\n    background: #fff;\n    backdrop-filter: blur(30px);\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);\n    padding: 0px;\n    padding-right: 30px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n  }\n\n  .le-floating-desktop-title {\n    font-size: 20px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #2a4975;\n    max-width: 530px;\n  }\n  .le-floating-desktop-desc {\n    font-size: 13px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.65;\n    letter-spacing: normal;\n    color: #2699fb;\n    max-width: 530px;\n  }\n\n  .le-joinbow-floating-btn {\n    background: #2c87f3;\n    color: #ffffff;\n    font-size: 14px;\n    text-align: center;\n    outline: none !important;\n    box-shadow: none !important;\n    padding: 12px 40px;\n    border: none !important;\n    border: 1px solid transparent !important;\n    font-weight: 500;\n    cursor: pointer !important;\n  }\n\n  /* // Floating mobile */\n  .le-floating-mobile {\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    z-index: 9999;\n  }\n  .le-abs-outer-mobile-top-right {\n    position: absolute;\n    right: 2px;\n    top: -30px;\n  }\n\n  .le-floating-mobile-wrap {\n    background: #fff;\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);\n    padding: 10px 15px;\n  }\n  .le-floating-mobile-title {\n    font-size: 18px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    color: #2a4975;\n    font-weight: 600;\n  }\n  .le-floating-mobile-desc {\n    font-size: 12px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.65;\n    letter-spacing: normal;\n    color: #2699fb;\n  }\n\n  /* // Tab popup */\n  .le-tab-popup {\n    position: fixed;\n    bottom: 15px;\n    left: 15px;\n    max-width: 150px;\n  }\n  .le-abs-outer-mobile-top-right-2 {\n    position: absolute;\n    right: -12px;\n    top: -15px;\n  }\n\n  .le-center-tab-popup {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999999 !important;\n    width: calc(100% - 40px);\n    max-width: 400px;\n  }\n\n  .le-center-tab-popup img {\n    max-width: 100% !important;\n  }\n\n  /* // Popup */\n  .le-checkbox-title {\n    font-size: 15px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    color: #2a4975;\n    margin: 13px 0 !important;\n    /* line-height: 1.65 !important; */\n  }\n\n  /* Checkbox */\n  .lead-checkbox-container {\n    position: relative;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    font-size: 14px;\n    line-height: 1.65;\n    margin: 10px 0;\n  }\n\n  .lead-checkbox-checkmark {\n    display: inline-block;\n    height: 24px;\n    border: solid 1px #d0d0d0;\n    vertical-align: middle;\n    margin-right: 8px;\n    position: relative;\n    border-radius: 4px;\n    flex: 0 0 24px;\n  }\n\n  .lead-checkbox-container input {\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n  }\n\n  .lead-checkbox-checkmark::after {\n    position: absolute;\n    content: '';\n  }\n\n  .lead-checkbox-container input:checked ~ .lead-checkbox-checkmark {\n    background: #337eff;\n    border: solid 1px #337eff;\n  }\n\n  .lead-checkbox-container input:checked ~ .lead-checkbox-checkmark::after {\n    left: 8px;\n    top: 3px;\n    width: 7px;\n    height: 12px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg);\n  }\n  /* End checkbox */\n\n  .le-fullscreen-img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media screen and (min-width: 768px) {\n    .lead-fullscreen-desktop-close-btn {\n      position: fixed;\n      top: 27px;\n      right: 23px;\n    }\n  }\n\n  /* // Inline */\n  .lead-modal.le-buider-inline {\n    position: static;\n    display: block;\n    padding: 20px 0;\n    height: initial !important;\n    padding-top: 10px;\n  }\n\n  .lead-modal.le-buider-inline .lead-modal__wrapper {\n    box-shadow: none;\n    border: 1px solid #ddd;\n  }\n  .lead-modal.le-buider-inline .lead-modal__content {\n    max-height: initial !important;\n  }\n  .lead-modal.le-buider-inline .lead-modal__content .lead-modal__header img {\n    /* height: auto !important; */\n    object-fit: fill;\n  }\n\n  .le-thankyou-title {\n    font-size: 24px !important;\n    margin-bottom: 8px !important;\n    color: #2a4975 !important;\n  }\n\n  .le-thankyou-subtitle {\n    font-size: 14px !important;\n    color: #2699fb !important;\n    margin: 0 !important;\n  }\n\n  /* Radio */\n  .lead-radio-container {\n    position: relative;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    font-size: 14px;\n    line-height: 1.65;\n    margin: 10px 0;\n  }\n\n  .lead-radio-checkmark {\n    display: inline-block;\n    height: 24px;\n    border: solid 1px #d0d0d0;\n    vertical-align: middle;\n    margin-right: 8px;\n    position: relative;\n    border-radius: 50%;\n    flex: 0 0 24px;\n  }\n\n  .lead-radio-container input {\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n  }\n\n  .lead-radio-checkmark::after {\n    position: absolute;\n    content: '';\n  }\n\n  .lead-radio-container input:checked ~ .lead-radio-checkmark {\n    background: #337eff;\n    border: solid 1px #337eff;\n  }\n\n  .lead-radio-container input:checked ~ .lead-radio-checkmark::after {\n    left: 50%;\n    top: 50%;\n    width: 8px;\n    height: 8px;\n    background: #fff;\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n  }\n  /* End Radio */\n\n  /* Dropdown */\n  .le-newbuilder-select {\n    width: 100%;\n    padding: 12px;\n    border-radius: 4px;\n    border: solid 1px #d0d0d0;\n    outline: none;\n    appearance: none;\n    font-size: 15px;\n    padding-right: 35px;\n  }\n  .le-newbuilder-select-wrapper {\n    position: relative;\n  }\n  .le-newbuilder-select-wrapper::after {\n    content: '';\n    position: absolute;\n    right: 15px;\n    top: 18px;\n    transform: rotate(45deg);\n    width: 10px;\n    height: 10px;\n    border: 2px solid #616060;\n    border-left: transparent;\n    border-top: transparent;\n  }\n  /* End Dropdown */\n\n  .le-buider-slider {\n    width: 420px;\n    height: auto;\n    bottom: 15px;\n    top: unset;\n    left: -200px;\n    animation: le-builder-slide 0.5s forwards;\n  }\n\n  @keyframes le-builder-slide {\n    100% {\n      left: 15px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .le-buider-slider,\n    .le-buider-fullscreen {\n      display: none !important;\n    }\n  }\n\n  .le-skin-mobile {\n    margin-top: 64px;\n  }\n"}
`,LeadForm_StyledPlaceholder=styled_components_browser_esm.ZP.div`
  background: #f3f3f3;
  outline: 1px dashed #979797;
  outline-offset: -2px;
  display: inline-block;
  color: #979894;
  padding: 25px 0;
  text-align: center;
  width: 100%;

  p {
    font-size: 12px;
    margin: 5px 0 0 0;
  }
`;function _LeadForm({leadInfo}){const html=leadInfo&&function parseLeadToHTML(campaignShow){const VARS={LEAD_CLASS:"custom-class",LEAD_API:"https://dev.leadgen.hellobacsi.com/"};try{let{currentLayout,listBlockAdded,actionBlocks,textBlocks,popupID,LightBoxAImage,LightBoxBDesktopImage,LightBoxBMobileImage,popUpTermURL,popUpTermAgreeText,popUpTermText,popUpSubmitText,blockCount}=leadParser.version2.getBlocksData(campaignShow),titleText=textBlocks.titleBlock.data.value;const listFieldAddedHTML=leadParser.version2.getListFieldAdded({listBlockAdded,blockCount,VARS});if(currentLayout.includes("LightBox")||currentLayout.includes("Inline")||"Fullscreen"===currentLayout||"Sidebar"===currentLayout||"Slider"===currentLayout){let submitHTML="";return leadParser.version2.addCustomStyleForOverlay(campaignShow),actionBlocks.submitBlock.isHide&&(submitHTML=leadParser.version2.genSubmitBlock({LEAD_CLASS:VARS.LEAD_CLASS,popUpTermURL,popUpTermAgreeText,popUpTermText,popUpSubmitText})),`${leadParser.version2.getContentPopupLightbox({currentLayout,LightBoxAImage,LightBoxBDesktopImage,LightBoxBMobileImage,popupID,textBlocks,titleText,submitHTML,VARS,listFieldAddedHTML})}`}return""}catch(err){return console.log("err",err),""}}(leadInfo.json)||"",renderedForm=(0,react.useMemo)((()=>react.createElement("div",{dangerouslySetInnerHTML:{__html:html}})),[html]);return leadInfo?react.createElement(LeadForm_StyledWrap,null,renderedForm):react.createElement(LeadForm_StyledPlaceholder,null,react.createElement(Icon.Z,{name:"LeadForm"}),react.createElement("p",null,"Select a Lead Form"))}const LeadForm=react.memo(_LeadForm);try{LeadForm.displayName="LeadForm",LeadForm.__docgenInfo={description:"",displayName:"LeadForm",props:{leadInfo:{defaultValue:null,description:"",name:"leadInfo",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/modules/LeadForm/index.tsx#LeadForm"]={docgenInfo:LeadForm.__docgenInfo,name:"LeadForm",path:"src/components/TemplateBuilder/modules/LeadForm/index.tsx#LeadForm"})}catch(__react_docgen_typescript_loader_error){}var HHGSocial=__webpack_require__("./src/components/TemplateBuilder/modules/HHGSocial/index.tsx"),Form=__webpack_require__("./src/components/TemplateBuilder/modules/Form/index.tsx");const Modules={Divider,Spacer,Image,Footer,LeadForm,HHGSocial:HHGSocial.YU,Form:Form.l},ModuleItem=({module,index,rowId,rowIdx,columnId,columnIdx,className})=>{const refCloneFeature=(0,react.useRef)(),{hoveredId,setHoveredId,selectedId,setSelectedId,onDeleteModule,onDuplicateModule,onUpdateModuleContent}=(0,useBuilderContext.i)(),moduleName=(0,react.useMemo)((()=>{try{return module.type.split("-").slice(-1)[0]||""}catch(_){console.error("Module invalid",module),message.ZP.error("Module invalid")}}),[module.type]);function onClickWholeModule(evt){evt.stopPropagation(),selectedId.uuid!==module.uuid&&setSelectedId({uuid:module.uuid,type:"module",data:module,rowId,rowIdx,columnId,columnIdx,moduleIdx:index})}function onMouseEnter(evt){setHoveredId(module.uuid)}function onMouseLeave(evt){evt.stopPropagation();evt.target.closest(`[data-rbd-draggable-id$="${rowId}"]`)&&setHoveredId(rowId)}const isSelected=("module"===selectedId.type?selectedId.uuid:"")===module.uuid,isHovered=hoveredId===module.uuid,onConfirmDelete=()=>{modal.Z.confirm({title:"Are you sure you want to delete this module?",icon:react.createElement(ExclamationCircleOutlined.Z,null),content:"This action cannot be undone",okText:"Delete",cancelText:"Cancel",onOk:()=>{onDeleteModule(module.uuid,rowIdx,columnIdx)}})},onConfirmDuplicate=()=>{refCloneFeature.current||(onDuplicateModule(rowIdx,columnIdx,index),refCloneFeature.current=setTimeout((()=>{refCloneFeature.current=void 0}),1e3))},onChange=(0,react.useCallback)(((path,html,json)=>{onUpdateModuleContent({rowIdx,columnIdx,moduleIdx:index,path,value:{html,json}})}),[index,rowIdx,columnIdx,onUpdateModuleContent]);if(!module.type)return null;const draggableId=`module|${module.uuid}`,classes=classnames_default()(className,{"module--hovered":isHovered,"module--selected":isSelected});return react.createElement(react_beautiful_dnd_esm._l,{key:draggableId,draggableId,index},((provided,snapshot)=>react.createElement("div",(0,esm_extends.Z)({},provided.draggableProps,{ref:provided.innerRef,className:"module-item"}),react.createElement(index_styled_Container,{className:classes,onClick:onClickWholeModule,onMouseEnter,onMouseLeave},module.type===types.O.heading?react.createElement(Editors.Title,{rowIdx,title:module.descriptor.heading.title,initContent:module.descriptor.heading.html,moduleBlockStyle:module.descriptor.style,style:module.descriptor.heading.style,onChange}):module.type===types.O.paragraph?react.createElement(Editors.Paragraph,{rowIdx,initContent:module.descriptor.paragraph.html,moduleBlockStyle:module.descriptor.style,style:module.descriptor.paragraph.style,computedStyle:module.descriptor.paragraph.computedStyle||{},onChange}):module.type===types.O.list?react.createElement(Editors.List,{key:module.descriptor.list.tag,tag:module.descriptor.list.tag,rowIdx,initContent:module.descriptor.list.html,moduleBlockStyle:module.descriptor.style,style:module.descriptor.list.style,onChange}):module.type===types.O.button?react.createElement(Editors.Button,{rowIdx,initContent:module.descriptor.button.html,moduleBlockStyle:module.descriptor.style,style:module.descriptor.button.style,onChange}):module.type===types.O.divider?react.createElement(Modules.Divider,{moduleBlockStyle:module.descriptor.style,moduleStyle:module.descriptor.divider.style,computedStyle:module.descriptor.computedStyle}):module.type===types.O.spacer?react.createElement(Modules.Spacer,{moduleBlockStyle:module.descriptor.style,moduleStyle:module.descriptor.spacer.style,computedStyle:module.descriptor.computedStyle}):module.type===types.O.image?react.createElement(Modules.Image,{moduleBlockStyle:module.descriptor.style,moduleStyle:module.descriptor.image.style,computedStyle:module.descriptor.computedStyle,imageInfo:module.descriptor.image}):module.type===types.O.footer?react.createElement(Modules.Footer,{moduleBlockStyle:module.descriptor.style,moduleStyle:module.descriptor.footer.style,computedStyle:module.descriptor.computedStyle}):module.type===types.O.leadForm?react.createElement(Modules.LeadForm,{leadInfo:module.descriptor.leadForm.data}):module.type===types.O.hhgSocial?react.createElement(Modules.HHGSocial,{lang:module.descriptor.lang,moduleBlockStyle:module.descriptor.style,moduleStyle:module.descriptor.iconsList.style,computedStyle:module.descriptor.computedStyle}):module.type===types.O.form?react.createElement(Modules.Form,{moduleBlockStyle:module.descriptor.style,computedStyle:module.descriptor.computedStyle,formStructure:module.descriptor.form.structure,formStyle:module.descriptor.form.style}):react.createElement("p",null,"This module is not available yet"),react.createElement(StyledModuleMove,(0,esm_extends.Z)({},provided.dragHandleProps,{className:classnames_default()({show:isHovered||isSelected||snapshot.isDragging})}),react.createElement(Icon.Z,{name:"Move",width:19,height:18})),isSelected&&react.createElement(StyledListActions,null,react.createElement("li",{onClick:onConfirmDelete},react.createElement(Icon.Z,{name:"Trash"})),react.createElement("li",{onClick:onConfirmDuplicate},react.createElement(Icon.Z,{name:"Duplicate"}))),isHovered&&!isSelected&&react.createElement(StyledName,null,moduleName)))))},moduleItem_ModuleItem=react.memo(ModuleItem);try{ModuleItem.displayName="ModuleItem",ModuleItem.__docgenInfo={description:"",displayName:"ModuleItem",props:{module:{defaultValue:null,description:"",name:"module",required:!0,type:{name:"any"}},rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},rowIdx:{defaultValue:null,description:"",name:"rowIdx",required:!0,type:{name:"number"}},columnId:{defaultValue:null,description:"",name:"columnId",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},columnIdx:{defaultValue:null,description:"",name:"columnIdx",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/moduleItem/ModuleItem.tsx#ModuleItem"]={docgenInfo:ModuleItem.__docgenInfo,name:"ModuleItem",path:"src/components/TemplateBuilder/moduleItem/ModuleItem.tsx#ModuleItem"})}catch(__react_docgen_typescript_loader_error){}function ColStructure({columnData,className,rowId,rowIdx,columnIdx,...restProps}){const modulesData=columnData.modules,isEmptyCol=!(null!=modulesData&&modulesData.length),gridColumns=columnData["grid-columns"]||12,classes=classnames_default()(className,"col-structure",{"col--empty":!(null!=modulesData&&modulesData.length),[`hhg-col-${gridColumns}`]:gridColumns}),droppableId=`column|${columnData.uuid}`,columnStyle=(0,utils.qq)(columnData.style);return react.createElement(StyledColWrapper,(0,esm_extends.Z)({},restProps,{className:classes,style:columnStyle}),react.createElement(react_beautiful_dnd_esm.bK,{droppableId,direction:"vertical",type:"column-structure"},((provided,snapshot)=>react.createElement(StyledModuleList,(0,esm_extends.Z)({ref:provided.innerRef,className:"module-list","data-dragging-over":snapshot.isDraggingOver},provided.droppableProps),modulesData.map(((module,moduleIdx)=>react.createElement(moduleItem_ModuleItem,{key:module.uuid,module,index:moduleIdx,rowId,rowIdx,columnId:columnData.uuid,columnIdx}))),isEmptyCol&&react.createElement(ColModuleEmpty,{columnId:columnData.uuid}),react.createElement("div",{className:classnames_default()({hide:isEmptyCol})},provided.placeholder)))))}const colStructure_ColStructure=react.memo(ColStructure);try{ColStructure.displayName="ColStructure",ColStructure.__docgenInfo={description:"",displayName:"ColStructure",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},rowIdx:{defaultValue:null,description:"",name:"rowIdx",required:!0,type:{name:"number"}},columnIdx:{defaultValue:null,description:"",name:"columnIdx",required:!0,type:{name:"number"}},columnData:{defaultValue:null,description:"",name:"columnData",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/colStructure/ColStructure.tsx#ColStructure"]={docgenInfo:ColStructure.__docgenInfo,name:"ColStructure",path:"src/components/TemplateBuilder/colStructure/ColStructure.tsx#ColStructure"})}catch(__react_docgen_typescript_loader_error){}const rowDraggable_index_styled_Container=styled_components_browser_esm.ZP.div`
  width: 100%;
  position: relative;
  // min-height: 75px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;
    outline: 2px solid transparent;
    outline-offset: -2px;
    z-index: 1;
    transition: all 0.15s;
  }

  &.row--hovered,
  &.row--selected {
    &::before {
      outline-color: ${props=>props.theme.colors.primaryBase};
    }

    .tcl-drag-column-start &,
    .tcl-drag-control-start & {
      outline-color: transparent !important;
    }
  }

  &[data-hide-desktop='true'] .col-structure > div {
    opacity: 0.5;
    cursor: default;
    filter: blur(1px);
    z-index: 1;
  }
`,StyledMove=styled_components_browser_esm.ZP.div`
  position: absolute;
  left: 0;
  top: 50%;
  color: #fff;
  transform: translateY(-50%);
  background-color: ${props=>props.theme.colors.primaryBase};
  padding: 5px 8px 2px 8px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: grab;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
  transition: all 0.15s;

  &.show {
    opacity: 1;
    z-index: 3;
    pointer-events: auto;

    .tcl-drag-column-start &,
    .tcl-drag-control-start & {
      z-index: -1;
      opacity: 0;
      pointer-events: none;
    }
  }
`,StyledRowContent=styled_components_browser_esm.ZP.div`
  display: flex;
  // width: 600px;
  // max-width: 600px;
  margin: auto;
  // padding: 5px 0px;
`,index_styled_StyledListActions=(0,styled_components_browser_esm.ZP)(StyledListActions)`
  top: 10px;
  right: 10px;
  bottom: auto;
`,StyledHideOn=styled_components_browser_esm.ZP.div`
  &.hide-desktop::before {
    content: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='18' /%3E%3Cpath d='M7.1525 4.9263H14.3357V10.7322L15.2176 11.4455C15.2189 11.427 15.2278 11.4124 15.2278 11.3939V4.5624C15.2278 4.25143 14.9852 4 14.6859 4H6.00635L7.07354 4.86146L7.1525 4.9263Z' fill='white'/%3E%3Cpath d='M15.8953 13.2007L4.6586 4.11698C4.5408 4.02236 4.37016 4.0442 4.27846 4.16726L4.05687 4.46302C3.96518 4.58542 3.98683 4.76208 4.10399 4.85802L15.3414 13.9404C15.4585 14.0364 15.6292 14.0139 15.7215 13.8915L15.9425 13.5957C16.0348 13.4726 16.0138 13.296 15.8953 13.2007Z' fill='white'/%3E%3Cpath d='M12.8007 13.096C12.746 13.0133 12.6708 12.9485 12.5772 12.9161C12.5314 12.8995 12.4836 12.8856 12.4327 12.8856H11.1617L10.8994 11.956H11.3903L10.2442 11.0304H5.66401V7.32782L4.77319 6.60728V11.3943C4.77319 11.7046 5.01452 11.956 5.31379 11.956H9.12157L8.83821 12.8856H7.56726C7.31701 12.8856 7.11325 13.0967 7.11325 13.3574C7.11325 13.6174 7.31701 13.8285 7.56726 13.8285H12.4327C12.6829 13.8285 12.8867 13.6174 12.8867 13.3574C12.8867 13.2581 12.8504 13.1721 12.8007 13.096Z' fill='white'/%3E%3C/svg%3E ");
  }
  &.hide-mobile::before {
    content: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='18' /%3E%3Cpath d='M7.35449 7.51275L12.0118 11.2775H12.0462L7.35449 7.48563V7.51275Z' fill='white'/%3E%3Cpath d='M7.35449 6.29735L12.576 10.518V10.4816L7.35449 6.26096V6.29735Z' fill='white'/%3E%3Cpath d='M15.8953 13.2007L13.468 11.2383L12.5765 10.5177L7.35502 6.2971L6.46354 5.57723L4.65894 4.11698C4.5405 4.02236 4.36985 4.0442 4.27879 4.16726L4.05656 4.46302C3.9655 4.58542 3.98651 4.76208 4.10432 4.85802L6.46354 6.76488L7.35502 7.48541L12.0467 11.278L13.468 12.4266L15.3414 13.9404C15.4592 14.0364 15.6292 14.0139 15.7215 13.8915L15.9425 13.5957C16.0348 13.4726 16.0138 13.296 15.8953 13.2007' fill='white'/%3E%3Cpath d='M7.35471 11.2778V8.70074L6.46387 7.98087V13.1741C6.46387 13.5883 6.78607 13.9244 7.18533 13.9244H12.7462C13.0092 13.9244 13.2295 13.7709 13.3556 13.5519L10.543 11.2778H7.35471Z' fill='white'/%3E%3Cpath d='M7.35523 4.9263H12.5767V9.29382L13.4688 10.0137V4.74964C13.4688 4.33545 13.1454 4 12.7467 4H7.18585C6.90313 4 6.66434 4.17269 6.5459 4.41882L7.35523 5.07319V4.9263Z' fill='white'/%3E%3C/svg%3E%0A");
  }
  &::before {
    left: 0;
    top: -20px;
    z-index: 1;
    left: 0;
    background-color: #2d87f3;
    position: absolute;
    height: 20px;
  }
`;function _RowDraggableView({index,draggableId,classes,onClickWholeRow,onMouseEnter,onMouseLeave,containerStyle,contentComputedStyled,contentStyle,rowData,isHovered,isSelected,onConfirmDelete,onConfirmClone}){return react.createElement(react_beautiful_dnd_esm._l,{key:draggableId,draggableId,index},((provided,snapshot)=>react.createElement("div",(0,esm_extends.Z)({},provided.draggableProps,{ref:provided.innerRef}),react.createElement(rowDraggable_index_styled_Container,{className:classes,onClick:onClickWholeRow,onMouseEnter,onMouseLeave,style:containerStyle,"data-hide-desktop":contentComputedStyled.hideContentOnDesktop,"data-hide-mobile":contentComputedStyled.hideContentOnMobile},react.createElement(StyledRowContent,{style:contentStyle,className:"setting_messageWidth setting_messageBgColor setting_contentAlign"},rowData.columns.map(((column,columnIdx)=>react.createElement(colStructure_ColStructure,{columnData:column,key:column.uuid,rowId:rowData.uuid,rowIdx:index,columnIdx})))),react.createElement(StyledMove,(0,esm_extends.Z)({},provided.dragHandleProps,{className:classnames_default()({show:isHovered||isSelected||snapshot.isDragging})}),react.createElement(Icon.Z,{name:"Move"})),isSelected&&react.createElement(index_styled_StyledListActions,null,react.createElement("li",{onClick:onConfirmDelete},react.createElement(Icon.Z,{name:"Trash"})),react.createElement("li",{onClick:onConfirmClone},react.createElement(Icon.Z,{name:"Duplicate"}))),isHovered&&!isSelected&&react.createElement(StyledHideOn,{className:classnames_default()({"hide-desktop":"true"===String(contentComputedStyled.hideContentOnDesktop),"hide-mobile":"true"===String(contentComputedStyled.hideContentOnMobile)})})))))}const RowDraggableView=react.memo(_RowDraggableView);function RowDraggable({onMouseEnter:_onMouseEnter,onMouseLeave:_onMouseLeave,className,index,rowData}){const refCloneFeature=(0,react.useRef)(),{selectedId,hoveredId,setHoveredId,setSelectedId,onDeleteRow,onDuplicateRow}=(0,useBuilderContext.i)(),onClickWholeRow=(0,react.useCallback)((evt=>{evt.stopPropagation(),selectedId.uuid!==rowData.uuid&&setSelectedId({uuid:rowData.uuid,type:"row",data:rowData,rowId:rowData.uuid,rowIdx:index,columnId:"",columnIdx:-1,moduleIdx:-1})}),[selectedId.uuid,setSelectedId,index,rowData]),onMouseEnter=(0,react.useCallback)((evt=>{evt.target.closest('[data-rbd-draggable-id^="module|"]')||setHoveredId(rowData.uuid),_onMouseEnter&&_onMouseEnter(evt)}),[rowData.uuid,setHoveredId,_onMouseEnter]),onMouseLeave=(0,react.useCallback)((evt=>{evt.stopPropagation(),setHoveredId(""),_onMouseLeave&&_onMouseLeave(evt)}),[setHoveredId,_onMouseLeave]),isSelected=("row"===selectedId.type?selectedId.uuid:"")===rowData.uuid,isHovered=!isSelected&&hoveredId===rowData.uuid,classes=classnames_default()(className,"row-draggable-container",{"row--hovered":isHovered,"row--selected":isSelected}),draggableId=`row|${rowData.uuid}`,onConfirmDelete=(0,react.useCallback)((()=>{modal.Z.confirm({title:"Are you sure you want to delete this row?",icon:react.createElement(ExclamationCircleOutlined.Z,null),content:"This action cannot be undone",okText:"Delete",cancelText:"Cancel",onOk:()=>{onDeleteRow(rowData.uuid,index)}})}),[onDeleteRow,rowData.uuid,index]),onConfirmClone=(0,react.useCallback)((()=>{refCloneFeature.current||(onDuplicateRow(index),refCloneFeature.current=setTimeout((()=>{refCloneFeature.current=void 0}),1e3))}),[onDuplicateRow,index]),containerStyle=(0,react.useMemo)((()=>(0,utils.qq)(rowData.container.style)),[rowData.container.style]),contentStyle=(0,react.useMemo)((()=>(0,utils.qq)(rowData.content.style)),[rowData.content.style]),contentComputedStyled=rowData.content.computedStyle||{};return react.createElement(RowDraggableView,{index,draggableId,classes,onClickWholeRow,onMouseEnter,onMouseLeave,containerStyle,contentComputedStyled,contentStyle,rowData,isHovered,isSelected,onConfirmDelete,onConfirmClone})}const rowDraggable_RowDraggable=react.memo(RowDraggable);try{RowDraggable.displayName="RowDraggable",RowDraggable.__docgenInfo={description:"",displayName:"RowDraggable",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},rowData:{defaultValue:null,description:"",name:"rowData",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/rowDraggable/RowDraggable.tsx#RowDraggable"]={docgenInfo:RowDraggable.__docgenInfo,name:"RowDraggable",path:"src/components/TemplateBuilder/rowDraggable/RowDraggable.tsx#RowDraggable"})}catch(__react_docgen_typescript_loader_error){}const RowEmpty_StyledText=styled_components_browser_esm.ZP.p`
  font-size: 12px;
  margin: 5px 0 0 0;
  color: ${props=>props.theme.colors.primaryBase};
  text-align: center;
  white-space: nowrap;
  max-width: 100%;
  padding: 0 5px;
  text-overflow: ellipsis;
  overflow: hidden;
`,StyledRowEmpty=styled_components_browser_esm.ZP.div`
  height: 100%;
  width: 100%;
  min-height: 75px;
  color: ${props=>props.theme.colors.primaryBase};
  outline: 1px dashed ${props=>props.theme.colors.primaryBase};
  background: rgb(45 135 243 / 20%);
  outline-offset: -1px;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  lex-direction: column;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
`;function RowEmpty(){return react.createElement(StyledRowEmpty,null,react.createElement(Icon.Z,{name:"UpCircleSolid"}),react.createElement(RowEmpty_StyledText,null,"Drop row blocks here"))}var TemplateBuilderContext=__webpack_require__("./src/components/TemplateBuilder/TemplateBuilderContext.tsx"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),columns=__webpack_require__("./src/components/atoms/icons/columns/index.ts"),rowsTemplate=__webpack_require__("./src/components/atoms/icons/rowsTemplate/index.ts"),es_select=__webpack_require__("./node_modules/antd/es/select/index.js");const StyledSelect=(0,styled_components_browser_esm.ZP)(es_select.Z)`
  width: 100%;
  margin-bottom: 15px;
`;var object_path_immutable=__webpack_require__("./node_modules/object-path-immutable/esm/object-path-immutable.js"),sidebarPanelTitle=__webpack_require__("./src/components/atoms/sidebarPanelTitle/index.tsx"),widgetSectionTitle=__webpack_require__("./src/components/atoms/widgetSectionTitle/index.ts"),widgets=__webpack_require__("./src/components/atoms/widgets/index.ts");function SettingContent({data,rowIdx,columnIdx,moduleIdx,onUpdateModuleStyle,onUpdateBlockStyle,onDeleteModule,setSelectedId}){const[listWidgets,blockOptions]=(0,react.useMemo)((()=>function getConfigKey(moduleType){let listWidgets=[],blockOptions=[];return moduleType===types.O.heading&&(listWidgets=["Heading","FontFamily","FontWeight","FontSize","TextColor","TextAlign","LineHeight","LetterSpacing","BackgroundColor"],blockOptions=["Padding"]),moduleType===types.O.paragraph&&(listWidgets=["FontFamily","FontWeight","FontSize","TextColor","TextAlign","ParagraphSpacing","LineHeight","LetterSpacing"],blockOptions=["Padding"]),moduleType===types.O.list&&(listWidgets=["ListType","FontFamily","FontWeight","FontSize","TextColor","TextAlign","LineHeight","LetterSpacing"],blockOptions=["Padding"]),moduleType===types.O.divider&&(listWidgets=["DividerBorder","AlignComputed","WidthPercent","ModuleHideOn"],blockOptions=["Padding"]),moduleType===types.O.spacer&&(listWidgets=["HeightPixel","ModuleHideOn"],blockOptions=[]),moduleType===types.O.image&&(listWidgets=["ImageSizeAlign","ImageUrl"],blockOptions=["Padding","ModuleHideOn"]),moduleType===types.O.button&&(listWidgets=["FontFamily","FontWeight","BackgroundColor","TextColor","FontSize","TextAlignOuter","LineHeight","LetterSpacing","BorderRadius","ModulePadding","ModuleBorder","ModuleHideOn","ButtonLink"],blockOptions=["Padding"]),moduleType===types.O.footer&&(listWidgets=["BackgroundColor"],blockOptions=["Padding"]),moduleType===types.O.leadForm&&(listWidgets=["LeadFormSelect"],blockOptions=["Padding"]),moduleType===types.O.hhgSocial&&(listWidgets=["HHGMarkets"],blockOptions=["Padding"]),moduleType===types.O.form&&(listWidgets=["WidthPercent","TextAlignOuter","FontSizeOuter","FormManageFields","FormFieldOpts","FormLabelOpts","FormButtonOpts"],blockOptions=["Padding"]),[listWidgets,blockOptions]}(data.type)),[data.type]),moduleName=data.type.split("-").splice(-1)[0],handleMapWidget=widgetKey=>{const WidgetComp=widgets.$L[widgetKey],pathObj=widgets.Rq[widgetKey].replace("{module}",moduleName),valueFromPath=object_path_immutable.U2(data,pathObj);return WidgetComp?react.createElement(WidgetComp,{key:widgetKey,value:valueFromPath,name:moduleName,onChange:(path,value)=>{onUpdateModuleStyle({moduleData:data,rowIdx,columnIdx,moduleIdx,path:path.replace("{module}",moduleName),value})}}):null};return react.createElement("div",null,react.createElement(sidebarPanelTitle.E,{title:"Content Properties",onAction:type=>{"delete"===type&&modal.Z.confirm({title:"Are you sure you want to delete this module?",icon:react.createElement(ExclamationCircleOutlined.Z,null),content:"This action cannot be undone",okText:"Delete",cancelText:"Cancel",onOk:()=>{onDeleteModule(data.uuid,rowIdx,columnIdx)}}),"hide"===type&&setSelectedId(TemplateBuilderContext.Np)}}),listWidgets.map(handleMapWidget),react.createElement(widgetSectionTitle.h,{title:"Block Options"}),blockOptions.map((widgetKey=>{const pathObj=widgets.Rq[widgetKey],valueFromPath=object_path_immutable.U2(data,pathObj);return"Padding"===widgetKey?((pathObj,valueFromPath)=>{const value={"padding-top":valueFromPath["padding-top"]||"0px","padding-right":valueFromPath["padding-right"]||"0px","padding-bottom":valueFromPath["padding-bottom"]||"0px","padding-left":valueFromPath["padding-left"]||"0px"};return react.createElement(widgets.$L.Padding,{key:"padding",value,onChange:(path,newValue)=>{onUpdateBlockStyle({moduleData:data,rowIdx,columnIdx,moduleIdx,path,value:newValue})},name:moduleName})})(0,valueFromPath):handleMapWidget(widgetKey)})))}const settingContent_SettingContent=react.memo(SettingContent);try{SettingContent.displayName="SettingContent",SettingContent.__docgenInfo={description:"",displayName:"SettingContent",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},rowIdx:{defaultValue:null,description:"",name:"rowIdx",required:!0,type:{name:"number"}},columnIdx:{defaultValue:null,description:"",name:"columnIdx",required:!0,type:{name:"number"}},moduleIdx:{defaultValue:null,description:"",name:"moduleIdx",required:!0,type:{name:"number"}},onUpdateModuleStyle:{defaultValue:null,description:"",name:"onUpdateModuleStyle",required:!0,type:{name:"(params: TypeUpdateModule) => void"}},onUpdateBlockStyle:{defaultValue:null,description:"",name:"onUpdateBlockStyle",required:!0,type:{name:"(params: TypeUpdateBlock) => void"}},onDeleteModule:{defaultValue:null,description:"",name:"onDeleteModule",required:!0,type:{name:"(moduleId: string, rowIndex: number, columnIndex: number) => void"}},setSelectedId:{defaultValue:null,description:"",name:"setSelectedId",required:!0,type:{name:"Dispatch<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/settingContent/SettingContent.tsx#SettingContent"]={docgenInfo:SettingContent.__docgenInfo,name:"SettingContent",path:"src/components/TemplateBuilder/settingContent/SettingContent.tsx#SettingContent"})}catch(__react_docgen_typescript_loader_error){}const StyledSettingGlobalTab=styled_components_browser_esm.ZP.div`
  padding-top: 16px;
  height: 100%;
  overflow: overlay;

  ${StyledScrollBars}
`,listGlobalWidgets=["ContentAreaWidth","ContentAreaAlign","BodyBackgroundColor","ContentAreaBgColor","BodyBgImage","ContentFontFamily","ContentLinkColor"];const settingGlobalTab_SettingGlobalTab=function SettingGlobalTab(){const{builderData,onUpdateBodyStyle}=(0,useBuilderContext.i)(),data=builderData.body;return react.createElement(StyledSettingGlobalTab,null,react.createElement(widgetSectionTitle.h,{title:"General Options"}),listGlobalWidgets.map((widgetKey=>{const WidgetComp=widgets.$L[widgetKey],pathObj=widgets.Rq[widgetKey],valueFromPath=object_path_immutable.U2(data,pathObj);return WidgetComp?react.createElement(WidgetComp,{key:widgetKey,value:valueFromPath,name:"",onChange:(path,value)=>{onUpdateBodyStyle({path,value})}}):null})))};var customizeColumns=__webpack_require__("./src/components/atoms/customizeColumns/index.ts");const listRowWidgets=["RowBgColor","RowContentBgColor","RowColStackMobile","RowColReverseStackMobile","RowBgImage","RowContentBgImage","ContentHideOn"];function SettingRowStyle({data,rowIdx,onUpdateRowStyle,onUpdateColumnStyle,onDeleteRow,onUpdateColumnGrids,onUpdateSwapColumnGrids,setSelectedId}){const onActionRowPanel=(0,react.useCallback)((type=>{"delete"===type&&modal.Z.confirm({title:"Are you sure you want to delete this row?",icon:react.createElement(ExclamationCircleOutlined.Z,null),content:"This action cannot be undone",okText:"Delete",cancelText:"Cancel",onOk:()=>{onDeleteRow(data.uuid,rowIdx)}}),"hide"===type&&setSelectedId(TemplateBuilderContext.Np)}),[setSelectedId,onDeleteRow,rowIdx,data.uuid]);return react.createElement("div",null,react.createElement(sidebarPanelTitle.E,{title:"Row Properties",onAction:onActionRowPanel}),listRowWidgets.map((widgetKey=>{const WidgetComp=widgets.$L[widgetKey],pathObj=widgets.Rq[widgetKey],valueFromPath=object_path_immutable.U2(data,pathObj);return WidgetComp?react.createElement(WidgetComp,{key:widgetKey,value:valueFromPath,name:"",onChange:(path,value)=>{rowIdx>=0&&onUpdateRowStyle({rowIdx,path,value})}}):null})),react.createElement(customizeColumns.A,{columns:data.columns,onUpdateCols:(0,react.useCallback)((newGridCols=>{onUpdateColumnGrids({rowIdx,newGridCols})}),[onUpdateColumnGrids,rowIdx]),onUpdateStyle:(0,react.useCallback)((({path,value,columnIdx})=>{onUpdateColumnStyle({path,value,rowIdx,columnIdx})}),[onUpdateColumnStyle,rowIdx]),onUpdateSwapCols:(0,react.useCallback)((()=>{onUpdateSwapColumnGrids({rowIdx})}),[onUpdateSwapColumnGrids,rowIdx])}))}const settingRowStyle_SettingRowStyle=react.memo(SettingRowStyle);try{SettingRowStyle.displayName="SettingRowStyle",SettingRowStyle.__docgenInfo={description:"",displayName:"SettingRowStyle",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},rowIdx:{defaultValue:null,description:"",name:"rowIdx",required:!0,type:{name:"number"}},onUpdateRowStyle:{defaultValue:null,description:"",name:"onUpdateRowStyle",required:!0,type:{name:"(params: TypeUpdateRow) => void"}},onUpdateColumnStyle:{defaultValue:null,description:"",name:"onUpdateColumnStyle",required:!0,type:{name:"(params: TypeUpdateColumn) => void"}},onUpdateColumnGrids:{defaultValue:null,description:"",name:"onUpdateColumnGrids",required:!0,type:{name:"(params: TypeUpdateColumnGrids) => void"}},onUpdateSwapColumnGrids:{defaultValue:null,description:"",name:"onUpdateSwapColumnGrids",required:!0,type:{name:"(params: TypeUpdateSwapColumnGrids) => void"}},onDeleteRow:{defaultValue:null,description:"",name:"onDeleteRow",required:!0,type:{name:"(rowId: string, rowIdx: number) => void"}},setSelectedId:{defaultValue:null,description:"",name:"setSelectedId",required:!0,type:{name:"Dispatch<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/settingRowStyle/SettingRowStyle.tsx#SettingRowStyle"]={docgenInfo:SettingRowStyle.__docgenInfo,name:"SettingRowStyle",path:"src/components/TemplateBuilder/settingRowStyle/SettingRowStyle.tsx#SettingRowStyle"})}catch(__react_docgen_typescript_loader_error){}const controls=[{icon:"Title",support:"both"},{icon:"Paragraph",support:"both"},{icon:"List",support:"both"},{icon:"Image",support:"both"},{icon:"Divider",support:"both"},{icon:"Spacer",support:"both"},{icon:"Button",support:"both"},{icon:"HHGSocial",support:"both"},{icon:"LeadForm",support:"landing",disabled:!0},{icon:"Form",support:"landing",disabled:!1}],scrollToOpts={top:0,left:0,behavior:"smooth"};function SidebarSettings({activeTabKey,onChangeTab,selectedId,setSelectedId,getRenderControlItem,onUpdateModuleStyle,onUpdateBlockStyle,onUpdateRowStyle,onUpdateColumnStyle,onDeleteRow,onDeleteModule,onUpdateColumnGrids,onUpdateSwapColumnGrids,getRenderCloneColumnItem}){const settingRowRef=(0,react.useRef)(null),settingContentRef=(0,react.useRef)(null),[isShowSidebar,setIsShowSidebar]=(0,react.useState)(!0),[rowsTypeSelected,setRowsTypeSelected]=(0,react.useState)("empty");return(0,react.useEffect)((()=>{requestAnimationFrame((()=>{var _settingRowRef$curren,_settingContentRef$cu;null==(_settingRowRef$curren=settingRowRef.current)||_settingRowRef$curren.scrollTo(scrollToOpts),null==(_settingContentRef$cu=settingContentRef.current)||_settingContentRef$cu.scrollTo(scrollToOpts)}))}),[selectedId.uuid]),react.createElement(StyledSidebar,{"data-show":isShowSidebar},react.createElement(StyledTabs,{activeKey:activeTabKey,onChange:onChangeTab,onTabClick:onChangeTab,type:"card"},react.createElement(tabs.Z.TabPane,{tab:"Content",key:"content"},react.createElement(StyledTabContent,{"data-if":!selectedId.uuid},react.createElement(react_beautiful_dnd_esm.bK,{isDropDisabled:!0,droppableId:"controls",type:"column-structure",direction:"horizontal",renderClone:getRenderControlItem},((provided,snapshot)=>react.createElement(StyledListModule,{ref:provided.innerRef},controls.map(((control,idx)=>{const icon=control.icon;return icon===snapshot.draggingFromThisWith?react.createElement("div",{key:icon},react.createElement(StyledIconBlock,{icon})):react.createElement(react_beautiful_dnd_esm._l,{draggableId:icon,index:idx,key:icon,isDragDisabled:control.disabled},((provided,snapshot)=>react.createElement("div",(0,esm_extends.Z)({},provided.draggableProps,provided.dragHandleProps,{ref:provided.innerRef}),react.createElement(StyledIconBlock,{icon,disabled:control.disabled}))))})),react.createElement("div",{className:"hide"},provided.placeholder))))),react.createElement(StyledTabContentSetting,{"data-if":!!selectedId.uuid&&"module"===selectedId.type,ref:settingContentRef},selectedId.data&&"module"===selectedId.type&&react.createElement(settingContent_SettingContent,{key:selectedId.uuid,data:selectedId.data,rowIdx:selectedId.rowIdx,columnIdx:selectedId.columnIdx,moduleIdx:selectedId.moduleIdx,onUpdateModuleStyle,onUpdateBlockStyle,onDeleteModule,setSelectedId}))),react.createElement(tabs.Z.TabPane,{tab:"Rows",key:"rows"},react.createElement(StyledTabContent,{"data-if":!selectedId.uuid},react.createElement(StyledSelect,{value:rowsTypeSelected,onChange:val=>setRowsTypeSelected(val)},react.createElement(StyledSelect.Option,{value:"default"},"Default"),react.createElement(StyledSelect.Option,{value:"empty"},"Empty")),react.createElement(react_beautiful_dnd_esm.bK,{isDropDisabled:!0,droppableId:"columns-placeholder",type:"rows",direction:"horizontal",renderClone:getRenderCloneColumnItem},((provided,snapshot)=>{const keysIconCol="empty"===rowsTypeSelected?Object.keys(columns):Object.keys(rowsTemplate);return react.createElement(StyledListColPlaceholder,{ref:provided.innerRef},keysIconCol.map(((icon,idx)=>icon===snapshot.draggingFromThisWith?react.createElement("div",{key:icon},react.createElement(StyledColumnBlock,{icon})):react.createElement(react_beautiful_dnd_esm._l,{draggableId:icon,index:idx,key:icon},((provided,snapshot)=>react.createElement("div",(0,esm_extends.Z)({},provided.draggableProps,provided.dragHandleProps,{ref:provided.innerRef}),react.createElement(StyledColumnBlock,{icon})))))),react.createElement("div",{className:"hide"},provided.placeholder))}))),react.createElement(StyledTabContentSetting,{"data-if":!!selectedId.uuid&&"row"===selectedId.type,ref:settingRowRef},selectedId.data&&"row"===selectedId.type&&react.createElement(settingRowStyle_SettingRowStyle,{key:selectedId.uuid,data:selectedId.data,rowIdx:selectedId.rowIdx,onUpdateRowStyle,onUpdateColumnStyle,onDeleteRow,onUpdateColumnGrids,setSelectedId,onUpdateSwapColumnGrids}))),react.createElement(tabs.Z.TabPane,{tab:"Settings",key:"settings"},"settings"===activeTabKey&&react.createElement(settingGlobalTab_SettingGlobalTab,null))),react.createElement(es_button.Z,{type:"primary",shape:"circle",className:"sidebar-hide",icon:react.createElement(Icon.Z,{name:"ArrowLeft"}),onClick:()=>setIsShowSidebar((v=>!v))}))}const sidebarSettings_SidebarSettings=react.memo(SidebarSettings);try{SidebarSettings.displayName="SidebarSettings",SidebarSettings.__docgenInfo={description:"",displayName:"SidebarSettings",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateBuilder/sidebarSettings/SidebarSettings.tsx#SidebarSettings"]={docgenInfo:SidebarSettings.__docgenInfo,name:"SidebarSettings",path:"src/components/TemplateBuilder/sidebarSettings/SidebarSettings.tsx#SidebarSettings"})}catch(__react_docgen_typescript_loader_error){}const getRenderControlItem=(provided,snapshot,rubric)=>react.createElement("div",(0,esm_extends.Z)({},provided.draggableProps,provided.dragHandleProps,{ref:provided.innerRef}),react.createElement(StyledIconBlock,{icon:rubric.draggableId})),getRenderCloneColumnItem=(provided,snapshot,rubric)=>react.createElement("div",(0,esm_extends.Z)({},provided.draggableProps,provided.dragHandleProps,{ref:provided.innerRef}),react.createElement(StyledColumnBlock,{icon:rubric.draggableId}));function TemplateBuilder(){const[activeTabKey,setActiveTabKey]=(0,react.useState)("content"),{setSelectedId,builderData,onDragEnd,selectedId,onUpdateModuleStyle,onUpdateBlockStyle,onUpdateRowStyle,onUpdateColumnStyle,onDeleteRow,onDeleteModule,onUpdateColumnGrids,onUpdateSwapColumnGrids}=(0,useBuilderContext.i)();(0,react.useEffect)((()=>{"row"===selectedId.type&&setActiveTabKey("rows"),"module"===selectedId.type&&setActiveTabKey("content")}),[selectedId.type]);const onChangeTab=(0,react.useCallback)((key=>{setActiveTabKey(key),setSelectedId(TemplateBuilderContext.Np)}),[setSelectedId]),onDragStart=(0,react.useCallback)(((initial,provided)=>{initial.draggableId.startsWith("Column")&&document.body.classList.add("tcl-drag-column-start"),initial.source.droppableId.startsWith("controls")&&document.body.classList.add("tcl-drag-control-start")}),[]);if((0,react.useEffect)((()=>{utils.eM}),[builderData]),!builderData)return react.createElement(row.Z,{align:"middle",justify:"center",style:{height:"100%"}},react.createElement(spin.Z,{size:"large"}));const bodyStyle=(0,utils.qq)(builderData.body.container.style,builderData.body.content.style);return react.createElement(react_beautiful_dnd_esm.Z5,{onDragEnd,onDragStart},react.createElement(Container,null,react.createElement(StyledContentWrap,null,react.createElement(StyledContent,{className:"styled-content",style:bodyStyle,$bodyContentComputedStyle:builderData.body.content.computedStyle},react.createElement(react_beautiful_dnd_esm.bK,{droppableId:"all-rows",direction:"vertical",type:"rows"},((provided,snapshot)=>react.createElement(StyledWrapAllRows,(0,esm_extends.Z)({},provided.droppableProps,{ref:provided.innerRef}),builderData.rows.map(((row,idx)=>react.createElement(rowDraggable_RowDraggable,{key:row.uuid,index:idx,rowData:row}))),0===builderData.rows.length&&react.createElement(RowEmpty,null),provided.placeholder))))),react.createElement(sidebarSettings_SidebarSettings,{activeTabKey,onChangeTab,selectedId,setSelectedId,getRenderControlItem,onUpdateModuleStyle,onUpdateBlockStyle,onUpdateRowStyle,onUpdateColumnStyle,onDeleteRow,onDeleteModule,onUpdateColumnGrids,onUpdateSwapColumnGrids,getRenderCloneColumnItem})))}const TemplateBuilder_TemplateBuilder=react.memo(TemplateBuilder)}}]);
//# sourceMappingURL=395.0872ec05.iframe.bundle.js.map