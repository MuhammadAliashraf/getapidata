import React from 'react'
import { Image, ScrollView, ActivityIndicator, Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {
  const [data, setData] = useState([])
  // console.log(data);
  const [loading, setloading] = useState(true);
  const [filterdata, setfilterdata] = useState([]);
  const [enterdata, setenterdata] = useState('');
  console.log(enterdata)

  const filtersearch=(txt)=>{
    if(txt){
        const newdata=data.filter((item)=>{
        let itemdata=item.title?item.title.toUpperCase():''.toUpperCase();
        let datatxt=txt.toUpperCase();
        return  itemdata.indexOf(datatxt)>-1;
      });
      setfilterdata(newdata);
      setenterdata(txt)
    }
    else{
      setfilterdata(data);
      setenterdata(txt)
    }
  }

  let getData = () => {
    axios.get("https://dummyjson.com/products/")
      .then((res) => {
        setData(res.data.products)
        setloading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <View style={styles.bg}>
      <Text style={styles.heading} >Store.com</Text>
      <View  style={styles.searchbox}>
      <TextInput onChangeText={txt=>filtersearch(txt)} value={enterdata} style={styles.input} placeholderTextColor="black" placeholder='Search here...' />
      <View style={styles.mybtn}>
      <Button  color="black" title='Search'/>
      </View>
      </View>
      {/* Here is filter card data  */}
      
      <ScrollView>
        <View style={styles.fullcards} >
          {loading ? <ActivityIndicator style={styles.loader} /> : filterdata.map((e, i) => {
            return (
              <View style={styles.cardDetails} key={i}>
                <View style={styles.imgbox} >
                <Image style={styles.pics} resizeMode='cover' source={{ uri: e.thumbnail}} />
                </View>
              <View style={styles.alltxt}>  
                <Text style={styles.title} >{e.title}</Text>
                <Text style={styles.price} >${e.price}</Text>
                <Text style={styles.category}>{e.category}</Text>
                <Text style={styles.rating}>Rating    {e.rating}</Text>
                <Text style={styles.rating}>Available {e.stock}</Text>
              </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
      {/* here is my Main Cards Data  */}
      <ScrollView>
        <View style={styles.fullcards} >
          {loading ? <ActivityIndicator style={styles.loader} /> : data.map((e, i) => {
            return (
              <View style={styles.cardDetails} key={i}>
                <View style={styles.imgbox} >
                <Image style={styles.pics} resizeMode='cover' source={{ uri: e.thumbnail}} />
                </View>
              <View style={styles.alltxt}>  
                <Text style={styles.title} >{e.title}</Text>
                <Text style={styles.price} >${e.price}</Text>
                <Text style={styles.category}>{e.category}</Text>
                <Text style={styles.rating}>Rating    {e.rating}</Text>
                <Text style={styles.rating}>Available {e.stock}</Text>
              </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor:'orange',
  },
  heading:{
    marginTop:10,
    color:'black',
    fontSize:30,
    textAlign:'center',
  },
  searchbox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },
  input:{
    borderColor: "black",
    borderWidth: 1,
    width:250,
    borderRadius:15,
    padding:5,
    paddingHorizontal:10,
    // marginHorizontal:20,
    marginVertical:10,
  },
  mybtn:{
    
  },  
  loader:{
    justifyContent:'center',
    //  top:100, 
    // right:50,
    width:250,
    height:250,
  },
  fullcards: {
    justifyContent:'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    padding: 10,
  },
  
  cardDetails: {
    flexDirection:'row',
    color: "black",
    backgroundColor: 'black',
    margin: 10,
    padding: 10,
    borderRadius:7,
  },
  imgbox:{
    width:50,
    height:50,
  },
  pics: {
    width:100,
    height:100,
    alignItems:'center',

  },
  alltxt:{
    left:70,
  },
  price: {},
  title: {
    fontWeight:'bold',
    fontSize:14,
  },
})
export default Home;