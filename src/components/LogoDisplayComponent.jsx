

export default function LogoDisplayComponent(props){

	return(
		<div className="logodisplay">
			<a href={props.url} target="_blank">
				<img src={props.logo} className="logo" alt={props.altText} />
			</a>
		</div>
	)
}