import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

export default class App extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
    loading: false,
    data: [
        {
          name:{
            first:'Shopwise',
            last: 'Success . 200 AED'
          },
          email:'fasdf@gasdf.com',
          time:'3:20',
          picture: {
              thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }
        },

        {
          name:{
            first:'Umbrella',
            last: 'Success . 200 AED'
          },
          email:'fasdf@gasdf.com',
          time:'1:30',
          picture: {
              thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }
        },

        {
          name:{
            first:'The Lucky Ones',
            last: 'Failed . 200 AED'
          },
          email:'fasdf@gasdf.com',
          time:'May 12',
          picture: {
              thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }
        },

        {
          name:{
            first:'Cribys & Bros',
            last: 'Success . 200 AED'
          },
          email:'fasdf@gasdf.com',
          time:'May 09',
          picture: {
              thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }
        },

        {
          name:{
            first:'Utopia',
            last: 'Success . 200 AED'
          },
          email:'fasdf@gasdf.com',
          time:'April 23',
          picture: {
              thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }
        }

    ],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false,
  
    entries:[
      { 
        title:''          
      },
      { 
        title:''          
      },
      { 
        title:''          
      }]

    };
  }
   
  makeRemoteRequest = () => {
    // const { page, seed } = this.state;
    // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    // this.setState({ loading: true });
   
    // fetch(url)
    // .then(res => res.json())
    // .then(res => {
    // this.setState({
    // data: page === 1 ? res.results : [...this.state.data, ...res.results],
    // error: res.error || null,
    // loading: false,
    // refreshing: false
    // });
    // })
    // .catch(error => {
    // this.setState({ error, loading: false });
    // });
    };
   

  handleRefresh = () => {
    this.setState(
    {
    page: 1,
    seed: this.state.seed + 1,
    refreshing: true
    },
    () => {
    this.makeRemoteRequest();
    }
    );
    };
   
    handleLoadMore = () => {
    this.setState(
    {
    page: this.state.page + 1
    },
    () => {
    this.makeRemoteRequest();
    }
    );
    };

  renderSeparator = () => {
    return (
    <View
    style={{
    height: 1,
    width: "86%",
    backgroundColor: "#ffffff",
    marginLeft: "14%"
    }}
    />
    );
    };

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={ require('./images/fgclothing.png')}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    showSpinner={true}
                    {...parallaxProps}
                />                
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }

    render () {
        return (

          <View  style={{flex:1}}>
           <View style={{flex:1,backgroundColor:'white',}}>
           <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                sliderWidth={500}
                itemWidth={120}
            />
            </View>
            <View
            style={{
            height: 1,
            width: "72%",
            backgroundColor: "#333333",
            marginLeft: "14%",
            marginRight:"14%"
            }}
            />
            <View style={{flex:2, backgroundColor:'white'}}>

            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
            <ListItem
            roundAvatar
            title={item.name.first}
            subtitle={item.name.last}
            avatar={{uri: item.picture.thumbnail}}
            containerStyle={{ borderBottomWidth: 0, }}
            />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
            />
            </List>

            </View>
            <View style={{flex:1,backgroundColor:'white',}}>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

  imageContainer: {
    width:120,
    height:120,  
    borderRadius:120 /2,
    borderColor:'#EA2E08'
  },
  image:{
    width:120,
    height:120,  
    borderRadius:120 /2,
    borderColor:'#EA2E08'
  },
  title:{

  },
  item: {
    width:120,
    height:120,  
    borderRadius:120 /2,
    borderColor:'#EA2E08'

  }

})