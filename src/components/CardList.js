import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
	return(
		<div>
			{
			robots.map((one_robot, i) => {
			return (
				<Card 
					key={i} 
					name={robots[i].name} 
					id={robots[i].id} 
					email={robots[i].email}
					zipcode={robots[i].address.zipcode}
				/>
			);
		})
		}
 		</div>
		)
}

export default CardList;