import React, {useState, useEffect, createRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectEmail, selectUserName, setSignOut } from '../redux/slices/authSlice';
import {getAllData} from '../redux/slices/tripSlice';
import AccountScreen from '../screens/AccountScreen';

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const [tripData, setTripData] = useState([]);
    const username = useSelector(selectUserName);
    const getDatas = useSelector((state) => {
        console.log('state...', state.app);
       // setTripData(state.app);
       return state.app;
    });
    const myAccount = () => {
        <AccountScreen />
    }
 
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
              <TouchableOpacity onPress={myAccount} style={styles.btn}>
                <Text style={styles.text}>My Account</Text>
            </TouchableOpacity>
            <Button
  onPress={() => dispatch(getAllData())}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            <Text>
                Wellcome to Dashboard, {username}
            </Text>
            {/* {(trips.length > 0) ? 
            trips.map((ele)=>(
                <Text style={{ color: 'black' }}><li key={ele.id}>{ele.name}</li></Text>
                
            )) : '11' }  */}
            {(getDatas.loading) ? <Text> 'Loading' </Text> : null}
              {/* {(trips.trips.length > 0) ? (trips.trips.map((item, index) => {
       
            <View style={{height: 50, width: 50, backgroundColor: 'orange', marginBottom: 10}}>
                
                <Text style={{height: 50, width: 50, color: 'orange', marginBottom: 10}}>{index}</Text></View>
        
  })): <View><Text style={{color:'red'}}>No Data </Text></View>} */}
            {getDatas.trips.length > 0 ? getDatas.trips.map((ele)=>(
                <li key={ele.id}>{ele.name}</li>
            )): 'null'}
            {/* {
                (trips.trips.map((item, index) => {
       
                    <View style={{height: 50, width: 50, backgroundColor: 'orange', marginBottom: 10}}>
                        
                        <Text style={{height: 50, width: 50, color: 'orange', marginBottom: 10}}>
                           <li key={item.id}>{item.name}</li>
                            </Text></View>
                
          }))
            } */}
            <TouchableOpacity
                style={{ backgroundColor: 'red', paddingHorizontal: 50, paddingVertical: 15, margin: 10 }}
                onPress={() => dispatch(setSignOut())}
            >
                <Text style={{ color: 'white' }}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
   
    btn: {
        backgroundColor: 'pink',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    },
})

