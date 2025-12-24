import awsImg from '../assets/certification/Aws foundation.png';
import dockerImg from '../assets/certification/KodeKloud_DockerCourse_Certificate.png';
import k8sImg from '../assets/certification/KodeKloud_KubernatesCourse_Certificate.png';
import linuxImg from '../assets/certification/KodeKloud_LinuxCourse_Certificate.png';
import gitImg from '../assets/certification/KodeKloud_GitCourse_Certificate.png';
import jenkinsImg from '../assets/certification/Udemy_Jenkins&CiCd.jpg';
import aviatrixImg from '../assets/certification/Aviatrix.png';
import ansibleImg from '../assets/certification/KodeKloud_AnsibleCourse_Certificate.png';
import devopsImg from '../assets/certification/KodeKloud_LinuxCourse_Certificate.png';

export const certifications = [
    {
        image: aviatrixImg,
        title: 'Aviatrix Certified Engineer (ACE) Multicloud Networking Associate',
        org: 'Aviatrix',
        issueDate: '2025',
        credential: 'https://www.credly.com/badges/9bb0c525-db14-4a5a-9220-79d16c3742de/linked_in_profile',
        description: 'Proven expertise in multicloud networking, security, and operations across AWS, Azure, Google Cloud, and OCI.',
        category: 'Networking',
    },
    {
        image: devopsImg,
        title: '100 Days of DevOps',
        org: 'KodeKloud',
        issueDate: '2025',
        credential: 'https://engineer.kodekloud.com/certificate-verification/20bf9870-cf5d-4227-8f3d-9288361aee14',
        description: 'An intensive 100-day hands-on bootcamp covering Linux, Docker, Kubernetes, IaC (Terraform/Ansible), and CI/CD pipelines from scratch to advanced level.',
        category: 'DevOps',
    },
    {
        image: jenkinsImg,
        title: 'Jenkins: CI/CD with Jenkins',
        org: 'Udemy',
        issueDate: '2025',
        credential: 'https://www.udemy.com/certificate/UC-73872441-f23b-425f-96e4-3d66fd54f54c',
        description: 'Building and deploying automated CI/CD pipelines using Jenkins for continuous integration and delivery.',
        category: 'CI/CD',
    },
    {
        image: ansibleImg,
        title: 'Ansible for the Absolute Beginner',
        org: 'KodeKloud',
        issueDate: '2025',
        credential: 'https://engineer.kodekloud.com/certificate-verification/3b440992-db59-4a5f-bfb8-45176304d142',
        description: 'Automating IT infrastructure, application deployment, and configuration management using Ansible playbooks and roles.',
        category: 'Automation',
    },
    {
        image: dockerImg,
        title: 'Docker for the Absolute Beginner',
        org: 'KodeKloud',
        issueDate: '2025',
        credential: 'https://engineer.kodekloud.com/certificate-verification/b1b0afd3-2227-4ebd-b7cc-1402eba682c8',
        description: 'Comprehensive guide to Docker containers, images, networking, and orchestration for DevOps.',
        category: 'DevOps',
    },
    {
        image: k8sImg,
        title: 'Kubernetes for the Absolute Beginners',
        org: 'KodeKloud',
        issueDate: '2025',
        credential: 'https://engineer.kodekloud.com/certificate-verification/c6e9cb61-1de0-4529-9adf-326ef2b95888',
        description: 'Hands-on training in Kubernetes architecture, pods, services, and cluster management.',
        category: 'Orchestration',
    },
    {
        image: linuxImg,
        title: 'Linux Basics for DevOps',
        org: 'KodeKloud',
        issueDate: '2025',
        credential: 'https://engineer.kodekloud.com/certificate-verification/b1d01f1c-7efb-4a33-9968-c00db064c1b8',
        description: 'Essential Linux command line skills and system administration concepts required for DevOps roles.',
        category: 'OS',
    },
    {
        image: gitImg,
        title: 'Git for Beginners',
        org: 'KodeKloud',
        issueDate: '2025',
        credential: 'https://engineer.kodekloud.com/certificate-verification/30517bc7-5cdf-4dc8-846f-a180435be4f9',
        description: 'Mastering version control with Git: branching, merging, and collaboration workflows.',
        category: 'Version Control',
    },
    {
        image: awsImg,
        title: 'Introduction to Amazon Q Developer',
        org: 'AWS Training & Certification',
        issueDate: '2025',
        credential: '',
        description: 'Technical introduction to Amazon Q, covering its capabilities as a generative AI-powered assistant for software development.',
        category: 'Cloud & AI',
    }
    ,
];
