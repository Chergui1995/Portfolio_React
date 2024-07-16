import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description: "Une application web pour gérer les tâches quotidiennes avec des fonctionnalités de création, modification, suppression et marquage des tâches comme terminées.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    color: "#f8b400" // Jaune
  },
  {
    id: 2,
    title: "Plateforme e-commerce",
    description: "Une plateforme de commerce électronique permettant aux utilisateurs d'acheter et de vendre des produits avec une intégration de paiement sécurisée.",
    technologies: ["Next.js", "GraphQL", "Apollo", "PostgreSQL"],
    color: "#00b894" // Vert
  },
  {
    id: 3,
    title: "Application de suivi de la condition physique",
    description: "Une application mobile pour suivre les activités physiques, les régimes alimentaires et les progrès de l'utilisateur.",
    technologies: ["React Native", "Redux", "Firebase"],
    color: "#0984e3" // Bleu
  }
];

const Projects = () => {
  return (
    <div className={`container mt-5 ${styles.projectsPage}`}>
      <h1 className="text-center mb-4">Mes Projets</h1>
      {projects.map((project, index) => (
        <div key={index} className={`card mb-4 ${styles.projectCard}`} style={{ borderLeft: `5px solid ${project.color}` }}>
          <div className="card-body">
            <h5 className={`card-title ${styles.cardTitle}`} style={{ color: project.color }}>{project.title}</h5>
            <p className={`card-text ${styles.cardText}`}>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="btn btn-primary">Voir les détails</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
