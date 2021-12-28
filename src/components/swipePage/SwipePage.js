import React,{useEffect, useState, useRef, useMemo} from 'react';
import {Container,Image,Header,Footer} from "./styles";
import people1 from "../fixtures/people.json";
import TinderCard from 'react-tinder-card';
import axios from './axios.js';

function SwipePage() {
    const[people,setPeople] = useState([
    
    ]);
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }

        fetchData();
    },[]);
 
    const[currentIndex,setCurrentIndex] = useState(people.length -1);
    const[lastDirection,setLastDirection] = useState();
    const currentIndexRef = useRef(currentIndex);
    console.log(currentIndex);
    const childRefs= useMemo(
        ()=> Array(people.length).fill(0).map(i=> React.createRef()),[people]
    );

    const updateCurrentIndex = (val) =>{
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };
    const canGoBack = currentIndex < people.length - 1;
    const canSwipe = currentIndex >= 0;
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
      };
      console.log(people);
      const swipe = async (dir) => {
        if (canSwipe && currentIndex < people.length) {
          await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
      };
      const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        console.log("new index",newIndex);
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard();
        
      }
   

    const outOfFrame= (name,idx)=>{
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }
    console.log(people);
    return (
        <Container>
            <Header>
             <a href="/"><i class="fas fa-fire" /></a>
            <i class="fas fa-star"/>
            <i class="fas fa-comment"/>
            <i class="fas fa-user"/>
            </Header>
            <Image>
                {people.map((person,index)=>
                <TinderCard 
                ref={childRefs[index]}
                className='swipe'
                key={person.id}
                preventSwipe={['up','down']}
                onSwipe={(dir)=> swiped(dir,person.id,index)}
                onCardLeftScreen={()=>outOfFrame(person.name,index)}
                >
                    <div style={{backgroundImage: "url("+ person.imgUrl+")"}} >
                    <h1>{person.name} {person.age}</h1>
                    <div>
                      <i class="fas fa-map-pin"/>
                      <p> {person.location}</p>
                    </div>
                   
                    </div>
                
                   
                
                </TinderCard>
                   

                )}
                
            </Image>
            <Footer>
                <button style={{ backgroundColor: !canGoBack}} onClick={()=>goBack()}><i class="fas fa-undo"/></button>
                <button style={{ backgroundColor: !canSwipe }} onClick={()=>swipe('left')}><i class="fas fa-times-circle"/></button>
                <button><i class="fas fa-star"/> </button>
                <button style={{ backgroundColor: !canSwipe}} onClick={()=>swipe('right')}><i class="fas fa-heart"/> </button>
                <button><i class="fas fa-bolt"/> </button>
                    
            
            
            
            
            </Footer>
        </Container>
    )
}

export default SwipePage
