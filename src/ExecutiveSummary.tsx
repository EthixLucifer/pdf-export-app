import React from 'react';
import { Code, Database, Server, Smartphone, Cloud, Zap, BarChart2, Sun, AlertTriangle } from 'lucide-react';

const Slide = ({ children, className }) => (
  <div className={`w-full aspect-[16/9] bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col ${className}`}>
    {children}
  </div>
);

const Title = ({ children }) => (
  <h1 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-300 pb-2">{children}</h1>
);

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-3 text-indigo-700">{title}</h2>
    {children}
  </div>
);

const ListItem = ({ icon: Icon, children }) => (
  <li className="flex items-start mb-3">
    <Icon className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
    <span className="text-sm leading-tight">{children}</span>
  </li>
);

const ExecutiveSummary = () => (
  <div className="font-sans max-w-[1280px] mx-auto">
    <Slide>
      <Title>ToD/ToU Energy Optimization Platform:Optee</Title>
      
      <Section title="Project Overview">
        <p className="text-sm mb-3 leading-relaxed">
          This solution leverages microservices architecture design to optimize energy consumption using real-time (currently dummy) ToD/ToU tariffs, smart IoT appliance integration, and ML-powered predictive analytics.
        </p>
      </Section>
      
      <Section title="Technical Stack and Architecture">
        <div className="grid grid-cols-2 gap-6">
          <ul className="space-y-3">
            <ListItem icon={Server}>
              Backend Services: Node.js (v14+) with Express.js, leveraging async/await for non-blocking I/O. Containerized with Docker for dynamic scaling.
            </ListItem>
            <ListItem icon={Database}>
              Data Layer: PostgreSQL (v13+) with PostGIS extension for geospatial data, MongoDB (v5+) for schema-less document storage, and InfluxDB for high-performance time-series data handling.  
            </ListItem>
            <ListItem icon={Cloud}>
              Infrastructure: AWS ECS with Fargate for serverless container management. Use AWS CloudFormation for Infrastructure as Code (IaC).
            </ListItem>
          </ul>
          <ul className="space-y-3">
            <ListItem icon={Smartphone}>
              Frontend: React (v17+) with Redux for state management and Redux-Saga for side-effect handling.  Implement responsive design with Tailwind CSS.
            </ListItem>
            <ListItem icon={Zap}>
              Event Processing: Apache Kafka (v2.8+) for event streaming, with Kafka Streams API for real-time data processing. Implement exactly-once semantics for data integrity.
            </ListItem>
            <ListItem icon={Code}>
              API Layer: GraphQL for efficient batching and caching. Use GraphQL subscriptions for real-time data push.
            </ListItem>
          </ul>
        </div>
      </Section>
    </Slide>
    
    <Slide>
      <Title>Core Features Implementation and Technical Challenges</Title>
      
      <div className="space-y-6">
        <Section title="Tariff Monitoring and Smart Scheduling">
          <ul className="space-y-3">
            <ListItem icon={BarChart2}>
              Implement real-time tariff monitoring using a combination of web scraping (with Puppeteer) and direct API integrations. Use Redis for caching to reduce load on utility provider APIs and improve response times.
            </ListItem>
            <ListItem icon={Cloud}>
              Develop smart scheduling algorithms using Python (v3.9+) with NumPy and SciPy. Leverage CUDA for GPU acceleration of complex calculations. 
            </ListItem>
          </ul>
        </Section>
        
        <Section title="Solar Energy Management and ML Forecasting">
          <ul className="space-y-10 mb-9">
            <ListItem icon={Sun}>
              Create solar integration module using Python, implementing the SunSpec Alliance specifications for standardized communication with inverters. Use Apache Airflow for orchestrating data collection pipelines from various sources.
            </ListItem>
            <ListItem icon={Zap}>
              Implementing a Deep Neural Network ML forecasting engine using TensorFlow 2.x with Keras API. Utilize transfer learning on pre-trained models for quicker iterations. Deploy models using TensorFlow Serving for scalable inference. Leverage AWS SageMaker for distributed training and hyperparameter tuning.
            </ListItem>
          </ul>
        </Section>
      </div>

      <Section title="System Architecture">
        <div className="bg-white rounded-lg shadow-lg p-4 h-64 overflow-hidden">
          <img src="sysArch.png" alt="System Architecture Diagram" className="w-full h-full object-contain" />
        </div>
      </Section>

      <Section title="User Flow">
        <p>
          <a href="https://www.planttext.com/api/plantuml/png/dLTDRnit4Btlho1yA6B03eeU1JY8P5bf2jbLl4fzwONQ7MjPxP9RacjP2VhVEoJtWzmFEQqFXiHvRsOud3UaFYfDfQwAF8hKWV6IIbgG7KqEUoagdjwAN4YY9UKAJS2rXrBmTmKy0V8z8lWtbr8S7Nv9vM6HLs3Nr-mPrep3GiWKf0CCZRs8QxRFT7mujS0DPiaILbAkVKT191ypvgy5BiJhf1DZwv7dEKl00lw98ffeNFggG4Pb5uzSFC6EpCloJ_xk4H3p_YzrHHuXhLulBmXL1Cre3IdtOiToy5daWMhs0W7JeGRabHHS0qz9hAa6ww2bD3Ph2cdppMVo2LUFz8IS1v62pVJkjPIW57vs7X1MethqIcVO1Ip1F0L73x-R5VBB-v-lo6zFsvgCIo7Db8lSKqxtK22zY-m8njnPG-gIQaesKYIO7kDxf6vEEXFSCOsrCuRCkC1l94uoB4pkgEr-xxziwsGjgWFrN8YSzXAVFyNaizYIMo6Xzc10K-dVhybFP8NOX2hjvtz5ji2LaAjS7Ek3NdkuqCk3qEovBZg9Jqf3WOvMJCAEAcoNxP7bJ5oHUK6_6SHTx5pwF4Vh7IUd-Gc_AY-j3UKfnH9jwIu7MjL7sW2Z52jkWfABZL1wBo7-idP7iHWh_w-Y0BA45rIGSZ3t6OLKQS6hOeT2YcvkR0zWs--PmcbZztbp4qLszVf3BPzP3S0r3aT2amH5gYDdDB2kRMSaDkAGlaEJUjH1B05RTKPk9U2IzLaPOTkUHkjoWMvGxc2NII8XDSrFSnKj5-Iwuml-p2HEHCHY5zJyNZwFe2l9ZKg85WVWGIR15YrELOdfQeAdKUExRGRwdf6lPMhIjpagA_a6YbXJmHbPCbNc6AZnMk0_asbR-RNOix3axToPrSOZmrtvDMWHewNFBKcQIqBfqRB_GNDcC_UT-hM_pI0vk7tPimkANjUfi_wlgdkxhA4MPilUkGvs-cRrFVJW051QsKvGcThItt6G-nD2y2mm5SwmWL3y4wrlAqd0SIhBiTcDz_yAT98rw97M3qVdh9cneV_c-4AmeVUcteny0asKdPUb56cLT9BhGMrmDmMQB55_-RLcE2gS1tVQ3cEBE8ZMgAGNS1XhPAS1ruKQRC-qdyijOqRME4Hpl-PrAqwuze43ry6SDtN3WhiECYIyXrDczu82yv7dulcaVi1nGPGE0QdDqhQxxsHYDbbXznga538OmSrDWVfcgaA9VwihqLh6nXr3IKby0U7hXoGPtXoAl6jkeEbnrjE2Bwt-xJyrss9iMrgMEQFcAQiS7jwORGriOhprtXITjbhtFSHeMsWYIjG4zfrLnld668Iiw-gxK6DXMoMQGgJsIvkc2ZNO3z5UUqqr5EXXYF7-g-pKx2fvPYuFmZZksJ4xS6zQmdyDATiFlJf-67ampSXMilqU-oR3tn3NhjLe3jZqG_2WjuoiAfKHxZ_WseVRvTaz_60yHxAXullOGL4xzaLu-JO72ihoNdxUCz8Mphx1E_cUkvqKVS5Igf6vCBYQQEjmx67MZP5sGFPyU_DaObu7ZuREOTs2VM3WRqIDpnNItjBXC4mmLeCHU7OiDviyCuYdQpqsWnlqVvl5xL3zaN4S9cGl5QoEAF0cJftgekWZVgwA_5y0" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            click to view complete user flow
          </a>
        </p>
      </Section>

      <Section title="Technical Challenges">
        <ul className="space-y-2 text-sm">
          <ListItem icon={AlertTriangle}>
            Data Consistency: Ensuring data consistency across distributed systems, especially with real-time updates. 
          </ListItem>
          <ListItem icon={AlertTriangle}>
            Scalability: Handling multiple smar IoT devices and high-frequency data ingestion can cause bottleneck.Solution: Implement a Lambda architecture for big data processing, combining batch processing (using Apache Spark) with real-time stream processing (using Kafka Streams).
          </ListItem>
        </ul>
      </Section>

      <Section title="Development Roadmap">
        <ol className="list-decimal pl-6 text-sm space-y-2">
         
          <li>Develop core microservices (user management, device management, tariff processing) with Swagger/OpenAPI specifications</li>
          <li>Implement event sourcing architecture using Kafka and Kafka Streams for real-time data processing</li>
          <li>Set up data pipeline using Apache Airflow for batch processing of historical data</li>
          <li>Develop and train ML models using TensorFlow, deploy using KubeFlow for model serving</li>
          <li>Implement GraphQL API gateway with Apollo Federation for microservices integration</li>
          <li>Develop React frontends with offline-first architecture</li>
          
        </ol>
      </Section>
    </Slide>
  </div>
);

export default ExecutiveSummary;