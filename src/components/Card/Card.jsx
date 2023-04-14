import './Card.css';

function Card({image,title}) {

	return (
		<article className="card_logement"> 
			<img src={image} 
			alt={title} className="card_img"/>
			<div className="card_logement_layer">
			<h3 className="card_logement_title"> {title}</h3>
			</div>
				
		</article>
	)
}

export default Card;