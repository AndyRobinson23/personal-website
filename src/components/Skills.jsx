import './Skills.css';
import Card from './Card';

const Skills = () => {
  const skillsData = [
    {
      title: 'Product Management',
      description:
        'Product Owner specialising in eCommerce, owning the product vision and focussing on the delivery of value through frequent production deployments throughout',
      icon: 'route',
    },
    {
      title: 'Project Management',
      description:
        'Years of experience managing complex, six-figure digital projects with multiple third-party integrations for enterprise level clients',
      icon: 'cogs',
    },
    {
      title: 'Web development',
      description:
        'A strong interest in Web Development with proficiency in HTML, CSS, SASS, JavaScript, React, Liquid and Shopify theme development',
      icon: 'laptop-code',
    },
    {
      title: 'eCommerce',
      description:
        "Significant experience in and knowledge of eCommerce. Over my career I've worked on projects across Magento and 2, Shopware, BigCommerce and Shopify, with a particular specialism in the last two",
      icon: 'shopping-cart',
    },
  ];

  return (
    <section className="section-skills" id="skills">
      <h2 className="section-title u-margin-top-md">Skills</h2>
      <div className="cards-container">
        {skillsData.map((skill) => (
          <Card
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
