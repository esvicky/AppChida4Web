import React, { Component } from 'react';
var image = require('./image/image.jpeg');


class TermsCond extends Component {
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
										<h2 align="center" justify='center'>TÉRMINOS Y CONDICIONES</h2>
										<p className="lead mt-3" align='justify'> KEEP ME SAFE sistema de alarmas desarrollado como aplicación móvil/Web Semántica que permite a los usuarios registrados pedir ayuda ante una situación de emergencia. Por favor lee nuestros Términos y condiciones para entender los términos de uso de KEEP ME SAFE. Aceptas nuestros Términos y condiciones al instalar, acceder o usar nuestra aplicación, servicio, funciones, software o enlaces web.</p>
										<p className="lead mt-3" align='justify'>NO PROPORCIONAMOS SERVICIOS DE MENSAJERÍA O LLAMADAS TELEFÓNICAS: Hay diferencias importantes entre KEEP ME SAFE y los servicios de SMS, teléfono móvil y de línea fija. Nuestro sistema no proporciona acceso a servicios de mensajería o llamadas telefónicas, es sólo una aplicación que envía mensajes y correos en caso de emergencia.</p>
										<p className="lead mt-3" align='justify'>Acerca de nuestros servicios:</p>
										<p align='justify'><b>Registro:</b> Para poder usar nuestro servicio debes registrarte con datos correctos, proporcionar tu nombre, número de teléfono y correo electrónico. Si cambias tu número debes actualizarlo mediante la función de “Configuraciones” para editar tu información. Por cuestiones del manejo de información tu correo electrónico no podrá ser editado, es  por eso que debes asegurarte de que éste sea correcto.  Aceptas que tu información quede registrada en nuestra base de datos.</p>
										<p align='justify'><b>Registro de Miembros de Comunidad:</b> Al registrar algún miembro de tu comunidad debes proporcionar datos válidos y verídicos, pues esta información se usará para enviar mensajes y correos de suma importancia. Al ingresar su número de teléfono y correo confirmas que estás autorizado a proporcionarnos dichos datos para permitirnos proveer nuestros servicios. Puedes actualizar los datos del usuario que has proporcionado anteriormente.</p>
										<p align='justify'><b>Geolocalización:</b> Cuando te registras y presionas el botón de alarma estás aceptando que utilicemos tus datos de geolocalización y los enviemos a una comunidad que has elegido como tus personas de confianza.</p>
										<p align='justify'><b>Dispositivos y software:</b> Debes proporcionar ciertos dispositivos, software y conexiones de datos que nosotros no proporcionamos para usar nuestros Servicios. Durante todo el tiempo que uses nuestros Servicios, aceptas descargar e instalar actualizaciones de nuestros Servicios, incluso de forma automática.</p>
										<p align='justify'><b>Tarifas e impuestos:</b> Tú eres responsable por los costos del plan de datos de tu operador de telefonía móvil, así como de las demás tarifas e impuestos asociados con el uso de nuestros Servicios. No otorgamos reembolsos por nuestros Servicios, al menos que lo exija la ley.</p>
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

export default TermsCond;
