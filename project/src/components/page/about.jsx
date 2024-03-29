import React from 'react';
import Mario from './../../assets/img/Mario_about.jpg';
import './../../styles/about.css';

export default function About() {
	return (
		<div>
			<p className="descr">
				<div ClassName="about">
					<img src={Mario} alt="Mario Ivanovic Photographe" />
				</div>
				<article>
				Mario Ivanovic, 29 ans, photographe depuis 2013.<br />
				Spécialisé dans la photos d'évènements, en particulier les concerts (Hellfest, Download Paris, Accor
				Hotel Arena, Olympia, et bien d'autres salles parisiennes..),<br />
				j'apprécie aussi immortaliser les moments importants de votre vie, comme les mariages et les baptêmes.
				Il est primordial pour moi de vous permettre <br />de garder de merveilleux souvenir de ces moments
				inoubliables. C'est pourquoi, la qualité est privilégiée à la quantité.</article>
			</p>
		</div>
	);
}
