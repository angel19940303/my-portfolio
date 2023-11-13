import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				I'm a skilled full-stack developer with experience in&nbsp;Python, PHP, TypeScript, JavaScript, Dart
				and&nbsp;expertise in&nbsp;frameworks like React, Laravel, Django, Three.js and&nbsp;Flutter.
				I'm a&nbsp;quick learner and&nbsp;collaborate closely with&nbsp;clients to&nbsp;create
				efficient, scalable and&nbsp;user&#8209;friendly solutions that solve real&#8209;world
				problems. Let's work together to&nbsp;bring your ideas to&nbsp;life!
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
