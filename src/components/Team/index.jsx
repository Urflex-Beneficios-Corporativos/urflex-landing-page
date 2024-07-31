import React, { useState, useRef, useEffect } from 'react';
import PersonCard from '../Team/PersonCard';

import DaniloImg from '../../assets/1.jpeg'
import GustavoImg from '../../assets/2.jpeg'
import RayImg from '../../assets/3.jpeg'
import HenriqueImg from '../../assets/4.jpeg'
import FernandaImg from '../../assets/5.jpeg'
import YasminImg from '../../assets/8.jpeg'
import BeatrizImg from '../../assets/6.jpeg'
import CristianoImg from '../../assets/7.jpeg'
import MarinaImg from '../../assets/9.jpeg'

const imageMap = {
    '1': DaniloImg,
    '2': GustavoImg,
    '3': RayImg,
    '4': HenriqueImg,
    '5': FernandaImg,
    '6': YasminImg,
    '7': BeatrizImg,
    '8': CristianoImg,
    '9': MarinaImg
};

import persons from './persons.json'

import { TeamStyled, ButtonGroup, ButtonStyled, PersonContainer, PrevButton, NextButton, Indicators, Dot } from './styles';


function Team() {
    const [selectedCategory, setSelectedCategory] = useState('leadership');
    const [dots, setDots] = useState([]);
    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
    const [totalPersons, setTotalPersons] = useState(0);
    const teamContainer = useRef(null);

    const categoryChange = (category) => {
        setCurrentPersonIndex(0);
        setSelectedCategory(category);
    };

    const personChange = (index) => {
        if (index < 0 || index >= totalPersons) { return; }
        
        setCurrentPersonIndex(index);
    };

    const calculateTranslateX = () => {
        return -currentPersonIndex * 100;
    };
    useEffect(() => {
        let selectedCategoryContainer = teamContainer.current.querySelectorAll('.selected')[1];

        const numberOfPersons = selectedCategoryContainer.querySelectorAll('.person-card').length;
        setTotalPersons(numberOfPersons);

        setDots(Array(numberOfPersons).fill(null));
    }, [selectedCategory]);




    return <TeamStyled ref={teamContainer}>
        <ButtonGroup>
            <ButtonStyled
                className={selectedCategory === 'leadership' ? 'selected' : ''} onClick={() => categoryChange('leadership')}>Liderança</ButtonStyled>
            <ButtonStyled
                className={selectedCategory === 'growth' ? 'selected' : ''} onClick={() => categoryChange('growth')}>Growth</ButtonStyled>
            <ButtonStyled
                className={selectedCategory === 'tech' ? 'selected' : ''} onClick={() => categoryChange('tech')}>Tech</ButtonStyled>
        </ButtonGroup>

        <PrevButton
            className={currentPersonIndex === 0 ? 'hidden' : ''} onClick={() => personChange(currentPersonIndex - 1)} ></PrevButton>
        <NextButton
            className={currentPersonIndex >= totalPersons - 1 ? 'hidden' : ''} onClick={() => personChange(currentPersonIndex + 1)} ></NextButton>
        {persons.map(category => (
            <PersonContainer
                key={category.category}
                translateX={calculateTranslateX()}
                className={`${category.category === selectedCategory ? 'selected' : ''}`}
            >
                {category.members.map(person => (
                    <PersonCard
                        key={person.id}
                        imageUrl={imageMap[person.id]}
                        name={person.name}
                        role={person.role}
                        description={person.description}
                    />
                ))}
            </PersonContainer>
        ))}

        <Indicators>
            {dots.map((_, index) => (
                <Dot
                    key={index}
                    onClick={
                        () => personChange(index)
                    }
                    className={currentPersonIndex === index ? 'show' : ''} />
            ))}
        </Indicators>
    </TeamStyled>
}
export default Team;