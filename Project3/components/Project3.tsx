import { FlatList, Text, View, Image, SafeAreaView } from "react-native";
import { Nav } from "./Nav";
import{styles} from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPiggyBank, faSackDollar, faSackXmark, faStar } from "@fortawesome/free-solid-svg-icons";


const DATA2 = [
    {
        id: "1",
        city: 'New York',
        country: 'United States',
        date: '25 Dec',
        amountHost: 'Entire Home',
        price: 150,
        qualification: 4.8,
        imageUrl:"https://media.revistaad.es/photos/61c20223deee40b66756ad83/master/w_1600%2Cc_limit/Le%2520penthouse%2520avec%2520vue%2520sur%2520Central%2520Park%25201.jpg",
        offer:false,
        sold:false
      },
      {
        id: "2",
        city: 'Paris',
        country: 'France',
        date: '10 Jan',
        amountHost: 'Private Room',
        price: 80,
        qualification: 4.5,
        imageUrl:"https://worldinparis.com/wp-content/uploads/2021/03/Apartment-with-Eiffel-Tower-View-Paris.jpg",
        offer:true,
        sold:false
      },
      {
        id: "3",
        city: 'Tokyo',
        country: 'Japan',
        date: '5 Feb',
        amountHost: 'Shared Space',
        price: 60,
        qualification: 3.9,
        imageUrl:"https://bridgesandballoons.com/Images/2019/07/wooden-house-airbnb-Tokyo-4-872x584.jpg",
        offer:false,
        sold:true
      },
];


type ItemProps = {city: string, 
                  country:string, 
                  date:string, 
                  amountHost:string, 
                  price:Number,
                  qualification:Number, 
                  image:string,
                  offer:boolean
                  sold:boolean
                };



const Item = ({city,country,date,amountHost,price,qualification,image,offer,sold}: ItemProps) => (
  <View style={styles.item}>
    <Image source={{uri:image}} style={styles.image}></Image>

    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.text2}>{city}, {country}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <FontAwesomeIcon icon={faStar} color="#fcd810"/>
            <Text style={{fontSize:14}}> {qualification.toString()}</Text>
        </View>
    </View>

    <Text>City views</Text>
    <Text>{date} {'\u2022'} {amountHost}</Text>
    <View style={{flexDirection:'row', marginTop:5,alignItems:'center'}}>
        <FontAwesomeIcon icon={sold? faSackXmark:(offer?faPiggyBank:faSackDollar)} 
                         style={{color: sold? 'red':(offer?'#d3c813':'green')}} 
                         size={25}/>
        <Text style={styles.text2}>  ${price.toString()} / night</Text>
    </View>
    
  </View>
);

function Project3(){
  return(
    <SafeAreaView style={{height:'100%'}}>
        <Nav></Nav>
      <FlatList
        data={DATA2}
        renderItem={({item})=> <Item city={item.city} 
                                     country={item.country}
                                     date={item.date} 
                                     amountHost={item.amountHost}
                                     price={item.price} 
                                     qualification={item.qualification} 
                                     image={item.imageUrl} 
                                     offer={item.offer} 
                                     sold={item.sold}/>}
        keyExtractor={item=>item.id}
      />
      

    
    </SafeAreaView>
    )

}


export {Project3}