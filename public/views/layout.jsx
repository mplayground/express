/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2016 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

import React from 'react';

import TopMenu from './TopMenu.jsx'
import { Row } from 'react-bootstrap'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

 export default class Layout extends React.Component {
   render() {
     let head = {
      __html:`
        <meta charSet='utf-8' />
        <title>React Engine Example App</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.29.5/react-bootstrap.min.js"></script>
       `
     };
     return (
      <html>
        <head dangerouslySetInnerHTML={head} />
        <body>
          <TopMenu/>
          <div>
            {this.props.children}
          </div>
          <script src='bundle.js'></script>
        </body>
      </html>
     )
   }
 }

// export default class Layout extends React.Component {
//   render() {
//     return (
//       <html>
//         <head>
//           <meta charSet='utf-8' />
//           <title>React Engine Example App</title>
//           <link rel='stylesheet' href='/styles.css'></link>
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"></link>
//           <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
//           <script src='/bootstrap.min.js'></script>
//         </head>
//         <body>
//           <div>
//             <ul>
//               <li><Link to={'/'}>메인</Link></li>
//               <li><Link to={'/login'}>로그인</Link></li>
//               <li><Link to={'/signup'}>회원가입</Link></li>
//             </ul>
//           </div>
//           <br />
//           <div>
//             {/* Router now automatically populates this.props.children of your components based on the active route. https://github.com/rackt/react-router/blob/latest/CHANGES.md#routehandler */}
//             {this.props.children}
//           </div>
//           <script src='/bundle.js'></script>
//         </body>
//       </html>
//     );
//   }
// }
