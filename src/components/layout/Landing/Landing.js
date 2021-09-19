import React from 'react';
import TechStackFooter from '../Footer/Footer.jsx';
import { projects } from '../../../utils';
import { Modal, ProjectPage, SectionWrapper, CardWrapper, ProjectCard, LinkBlock, LinkButton, BulletList } from '../../index.js';

const Landing = (props) => {

    const { activeProject, setActiveProject, modalVisibility, setModalVisibility } = props;

/* Handler for making a modal visible: */
    const handleModalVisibility = (id) => {
        setModalVisibility(!modalVisibility)
        setActiveProject(projects.find(project => project.id === id));
    
    }

        return (
        <>

    {/* This is for the main cards on Landing Page: */}

        <SectionWrapper 
                id="projects"
                content={
                    <CardWrapper>
                    {projects.map(project => {
                        return (
                            
                        <ProjectCard
                            loading="lazy"
                            onClick={() => handleModalVisibility(project.id)}
                            title={project.title}
                            tech={project.tech}
                            cardCoverText={project.cardCoverText}
                            svgImg={project.svgImg}
                            img={project.img}
                            key={project.id}
                        />
                        )
                    })}
                    </CardWrapper>
                }
            />
        

    {/* The modal that appears when clicking a project card: */}
        {modalVisibility &&  
            <Modal onModalClose={() => setModalVisibility(false)} > 
                <ProjectPage 
                    title={activeProject.title}
                    tech={activeProject.tech}
                    img={activeProject.img}
                    alt={activeProject.alt}
                    description={activeProject.description}
                    techHighlightsList={
                        <BulletList 
                        listItems={
                            activeProject.techHighlights.map((highlight, i) => {
                            return <li key={i}>{highlight}</li>
                            })
                        }
                        listStyle="Modal"
                        />
                    }
                    linkBlock={
                        <LinkBlock>
                        {activeProject.links.map((link, i) => {
                            return <LinkButton key={i} text={link.text} type="PrimaryInverse" link={link.link} />
                        })}
                        </LinkBlock>
                    }
                    />   
                </Modal>
                }
        
        <TechStackFooter />
      
        </>
        )
}

export default Landing;