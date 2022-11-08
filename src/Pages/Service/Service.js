// import React, { useEffect, useState } from 'react';
// import ServiceCard from './ServiceCard';

// const Service = () => {
//     const [card, serCard] = useState()
//     // const array = [...card.slice(0, 3)]
//     // console.log(array);
//     useEffect(() => {
//         fetch("data.json")
//          .then(res => res.json())
//         .then(data=> serCard(data))
//     },[])
//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//             {card?.slice(0, 3).map(card => <ServiceCard key={card._id} card={card}></ServiceCard>)}
//             <div><button>see all</button></div>
//     </div>
//     );
// };

// export default Service;