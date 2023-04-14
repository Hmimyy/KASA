import './Banner.css';

function Banner({title, imageDesktop , imageMobile , text}) {


	return (
		<div className="banner">
		<img className='bannerDesktop' src={imageDesktop} alt={"Photo de"+title}/>
        <img className='bannerMobile' src={imageMobile} alt={"Photo de"+title}/>
		<p>{text}</p>
		</div>
	)
}

export default Banner;