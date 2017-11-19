import React, { Component } from 'react';
var image = require('./image/image.jpeg');

class AvPriv extends Component {
    render() {
        return (
		<section className="features-4 text-center" >
			<div className="container" >
				<div className="row justify-center">
					<div className="col-md-8 text-center">
						<div style={{margin: '20px 20px 20px 20px'}}>
							<div style={logoStyle}>
								<div style={{border: '3px solid #2CB9E4'}}>
           							<div style={{padding: '50px 50px 50px 50px'}}>
										<h2 align='center'>AVISO DE PRIVACIDAD</h2>
				             			<p className="lead mt-3" align='justify'>KEEP ME SAFE se preocupa por tu privacidad. La Política de privacidad de KEEP ME SAFE describe nuestras prácticas de información, incluidos los tipos de datos que recibimos y recopilamos de ti y los miembros de tu comunidad y la forma en que usamos  y compartimos esta información.</p>
										<p className="lead mt-3" align='justify'>El respeto a tu privacidad forma parte de nuestros valores. Desde que se comenzó a desarrollar KEEP ME SAFE aspiramos a desarrollar nuestros servicios teniendo en mente un conjunto de principios de privacidad sólidos.</p>
										<p className="lead mt-3" align='justify'>KEEP ME SAFE envía mensajes y correos con información personal del usuario. Nuestra política de privacidad ayuda a explicar nuestras prácticas de información.</p>
										<p className="lead mt-3" align='justify'>Por favor también lee los Términos y condiciones de KEEP ME SAFE donde se describen los términos que rigen el uso de nuestro servicio.</p>
										<h3>INFORMACIÓN RECOPILADA.</h3>
										<p className="lead mt-3" align='justify'>KEEP ME SAFE recibe o recopila información de nuestros usuarios y los miembros de su comunidad cuando operamos y proveemos nuestros servicios, incluso durante la instalación, el acceso o el uso de nuestros Servicios.</p>
										<h4>Información que tú proporcionas.</h4>
										<p align='justify'><b>•	Información de tu perfil: </b> Proporcionas tu nombre, apellidos materno y paterno, número de teléfono móvil y correo electrónico para crear tu cuenta y registrarte. Nos proporcionas los nombres, números de teléfono y correo de los miembros de tu comunidad. Confirmas que estás autorizado para proporcionarnos dicha información.</p>
										<h4>	Información enviada.</h4>
										<p align='justify'><b>•	Mensajes enviados: </b> Es parte importante para nosotros acceder a tu localización pues ésta llega con el mensaje enviado a tus miembros y es de vital importancia para saber en dónde te encuentras.</p>
										<p align='justify'><b>	Geolocalización:</b> Cuando te registras y presionas el botón de alarma estás aceptando que utilicemos tus datos de geolocalización y los enviemos a una comunidad que has elegido como tus personas de confianza.</p>
										<h4>	Información recopilada automáticamente.</h4>
										<p align='justify'><b>• Estado en el que te encuentras:</b> Al activar o desactivar la alarma guardamos el estado en el que te encuentras para saber si enviamos o no mensajes a tus miembros.</p>
										<p align='justify'><b>• Coordenadas: </b> Se recopilan las coordenadas de geolocalización cada diez segundos mientras el estado del usuario sea en peligro para poder enviar su ubicación.</p>		
										<div className="divider"></div>
									</div>	
          						</div>
          					</div>
						</div>
       				</div>
       			</div>
			</div>
		</section>
        );
    }
}

var logoStyle = {
	backgroundImage: 'url(' + image + ')',
	backgroundSize: '100% 200%'
};

export default AvPriv;
