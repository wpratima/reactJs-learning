import React from 'react';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import MediaCard from '../MediaCard';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const slideImages = [
    '/mov1.PNG',
    '/images2.jpg',
    '/images3.jpg',
    '/images4.jpg',
    '/mov1.PNG',
    '/images2.jpg',
    '/images3.jpg',
    '/images4.jpg',
];

export default function MovieScroller(){

    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);
  
    const isItemSelected = (id) => !!selected.find((el) => el === id);
  
    const handleClick = (id) => ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id)
  
      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    }
  
    return (
        <ScrollMenu
        LeftArrow={<div style={{ fontSize: "30px", fontWeight:'bold', alignSelf:'center' }}>{" < "}</div>}
        RightArrow={<div style={{ fontSize: "30px", fontWeight:'bold', alignSelf:'center' }}>{" > "}</div>}
        >
            {
            slideImages.map((picture, index) => (
                <MediaCard image={picture}/>
            ))
            }
        </ScrollMenu>
    );

};

 function LeftArrow() {
     const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)
  
     return (
      <div 
        style={{ fontSize: "30px", fontWeight:'bold', alignSelf:'center' }}
        onClick={() => scrollPrev()}
      >
        {" < "}
      </div>
     );
   }
  
//   function RightArrow() {
//     const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)
  
//     return (
//       <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//         Right
//       </Arrow>
//     );
//   }
  
  function Card({
    onClick,
    selected,
    title,
    itemId
  }) {
    const visibility = React.useContext(VisibilityContext)
  
    return (
      <div
        onClick={() => onClick(visibility)}
        style={{
          width: "160px",
        }}
        tabIndex={0}
      >
        <div className="card">
          <div>{title}</div>
          <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
          <div>selected: {JSON.stringify(!!selected)}</div>
        </div>
        <div
          style={{
            height: "200px",
          }}
        />
      </div>
    );
  }
  