import * as React from 'react';
import { View, useWindowDimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Ball from '../components/Ball';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#604AE6', }} >
    <View style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row",marginVertical:10}}>

    <Ball/>
    <Ball/>
    <Ball/>
    <Ball/>
    <Ball/>
    </View>

  </View>
);

const SecondRoute = () => (
<View style={{ flex: 1, backgroundColor: '#604AE6', }} >
    <View style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row",marginVertical:10}}>

    <Ball/>
    <Ball/>
    <Ball/>
    <Ball/>
    <Ball/>
    </View>

  </View>);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  Third: SecondRoute,
  Forth: SecondRoute,
  Fivth: SecondRoute,


});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [indexx, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'Third', title: 'Third' },
    { key: 'Forth', title: 'Forth' },
    { key: 'Fivth', title: 'Fivth' },


  ]);
const TabBar =()=>{
  const DATA = [
    {
      id: 0,
      title: 'MEGA MILLIONS',
    },
    {
      id: 1,
      title: 'POWER BALL',
    },
    {
      id: 2,
      title: 'LOTTO AMERICA',
    },
    {
      id: 3,
      title: 'CASH 4LIFE',
    }, {
      id: 4,
      title: 'NEW YORK LOTTO',
    }, 
  ];
  const Item = ({title,index}) => (
    <TouchableOpacity onPress={()=>setIndex(index)} style={{height:60,display:"flex",justifyContent:"center",alignItems:"center"}}>
<View style={{width:100,paddingVertical:10,backgroundColor:'black',display:"flex",justifyContent:"center",alignItems:"center",}} >
      <Text style={{backgroundColor:'black',height:"100%",fontSize:14,borderBottomColor:index==indexx?"blue":"transparent",borderWidth:2}} >{title}</Text>
    </View>
    </TouchableOpacity>
    
  );
  return <View>
   <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} index={item.id} />}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{display:"flex",justifyContent:"center",alignItems:"center"}}
      />
  </View>
}
  return (
    <TabView
      navigationState={{ index:indexx, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar {...props} />}

    />
  );
}