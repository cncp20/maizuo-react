import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'app': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'flex',
    'flexDirection': 'column'
  },
  'top-bar': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'background': '#282828',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#fff',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'zIndex': '10'
  },
  'top-bar iconfont': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  'nav': {
    'background': '#282828',
    'width': [{ 'unit': '%H', 'value': 0.66 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'boxSizing': 'border-box',
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '3'
  },
  'nav ul': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'nav ul li': {
    'color': '#333',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'boxSizing': 'border-box',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#333' }, { 'unit': 'string', 'value': 'solid' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'nav ul li a': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'color': '#eee',
    'display': 'flex',
    'justifyContent': 'space-between'
  },
  'home': {
    'flex': '1',
    'overflow': 'auto',
    'background': '#ebebeb',
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'home #banner-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'position': 'relative',
    'overflow': 'hidden'
  },
  'home #banner-container banner': {
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  'home #banner-container banner li': {
    'float': 'left',
    'position': 'relative'
  },
  'home #banner-container banner li img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  'home now-play > a': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#999' }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '30px',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 130 }],
    'textAlign': 'center'
  },
  'home coming-soon > a': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#999' }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '30px',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 130 }],
    'textAlign': 'center'
  },
  'home line': {
    'display': 'flex',
    'marginBottom': [{ 'unit': 'px', 'value': 60 }]
  },
  'home line p': {
    'flex': '1',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#aaa' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'home line span': {
    'background': '#aaa',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'borderRadius': '2px',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': -10 }],
    'color': '#fff'
  },
  'home-item': {
    'boxSizing': 'border-box',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '#666' }]
  },
  'home-item img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  'home-item home-info': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'home-item home-info h1': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'home-item home-info h1 span': {
    'color': '#f00',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'float': 'right'
  },
  'home-item home-info p': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'movie': {
    'flex': '1',
    'overflow': 'auto',
    'background': '#ebebeb',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 20 }]
  },
  'movie movie-tab': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'orange' }, { 'unit': 'string', 'value': 'solid' }],
    'display': 'flex'
  },
  'movie movie-tab a': {
    'flex': '1',
    'height': [{ 'unit': 'px', 'value': 45 }],
    'lineHeight': [{ 'unit': 'px', 'value': 45 }],
    'textAlign': 'center',
    'boxSizing': 'border-box'
  },
  'movie movie-tab aactive': {
    'color': 'orange',
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'orange' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'movie-item': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#aaa' }, { 'unit': 'string', 'value': 'dashed' }]
  },
  'movie-item a': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex'
  },
  'movie-item a img': {
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 82 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'movie-item a movie-info': {
    'height': [{ 'unit': 'px', 'value': 82 }],
    'flex': '1',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'space-between'
  },
  'movie-item a movie-info h1': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'movie-item a movie-info h1 span': {
    'color': '#f00',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'float': 'right'
  },
  'movie-item a movie-info p': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'cinema': {
    'flex': '1',
    'overflow': 'auto',
    'background': '#ebebeb'
  },
  'cinema-item': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#aaa' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'cinema-item h1': {
    'whiteSpace': 'nowrap',
    'textOverflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'cinema-item p': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#aaa',
    'lineHeight': [{ 'unit': 'px', 'value': 15 }]
  },
  'cinema-item labels': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'cinema-item labels span': {
    'background': 'orange',
    'color': '#fff',
    'borderRadius': '3px',
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }]
  },
  'shop': {
    'flex': '1',
    'overflow': 'auto',
    'background': '#ebebeb'
  },
  'shop category': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'background': '#fff'
  },
  'shop category li': {
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center'
  },
  'shop category li img': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'shop category li p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'shop > p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }]
  },
  'shop-item': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ddd' }, { 'unit': 'string', 'value': 'solid' }],
    'display': 'flex',
    'background': '#fff'
  },
  'shop-item img': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'shop-item shop-info': {
    'width': [{ 'unit': 'px', 'value': 230 }],
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'space-between'
  },
  'shop-item shop-info h1': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'shop-item shop-info h2': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#aaa'
  },
  'shop-item shop-info p': {
    'color': '#f00',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'shop-item shop-info p span': {
    'color': '#aaa',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'detail': {
    'flex': '1',
    'overflow': 'auto',
    'background': '#ebebeb'
  },
  'detail img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 210 }]
  },
  'detail info': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'detail h1': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'detail p': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }]
  }
});
