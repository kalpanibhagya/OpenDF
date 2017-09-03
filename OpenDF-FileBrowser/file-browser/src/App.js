import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import MuiTreeList from './MuiTreeList'
import TreeList from './TreeList'
import injectTapEventPlugin from 'react-tap-event-plugin'
import logo from './logo.svg';
import './App.css';

injectTapEventPlugin()

const listItems = [{  
      depth:0,
      children:[  

      ],
      _styles:{  
         root:{  
            paddingLeft:-16,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false
   },
   {  
      title:"Downloads",
      depth:1,
      parentIndex:0,
      children:[  
         2,
         5
      ],
      disabled:false,
      _styles:{  
         root:{  
            paddingLeft:0,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:true,
      _primaryText:"Downloads"
   },
   {  
      title:"React Tutorial",
      depth:2,
      children:[  
         3,
         4
      ],
      parentIndex:1,
      disabled:false,
      _styles:{  
         root:{  
            paddingLeft:16,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"React Tutorial"
   },
   {  
      title:"Redux-saga Getting Started",
      depth:3,
      parentIndex:2,
      disabled:false,
      content:"Redux-saga is a redux middleware library, that is designed to make handling side effects in your redux app nice and simple. It achieves this by leveraging an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous, and is very easy to test.",
      _styles:{  
         root:{  
            paddingLeft:32,
            backgroundColor:"rgba(0,0,0,0.2)",
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Redux-saga Getting Started"
   },
   {  
      title:"Git Tutorial",
      depth:3,
      parentIndex:2,
      disabled:false,
      content:"Git is currently the most popular implementation of a distributed version control system. Git originates from the Linux kernel development and was founded in 2005 by Linus Torvalds. Nowadays it is used by many popular open source projects, e.g., the Android or the Eclipse developer teams, as well as many commercial organizations.The core of Git was originally written in the programming language _C, but Git has also been re-implemented in other languages, e.g., Java, Ruby and Python.",
      _styles:{  
         root:{ 
            paddingLeft:32,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Git Tutorial"
   },
   {  
      title:"Testing React Apps",
      depth:2,
      children:[  
         6,
         7
      ],
      disabled:false,
      parentIndex:1,
      _styles:{  
         root:{  
            paddingLeft:16,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Testing React Apps"
   },
   {  
      title:"React-boilerplate",
      depth:3,
      parentIndex:5,
      disabled:false,
      content:"React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.",
      _styles:{  
         root:{  
            "paddingLeft":32,
            "backgroundColor":null,
            "height":"48px",
            "cursor":"pointer",
            "color":"rgba(0,0,0,0.87)",
            "overflow":"hidden",
            "transform":"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"React-boilerplate"
   },
   {  
      title:"Introduction to J2EE",
      depth:3,
      parentIndex:5,
      disabled:false,
      content:"React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.",
      _styles:{  
         root:{  
            paddingLeft:32,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Introduction to J2EE"
   },
   {  
      title:"Documents",
      depth:1,
      parentIndex:0,
      disabled:false,
      children:[  
         9,
         12
      ],
      _styles:{  
         root:{  
            paddingLeft:0,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:true,
      _primaryText:"Documents"
   },
   {  
      title:"Introduction to React",
      depth:2,
      parentIndex:8,
      disabled:false,
      children:[  
         10,
         11
      ],
      _styles:{  
         root:{  
            paddingLeft:16,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Introduction to React"
   },
   {  
      title:"Writing React Components",
      depth:3,
      parentIndex:9,
      disabled:false,
      content:"React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.",
      _styles:{  
         root:{  
            paddingLeft:32,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Writing React Components"
   },
   {  
      title:"Composing React Components",
      depth:3,
      parentIndex:9,
      disabled:false,
      content:"React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.",
      _styles:{  
         root:{  
            paddingLeft:32,
            backgroundColor:null,
            height:"48px",
            cursor:"pointer",
            color:"rgba(0,0,0,0.87)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Composing React Components"
   },
   {  
      title:"React Components",
      depth:2,
      parentIndex:8,
      disabled:true,
      children:[  
         13,
         14
      ],
      _styles:{  
         root:{  
            paddingLeft:16,
            backgroundColor:null,
            height:"48px",
            cursor:"not-allowed",
            color:"rgba(0,0,0,0.4)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"React Components"
   },
   {  
      title:"Props and State in React",
      parentIndex:12,
      depth:3,
      disabled:true,
      content:"React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.",
      _styles:{  
         root:{  
            paddingLeft:32,
            backgroundColor:null,
            height:"48px",
            cursor:"not-allowed",
            color:"rgba(0,0,0,0.4)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Props and State in React"
   },
   {  
      title:"Component Lifecycle",
      parentIndex:12,
      depth:3,
      disabled:true,
      content:"React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.",
      _styles:{  
         root:{  
            paddingLeft:32,
            backgroundColor:null,
            height:"48px",
            cursor:"not-allowed",
            color:"rgba(0,0,0,0.4)",
            overflow:"hidden",
            transform:"translateZ(0)"
         }
      },
      _shouldRender:false,
      _primaryText:"Component Lifecycle"
   }];

const files = listItems
  .map((listItem, i) => {
    if (!listItem.children) {
      return i
    } else {
      return null
    }
  })
  .filter((listItemIndex) => !!listItemIndex)

class App extends Component {
  constructor(props) {
    super(props)

    const firstFile = files[0]

    const listItemIsEnabled = listItems.map((listItem, i) => {
      if (i >= 12) {
      return false
      } else {
      return true
      }
    })

    this.state = {
      expandedListItems: [],
      activeListItem: firstFile,
      listItemIsEnabled,
      listItems,
      searchTerm: '',
      isUsingMuiTheme: true
    }
    this.collapseAll = this.collapseAll.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleTouchTapInSearchMode = this.handleTouchTapInSearchMode.bind(this)
    this.moveToPrev = this.moveToPrev.bind(this)
    this.moveToNext = this.moveToNext.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  collapseAll() {
    this.setState({expandedListItems: []})
  }

  handleSearch(searchTerm) {
    this.setState({searchTerm})
  }

  handleTouchTap(listItem, index) {
    if (listItem.children) {
      const indexOfListItemInArray = this.state.expandedListItems.indexOf(index)
      if  (indexOfListItemInArray === -1) {
        this.setState({
          expandedListItems: this.state.expandedListItems.concat([index])
        })
      } else {
        let newArray = [].concat(this.state.expandedListItems)
        newArray.splice(indexOfListItemInArray, 1)
        this.setState({
          expandedListItems: newArray
        })
      }
    } else {
      this.setState({
        activeListItem: index
      })
    } 
  }

  handleTouchTapInSearchMode(listItem, index) {
    if (!listItem.children) {
      const expandedListItems = getAllParents(listItem, listItems)

      this.setState({
        activeListItem: index,
        expandedListItems,
        searchTerm: ''
      })
    }
  }

  moveToPrev() {
    const index = files.indexOf(this.state.activeListItem)
    const nextActiveListItem = files[files.indexOf(this.state.activeListItem) - 1]
    if (index !== 0 && !this.state.listItems[nextActiveListItem].disabled) {
      this.setState({
        activeListItem: nextActiveListItem
      })
    }
  }

  moveToNext() {
    const index = files.indexOf(this.state.activeListItem)
    const nextActiveListItem = files[files.indexOf(this.state.activeListItem) + 1]
    if (index !== files.length - 1 && !this.state.listItems[nextActiveListItem].disabled) {
      this.setState({
        activeListItem: nextActiveListItem
      })
    }
  }

  handleChange(e, i, value) {
    this.setState({
      isUsingMuiTheme: value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const {activeListItem, listItems} = this.state
    if (activeListItem !== prevState.activeListItem) {
      const expandedListItems = getAllParents(listItems[activeListItem], listItems)
      this.setState({
        expandedListItems: expandedListItems
      })
    }
  }

  render() {
    const {listItems, listItemIsEnabled, expandedListItems, activeListItem, searchTerm} = this.state

  const icons = {
    leftIconCollapsed: <i style={{height: 16, width: 16, color: '#CCCCCC'}} className="fa fa-caret-right" />,
    leftIconExpanded: <i style={{height: 16, width: 16, color: '#CCCCCC'}} className="fa fa-caret-down" />
  }

  let treeListJSX
  if (this.state.isUsingMuiTheme) {
    treeListJSX = (
            <MuiTreeList 
              listItems={listItems}
              contentKey={'title'}
              useFolderIcons={true}
              haveSearchbar={true}
              listItemIsEnabled={listItemIsEnabled}
              expandedListItems={expandedListItems}
              activeListItem={activeListItem}
              handleTouchTap={this.handleTouchTap}
              handleTouchTapInSearchMode={this.handleTouchTapInSearchMode}
              handleSearch={this.handleSearch}
              searchTerm={searchTerm}
              >
              <Subheader>OpenDF - File Browser</Subheader>
            </MuiTreeList>      
    )
  } 
    return (
      <MuiThemeProvider>
        <div>
          <Drawer
            open={true}
            width={400}>
            {treeListJSX}
          </Drawer>
          <div style={{paddingLeft: 400}}>
            <div style={{width: 600, height: 400, margin: '20px auto'}}>
              <div style={{marginTop: 20}}>
                <RaisedButton 
                  label="Collapse All"
                  primary={true}
                  style={{marginRight: 10}}
                  onClick={this.collapseAll} />
                <RaisedButton 
                  label="Previous"
                  secondary={true}
                  style={{marginRight: 10}}
                  onClick={this.moveToPrev} />
                <RaisedButton 
                  label="Next"
                  secondary={true}
                  onClick={this.moveToNext} />
              </div>
              <Card
                style={{marginTop: 20}}>
                <CardTitle title={listItems[activeListItem].title} />
                <CardText>
                  {listItems[activeListItem].content}
                </CardText>
              </Card>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;

function getAllParents(listItem, listItems, parents=[]) {
  if (listItem.parentIndex) {
    return getAllParents(listItems[listItem.parentIndex], listItems, parents.concat([listItem.parentIndex]))
  } else {
    return parents
  }
}
